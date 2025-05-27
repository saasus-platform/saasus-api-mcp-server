/**
 * Get Tax Rates
 * Get all Tax Rates

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'get',
  '/tax-rates',
  [],
  [],
  {"properties":{},"required":[]},
  'getTaxRates'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'gettaxrates',
      description: `Get Tax Rates: Get all Tax Rates `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
