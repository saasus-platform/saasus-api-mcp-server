/**
 * Create Tenant User Role
 * Create roles on tenant users.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/tenants/{tenant_id}/users/{user_id}/envs/{env_id}/roles',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"},{"name":"user_id","type":"string","required":true,"description":"User ID"},{"name":"env_id","type":"string","required":true,"description":"Env ID"}],
  [],
  {"properties":{"role_names":{"type":"array","description":"Role Info","x-description-i18n":{"jpn":"役割(ロール)情報"},"items":{"type":"string","example":"admin"}}},"required":["role_names"]},
  'createTenantUserRoles'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createtenantuserroles',
      description: `Create Tenant User Role: Create roles on tenant users. `,
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
            "role_names": {
                  "type": "array",
                  "description": "Role Info",
                  "items": {
                        "type": "string",
                        "example": "admin"
                  }
            }
      },
      "required": [
            "tenant_id",
            "user_id",
            "env_id",
            "role_names"
      ]
}
    }
  }
};

export { apiTool };
