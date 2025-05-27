/**
 * Get AWS Marketplace Settings
 * Get AWS Marketplace Settings.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/awsmarketplace',
  'get',
  '/settings',
  [],
  [],
  {"properties":{},"required":[]},
  'getSettings'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getsettings',
      description: `Get AWS Marketplace Settings: Get AWS Marketplace Settings. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
