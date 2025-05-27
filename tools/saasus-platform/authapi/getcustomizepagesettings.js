/**
 * Get Authentication Authorization Basic Information
 * Get authentication authorization basic information.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/customize-page-settings',
  [],
  [],
  {"properties":{},"required":[]},
  'getCustomizePageSettings'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getcustomizepagesettings',
      description: `Get Authentication Authorization Basic Information: Get authentication authorization basic information. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
