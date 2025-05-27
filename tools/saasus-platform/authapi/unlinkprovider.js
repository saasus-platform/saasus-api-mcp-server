/**
 * Unlink external identity providers
 * Unlink external identity providers.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'delete',
  '/users/{user_id}/providers/{provider_name}',
  [{"name":"provider_name","type":"string","required":true,"description":""},{"name":"user_id","type":"string","required":true,"description":"User ID"}],
  [],
  {"properties":{},"required":[]},
  'unlinkProvider'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'unlinkprovider',
      description: `Unlink external identity providers: Unlink external identity providers. `,
      parameters: {
      "type": "object",
      "properties": {
            "provider_name": {
                  "type": "string",
                  "description": ""
            },
            "user_id": {
                  "type": "string",
                  "description": "User ID"
            }
      },
      "required": [
            "provider_name",
            "user_id"
      ]
}
    }
  }
};

export { apiTool };
