/**
 * Delete User Attribute
 * Delete user attributes kept on the SaaSus Platform.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'delete',
  '/user-attributes/{attribute_name}',
  [{"name":"attribute_name","type":"string","required":true,"description":"Attribute Name"}],
  [],
  {"properties":{},"required":[]},
  'deleteUserAttribute'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deleteuserattribute',
      description: `Delete User Attribute: Delete user attributes kept on the SaaSus Platform. `,
      parameters: {
      "type": "object",
      "properties": {
            "attribute_name": {
                  "type": "string",
                  "description": "Attribute Name"
            }
      },
      "required": [
            "attribute_name"
      ]
}
    }
  }
};

export { apiTool };
