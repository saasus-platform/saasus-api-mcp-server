/**
 * Delete all Plans, Menus, Units, Meters and Tax Rates
 * Unconditionally remove all rate plans, menus, units, meters and tax rates.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'delete',
  '/plans-initialization',
  [],
  [],
  {"properties":{},"required":[]},
  'deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deleteallplansandmenusandunitsandmetersandtaxrates',
      description: `Delete all Plans, Menus, Units, Meters and Tax Rates: Unconditionally remove all rate plans, menus, units, meters and tax rates. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
