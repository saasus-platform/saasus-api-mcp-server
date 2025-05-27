/**
 * Get Pricing Feature Menu
 * Get a pricing feature menu.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'get',
  '/menus/{menu_id}',
  [{"name":"menu_id","type":"string","required":true,"description":"Menu ID"}],
  [],
  {"properties":{},"required":[]},
  'getPricingMenu'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getpricingmenu',
      description: `Get Pricing Feature Menu: Get a pricing feature menu. `,
      parameters: {
      "type": "object",
      "properties": {
            "menu_id": {
                  "type": "string",
                  "description": "Menu ID"
            }
      },
      "required": [
            "menu_id"
      ]
}
    }
  }
};

export { apiTool };
