/**
 * Get Pricing Plans
 * Get pricing plans. Multiple feature menus are grouped together and defined as one pricing plan. Each tenant can choose a pricing plan defined here. If you have a specific tenant-specific rate (private pricing), create and connect the pricing plan specifically for that tenant.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'get',
  '/plans',
  [],
  [],
  {"properties":{},"required":[]},
  'getPricingPlans'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getpricingplans',
      description: `Get Pricing Plans: Get pricing plans. Multiple feature menus are grouped together and defined as one pricing plan. Each tenant can choose a pricing plan defined here. If you have a specific tenant-specific rate (private pricing), create and connect the pricing plan specifically for that tenant. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
