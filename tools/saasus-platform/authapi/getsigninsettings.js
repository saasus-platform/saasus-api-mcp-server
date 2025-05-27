/**
 * Get Password Requirements
 * Get user password requirements.
Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.

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
  definition: {
    type: 'function',
    function: {
      name: 'getsigninsettings',
      description: `Get Password Requirements: Get user password requirements. Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
