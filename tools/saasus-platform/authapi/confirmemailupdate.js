/**
 * Confirm User Email Update
 * Verify the code to confirm the user's email address update.
Requires the user's access token.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/users/{user_id}/email/confirm',
  [{"name":"user_id","type":"string","required":true,"description":"User ID"}],
  [],
  {"properties":{"code":{"title":"Verification Code","x-title-i18n":{"jpn":"検証コード"},"type":"string","example":"123456"},"access_token":{"title":"Access Token","x-title-i18n":{"jpn":"アクセストークン"},"type":"string"}},"required":["code","access_token"]},
  'confirmEmailUpdate'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'confirmemailupdate',
      description: `Confirm User Email Update: Verify the code to confirm the user's email address update. Requires the user's access token. `,
      parameters: {
      "type": "object",
      "properties": {
            "user_id": {
                  "type": "string",
                  "description": "User ID"
            },
            "code": {
                  "type": "string",
                  "description": ""
            },
            "access_token": {
                  "type": "string",
                  "description": ""
            }
      },
      "required": [
            "user_id",
            "code",
            "access_token"
      ]
}
    }
  }
};

export { apiTool };
