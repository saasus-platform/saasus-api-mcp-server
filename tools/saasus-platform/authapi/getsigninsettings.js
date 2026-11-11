/**
 * Get Sign-In Settings
 * Get sign-in settings, including user password requirements and refresh token validity period.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/sign-in-settings',
  [],
  [],
  {"properties":{},"required":[]},
  'getSignInSettings'
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
      name: 'getsigninsettings',
      description: `Get Sign-In Settings: Get sign-in settings, including user password requirements and refresh token validity period. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
