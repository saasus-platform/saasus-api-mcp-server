/**
 * Obtain plan information to link to AWS Marketplace
 * Obtain plan information to link to AWS Marketplace.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/awsmarketplace',
  'get',
  '/plans',
  [],
  [],
  {"properties":{},"required":[]},
  'getPlans'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getplans',
      description: `Obtain plan information to link to AWS Marketplace: Obtain plan information to link to AWS Marketplace. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
