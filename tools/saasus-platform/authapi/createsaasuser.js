/**
 * Create SaaS User
 * Create SaaS User.
If attributes is empty, a temporary password will be sent to the registered email.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/users',
  [],
  [],
  {"properties":{"email":{"type":"string","example":"hoge@example.com","description":"E-mail","x-description-i18n":{"jpn":"メールアドレス"}},"password":{"type":"string","example":"@Pass#Word1","description":"Password","x-description-i18n":{"jpn":"パスワード"}}},"required":["email"]},
  'createSaasUser'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createsaasuser',
      description: `Create SaaS User: Create SaaS User. If attributes is empty, a temporary password will be sent to the registered email. `,
      parameters: {
      "type": "object",
      "properties": {
            "email": {
                  "type": "string",
                  "description": "E-mail"
            },
            "password": {
                  "type": "string",
                  "description": "Password"
            }
      },
      "required": [
            "email"
      ]
}
    }
  }
};

export { apiTool };
