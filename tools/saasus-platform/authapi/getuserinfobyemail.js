/**
 * Get User Info by Email
 * Get user information by email address.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/userinfo/search/email',
  [],
  [{"name":"email","type":"string","required":true,"description":"Email"}],
  {"properties":{},"required":[]},
  'getUserInfoByEmail'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getuserinfobyemail',
      description: `Get User Info by Email: Get user information by email address. `,
      parameters: {
      "type": "object",
      "properties": {
            "email": {
                  "type": "string",
                  "description": "Email"
            }
      },
      "required": [
            "email"
      ]
}
    }
  }
};

export { apiTool };
