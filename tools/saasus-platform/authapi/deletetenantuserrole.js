/**
 * Remove Role From Tenant User
 * Remove a role from a tenant user.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'delete',
  '/tenants/{tenant_id}/users/{user_id}/envs/{env_id}/roles/{role_name}',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"},{"name":"user_id","type":"string","required":true,"description":"User ID"},{"name":"env_id","type":"string","required":true,"description":"Env ID"},{"name":"role_name","type":"string","required":true,"description":"Role name"}],
  [],
  {"properties":{},"required":[]},
  'deleteTenantUserRole'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deletetenantuserrole',
      description: `Remove Role From Tenant User: Remove a role from a tenant user. `,
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
            },
            "env_id": {
                  "type": "string",
                  "description": "Env ID"
            },
            "role_name": {
                  "type": "string",
                  "description": "Role name"
            }
      },
      "required": [
            "tenant_id",
            "user_id",
            "env_id",
            "role_name"
      ]
}
    }
  }
};

export { apiTool };
