/**
 * Get All Metering Unit Counts for the Specified Month
 * Gets all metering unit counts for the specified month.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'get',
  '/metering/tenants/{tenant_id}/units/month/{month}',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"},{"name":"month","type":"string","required":true,"description":"Month"}],
  [],
  {"properties":{},"required":[]},
  'getMeteringUnitMonthCountsByTenantIdAndMonth'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getmeteringunitmonthcountsbytenantidandmonth',
      description: `Get All Metering Unit Counts for the Specified Month: Gets all metering unit counts for the specified month. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": "Tenant ID"
            },
            "month": {
                  "type": "string",
                  "description": "Month"
            }
      },
      "required": [
            "tenant_id",
            "month"
      ]
}
    }
  }
};

export { apiTool };
