/**
 * Save Authentication/Authorization Information
 * Temporarily save the parameter for the ID token, access token, and refresh token and return a temporary code for obtaining.
Temporary codes are valid for 10 seconds from issuance.
When code_challenge is specified, the temporary code can only be exchanged via POST /credentials/exchange and cannot be retrieved via GET /credentials.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/credentials',
  [],
  [],
  {"properties":{"id_token":{"title":"ID Token","x-title-i18n":{"jpn":"IDトークン"},"description":"ID token","x-description-i18n":{"jpn":"IDトークン"},"type":"string"},"access_token":{"title":"Access Token","x-title-i18n":{"jpn":"アクセストークン"},"description":"Access token","x-description-i18n":{"jpn":"アクセストークン"},"type":"string"},"refresh_token":{"title":"Refresh Token","x-title-i18n":{"jpn":"リフレッシュトークン"},"description":"Refresh token","x-description-i18n":{"jpn":"リフレッシュトークン"},"type":"string"},"code_challenge":{"title":"PKCE Code Challenge","x-title-i18n":{"jpn":"PKCEコードチャレンジ"},"description":"PKCE code challenge derived from the code verifier. It must be specified together with code_challenge_method.","x-description-i18n":{"jpn":"code verifierから生成したPKCEコードチャレンジ"},"type":"string","minLength":43,"maxLength":128,"pattern":"^[A-Za-z0-9\\-._~]+$"},"code_challenge_method":{"title":"PKCE Code Challenge Method","x-title-i18n":{"jpn":"PKCEコードチャレンジ方式"},"description":"Method used to derive the PKCE code challenge. It must be specified together with code_challenge.","x-description-i18n":{"jpn":"PKCEコードチャレンジの生成方式"},"type":"string","enum":["S256"]}},"required":["id_token","access_token"]},
  'createAuthCredentials'
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
      name: 'createauthcredentials',
      description: `Save Authentication/Authorization Information: Temporarily save the parameter for the ID token, access token, and refresh token and return a temporary code for obtaining. Temporary codes are valid for 10 seconds from issuance. When code_challenge is specified, the temporary code can only be exchanged via POST /credentials/exchange and cannot be retrieved via GET /credentials. `,
      parameters: {
      "type": "object",
      "properties": {
            "id_token": {
                  "type": "string",
                  "description": "ID token"
            },
            "access_token": {
                  "type": "string",
                  "description": "Access token"
            },
            "refresh_token": {
                  "type": "string",
                  "description": "Refresh token"
            },
            "code_challenge": {
                  "type": "string",
                  "description": "PKCE code challenge derived from the code verifier. It must be specified together with code_challenge_method."
            },
            "code_challenge_method": {
                  "type": "string",
                  "description": "Method used to derive the PKCE code challenge. It must be specified together with code_challenge.",
                  "enum": [
                        "S256"
                  ]
            }
      },
      "required": [
            "id_token",
            "access_token"
      ]
}
    }
  }
};

export { apiTool };
