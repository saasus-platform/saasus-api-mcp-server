/**
 * Create Pricing Unit
 * Create a pricing unit.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'post',
  '/units',
  [],
  [],
  {"properties":{"upper_count":{"type":"integer","x-go-type":"uint64","example":100,"description":"Upper limit","x-description-i18n":{"jpn":"上限値"}},"metering_unit_name":{"type":"string","example":"test_unit","description":"Metering unit name","x-description-i18n":{"jpn":"計測ユニット名"}},"aggregate_usage":{"type":"string","description":"Aggregate usage\nsum: Total usage during the period\nmax: Maximum usage during the period\n","x-description-i18n":{"jpn":"使用量の集計方法\nsum: 期間内の使用量の合計\nmax: 期間内の使用量の最大値\n"},"enum":["sum","max"]},"name":{"type":"string","example":"storage_unit","description":"Name","x-description-i18n":{"jpn":"名前"}},"display_name":{"type":"string","example":"ストレージユニット","description":"Display Name","x-description-i18n":{"jpn":"表示名"}},"description":{"type":"string","example":"KB unit for storage usage","description":"Description","x-description-i18n":{"jpn":"説明"}},"type":{"type":"string","description":"Unit of measurement type\nfixed: Fixed unit\nusage: Usage unit\ntiered: Tiered unit\ntiered_usage: Tiered usage unit\n","x-description-i18n":{"jpn":"計測単位の種別\nfixed: 固定ユニット\nusage: 使用量ユニット\ntiered: 段階ユニット\ntiered_usage: 段階的使用量ユニット\n"},"enum":["fixed","usage","tiered","tiered_usage"]},"currency":{"type":"string","description":"Unit of currency","x-description-i18n":{"jpn":"計測単位の通貨"},"enum":["JPY","USD"]},"tiers":{"type":"array","items":{"title":"Pricing Tier Info","x-title-i18n":{"jpn":"従量課金情報"},"type":"object","properties":{"up_to":{"type":"integer","x-go-type":"uint64","example":5,"description":"Upper limit","x-description-i18n":{"jpn":"上限"}},"unit_amount":{"type":"integer","x-go-type":"uint64","example":1000,"description":"Amount per unit","x-description-i18n":{"jpn":"単位金額"}},"flat_amount":{"type":"integer","x-go-type":"uint64","example":500,"description":"Fixed amount","x-description-i18n":{"jpn":"固定金額"}},"inf":{"type":"boolean","description":"Indefinite","x-description-i18n":{"jpn":"無限"}}},"required":["up_to","unit_amount","flat_amount","inf"]}}},"required":["upper_count","metering_unit_name","name","display_name","description","type","currency","tiers"]},
  'createPricingUnit'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createpricingunit',
      description: `Create Pricing Unit: Create a pricing unit. `,
      parameters: {
      "type": "object",
      "properties": {
            "upper_count": {
                  "type": "number",
                  "description": "Upper limit"
            },
            "metering_unit_name": {
                  "type": "string",
                  "description": "Metering unit name"
            },
            "aggregate_usage": {
                  "type": "string",
                  "description": "Aggregate usage\nsum: Total usage during the period\nmax: Maximum usage during the period\n",
                  "enum": [
                        "sum",
                        "max"
                  ]
            },
            "name": {
                  "type": "string",
                  "description": "Name"
            },
            "display_name": {
                  "type": "string",
                  "description": "Display Name"
            },
            "description": {
                  "type": "string",
                  "description": "Description"
            },
            "type": {
                  "type": "string",
                  "description": "Unit of measurement type\nfixed: Fixed unit\nusage: Usage unit\ntiered: Tiered unit\ntiered_usage: Tiered usage unit\n",
                  "enum": [
                        "fixed",
                        "usage",
                        "tiered",
                        "tiered_usage"
                  ]
            },
            "currency": {
                  "type": "string",
                  "description": "Unit of currency",
                  "enum": [
                        "JPY",
                        "USD"
                  ]
            },
            "tiers": {
                  "type": "array",
                  "description": "",
                  "items": {
                        "title": "Pricing Tier Info",
                        "x-title-i18n": {
                              "jpn": "従量課金情報"
                        },
                        "type": "object",
                        "properties": {
                              "up_to": {
                                    "type": "integer",
                                    "x-go-type": "uint64",
                                    "example": 5,
                                    "description": "Upper limit",
                                    "x-description-i18n": {
                                          "jpn": "上限"
                                    }
                              },
                              "unit_amount": {
                                    "type": "integer",
                                    "x-go-type": "uint64",
                                    "example": 1000,
                                    "description": "Amount per unit",
                                    "x-description-i18n": {
                                          "jpn": "単位金額"
                                    }
                              },
                              "flat_amount": {
                                    "type": "integer",
                                    "x-go-type": "uint64",
                                    "example": 500,
                                    "description": "Fixed amount",
                                    "x-description-i18n": {
                                          "jpn": "固定金額"
                                    }
                              },
                              "inf": {
                                    "type": "boolean",
                                    "description": "Indefinite",
                                    "x-description-i18n": {
                                          "jpn": "無限"
                                    }
                              }
                        },
                        "required": [
                              "up_to",
                              "unit_amount",
                              "flat_amount",
                              "inf"
                        ]
                  }
            }
      },
      "required": [
            "upper_count",
            "metering_unit_name",
            "name",
            "display_name",
            "description",
            "type",
            "currency",
            "tiers"
      ]
}
    }
  }
};

export { apiTool };
