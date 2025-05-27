/**
 * Get all metering units
 * Get all metering units.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'get',
  '/metering/units',
  [],
  [],
  {"properties":{},"required":[]},
  'getMeteringUnits'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getmeteringunits',
      description: `Get all metering units: Get all metering units. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
