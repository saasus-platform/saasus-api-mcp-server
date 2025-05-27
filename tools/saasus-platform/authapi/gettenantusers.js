/**
 * Get Tenant Users
 * Get all the users belonging to the tenant.
Id is unique.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/tenants/{tenant_id}/users',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"}],
  [],
  {"properties":{},"required":[]},
  'getTenantUsers'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'gettenantusers',
      description: `Get Tenant Users: Get all the users belonging to the tenant. Id is unique. `,
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
