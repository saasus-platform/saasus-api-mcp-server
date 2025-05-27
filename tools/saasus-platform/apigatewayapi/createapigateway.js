/**
 * Create the API Gateway
 * Create the API Gateway.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'post',
  '/create',
  [],
  [],
  {"properties":{},"required":[]},
  'createApiGateway'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createapigateway',
      description: `Create the API Gateway: Create the API Gateway. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
