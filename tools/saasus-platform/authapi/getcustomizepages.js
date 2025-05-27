/**
 * Get Authentication Page Setting
 * Get the authentication screen setting information (new registration, login, password reset, etc.).

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/customize-pages',
  [],
  [],
  {"properties":{},"required":[]},
  'getCustomizePages'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getcustomizepages',
      description: `Get Authentication Page Setting: Get the authentication screen setting information (new registration, login, password reset, etc.). `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
