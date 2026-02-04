/**
 * Sign In
 * A user attempts to sign in.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/sign-in',
  [],
  [],
  {"properties":{"sign_in_flow":{"title":"SignIn Flow","x-title-i18n":{"jpn":"ログインフロー"},"description":"The sign-in flow to use for authentication.\nCurrently, only USER_SRP_AUTH is supported.\n","x-description-i18n":{"jpn":"認証に使用するログインフロー。\n現在はUSER_SRP_AUTHのみ使用可能です。\n"},"type":"string","enum":["USER_SRP_AUTH"]},"sign_in_parameters":{"title":"SignIn Parameters","x-title-i18n":{"jpn":"ログインパラメータ"},"description":"The required parameters vary depending on the sign_in_flow.\nUSER_SRP_AUTH:\n  USERNAME: email address\n  SRP_A: SRP A value\n","x-description-i18n":{"jpn":"sign_in_flowごとに必要なパラメータが変わります。\nUSER_SRP_AUTH:\n  USERNAME: メールアドレス\n  SRP_A: SRP認証で使用するAの値\n"},"type":"object","additionalProperties":{"type":"string"}}},"required":["sign_in_flow"]},
  'signIn'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'signin',
      description: `Sign In: A user attempts to sign in. `,
      parameters: {
      "type": "object",
      "properties": {
            "sign_in_flow": {
                  "type": "string",
                  "description": "The sign-in flow to use for authentication.\nCurrently, only USER_SRP_AUTH is supported.\n",
                  "enum": [
                        "USER_SRP_AUTH"
                  ]
            },
            "sign_in_parameters": {
                  "type": "object",
                  "description": "The required parameters vary depending on the sign_in_flow.\nUSER_SRP_AUTH:\n  USERNAME: email address\n  SRP_A: SRP A value\n"
            }
      },
      "required": [
            "sign_in_flow"
      ]
}
    }
  }
};

export { apiTool };
