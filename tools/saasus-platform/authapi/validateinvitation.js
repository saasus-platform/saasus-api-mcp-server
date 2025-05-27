/**
 * Validate Invitation
 * Validate an invitation to the tenant.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'patch',
  '/invitations/{invitation_id}/validate',
  [{"name":"invitation_id","type":"string","required":true,"description":"Invitation ID"}],
  [],
  {"properties":{"access_token":{"title":"Access Token","x-title-i18n":{"jpn":"アクセストークン"},"description":"Access token of the invited user","x-description-i18n":{"jpn":"招待されたユーザーのアクセストークン"},"type":"string"},"email":{"title":"Email Address","x-title-i18n":{"jpn":"メールアドレス"},"description":"Email address of the invited user","x-description-i18n":{"jpn":"招待されたユーザーのメールアドレス"},"type":"string","example":"test@example.com"},"password":{"title":"Password","x-title-i18n":{"jpn":"パスワード"},"description":"Password of the invited user","x-description-i18n":{"jpn":"招待されたユーザーのパスワード"},"type":"string"}},"required":[]},
  'validateInvitation'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'validateinvitation',
      description: `Validate Invitation: Validate an invitation to the tenant. `,
      parameters: {
      "type": "object",
      "properties": {
            "invitation_id": {
                  "type": "string",
                  "description": "Invitation ID"
            },
            "access_token": {
                  "type": "string",
                  "description": "Access token of the invited user"
            },
            "email": {
                  "type": "string",
                  "description": "Email address of the invited user"
            },
            "password": {
                  "type": "string",
                  "description": "Password of the invited user"
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
