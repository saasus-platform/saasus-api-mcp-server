/**
 * Get User Info
 * User information is obtained based on the ID token of the SaaS user (registered user).
The ID token is passed to the Callback URL during login from the SaaSus Platform generated login screen.
User information can be obtained from calling this API with an ID token from the URL on the server side.
Since the acquired tenant, role (role), price plan, etc. are included, it is possible to implement authorization based on it.
If the ID token validation fails and 401 Unauthorized is returned, the login screen URL will be returned in data.sign_in_page_url of the response, so the client can respond by redirecting to it, etc.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/userinfo',
  [],
  [{"name":"token","type":"string","required":true,"description":"ID Token"}],
  {"properties":{},"required":[]},
  'getUserInfo'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  httpMethod: 'get',
  definition: {
    type: 'function',
    function: {
      name: 'getuserinfo',
      description: `Get User Info: User information is obtained based on the ID token of the SaaS user (registered user). The ID token is passed to the Callback URL during login from the SaaSus Platform generated login screen. User information can be obtained from calling this API with an ID token from the URL on the server side. Since the acquired tenant, role (role), price plan, etc. are included, it is possible to implement authorization based on it. If the ID token validation fails and 401 Unauthorized is returned, the login screen URL will be returned in data.sign_in_page_url of the response, so the client can respond by redirecting to it, etc. `,
      parameters: {
      "type": "object",
      "properties": {
            "token": {
                  "type": "string",
                  "description": "ID Token"
            }
      },
      "required": [
            "token"
      ]
}
    }
  }
};

export { apiTool };
