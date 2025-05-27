/**
 * Update Stripe Connection Info
 * Updates information on connection with external billing SaaS.
Currently possible to connect to Stripe.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/billing',
  'put',
  '/stripe/info',
  [],
  [],
  {"properties":{"secret_key":{"type":"string","description":"secret key","x-description-i18n":{"jpn":"シークレットキー"},"example":"sk_test_09l3shTSTKHYCzzZZsiLl2vA"}},"required":["secret_key"]},
  'updateStripeInfo'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatestripeinfo',
      description: `Update Stripe Connection Info: Updates information on connection with external billing SaaS. Currently possible to connect to Stripe. `,
      parameters: {
      "type": "object",
      "properties": {
            "secret_key": {
                  "type": "string",
                  "description": "secret key"
            }
      },
      "required": [
            "secret_key"
      ]
}
    }
  }
};

export { apiTool };
