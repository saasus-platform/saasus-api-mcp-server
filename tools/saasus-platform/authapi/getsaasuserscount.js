/**
 * Get SaaS Users Count
 * Get the count of SaaS users.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/users/count',
  [],
  [],
  {"properties":{},"required":[]},
  'getSaasUsersCount'
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
      name: 'getsaasuserscount',
      description: `Get SaaS Users Count: Get the count of SaaS users. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
