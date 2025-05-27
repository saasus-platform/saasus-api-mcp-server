/**
 * Update Sign-In Information
 * Update the sign-in information for the external ID provider
 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'put',
  '/identity-providers',
  [],
  [],
  {"properties":{"provider":{"type":"string","enum":["Google"],"example":"Google"},"identity_provider_props":{"type":"object","properties":{"application_id":{"type":"string","example":1234567890123456},"application_secret":{"type":"string","example":"123456789b00def123456a12345678d1"},"approval_scope":{"type":"string","example":"profile email openid"},"is_button_hidden":{"type":"boolean","example":false}},"required":["application_id","application_secret","approval_scope"]}},"required":["provider"]},
  'updateIdentityProvider'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updateidentityprovider',
      description: `Update Sign-In Information: Update the sign-in information for the external ID provider`,
      parameters: {
      "type": "object",
      "properties": {
            "provider": {
                  "type": "string",
                  "description": "",
                  "enum": [
                        "Google"
                  ]
            },
            "identity_provider_props": {
                  "type": "object",
                  "description": ""
            }
      },
      "required": [
            "provider"
      ]
}
    }
  }
};

export { apiTool };
