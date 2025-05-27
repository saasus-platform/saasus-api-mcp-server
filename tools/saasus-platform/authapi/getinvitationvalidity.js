/**
 * Get Invitation Validity
 * Get the validity of an invitation to the tenant.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/invitations/{invitation_id}/validity',
  [{"name":"invitation_id","type":"string","required":true,"description":"Invitation ID"}],
  [],
  {"properties":{},"required":[]},
  'getInvitationValidity'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getinvitationvalidity',
      description: `Get Invitation Validity: Get the validity of an invitation to the tenant. `,
      parameters: {
      "type": "object",
      "properties": {
            "invitation_id": {
                  "type": "string",
                  "description": "Invitation ID"
            }
      },
      "required": [
            "invitation_id"
      ]
}
    }
  }
};

export { apiTool };
