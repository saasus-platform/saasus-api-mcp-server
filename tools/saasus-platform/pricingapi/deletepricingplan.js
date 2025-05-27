/**
 * Delete Pricing Plan
 * Delete a pricing plan.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'delete',
  '/plans/{plan_id}',
  [{"name":"plan_id","type":"string","required":true,"description":"Pricing Plan ID"}],
  [],
  {"properties":{},"required":[]},
  'deletePricingPlan'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deletepricingplan',
      description: `Delete Pricing Plan: Delete a pricing plan. `,
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
