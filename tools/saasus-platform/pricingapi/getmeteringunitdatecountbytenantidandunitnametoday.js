/**
 * Get Metering Unit Count for the Current Day
 * Get the metering unit count for the current day.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'get',
  '/metering/tenants/{tenant_id}/units/{metering_unit_name}/today',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"},{"name":"metering_unit_name","type":"string","required":true,"description":"Metering Unit Name"}],
  [],
  {"properties":{},"required":[]},
  'getMeteringUnitDateCountByTenantIdAndUnitNameToday'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getmeteringunitdatecountbytenantidandunitnametoday',
      description: `Get Metering Unit Count for the Current Day: Get the metering unit count for the current day. `,
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
