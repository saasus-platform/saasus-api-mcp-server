/**
 * Sign Up
 * Register a new user. A temporary password will be sent to the registered email.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/sign-up',
  [],
  [],
  {"properties":{"email":{"title":"Email Address","x-title-i18n":{"jpn":"メールアドレス"},"description":"Email Address","x-description-i18n":{"jpn":"メールアドレス"},"type":"string"}},"required":["email"]},
  'signUp'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'signup',
      description: `Sign Up: Register a new user. A temporary password will be sent to the registered email. `,
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
