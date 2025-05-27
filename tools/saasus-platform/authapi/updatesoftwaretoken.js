/**
 * Register Authentication Application
 * Register an authentication application.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'put',
  '/users/{user_id}/mfa/software-token',
  [{"name":"user_id","type":"string","required":true,"description":"User ID"}],
  [],
  {"properties":{"access_token":{"title":"Access Token","x-title-i18n":{"jpn":"アクセストークン"},"description":"access token","x-description-i18n":{"jpn":"アクセストークン"},"type":"string"},"verification_code":{"title":"Verification Code","x-title-i18n":{"jpn":"検証コード"},"description":"verification code","x-description-i18n":{"jpn":"検証コード"},"type":"string"}},"required":["access_token","verification_code"]},
  'updateSoftwareToken'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatesoftwaretoken',
      description: `Register Authentication Application: Register an authentication application. `,
      parameters: {
      "type": "object",
      "properties": {
            "user_id": {
                  "type": "string",
                  "description": "User ID"
            },
            "access_token": {
                  "type": "string",
                  "description": "access token"
            },
            "verification_code": {
                  "type": "string",
                  "description": "verification code"
            }
      },
      "required": [
            "user_id",
            "access_token",
            "verification_code"
      ]
}
    }
  }
};

export { apiTool };
