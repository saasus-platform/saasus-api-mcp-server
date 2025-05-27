/**
 * Create Pricing Plan
 * Create a pricing plan.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'post',
  '/plans',
  [],
  [],
  {"properties":{"name":{"type":"string","example":"Standard Plan","description":"Pricing plan name","x-description-i18n":{"jpn":"料金プラン名"}},"display_name":{"type":"string","example":"スタンダードプラン","description":"Pricing plan display name","x-description-i18n":{"jpn":"料金プラン表示名"}},"description":{"type":"string","example":"Standard Plan for normal use","description":"Pricing plan description","x-description-i18n":{"jpn":"料金プラン説明"}},"menu_ids":{"type":"array","items":{"type":"string","example":"69e732d6-8ecc-45c4-c2eb-8438f7ffe775","description":"Universally Unique Identifier","x-description-i18n":{"jpn":"ユニバーサル一意識別子"}},"description":"Menu ID to be added to the pricing plan","x-description-i18n":{"jpn":"メニューID（料金プランに追加するメニューID）"}}},"required":["name","display_name","description","menu_ids"]},
  'createPricingPlan'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createpricingplan',
      description: `Create Pricing Plan: Create a pricing plan. `,
      parameters: {
      "type": "object",
      "properties": {
            "name": {
                  "type": "string",
                  "description": "Pricing plan name"
            },
            "display_name": {
                  "type": "string",
                  "description": "Pricing plan display name"
            },
            "description": {
                  "type": "string",
                  "description": "Pricing plan description"
            },
            "menu_ids": {
                  "type": "array",
                  "description": "Menu ID to be added to the pricing plan",
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
            "menu_ids"
      ]
}
    }
  }
};

export { apiTool };
