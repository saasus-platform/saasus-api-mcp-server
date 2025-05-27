/**
 * Get All Metering Unit Counts for a Specified Date
 * Gets the total metering unit count for the specified date.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'get',
  '/metering/tenants/{tenant_id}/units/date/{date}',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"},{"name":"date","type":"string","required":true,"description":"Date"}],
  [],
  {"properties":{},"required":[]},
  'getMeteringUnitDateCountsByTenantIdAndDate'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getmeteringunitdatecountsbytenantidanddate',
      description: `Get All Metering Unit Counts for a Specified Date: Gets the total metering unit count for the specified date. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": "Tenant ID"
            },
            "date": {
                  "type": "string",
                  "description": "Date"
            }
      },
      "required": [
            "tenant_id",
            "date"
      ]
}
    }
  }
};

export { apiTool };
