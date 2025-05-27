/**
 * Get customer information to be linked to AWS Marketplace
 * Get customer information to be linked to AWS Marketplace.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/awsmarketplace',
  'get',
  '/customers/{customer_identifier}',
  [{"name":"customer_identifier","type":"string","required":true,"description":"Customer ID"}],
  [],
  {"properties":{},"required":[]},
  'getCustomer'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getcustomer',
      description: `Get customer information to be linked to AWS Marketplace: Get customer information to be linked to AWS Marketplace. `,
      parameters: {
      "type": "object",
      "properties": {
            "customer_identifier": {
                  "type": "string",
                  "description": "Customer ID"
            }
      },
      "required": [
            "customer_identifier"
      ]
}
    }
  }
};

export { apiTool };
