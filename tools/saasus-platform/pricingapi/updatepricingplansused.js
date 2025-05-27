/**
 * Update Used Flag
 * Update price plan and feature menu/pricing unit to used.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'patch',
  '/plans/used',
  [],
  [],
  {"properties":{"plan_ids":{"type":"array","items":{"type":"string","example":"69e732d6-8ecc-45c4-c2eb-8438f7ffe775","description":"Universally Unique Identifier","x-description-i18n":{"jpn":"ユニバーサル一意識別子"}}}},"required":["plan_ids"]},
  'updatePricingPlansUsed'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatepricingplansused',
      description: `Update Used Flag: Update price plan and feature menu/pricing unit to used. `,
      parameters: {
      "type": "object",
      "properties": {
            "plan_ids": {
                  "type": "array",
                  "description": "",
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
            "plan_ids"
      ]
}
    }
  }
};

export { apiTool };
