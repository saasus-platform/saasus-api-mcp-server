/**
 * Sign Up with AWS Marketplace
 * Register a new user linked to AWS Marketplace. A temporary password will be sent to the registered email.
If the Registration Token is not valid, an error is returned.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/aws-marketplace/sign-up',
  [],
  [],
  {"properties":{"email":{"title":"Email Address","x-title-i18n":{"jpn":"メールアドレス"},"description":"Email Address","x-description-i18n":{"jpn":"メールアドレス"},"type":"string"},"registration_token":{"title":"Registration Token","x-title-i18n":{"jpn":"登録トークン"},"description":"Registration Token","x-description-i18n":{"jpn":"登録トークン"},"type":"string"}},"required":["email","registration_token"]},
  'signUpWithAwsMarketplace'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'signupwithawsmarketplace',
      description: `Sign Up with AWS Marketplace: Register a new user linked to AWS Marketplace. A temporary password will be sent to the registered email. If the Registration Token is not valid, an error is returned. `,
      parameters: {
      "type": "object",
      "properties": {
            "email": {
                  "type": "string",
                  "description": "Email Address"
            },
            "registration_token": {
                  "type": "string",
                  "description": "Registration Token"
            }
      },
      "required": [
            "email",
            "registration_token"
      ]
}
    }
  }
};

export { apiTool };
