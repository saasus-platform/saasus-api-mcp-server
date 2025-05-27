/**
 * Unpublish the API Gateway
 * Unpublish the API Gateway.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'post',
  '/unpublish',
  [],
  [],
  {"properties":{},"required":[]},
  'unpublishApiGateway'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'unpublishapigateway',
      description: `Unpublish the API Gateway: Unpublish the API Gateway. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
