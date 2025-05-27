/**
 * Get User
 * Get user information based on user ID.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/users/{user_id}',
  [{"name":"user_id","type":"string","required":true,"description":"User ID"}],
  [],
  {"properties":{},"required":[]},
  'getSaasUser'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getsaasuser',
      description: `Get User: Get user information based on user ID. `,
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
