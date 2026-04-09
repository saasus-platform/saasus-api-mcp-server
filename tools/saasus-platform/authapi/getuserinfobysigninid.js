/**
 * Get User Info by Sign-in ID
 * Get user information by sign-in ID.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/userinfo/search/sign-in-id',
  [],
  [{"name":"sign_in_id","type":"string","required":true,"description":"Sign-in ID.\n"}],
  {"properties":{},"required":[]},
  'getUserInfoBySignInId'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getuserinfobysigninid',
      description: `Get User Info by Sign-in ID: Get user information by sign-in ID. `,
      parameters: {
      "type": "object",
      "properties": {
            "sign_in_id": {
                  "type": "string",
                  "description": "Sign-in ID.\n"
            }
      },
      "required": [
            "sign_in_id"
      ]
}
    }
  }
};

export { apiTool };
