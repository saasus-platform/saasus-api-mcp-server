/**
 * Change Sign-in ID
 * Change user's sign-in ID.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'patch',
  '/users/{user_id}/sign-in-id',
  [{"name":"user_id","type":"string","required":true,"description":"User ID"}],
  [],
  {"properties":{"sign_in_id":{"type":"string","example":"user_name_01","description":"Sign-in ID","x-description-i18n":{"jpn":"ログインID"}}},"required":["sign_in_id"]},
  'updateSaasUserSignInId'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatesaasusersigninid',
      description: `Change Sign-in ID: Change user's sign-in ID. `,
      parameters: {
      "type": "object",
      "properties": {
            "user_id": {
                  "type": "string",
                  "description": "User ID"
            },
            "sign_in_id": {
                  "type": "string",
                  "description": "Sign-in ID"
            }
      },
      "required": [
            "user_id",
            "sign_in_id"
      ]
}
    }
  }
};

export { apiTool };
