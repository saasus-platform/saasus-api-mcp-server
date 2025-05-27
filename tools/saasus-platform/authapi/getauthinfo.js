/**
 * Get Authentication Info
 * Get the post-login SaaS URL that contains authentication information.
You can pass authentication information to the URL obtained here and implement this Callback using the SaaSus SDK.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/auth-info',
  [],
  [],
  {"properties":{},"required":[]},
  'getAuthInfo'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getauthinfo',
      description: `Get Authentication Info: Get the post-login SaaS URL that contains authentication information. You can pass authentication information to the URL obtained here and implement this Callback using the SaaSus SDK. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
