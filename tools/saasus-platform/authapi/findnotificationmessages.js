/**
 * Get Notification Email Templates
 * Get notification email templates.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/notification-messages',
  [],
  [],
  {"properties":{},"required":[]},
  'findNotificationMessages'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'findnotificationmessages',
      description: `Get Notification Email Templates: Get notification email templates. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
