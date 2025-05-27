/**
 * Publish the API Gateway
 * Publish the API Gateway.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'post',
  '/publish',
  [],
  [],
  {"properties":{},"required":[]},
  'publishApiGateway'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'publishapigateway',
      description: `Publish the API Gateway: Publish the API Gateway. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
