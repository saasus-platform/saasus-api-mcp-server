/**
 * Get Pricing Unit
 * Get a pricing unit.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'get',
  '/units/{pricing_unit_id}',
  [{"name":"pricing_unit_id","type":"string","required":true,"description":"Unit ID"}],
  [],
  {"properties":{},"required":[]},
  'getPricingUnit'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getpricingunit',
      description: `Get Pricing Unit: Get a pricing unit. `,
      parameters: {
      "type": "object",
      "properties": {
            "pricing_unit_id": {
                  "type": "string",
                  "description": "Unit ID"
            }
      },
      "required": [
            "pricing_unit_id"
      ]
}
    }
  }
};

export { apiTool };
