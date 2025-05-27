/**
 * Create Metering Unit
 * Create a metering unit.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'post',
  '/metering/units',
  [],
  [],
  {"properties":{"unit_name":{"type":"string","example":"storage_unit","description":"Metering unit name","x-description-i18n":{"jpn":"計測ユニット名"}},"aggregate_usage":{"type":"string","description":"Aggregate usage\nsum: Total usage during the period\nmax: Maximum usage during the period\n","x-description-i18n":{"jpn":"使用量の集計方法\nsum: 期間内の使用量の合計\nmax: 期間内の使用量の最大値\n"},"enum":["sum","max"]},"display_name":{"type":"string","example":"User Count Meter","description":"Display name","x-description-i18n":{"jpn":"表示名"}},"description":{"type":"string","example":"Number of users count","description":"Description","x-description-i18n":{"jpn":"説明"}}},"required":["unit_name","display_name","description"]},
  'createMeteringUnit'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createmeteringunit',
      description: `Create Metering Unit: Create a metering unit. `,
      parameters: {
      "type": "object",
      "properties": {
            "unit_name": {
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
            "unit_name",
            "display_name",
            "description"
      ]
}
    }
  }
};

export { apiTool };
