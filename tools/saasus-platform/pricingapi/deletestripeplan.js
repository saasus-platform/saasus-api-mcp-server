/**
 * Delete Product Data from Stripe
 * Delete product data from Stripe.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'delete',
  '/stripe',
  [],
  [],
  {"properties":{},"required":[]},
  'deleteStripePlan'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deletestripeplan',
      description: `Delete Product Data from Stripe: Delete product data from Stripe. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
