/**
 * Get Users
 * Get all users belonging to the tenant.
The same user belonging to multiple tenants will be returned as a different object.
Id is not unique.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/tenants/all/users',
  [],
  [],
  {"properties":{},"required":[]},
  'getAllTenantUsers'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getalltenantusers',
      description: `Get Users: Get all users belonging to the tenant. The same user belonging to multiple tenants will be returned as a different object. Id is not unique. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
