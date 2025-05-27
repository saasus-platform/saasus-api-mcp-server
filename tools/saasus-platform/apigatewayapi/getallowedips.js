/**
 * Get allowed IP addresses for the tenant
 * Get allowed IP addresses for the tenant.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'get',
  '/tenants/{tenant_id}/allowed-ips',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"}],
  [],
  {"properties":{},"required":[]},
  'getAllowedIps'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getallowedips',
      description: `Get allowed IP addresses for the tenant: Get allowed IP addresses for the tenant. `,
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
