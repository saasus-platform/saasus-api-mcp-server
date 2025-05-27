/**
 * Get Metering Unit Count for the Current Month
 * Get the metering unit count for the current month.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'get',
  '/metering/tenants/{tenant_id}/units/{metering_unit_name}/thismonth',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"},{"name":"metering_unit_name","type":"string","required":true,"description":"Metering Unit Name"}],
  [],
  {"properties":{},"required":[]},
  'getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getmeteringunitmonthcountbytenantidandunitnamethismonth',
      description: `Get Metering Unit Count for the Current Month: Get the metering unit count for the current month. `,
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
            }
      },
      "required": [
            "tenant_id",
            "metering_unit_name"
      ]
}
    }
  }
};

export { apiTool };
