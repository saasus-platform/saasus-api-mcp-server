/**
 * Get EventBridge Settings
 * Gets the settings for providing real-time status of all monitored hosts via Amazon EventBridge.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/integration',
  'get',
  '/eventbridge/info',
  [],
  [],
  {"properties":{},"required":[]},
  'getEventBridgeSettings'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'geteventbridgesettings',
      description: `Get EventBridge Settings: Gets the settings for providing real-time status of all monitored hosts via Amazon EventBridge. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
