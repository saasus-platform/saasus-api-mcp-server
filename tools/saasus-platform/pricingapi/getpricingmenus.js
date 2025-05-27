/**
 * Get Pricing Feature Menus
 * Get the feature menu list. Multiple measurement units are grouped together and defined as one feature menu. Multiple feature menus defined here are combined into one billing plan.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'get',
  '/menus',
  [],
  [],
  {"properties":{},"required":[]},
  'getPricingMenus'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getpricingmenus',
      description: `Get Pricing Feature Menus: Get the feature menu list. Multiple measurement units are grouped together and defined as one feature menu. Multiple feature menus defined here are combined into one billing plan. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
