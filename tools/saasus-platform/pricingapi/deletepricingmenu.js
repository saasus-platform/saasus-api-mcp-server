/**
 * Delete Pricing Feature Menu
 * Delete pricing feature menu.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'delete',
  '/menus/{menu_id}',
  [{"name":"menu_id","type":"string","required":true,"description":"Menu ID"}],
  [],
  {"properties":{},"required":[]},
  'deletePricingMenu'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deletepricingmenu',
      description: `Delete Pricing Feature Menu: Delete pricing feature menu. `,
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
