/**
 * Create Tax Rate
 * Creates a tax rate.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'post',
  '/tax-rates',
  [],
  [],
  {"properties":{"name":{"type":"string","example":"japanese_consumption_tax_inclusive","description":"Name of tax rate","x-description-i18n":{"jpn":"税率の名前"}},"display_name":{"type":"string","example":"消費税(外税)","description":"Display name","x-description-i18n":{"jpn":"表示名"}},"percentage":{"type":"number","x-go-type":"float64","example":10,"description":"Percentage","x-description-i18n":{"jpn":"税率"}},"inclusive":{"type":"boolean","example":false,"description":"Inclusive or not","x-description-i18n":{"jpn":"内税かどうか"}},"country":{"type":"string","pattern":"^[A-Z]{2}$","example":"JP","description":"Country code of ISO 3166-1 alpha-2","x-description-i18n":{"jpn":"ISO 3166-1 alpha-2 の国コード"}},"description":{"type":"string","example":"SaaSusとの連携用の税率","description":"Description","x-description-i18n":{"jpn":"説明"}}},"required":["name","display_name","percentage","inclusive","country","description"]},
  'createTaxRate'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createtaxrate',
      description: `Create Tax Rate: Creates a tax rate. `,
      parameters: {
      "type": "object",
      "properties": {
            "name": {
                  "type": "string",
                  "description": "Name of tax rate"
            },
            "display_name": {
                  "type": "string",
                  "description": "Display name"
            },
            "percentage": {
                  "type": "number",
                  "description": "Percentage"
            },
            "inclusive": {
                  "type": "boolean",
                  "description": "Inclusive or not"
            },
            "country": {
                  "type": "string",
                  "description": "Country code of ISO 3166-1 alpha-2"
            },
            "description": {
                  "type": "string",
                  "description": "Description"
            }
      },
      "required": [
            "name",
            "display_name",
            "percentage",
            "inclusive",
            "country",
            "description"
      ]
}
    }
  }
};

export { apiTool };
