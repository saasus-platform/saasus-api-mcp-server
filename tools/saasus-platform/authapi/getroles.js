/**
 * Get Roles
 * Get registered roles list.
Granting users the roles defined here makes it easy to implement role-based authorization on the SaaS side.
In addition, even the same user can have different roles for each tenant/environment to which they belong.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/roles',
  [],
  [],
  {"properties":{},"required":[]},
  'getRoles'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getroles',
      description: `Get Roles: Get registered roles list. Granting users the roles defined here makes it easy to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
