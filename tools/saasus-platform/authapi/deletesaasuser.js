/**
 * Delete User
 * Delete all users with matching user ID from the tenant and SaaS.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'delete',
  '/users/{user_id}',
  [{"name":"user_id","type":"string","required":true,"description":"User ID"}],
  [],
  {"properties":{},"required":[]},
  'deleteSaasUser'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deletesaasuser',
      description: `Delete User: Delete all users with matching user ID from the tenant and SaaS. `,
      parameters: {
      "type": "object",
      "properties": {
            "user_id": {
                  "type": "string",
                  "description": "User ID"
            }
      },
      "required": [
            "user_id"
      ]
}
    }
  }
};

export { apiTool };
