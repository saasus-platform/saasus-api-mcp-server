/**
 * Connect to Stripe
 * Connect information to Stripe.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'patch',
  '/stripe/init',
  [],
  [],
  {"properties":{},"required":[]},
  'linkPlanToStripe'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'linkplantostripe',
      description: `Connect to Stripe: Connect information to Stripe. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
