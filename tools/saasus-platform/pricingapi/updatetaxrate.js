/**
 * Update Tax Rate
 * Update tax rate.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'patch',
  '/tax-rates/{tax_rate_id}',
  [{"name":"tax_rate_id","type":"string","required":true,"description":"Tax Rate ID"}],
  [],
  {"properties":{"display_name":{"type":"string","example":"消費税(外税)","description":"Display name","x-description-i18n":{"jpn":"表示名"}},"description":{"type":"string","example":"SaaSusとの連携用の税率","description":"Description","x-description-i18n":{"jpn":"説明"}}},"required":["display_name","description"]},
  'updateTaxRate'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatetaxrate',
      description: `Update Tax Rate: Update tax rate. `,
      parameters: {
      "type": "object",
      "properties": {
            "tax_rate_id": {
                  "type": "string",
                  "description": "Tax Rate ID"
            },
            "display_name": {
                  "type": "string",
                  "description": "Display name"
            },
            "description": {
                  "type": "string",
                  "description": "Description"
            }
      },
      "required": [
            "tax_rate_id",
            "display_name",
            "description"
      ]
}
    }
  }
};

export { apiTool };
