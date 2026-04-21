/**
 * Update Role
 * Update role display name.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'patch',
  '/roles/{role_name}',
  [{"name":"role_name","type":"string","required":true,"description":"Role name"}],
  [],
  {"properties":{"display_name":{"type":"string","example":"管理者","description":"role display name","x-description-i18n":{"jpn":"役割(ロール)表示名"}}},"required":["display_name"]},
  'updateRole'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  httpMethod: 'patch',
  definition: {
    type: 'function',
    function: {
      name: 'updaterole',
      description: `Update Role: Update role display name. `,
      parameters: {
      "type": "object",
      "properties": {
            "role_name": {
                  "type": "string",
                  "description": "Role name"
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
