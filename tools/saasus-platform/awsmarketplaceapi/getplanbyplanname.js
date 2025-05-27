/**
 * Obtain plan information to link to AWS Marketplace
 * Obtain plan information to link to AWS Marketplace.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/awsmarketplace',
  'get',
  '/plans/{plan_name}',
  [{"name":"plan_name","type":"string","required":true,"description":"AWS Marketplace linked plan name"}],
  [],
  {"properties":{},"required":[]},
  'getPlanByPlanName'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getplanbyplanname',
      description: `Obtain plan information to link to AWS Marketplace: Obtain plan information to link to AWS Marketplace. `,
      parameters: {
      "type": "object",
      "properties": {
            "plan_name": {
                  "type": "string",
                  "description": "AWS Marketplace linked plan name"
            }
      },
      "required": [
            "plan_name"
      ]
}
    }
  }
};

export { apiTool };
