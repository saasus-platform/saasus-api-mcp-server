/**
 * Obtain metering unit counts for a specified date/time period
 * Obtain metering unit counts for a specified date/time period.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'get',
  '/metering/tenants/{tenant_id}/units/{metering_unit_name}/date-period',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"},{"name":"metering_unit_name","type":"string","required":true,"description":"Metering Unit Name"}],
  [{"name":"start_timestamp","type":"number","required":false,"description":"Start Date-Time"},{"name":"end_timestamp","type":"number","required":false,"description":"End Date-Time"}],
  {"properties":{},"required":[]},
  'getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getmeteringunitdatecountbytenantidandunitnameanddateperiod',
      description: `Obtain metering unit counts for a specified date/time period: Obtain metering unit counts for a specified date/time period. `,
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
            "start_timestamp": {
                  "type": "number",
                  "description": "Start Date-Time"
            },
            "end_timestamp": {
                  "type": "number",
                  "description": "End Date-Time"
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
