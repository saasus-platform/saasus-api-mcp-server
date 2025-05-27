/**
 * Delete Customer and Product From Stripe
 * Delete customer and product from Stripe.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'delete',
  '/stripe',
  [],
  [],
  {"properties":{},"required":[]},
  'deleteStripeTenantAndPricing'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deletestripetenantandpricing',
      description: `Delete Customer and Product From Stripe: Delete customer and product from Stripe. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
