/**
 * Get Tenant Invitations
 * Get a list of invitations to the tenant.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/tenants/{tenant_id}/invitations',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"}],
  [],
  {"properties":{},"required":[]},
  'getTenantInvitations'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'gettenantinvitations',
      description: `Get Tenant Invitations: Get a list of invitations to the tenant. `,
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
