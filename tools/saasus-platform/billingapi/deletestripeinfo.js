/**
 * Delete Stripe Connection
 * Delete connection with external billing SaaS

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/billing',
  'delete',
  '/stripe/info',
  [],
  [],
  {"properties":{},"required":[]},
  'deleteStripeInfo'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deletestripeinfo',
      description: `Delete Stripe Connection: Delete connection with external billing SaaS `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
