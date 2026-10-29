import test from 'node:test';
import process from 'node:process';
import { Buffer } from 'node:buffer';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { brotliCompressSync } from 'node:zlib';
import { createExecuteFunction } from '../tools/common/executeFunction.js';
import { callTool } from '../tools/common/toolResult.js';

const execute = () => createExecuteFunction('https://api.saasus.io', 'GET', '/example', [], [], {}, 'example');

test('mock API responses and errors never log sensitive data', async () => {
  const originalFetch = globalThis.fetch;
  const originalError = console.error;
  const logs = [];
  console.error = (...args) => logs.push(args);
  process.env.SAASUS_PLATFORM_APIKEY = 'test-api-key';
  process.env.SAASUS_PLATFORM_SAASID = 'test-saas-id';
  process.env.SAASUS_PLATFORM_SECRETKEY = 'test-secret';
  try {
    globalThis.fetch = async (_url, options) => {
      assert.match(options.headers.Authorization, /test-api-key/);
      return new Response(JSON.stringify({ privateData: 'test-personal-data' }), { headers: { 'content-type': 'application/json' } });
    };
    const success = await callTool(execute(), {});
    assert.equal(success.isError, undefined);
    assert.deepEqual(JSON.parse(success.content[0].text), { privateData: 'test-personal-data' });
    globalThis.fetch = async () => new Response('test-error-body', { status: 403, statusText: 'secret-status' });
    const failure = await callTool(execute(), {});
    assert.equal(failure.isError, true);
    assert.match(failure.content[0].text, /403/);
    assert.doesNotMatch(failure.content[0].text, /test-error-body|secret-status/);
    globalThis.fetch = async () => { throw new Error('test-secret exception'); };
    const exception = await callTool(execute(), {});
    assert.equal(exception.isError, true);
    assert.equal(exception.content[0].text, 'API request failed');
    assert.deepEqual(logs, []);
  } finally {
    globalThis.fetch = originalFetch;
    console.error = originalError;
    delete process.env.SAASUS_PLATFORM_APIKEY;
    delete process.env.SAASUS_PLATFORM_SAASID;
    delete process.env.SAASUS_PLATFORM_SECRETKEY;
  }
});

test('fetch decodes a Brotli-compressed mock response', async () => {
  const server = createServer((_req, res) => {
    res.writeHead(200, { 'content-type': 'application/json', 'content-encoding': 'br' });
    res.end(brotliCompressSync(Buffer.from(JSON.stringify({ ok: true }))));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  process.env.SAASUS_PLATFORM_API_URL_BASE = `http://127.0.0.1:${server.address().port}`;
  process.env.SAASUS_PLATFORM_APIKEY = 'test-key';
  process.env.SAASUS_PLATFORM_SAASID = 'test-id';
  process.env.SAASUS_PLATFORM_SECRETKEY = 'test-secret';
  try {
    const result = await callTool(execute(), {});
    assert.deepEqual(JSON.parse(result.content[0].text), { ok: true });
  } finally {
    await new Promise(resolve => server.close(resolve));
    delete process.env.SAASUS_PLATFORM_API_URL_BASE;
    delete process.env.SAASUS_PLATFORM_APIKEY;
    delete process.env.SAASUS_PLATFORM_SAASID;
    delete process.env.SAASUS_PLATFORM_SECRETKEY;
  }
});
