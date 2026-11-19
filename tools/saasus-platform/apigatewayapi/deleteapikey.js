/**
 * Delete an API key
 * Delete the specified API key.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'delete',
  '/api-keys/{api_key}',
  [{"name":"api_key","type":"string","required":true,"description":"API Key"}],
  [],
  {"properties":{},"required":[]},
  'deleteApiKey'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  httpMethod: 'delete',
  definition: {
    type: 'function',
    function: {
      name: 'deleteapikey',
      description: `Delete an API key: Delete the specified API key. `,
      parameters: {
      "type": "object",
      "properties": {
            "api_key": {
                  "type": "string",
                  "description": "API Key"
            }
      },
      "required": [
            "api_key"
      ]
}
    }
  }
};

export { apiTool };
