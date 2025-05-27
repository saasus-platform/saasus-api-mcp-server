/**
 * Get Pricing Plan
 * Get a pricing plan.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'get',
  '/plans/{plan_id}',
  [{"name":"plan_id","type":"string","required":true,"description":"Pricing Plan ID"}],
  [],
  {"properties":{},"required":[]},
  'getPricingPlan'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getpricingplan',
      description: `Get Pricing Plan: Get a pricing plan. `,
      parameters: {
      "type": "object",
      "properties": {
            "plan_id": {
                  "type": "string",
                  "description": "Pricing Plan ID"
            }
      },
      "required": [
            "plan_id"
      ]
}
    }
  }
};

export { apiTool };
