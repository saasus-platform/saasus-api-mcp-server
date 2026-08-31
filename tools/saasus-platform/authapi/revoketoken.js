/**
 * Revoke Token
 * Revoke the specified refresh token.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/token/revoke',
  [],
  [],
  {"properties":{"refresh_token":{"title":"Refresh Token","x-title-i18n":{"jpn":"リフレッシュトークン"},"description":"Refresh token to revoke","x-description-i18n":{"jpn":"無効化するリフレッシュトークン"},"type":"string"}},"required":["refresh_token"]},
  'revokeToken'
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
      name: 'revoketoken',
      description: `Revoke Token: Revoke the specified refresh token. `,
      parameters: {
      "type": "object",
      "properties": {
            "refresh_token": {
                  "type": "string",
                  "description": "Refresh token to revoke"
            }
      },
      "required": [
            "refresh_token"
      ]
}
    }
  }
};

export { apiTool };
