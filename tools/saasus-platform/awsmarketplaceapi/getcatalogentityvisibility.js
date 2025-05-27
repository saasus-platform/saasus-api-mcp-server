/**
 * Obtain product publication status from AWS Marketplace
 * Retrieve the product's publication status from AWS Marketplace.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/awsmarketplace',
  'get',
  '/catalog-entity/visibility',
  [],
  [],
  {"properties":{},"required":[]},
  'getCatalogEntityVisibility'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getcatalogentityvisibility',
      description: `Obtain product publication status from AWS Marketplace: Retrieve the product\'s publication status from AWS Marketplace. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
