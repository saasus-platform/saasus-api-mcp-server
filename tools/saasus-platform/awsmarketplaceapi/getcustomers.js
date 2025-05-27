/**
 * Get a list of customer information to be linked to AWS Marketplace
 * Get a list of customer information to be linked to AWS Marketplace.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/awsmarketplace',
  'get',
  '/customers',
  [],
  [{"name":"tenant_ids","type":"array","required":false,"description":"指定したテナントIDの顧客を取得する(Get customers with the specified tenant ID)","items":{"$ref":"#/components/schemas/Uuid"}}],
  {"properties":{},"required":[]},
  'getCustomers'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getcustomers',
      description: `Get a list of customer information to be linked to AWS Marketplace: Get a list of customer information to be linked to AWS Marketplace. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_ids": {
                  "type": "array",
                  "description": "指定したテナントIDの顧客を取得する(Get customers with the specified tenant ID)",
                  "items": {
                        "$ref": "#/components/schemas/Uuid"
                  }
            }
      },
      "required": []
}
    }
  }
};

export { apiTool };
