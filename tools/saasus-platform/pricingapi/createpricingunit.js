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
  {"properties":{"type":{"type":"string","description":"Type discriminator. Possible values: tiered_usage, tiered, usage, fixed","enum":["tiered_usage","tiered","usage","fixed"]},"upper_count":{"type":"integer","x-go-type":"uint64","example":100,"description":"Upper limit (Used in: tiered_usage, tiered, usage) [Required for: tiered_usage, tiered, usage]","x-description-i18n":{"jpn":"上限値"}},"metering_unit_name":{"type":"string","example":"test_unit","description":"Metering unit name (Used in: tiered_usage, tiered, usage) [Required for: tiered_usage, tiered, usage]","x-description-i18n":{"jpn":"計測ユニット名"}},"aggregate_usage":{"type":"string","description":"Aggregate usage\nsum: Total usage during the period\nmax: Maximum usage during the period\n (Used in: tiered_usage, tiered, usage)","x-description-i18n":{"jpn":"使用量の集計方法\nsum: 期間内の使用量の合計\nmax: 期間内の使用量の最大値\n"},"enum":["sum","max"]},"name":{"type":"string","example":"storage_unit","description":"Name (Used in: tiered_usage) [Required for: tiered_usage]","x-description-i18n":{"jpn":"名前"}},"display_name":{"type":"string","example":"ストレージユニット","description":"Display Name (Used in: tiered_usage) [Required for: tiered_usage]","x-description-i18n":{"jpn":"表示名"}},"description":{"type":"string","example":"KB unit for storage usage","description":"Description (Used in: tiered_usage) [Required for: tiered_usage]","x-description-i18n":{"jpn":"説明"}},"currency":{"type":"string","description":"Unit of currency (Used in: tiered_usage) [Required for: tiered_usage]","x-description-i18n":{"jpn":"計測単位の通貨"},"enum":["JPY","USD"]},"tiers":{"type":"array","items":{"title":"Pricing Tier Info","x-title-i18n":{"jpn":"従量課金情報"},"type":"object","properties":{"up_to":{"type":"integer","x-go-type":"uint64","example":5,"description":"Upper limit","x-description-i18n":{"jpn":"上限"}},"unit_amount":{"type":"integer","x-go-type":"uint64","example":1000,"description":"Amount per unit","x-description-i18n":{"jpn":"単位金額"}},"flat_amount":{"type":"integer","x-go-type":"uint64","example":500,"description":"Fixed amount","x-description-i18n":{"jpn":"固定金額"}},"inf":{"type":"boolean","description":"Indefinite","x-description-i18n":{"jpn":"無限"}}},"required":["up_to","unit_amount","flat_amount","inf"]},"description":"(Used in: tiered_usage) [Required for: tiered_usage]"},"unit_amount":{"type":"integer","x-go-type":"uint64","example":10000,"description":"Amount per usage (Used in: usage, fixed) [Required for: usage, fixed]","x-description-i18n":{"jpn":"使用量あたりの金額"}},"recurring_interval":{"type":"string","description":"Cycle\nmonth: Monthly\nyear: Yearly\n (Used in: fixed) [Required for: fixed]","x-description-i18n":{"jpn":"繰り返し期間\nmonth: 月単位\nyear: 年単位\n"},"enum":["month","year"]}},"required":["type"],"variantRequiredFields":{}},
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
      description: `Create Pricing Unit: Create a pricing unit. \n\nRequired fields by type:\n- tiered_usage: upper_count, metering_unit_name, name, display_name, description, type, currency, tiers\n- tiered: upper_count, metering_unit_name, type, name, display_name, description, currency\n- usage: upper_count, unit_amount, metering_unit_name, type, name, display_name, description, currency\n- fixed: unit_amount, recurring_interval, type, name, display_name, description, currency`,
      parameters: {
      "type": "object",
      "properties": {
            "type": {
                  "type": "string",
                  "description": "Type discriminator. Possible values: tiered_usage, tiered, usage, fixed",
                  "enum": [
                        "tiered_usage",
                        "tiered",
                        "usage",
                        "fixed"
                  ]
            },
            "upper_count": {
                  "type": "number",
                  "description": "Upper limit (Used in: tiered_usage, tiered, usage) [Required for: tiered_usage, tiered, usage]"
            },
            "metering_unit_name": {
                  "type": "string",
                  "description": "Metering unit name (Used in: tiered_usage, tiered, usage) [Required for: tiered_usage, tiered, usage]"
            },
            "aggregate_usage": {
                  "type": "string",
                  "description": "Aggregate usage\nsum: Total usage during the period\nmax: Maximum usage during the period\n (Used in: tiered_usage, tiered, usage)",
                  "enum": [
                        "sum",
                        "max"
                  ]
            },
            "name": {
                  "type": "string",
                  "description": "Name (Used in: tiered_usage) [Required for: tiered_usage]"
            },
            "display_name": {
                  "type": "string",
                  "description": "Display Name (Used in: tiered_usage) [Required for: tiered_usage]"
            },
            "description": {
                  "type": "string",
                  "description": "Description (Used in: tiered_usage) [Required for: tiered_usage]"
            },
            "currency": {
                  "type": "string",
                  "description": "Unit of currency (Used in: tiered_usage) [Required for: tiered_usage]",
                  "enum": [
                        "JPY",
                        "USD"
                  ]
            },
            "tiers": {
                  "type": "array",
                  "description": "(Used in: tiered_usage) [Required for: tiered_usage]",
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
            },
            "unit_amount": {
                  "type": "number",
                  "description": "Amount per usage (Used in: usage, fixed) [Required for: usage, fixed]"
            },
            "recurring_interval": {
                  "type": "string",
                  "description": "Cycle\nmonth: Monthly\nyear: Yearly\n (Used in: fixed) [Required for: fixed]",
                  "enum": [
                        "month",
                        "year"
                  ]
            }
      },
      "required": [
            "type"
      ],
      "variantRequiredFields": {
            "tiered_usage": [
                  "upper_count",
                  "metering_unit_name",
                  "name",
                  "display_name",
                  "description",
                  "type",
                  "currency",
                  "tiers"
            ],
            "tiered": [
                  "upper_count",
                  "metering_unit_name",
                  "type",
                  "name",
                  "display_name",
                  "description",
                  "currency"
            ],
            "usage": [
                  "upper_count",
                  "unit_amount",
                  "metering_unit_name",
                  "type",
                  "name",
                  "display_name",
                  "description",
                  "currency"
            ],
            "fixed": [
                  "unit_amount",
                  "recurring_interval",
                  "type",
                  "name",
                  "display_name",
                  "description",
                  "currency"
            ]
      }
}
    }
  }
};

export { apiTool };
