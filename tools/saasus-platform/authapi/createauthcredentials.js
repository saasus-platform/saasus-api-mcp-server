/**
 * Save Authentication/Authorization Information
 * Temporarily save the parameter for the ID token, access token, and refresh token and return a temporary code for obtaining.
Temporary codes are valid for 10 seconds from issuance.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/credentials',
  [],
  [],
  {"properties":{"id_token":{"title":"ID Token","x-title-i18n":{"jpn":"IDトークン"},"description":"ID token","x-description-i18n":{"jpn":"IDトークン"},"type":"string"},"access_token":{"title":"Access Token","x-title-i18n":{"jpn":"アクセストークン"},"description":"Access token","x-description-i18n":{"jpn":"アクセストークン"},"type":"string"},"refresh_token":{"title":"Refresh Token","x-title-i18n":{"jpn":"リフレッシュトークン"},"description":"Refresh token","x-description-i18n":{"jpn":"リフレッシュトークン"},"type":"string"}},"required":["id_token","access_token"]},
  'createAuthCredentials'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createauthcredentials',
      description: `Save Authentication/Authorization Information: Temporarily save the parameter for the ID token, access token, and refresh token and return a temporary code for obtaining. Temporary codes are valid for 10 seconds from issuance. `,
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
