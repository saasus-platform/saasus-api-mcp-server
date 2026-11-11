/**
 * Exchange a Temporary Code for Authentication/Authorization Information
 * Exchange a temporary code for ID token, access token, and refresh token by verifying the PKCE code verifier.
Only temporary codes created with code_challenge can be exchanged. Temporary codes created without code_challenge must be retrieved via GET /credentials.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/credentials/exchange',
  [],
  [],
  {"properties":{"auth_flow":{"title":"Authentication Flow","x-title-i18n":{"jpn":"認証フロー"},"description":"Authentication flow used for the exchange","x-description-i18n":{"jpn":"交換に使用する認証フロー"},"type":"string","enum":["tempCodeAuth"]},"code":{"type":"string","example":"69e732d6-8ecc-45c4-c2eb-8438f7ffe775"},"code_verifier":{"title":"PKCE Code Verifier","x-title-i18n":{"jpn":"PKCEコードベリファイア"},"description":"PKCE code verifier associated with the temporary code","x-description-i18n":{"jpn":"一時コードに紐付くPKCEコードベリファイア"},"type":"string","minLength":43,"maxLength":128,"pattern":"^[A-Za-z0-9\\-._~]+$"}},"required":["auth_flow"]},
  'exchangeAuthCredentials'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  httpMethod: 'post',
  definition: {
    type: 'function',
    function: {
      name: 'exchangeauthcredentials',
      description: `Exchange a Temporary Code for Authentication/Authorization Information: Exchange a temporary code for ID token, access token, and refresh token by verifying the PKCE code verifier. Only temporary codes created with code_challenge can be exchanged. Temporary codes created without code_challenge must be retrieved via GET /credentials. `,
      parameters: {
      "type": "object",
      "properties": {
            "auth_flow": {
                  "type": "string",
                  "description": "Authentication flow used for the exchange",
                  "enum": [
                        "tempCodeAuth"
                  ]
            },
            "code": {
                  "type": "string",
                  "description": ""
            },
            "code_verifier": {
                  "type": "string",
                  "description": "PKCE code verifier associated with the temporary code"
            }
      },
      "required": [
            "auth_flow"
      ]
}
    }
  }
};

export { apiTool };
