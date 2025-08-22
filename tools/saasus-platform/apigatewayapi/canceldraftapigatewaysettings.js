/**
 * Cancel draft configuration information for Smart API Gateway function
 * Cancel draft configuration information for Smart API Gateway function.
This cancels the changes made in the draft settings without applying them to the actual Smart API Gateway.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'post',
  '/draft/settings/cancel',
  [],
  [],
  {"properties":{},"required":[]},
  'cancelDraftApiGatewaySettings'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'canceldraftapigatewaysettings',
      description: `Cancel draft configuration information for Smart API Gateway function: Cancel draft configuration information for Smart API Gateway function. This cancels the changes made in the draft settings without applying them to the actual Smart API Gateway. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
