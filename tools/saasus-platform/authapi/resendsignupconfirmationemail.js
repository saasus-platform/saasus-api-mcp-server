/**
 * Resend Sign Up Confirmation Email
 * Resend temporary password for the new registered user.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/sign-up/resend',
  [],
  [],
  {"properties":{"email":{"title":"Email Address","x-title-i18n":{"jpn":"メールアドレス"},"description":"Email Address","x-description-i18n":{"jpn":"メールアドレス"},"type":"string"}},"required":["email"]},
  'resendSignUpConfirmationEmail'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'resendsignupconfirmationemail',
      description: `Resend Sign Up Confirmation Email: Resend temporary password for the new registered user. `,
      parameters: {
      "type": "object",
      "properties": {
            "email": {
                  "type": "string",
                  "description": "Email Address"
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
