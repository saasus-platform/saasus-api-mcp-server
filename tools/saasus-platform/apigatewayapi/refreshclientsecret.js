/**
 * Update the client secret of the API key
 * Update the client secret of the API key.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'post',
  '/api-keys/{api_key}/client-secret',
  [{"name":"api_key","type":"string","required":true,"description":"API Key"}],
  [],
  {"properties":{},"required":[]},
  'refreshClientSecret'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'refreshclientsecret',
      description: `Update the client secret of the API key: Update the client secret of the API key. `,
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
