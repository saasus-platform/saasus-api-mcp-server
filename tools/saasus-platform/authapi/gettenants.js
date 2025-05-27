/**
 * Get Tenants
 * Get tenants managed by SaaSus Platform.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/tenants',
  [],
  [],
  {"properties":{},"required":[]},
  'getTenants'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'gettenants',
      description: `Get Tenants: Get tenants managed by SaaSus Platform. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
