/**
 * Delete EventBridge Settings
 * Delete settings used to provide host state via Amazon EventBridge.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/integration',
  'delete',
  '/eventbridge/info',
  [],
  [],
  {"properties":{},"required":[]},
  'deleteEventBridgeSettings'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deleteeventbridgesettings',
      description: `Delete EventBridge Settings: Delete settings used to provide host state via Amazon EventBridge. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
