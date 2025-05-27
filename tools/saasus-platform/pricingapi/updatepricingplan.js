/**
 * Update Pricing Plan
 * Update a pricing plan.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'patch',
  '/plans/{plan_id}',
  [{"name":"plan_id","type":"string","required":true,"description":"Pricing Plan ID"}],
  [],
  {"properties":{"name":{"type":"string","example":"Standard Plan","description":"Pricing plan name","x-description-i18n":{"jpn":"料金プラン名"}},"display_name":{"type":"string","example":"スタンダードプラン","description":"Pricing plan display name","x-description-i18n":{"jpn":"料金プラン表示名"}},"description":{"type":"string","example":"Standard Plan for normal use","description":"Pricing plan description","x-description-i18n":{"jpn":"料金プラン説明"}},"menu_ids":{"type":"array","items":{"type":"string","example":"69e732d6-8ecc-45c4-c2eb-8438f7ffe775","description":"Universally Unique Identifier","x-description-i18n":{"jpn":"ユニバーサル一意識別子"}},"description":"Menu ID to be added to the pricing plan","x-description-i18n":{"jpn":"メニューID（料金プランに追加するメニューID）"}}},"required":["name","display_name","description","menu_ids"]},
  'updatePricingPlan'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatepricingplan',
      description: `Update Pricing Plan: Update a pricing plan. `,
      parameters: {
      "type": "object",
      "properties": {
            "plan_id": {
                  "type": "string",
                  "description": "Pricing Plan ID"
            },
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
            "plan_id",
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
