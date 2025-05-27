/**
 * Create a Pricing Feature Menu
 * Create a pricing feature menu.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'post',
  '/menus',
  [],
  [],
  {"properties":{"name":{"type":"string","example":"Ten Users Menu","description":"Menu name","x-description-i18n":{"jpn":"メニュー名"}},"display_name":{"type":"string","example":"10ユーザーメニュー","description":"Menu display name","x-description-i18n":{"jpn":"メニュー表示名"}},"description":{"type":"string","example":"Can use 10 users.","description":"Menu description","x-description-i18n":{"jpn":"メニュー説明"}},"unit_ids":{"type":"array","items":{"type":"string","example":"69e732d6-8ecc-45c4-c2eb-8438f7ffe775","description":"Universally Unique Identifier","x-description-i18n":{"jpn":"ユニバーサル一意識別子"}},"description":"Unit IDs to add","x-description-i18n":{"jpn":"追加するユニットID"}}},"required":["name","display_name","description","unit_ids"]},
  'createPricingMenu'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createpricingmenu',
      description: `Create a Pricing Feature Menu: Create a pricing feature menu. `,
      parameters: {
      "type": "object",
      "properties": {
            "name": {
                  "type": "string",
                  "description": "Menu name"
            },
            "display_name": {
                  "type": "string",
                  "description": "Menu display name"
            },
            "description": {
                  "type": "string",
                  "description": "Menu description"
            },
            "unit_ids": {
                  "type": "array",
                  "description": "Unit IDs to add",
                  "items": {
                        "type": "string",
                        "example": "69e732d6-8ecc-45c4-c2eb-8438f7ffe775",
                        "description": "Universally Unique Identifier",
                        "x-description-i18n": {
                              "jpn": "ユニバーサル一意識別子"
                        }
                  }
            }
      },
      "required": [
            "name",
            "display_name",
            "description",
            "unit_ids"
      ]
}
    }
  }
};

export { apiTool };
