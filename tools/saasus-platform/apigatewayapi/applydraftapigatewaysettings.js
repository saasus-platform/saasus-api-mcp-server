/**
 * Apply draft configuration information for Smart API Gateway function
 * Apply draft configuration information for Smart API Gateway function.
This applies the changes made in the draft settings to the actual Smart API Gateway.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'post',
  '/draft/settings/apply',
  [],
  [],
  {"properties":{},"required":[]},
  'applyDraftApiGatewaySettings'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'applydraftapigatewaysettings',
      description: `Apply draft configuration information for Smart API Gateway function: Apply draft configuration information for Smart API Gateway function. This applies the changes made in the draft settings to the actual Smart API Gateway. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
