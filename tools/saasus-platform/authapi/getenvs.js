/**
 * Get Env Info
 * Get registered environment information.
Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/envs',
  [],
  [],
  {"properties":{},"required":[]},
  'getEnvs'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getenvs',
      description: `Get Env Info: Get registered environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
