/**
 * Create an API key
 * Creates or updates an API key based on the contents of the request body.
All parameters are in the request body:
- tenant_id, env_id (required)
- user_id (optional)

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'post',
  '/api-keys',
  [],
  [],
  {"properties":{"tenant_id":{"type":"string","example":"69e732d6-8ecc-45c4-c2eb-8438f7ffe775"},"env_id":{"type":"integer","x-go-type":"uint64","example":1},"user_id":{"type":"string","example":"69e732d6-8ecc-45c4-c2eb-8438f7ffe775"}},"required":["tenant_id","env_id"]},
  'createApiKey'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createapikey',
      description: `Create an API key: Creates or updates an API key based on the contents of the request body. All parameters are in the request body: - tenant_id, env_id (required) - user_id (optional) `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": ""
            },
            "env_id": {
                  "type": "number",
                  "description": ""
            },
            "user_id": {
                  "type": "string",
                  "description": ""
            }
      },
      "required": [
            "tenant_id",
            "env_id"
      ]
}
    }
  }
};

export { apiTool };
