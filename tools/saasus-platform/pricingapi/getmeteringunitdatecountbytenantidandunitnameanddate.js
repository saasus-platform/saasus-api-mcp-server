/**
 * Get Metering Unit Count for Specific Date
 * Gets the metering unit count for a specific date.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'get',
  '/metering/tenants/{tenant_id}/units/{metering_unit_name}/date/{date}',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"},{"name":"metering_unit_name","type":"string","required":true,"description":"Metering Unit Name"},{"name":"date","type":"string","required":true,"description":"Date"}],
  [],
  {"properties":{},"required":[]},
  'getMeteringUnitDateCountByTenantIdAndUnitNameAndDate'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getmeteringunitdatecountbytenantidandunitnameanddate',
      description: `Get Metering Unit Count for Specific Date: Gets the metering unit count for a specific date. `,
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
            "date": {
                  "type": "string",
                  "description": "Date"
            }
      },
      "required": [
            "tenant_id",
            "metering_unit_name",
            "date"
      ]
}
    }
  }
};

export { apiTool };
