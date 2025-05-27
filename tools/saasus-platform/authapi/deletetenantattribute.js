/**
 * Delete Tenant Attribute
 * Deletes tenant attributes managed by SaaSus Platform.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'delete',
  '/tenant-attributes/{attribute_name}',
  [{"name":"attribute_name","type":"string","required":true,"description":"Attribute Name"}],
  [],
  {"properties":{},"required":[]},
  'deleteTenantAttribute'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deletetenantattribute',
      description: `Delete Tenant Attribute: Deletes tenant attributes managed by SaaSus Platform. `,
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
