/**
 * Save plan information to be linked to AWSMarketplace
 * Save plan information to be linked to AWSMarketplace.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/awsmarketplace',
  'put',
  '/plans',
  [],
  [],
  {"properties":{"plan_id":{"type":"string","example":"69e732d6-8ecc-45c4-c2eb-8438f7ffe775"},"plan_name":{"type":"string","example":"normal_plan_name_month"}},"required":["plan_id","plan_name"]},
  'savePlan'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'saveplan',
      description: `Save plan information to be linked to AWSMarketplace: Save plan information to be linked to AWSMarketplace. `,
      parameters: {
      "type": "object",
      "properties": {
            "plan_id": {
                  "type": "string",
                  "description": ""
            },
            "plan_name": {
                  "type": "string",
                  "description": ""
            }
      },
      "required": [
            "plan_id",
            "plan_name"
      ]
}
    }
  }
};

export { apiTool };
