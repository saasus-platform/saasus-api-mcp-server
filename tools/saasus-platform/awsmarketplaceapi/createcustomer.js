/**
 * Create customer information to be linked to AWS Marketplace
 * Create customer information to be linked to AWS Marketplace.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/awsmarketplace',
  'post',
  '/customers',
  [],
  [],
  {"properties":{"tenant_id":{"type":"string","example":"69e732d6-8ecc-45c4-c2eb-8438f7ffe775"},"registration_token":{"type":"string","example":"registration_token"}},"required":["tenant_id","registration_token"]},
  'createCustomer'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createcustomer',
      description: `Create customer information to be linked to AWS Marketplace: Create customer information to be linked to AWS Marketplace. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": ""
            },
            "registration_token": {
                  "type": "string",
                  "description": ""
            }
      },
      "required": [
            "tenant_id",
            "registration_token"
      ]
}
    }
  }
};

export { apiTool };
