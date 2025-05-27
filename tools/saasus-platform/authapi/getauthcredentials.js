/**
 * Get Authentication/Authorization Information
 * Get ID token, access token, and refresh token using a temporary code or a refresh token.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/credentials',
  [],
  [{"name":"code","type":"string","required":false,"description":"Temp Code"},{"name":"auth-flow","type":"string","required":false,"description":"Authentication Flow\ntempCodeAuth: Getting authentication information using a temporary code\nrefreshTokenAuth: Getting authentication information using a refresh token\nIf not specified, it will be tempCodeAuth\n","enum":["tempCodeAuth","refreshTokenAuth"]},{"name":"refresh-token","type":"string","required":false,"description":"Refresh Token"}],
  {"properties":{},"required":[]},
  'getAuthCredentials'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getauthcredentials',
      description: `Get Authentication/Authorization Information: Get ID token, access token, and refresh token using a temporary code or a refresh token. `,
      parameters: {
      "type": "object",
      "properties": {
            "code": {
                  "type": "string",
                  "description": "Temp Code"
            },
            "auth-flow": {
                  "type": "string",
                  "description": "Authentication Flow\ntempCodeAuth: Getting authentication information using a temporary code\nrefreshTokenAuth: Getting authentication information using a refresh token\nIf not specified, it will be tempCodeAuth\n",
                  "enum": [
                        "tempCodeAuth",
                        "refreshTokenAuth"
                  ]
            },
            "refresh-token": {
                  "type": "string",
                  "description": "Refresh Token"
            }
      },
      "required": []
}
    }
  }
};

export { apiTool };
