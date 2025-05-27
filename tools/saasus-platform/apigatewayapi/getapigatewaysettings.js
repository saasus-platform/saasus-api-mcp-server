/**
 * Obtain configuration information for api gateway function
 * Obtain configuration information for api gateway function.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'get',
  '/settings',
  [],
  [],
  {"properties":{},"required":[]},
  'getApiGatewaySettings'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getapigatewaysettings',
      description: `Obtain configuration information for api gateway function: Obtain configuration information for api gateway function. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
