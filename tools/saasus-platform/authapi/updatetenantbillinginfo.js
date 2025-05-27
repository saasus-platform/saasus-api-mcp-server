/**
 * Update Tenant Billing Information
 * Update SaaSus Platform tenant billing information.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'put',
  '/tenants/{tenant_id}/billing-info',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"}],
  [],
  {"properties":{"name":{"type":"string","description":"Tenant name for billing","x-description-i18n":{"jpn":"請求用のテナント名"},"example":"株式会社テストテナント"},"address":{"title":"Tenant Billing Address","x-title-i18n":{"jpn":"テナントの請求先住所"},"properties":{"street":{"type":"string","description":"Street address, apartment or suite number.","x-description-i18n":{"jpn":"住所の通りの名前や番地を含めた部分"},"example":"神宮前1-1-1"},"city":{"type":"string","description":"City, district, suburb, town, or village.","x-description-i18n":{"jpn":"住所の市区町村"},"example":"渋谷区"},"state":{"type":"string","description":"State name or abbreviation.","x-description-i18n":{"jpn":"住所の都道府県または州"},"example":"東京都"},"country":{"type":"string","pattern":"^[A-Z]{2}$","description":"Country of the address using ISO 3166-1 alpha-2 code.","x-description-i18n":{"jpn":"住所の国を ISO 3166-1 alpha-2 コードで指定します。"},"example":"JP"},"additional_address_info":{"type":"string","description":"Additional information about the address, such as a building name, floor, or department name.","x-description-i18n":{"jpn":"建物名・部屋番号などの住所に関する追加情報"},"example":"オフィスビル3階"},"postal_code":{"type":"string","description":"ZIP or postal code.","x-description-i18n":{"jpn":"郵便番号"},"example":"123-4567"}},"required":["street","city","state","country","postal_code"]},"invoice_language":{"type":"string","description":"Language of invoice","x-description-i18n":{"jpn":"請求書の言語"},"enum":["ja-JP","en-US"]}},"required":["name","address","invoice_language"]},
  'updateTenantBillingInfo'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatetenantbillinginfo',
      description: `Update Tenant Billing Information: Update SaaSus Platform tenant billing information. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": "Tenant ID"
            },
            "name": {
                  "type": "string",
                  "description": "Tenant name for billing"
            },
            "address": {
                  "type": "string",
                  "description": ""
            },
            "invoice_language": {
                  "type": "string",
                  "description": "Language of invoice",
                  "enum": [
                        "ja-JP",
                        "en-US"
                  ]
            }
      },
      "required": [
            "tenant_id",
            "name",
            "address",
            "invoice_language"
      ]
}
    }
  }
};

export { apiTool };
