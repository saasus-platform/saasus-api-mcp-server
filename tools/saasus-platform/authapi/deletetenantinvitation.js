/**
 * Delete Tenant Invitation
 * Delete an invitation for the tenant.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'delete',
  '/tenants/{tenant_id}/invitations/{invitation_id}',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"},{"name":"invitation_id","type":"string","required":true,"description":"Invitation ID"}],
  [],
  {"properties":{},"required":[]},
  'deleteTenantInvitation'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deletetenantinvitation',
      description: `Delete Tenant Invitation: Delete an invitation for the tenant. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": "Tenant ID"
            },
            "invitation_id": {
                  "type": "string",
                  "description": "Invitation ID"
            }
      },
      "required": [
            "tenant_id",
            "invitation_id"
      ]
}
    }
  }
};

export { apiTool };
