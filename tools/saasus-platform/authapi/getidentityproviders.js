/**
 * Get Sign-In Information Via External Provider
 * Get sign-in information via external provider set in cognito.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/identity-providers',
  [],
  [],
  {"properties":{},"required":[]},
  'getIdentityProviders'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getidentityproviders',
      description: `Get Sign-In Information Via External Provider: Get sign-in information via external provider set in cognito. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
