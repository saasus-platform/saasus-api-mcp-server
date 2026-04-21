/**
 * Search Tenant Users
 * Search tenant users by user id, tenant id, email, sign-in ID, env, or role.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/tenants/all/users/search',
  [],
  [{"name":"tenant_id","type":"string","required":false,"description":"Tenant ID"},{"name":"id","type":"string","required":false,"description":"User ID"},{"name":"email","type":"string","required":false,"description":"Email prefix"},{"name":"sign_in_id","type":"string","required":false,"description":"Sign-in ID prefix"},{"name":"env_id","type":"number","required":false,"description":"Environment ID"},{"name":"role_id","type":"string","required":false,"description":"Role ID"},{"name":"limit","type":"number","required":false,"description":"Maximum number of users to retrieve"},{"name":"cursor","type":"string","required":false,"description":"Cursor for cursor pagination"}],
  {"properties":{},"required":[]},
  'searchTenantUsers'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'searchtenantusers',
      description: `Search Tenant Users: Search tenant users by user id, tenant id, email, sign-in ID, env, or role. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": "Tenant ID"
            },
            "id": {
                  "type": "string",
                  "description": "User ID"
            },
            "email": {
                  "type": "string",
                  "description": "Email prefix"
            },
            "sign_in_id": {
                  "type": "string",
                  "description": "Sign-in ID prefix"
            },
            "env_id": {
                  "type": "number",
                  "description": "Environment ID"
            },
            "role_id": {
                  "type": "string",
                  "description": "Role ID"
            },
            "limit": {
                  "type": "number",
                  "description": "Maximum number of users to retrieve"
            },
            "cursor": {
                  "type": "string",
                  "description": "Cursor for cursor pagination"
            }
      },
      "required": []
}
    }
  }
};

export { apiTool };
