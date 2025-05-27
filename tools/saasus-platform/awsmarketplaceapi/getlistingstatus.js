/**
 * Get AWS Marketplace Listing Status
 * Get AWS Marketplace Listing Status.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/awsmarketplace',
  'get',
  '/listing-status',
  [],
  [],
  {"properties":{},"required":[]},
  'getListingStatus'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getlistingstatus',
      description: `Get AWS Marketplace Listing Status: Get AWS Marketplace Listing Status. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
