/**
 * Change Password
 * Change user's login password.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'patch',
  '/users/{user_id}/password',
  [{"name":"user_id","type":"string","required":true,"description":"User ID"}],
  [],
  {"properties":{"password":{"type":"string","example":"@Pass#Word1","description":"Password","x-description-i18n":{"jpn":"パスワード"}},"temporary":{"type":"boolean","description":"Set to true to mark the new password as a temporary password (user must change on next sign-in)","x-description-i18n":{"jpn":"true を指定すると新しいパスワードを一時パスワードとして設定します（次回サインイン時に変更が必要）"}}},"required":["password"]},
  'updateSaasUserPassword'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatesaasuserpassword',
      description: `Change Password: Change user's login password. `,
      parameters: {
      "type": "object",
      "properties": {
            "user_id": {
                  "type": "string",
                  "description": "User ID"
            },
            "password": {
                  "type": "string",
                  "description": "Password"
            },
            "temporary": {
                  "type": "boolean",
                  "description": "Set to true to mark the new password as a temporary password (user must change on next sign-in)"
            }
      },
      "required": [
            "user_id",
            "password"
      ]
}
    }
  }
};

export { apiTool };
