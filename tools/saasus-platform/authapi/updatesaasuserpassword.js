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
  {"properties":{"password":{"type":"string","example":"@Pass#Word1","description":"Password","x-description-i18n":{"jpn":"パスワード"}}},"required":["password"]},
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
