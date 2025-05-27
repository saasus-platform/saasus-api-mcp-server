/**
 * Sync AWS Marketplace customer information to SaaSus
 * Sync AWS Marketplace customer information to SaaSus.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/awsmarketplace',
  'post',
  '/customers/{customer_identifier}/sync',
  [{"name":"customer_identifier","type":"string","required":true,"description":"Customer ID"}],
  [],
  {"properties":{},"required":[]},
  'syncCustomer'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'synccustomer',
      description: `Sync AWS Marketplace customer information to SaaSus: Sync AWS Marketplace customer information to SaaSus. `,
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
