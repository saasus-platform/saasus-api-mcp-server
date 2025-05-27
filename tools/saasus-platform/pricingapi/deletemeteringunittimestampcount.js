/**
 * Delete Metering Unit Count for Specified Timestamp
 * Deletes metering unit count for the specified timestamp.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'delete',
  '/metering/tenants/{tenant_id}/units/{metering_unit_name}/timestamp/{timestamp}',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"},{"name":"metering_unit_name","type":"string","required":true,"description":"Metering Unit Name"},{"name":"timestamp","type":"number","required":true,"description":"Timestamp"}],
  [],
  {"properties":{},"required":[]},
  'deleteMeteringUnitTimestampCount'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deletemeteringunittimestampcount',
      description: `Delete Metering Unit Count for Specified Timestamp: Deletes metering unit count for the specified timestamp. `,
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
            "timestamp": {
                  "type": "number",
                  "description": "Timestamp"
            }
      },
      "required": [
            "tenant_id",
            "metering_unit_name",
            "timestamp"
      ]
}
    }
  }
};

export { apiTool };
