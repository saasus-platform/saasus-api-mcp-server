/**
 * Delete Role
 * Delete role.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'delete',
  '/roles/{role_name}',
  [{"name":"role_name","type":"string","required":true,"description":"Role name"}],
  [],
  {"properties":{},"required":[]},
  'deleteRole'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deleterole',
      description: `Delete Role: Delete role. `,
      parameters: {
      "type": "object",
      "properties": {
            "role_name": {
                  "type": "string",
                  "description": "Role name"
            }
      },
      "required": [
            "role_name"
      ]
}
    }
  }
};

export { apiTool };
