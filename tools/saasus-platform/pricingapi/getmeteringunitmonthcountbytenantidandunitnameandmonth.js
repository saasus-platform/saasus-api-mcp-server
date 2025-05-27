/**
 * Get the Metering Unit Count for the Specified Month
 * Gets the metering unit count for the specified month.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'get',
  '/metering/tenants/{tenant_id}/units/{metering_unit_name}/month/{month}',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"},{"name":"metering_unit_name","type":"string","required":true,"description":"Metering Unit Name"},{"name":"month","type":"string","required":true,"description":"Month"}],
  [],
  {"properties":{},"required":[]},
  'getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getmeteringunitmonthcountbytenantidandunitnameandmonth',
      description: `Get the Metering Unit Count for the Specified Month: Gets the metering unit count for the specified month. `,
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
            "month": {
                  "type": "string",
                  "description": "Month"
            }
      },
      "required": [
            "tenant_id",
            "metering_unit_name",
            "month"
      ]
}
    }
  }
};

export { apiTool };
