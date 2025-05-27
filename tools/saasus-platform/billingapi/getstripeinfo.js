/**
 * Get Stripe Connection information
 * Get information on connnections with external billing SaaS.
Currently possible to integrate with Stripe.
Without integration, you will need to implement billing using the SaaSus SDK/API.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/billing',
  'get',
  '/stripe/info',
  [],
  [],
  {"properties":{},"required":[]},
  'getStripeInfo'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getstripeinfo',
      description: `Get Stripe Connection information: Get information on connnections with external billing SaaS. Currently possible to integrate with Stripe. Without integration, you will need to implement billing using the SaaSus SDK/API. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
