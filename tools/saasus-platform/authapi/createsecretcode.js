/**
 * Create secret code for authentication application registration
 * Create a secret code for authentication application registration.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/users/{user_id}/mfa/software-token/secret-code',
  [{"name":"user_id","type":"string","required":true,"description":"User ID"}],
  [],
  {"properties":{"access_token":{"title":"Access Token","x-title-i18n":{"jpn":"アクセストークン"},"description":"access token","x-description-i18n":{"jpn":"アクセストークン"},"type":"string"}},"required":["access_token"]},
  'createSecretCode'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createsecretcode',
      description: `Create secret code for authentication application registration: Create a secret code for authentication application registration. `,
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
            }
      },
      "required": [
            "user_id",
            "access_token"
      ]
}
    }
  }
};

export { apiTool };
