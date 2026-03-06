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
  {"properties":{"email":{"type":"string","example":"hoge@example.com","description":"E-mail","x-description-i18n":{"jpn":"メールアドレス"}},"sign_in_id":{"type":"string","example":"user123","description":"Sign-in ID (alphanumeric and symbols -_ only, max 50 characters)\n","x-description-i18n":{"jpn":"ログインID（英数字と記号-_のみ、最大50文字）\n"}},"password":{"type":"string","example":"@Pass#Word1","description":"Password.\nFor email authentication, if not specified, a temporary password will be sent by email.\nFor sign-in ID authentication, if not specified, password will be auto-generated and returned.\n","x-description-i18n":{"jpn":"パスワード。\nメールアドレス認証の場合、指定しない場合は仮パスワードがメールで送信されます。\nログインID認証の場合、指定しない場合は自動生成されてレスポンスに含まれます。\n"}}},"required":[]},
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
            "sign_in_id": {
                  "type": "string",
                  "description": "Sign-in ID (alphanumeric and symbols -_ only, max 50 characters)\n"
            },
            "password": {
                  "type": "string",
                  "description": "Password.\nFor email authentication, if not specified, a temporary password will be sent by email.\nFor sign-in ID authentication, if not specified, password will be auto-generated and returned.\n"
            }
      },
      "required": []
}
    }
  }
};

export { apiTool };
