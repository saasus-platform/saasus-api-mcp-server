/**
 * Get Pricing Units
 * Gets the smallest unit of measure on which the charges are based.
"Fixed Unit" (type=fixed) is a unit of a monthly fixed charge such as a basic charge,
"Usage Unit" (type=usage) is a unit in which a charge is generated per unit such as billing for the number of users,
"Tiered Unit" (type=tiered) is a fixed charge unit for each tier of usage, such as the tiered packet charge for mobile phones,
"Tiered Usage Unit" (type=tiered_usage) is a unit where the charge per unit changes according to the usage amount, such as a volume discount.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/pricing',
  'get',
  '/units',
  [],
  [],
  {"properties":{},"required":[]},
  'getPricingUnits'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getpricingunits',
      description: `Get Pricing Units: Gets the smallest unit of measure on which the charges are based. "Fixed Unit" (type=fixed) is a unit of a monthly fixed charge such as a basic charge, "Usage Unit" (type=usage) is a unit in which a charge is generated per unit such as billing for the number of users, "Tiered Unit" (type=tiered) is a fixed charge unit for each tier of usage, such as the tiered packet charge for mobile phones, "Tiered Usage Unit" (type=tiered_usage) is a unit where the charge per unit changes according to the usage amount, such as a volume discount. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
