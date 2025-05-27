/**
 * Request User Email Update
 * Request to update the user's email address.
Sends a verification code to the requested email address.
Requires the user's access token.
The verification code is valid for 24 hours.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/users/{user_id}/email/request',
  [{"name":"user_id","type":"string","required":true,"description":"User ID"}],
  [],
  {"properties":{"email":{"type":"string","example":"hoge@example.com","description":"Email Address","x-description-i18n":{"jpn":"メールアドレス"}},"access_token":{"title":"Access Token","x-title-i18n":{"jpn":"アクセストークン"},"type":"string"}},"required":["email","access_token"]},
  'requestEmailUpdate'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'requestemailupdate',
      description: `Request User Email Update: Request to update the user\'s email address. Sends a verification code to the requested email address. Requires the user\'s access token. The verification code is valid for 24 hours. `,
      parameters: {
      "type": "object",
      "properties": {
            "user_id": {
                  "type": "string",
                  "description": "User ID"
            },
            "email": {
                  "type": "string",
                  "description": "Email Address"
            },
            "access_token": {
                  "type": "string",
                  "description": ""
            }
      },
      "required": [
            "user_id",
            "email",
            "access_token"
      ]
}
    }
  }
};

export { apiTool };
