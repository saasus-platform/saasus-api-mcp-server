/**
 * Obtain draft configuration information for Smart API Gateway function
 * Obtain draft configuration information for Smart API Gateway function.
You can check the settings generated from the uploaded source code before applying them.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'get',
  '/draft/settings',
  [],
  [],
  {"properties":{},"required":[]},
  'getDraftApiGatewaySettings'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getdraftapigatewaysettings',
      description: `Obtain draft configuration information for Smart API Gateway function: Obtain draft configuration information for Smart API Gateway function. You can check the settings generated from the uploaded source code before applying them. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
