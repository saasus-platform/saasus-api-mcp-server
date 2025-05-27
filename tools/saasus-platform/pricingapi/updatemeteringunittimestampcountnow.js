/**
 * Update Metering Unit Count for Current Time
 * Update the metering unit count for the current time.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'put',
  '/metering/tenants/{tenant_id}/units/{metering_unit_name}/now',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"},{"name":"metering_unit_name","type":"string","required":true,"description":"Metering Unit Name"}],
  [],
  {"properties":{"method":{"title":"Metering Unit Count Update Method","x-title-i18n":{"jpn":"メータリングユニットカウント更新方法"},"type":"string","enum":["add","sub","direct"],"example":"add","description":"Update method\nadd: Addition\nsub: Subtraction\ndirect: Overwrite\n","x-description-i18n":{"jpn":"更新方法\nadd: 加算\nsub: 減算\ndirect: 上書き\n"}},"count":{"type":"integer","example":10000,"description":"Count","x-description-i18n":{"jpn":"件数"}}},"required":["method","count"]},
  'updateMeteringUnitTimestampCountNow'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatemeteringunittimestampcountnow',
      description: `Update Metering Unit Count for Current Time: Update the metering unit count for the current time. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": "Tenant ID"
            },
            "metering_unit_name": {
                  "type": "string",
                  "description": "Metering Unit Name"
            },
            "method": {
                  "type": "string",
                  "description": "Update method\nadd: Addition\nsub: Subtraction\ndirect: Overwrite\n",
                  "enum": [
                        "add",
                        "sub",
                        "direct"
                  ]
            },
            "count": {
                  "type": "number",
                  "description": "Count"
            }
      },
      "required": [
            "tenant_id",
            "metering_unit_name",
            "method",
            "count"
      ]
}
    }
  }
};

export { apiTool };
