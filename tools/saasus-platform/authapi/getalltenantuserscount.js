/**
 * Get Tenant Users Count
 * Get the count of tenant users for each tenant.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/tenants/all/users/count',
  [],
  [],
  {"properties":{},"required":[]},
  'getAllTenantUsersCount'
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
      name: 'getalltenantuserscount',
      description: `Get Tenant Users Count: Get the count of tenant users for each tenant. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
