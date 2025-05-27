/**
 * Update Authentication Info
 * Register post-login SaaS URL for authentication information.
It is possible to pass authentication information to the URL registered here and implement this Callback using the SaaSus SDK.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'put',
  '/auth-info',
  [],
  [],
  {"properties":{"callback_url":{"type":"string","example":"https://example.com/callback","description":"Redirect After Authentication","x-description-i18n":{"jpn":"認証後遷移先"}}},"required":["callback_url"]},
  'updateAuthInfo'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updateauthinfo',
      description: `Update Authentication Info: Register post-login SaaS URL for authentication information. It is possible to pass authentication information to the URL registered here and implement this Callback using the SaaSus SDK. `,
      parameters: {
      "type": "object",
      "properties": {
            "callback_url": {
                  "type": "string",
                  "description": "Redirect After Authentication"
            }
      },
      "required": [
            "callback_url"
      ]
}
    }
  }
};

export { apiTool };
