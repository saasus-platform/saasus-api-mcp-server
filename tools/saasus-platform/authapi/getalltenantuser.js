/**
 * Get User Info
 * Get information on user belonging to the tenant from the user ID.
If the user belongs to multiple tenants, it will be returned as another object.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/tenants/all/users/{user_id}',
  [{"name":"user_id","type":"string","required":true,"description":"User ID"}],
  [],
  {"properties":{},"required":[]},
  'getAllTenantUser'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getalltenantuser',
      description: `Get User Info: Get information on user belonging to the tenant from the user ID. If the user belongs to multiple tenants, it will be returned as another object. `,
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
