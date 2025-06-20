/**
 * Retrieve the settings of the single tenant.
 * 
 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/single-tenant/settings',
  [],
  [],
  {"properties":{},"required":[]},
  'getSingleTenantSettings'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getsingletenantsettings',
      description: `Retrieve the settings of the single tenant.`,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
