/**
 * Get Stripe Customer
 * Get the Stripe Customer information associated with the tenant, including their subscriptions.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/tenants/{tenant_id}/stripe-customer',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"}],
  [],
  {"properties":{},"required":[]},
  'getStripeCustomer'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getstripecustomer',
      description: `Get Stripe Customer: Get the Stripe Customer information associated with the tenant, including their subscriptions. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": "Tenant ID"
            }
      },
      "required": [
            "tenant_id"
      ]
}
    }
  }
};

export { apiTool };
