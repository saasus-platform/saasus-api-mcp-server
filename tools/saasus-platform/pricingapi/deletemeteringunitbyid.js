/**
 * Delete Metering Unit
 * Delete metering unit.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'delete',
  '/metering/units/{metering_unit_id}',
  [{"name":"metering_unit_id","type":"string","required":true,"description":"Metering Unit ID"}],
  [],
  {"properties":{},"required":[]},
  'deleteMeteringUnitByID'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deletemeteringunitbyid',
      description: `Delete Metering Unit: Delete metering unit. `,
      parameters: {
      "type": "object",
      "properties": {
            "metering_unit_id": {
                  "type": "string",
                  "description": "Metering Unit ID"
            }
      },
      "required": [
            "metering_unit_id"
      ]
}
    }
  }
};

export { apiTool };
