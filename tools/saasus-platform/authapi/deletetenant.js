/**
 * Delete Tenant
 * Delete SaaSus Platform tenant.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'delete',
  '/tenants/{tenant_id}',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"}],
  [],
  {"properties":{},"required":[]},
  'deleteTenant'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deletetenant',
      description: `Delete Tenant: Delete SaaSus Platform tenant. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": "Tenant ID"
            }
      },
      "required": [
            "tenant_id"
      ]
}
    }
  }
};

export { apiTool };
