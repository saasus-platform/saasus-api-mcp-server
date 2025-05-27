/**
 * Stripe Initial Setting
 * Set Stripe initial information via billing

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'patch',
  '/stripe/init',
  [],
  [],
  {"properties":{},"required":[]},
  'createTenantAndPricing'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createtenantandpricing',
      description: `Stripe Initial Setting: Set Stripe initial information via billing `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
