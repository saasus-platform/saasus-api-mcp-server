/**
 * Reset Password
 * Reset user's login password.
The current password will be invalidated and a temporary password will be issued.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/users/{user_id}/password/reset',
  [{"name":"user_id","type":"string","required":true,"description":"User ID"}],
  [],
  {"properties":{},"required":[]},
  'resetSaasUserPassword'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  httpMethod: 'post',
  definition: {
    type: 'function',
    function: {
      name: 'resetsaasuserpassword',
      description: `Reset Password: Reset user's login password. The current password will be invalidated and a temporary password will be issued. `,
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
