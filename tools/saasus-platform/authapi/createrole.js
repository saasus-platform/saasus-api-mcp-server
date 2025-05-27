/**
 * Create Role
 * Create a role.
By granting users the roles created here, it becomes easier to implement role-based authorization on the SaaS side.
In addition, even the same user can have different roles for each tenant/environment to which they belong.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/roles',
  [],
  [],
  {"properties":{"role_name":{"type":"string","example":"admin","description":"role name","x-description-i18n":{"jpn":"役割(ロール)名"}},"display_name":{"type":"string","example":"管理者","description":"role display name","x-description-i18n":{"jpn":"役割(ロール)表示名"}}},"required":["role_name","display_name"]},
  'createRole'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createrole',
      description: `Create Role: Create a role. By granting users the roles created here, it becomes easier to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong. `,
      parameters: {
      "type": "object",
      "properties": {
            "role_name": {
                  "type": "string",
                  "description": "role name"
            },
            "display_name": {
                  "type": "string",
                  "description": "role display name"
            }
      },
      "required": [
            "role_name",
            "display_name"
      ]
}
    }
  }
};

export { apiTool };
