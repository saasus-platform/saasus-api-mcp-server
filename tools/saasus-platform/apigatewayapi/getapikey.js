/**
 * get API key details by API key
 * Get the details of the API key by specifying the API key.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'get',
  '/api-keys/{api_key}',
  [{"name":"api_key","type":"string","required":true,"description":"API Key"}],
  [],
  {"properties":{},"required":[]},
  'getApiKey'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getapikey',
      description: `get API key details by API key: Get the details of the API key by specifying the API key. `,
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
