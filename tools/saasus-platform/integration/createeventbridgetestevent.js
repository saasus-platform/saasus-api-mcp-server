/**
 * Test EventBridge Connection
 * Send events to test the connection with Amazon EventBridge.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/integration',
  'post',
  '/eventbridge/test-event',
  [],
  [],
  {"properties":{},"required":[]},
  'createEventBridgeTestEvent'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createeventbridgetestevent',
      description: `Test EventBridge Connection: Send events to test the connection with Amazon EventBridge. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
