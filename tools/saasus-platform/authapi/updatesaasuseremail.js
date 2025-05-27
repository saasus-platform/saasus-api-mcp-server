/**
 * Change Email
 * Change user's email.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'patch',
  '/users/{user_id}/email',
  [{"name":"user_id","type":"string","required":true,"description":"User ID"}],
  [],
  {"properties":{"email":{"type":"string","example":"hoge@example.com","description":"E-mail","x-description-i18n":{"jpn":"メールアドレス"}}},"required":["email"]},
  'updateSaasUserEmail'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatesaasuseremail',
      description: `Change Email: Change user\'s email. `,
      parameters: {
      "type": "object",
      "properties": {
            "user_id": {
                  "type": "string",
                  "description": "User ID"
            },
            "email": {
                  "type": "string",
                  "description": "E-mail"
            }
      },
      "required": [
            "user_id",
            "email"
      ]
}
    }
  }
};

export { apiTool };
