/**
 * Get Tenant User
 * Get one tenant user by specific ID.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/tenants/{tenant_id}/users/{user_id}',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"},{"name":"user_id","type":"string","required":true,"description":"User ID"}],
  [],
  {"properties":{},"required":[]},
  'getTenantUser'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'gettenantuser',
      description: `Get Tenant User: Get one tenant user by specific ID. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": "Tenant ID"
            },
            "user_id": {
                  "type": "string",
                  "description": "User ID"
            }
      },
      "required": [
            "tenant_id",
            "user_id"
      ]
}
    }
  }
};

export { apiTool };
