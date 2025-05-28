/**
 * Update User's MFA Settings
 * Update user's MFA settings.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'patch',
  '/users/{user_id}/mfa/preference',
  [{"name":"user_id","type":"string","required":true,"description":"User ID"}],
  [],
  {"properties":{"enabled":{"title":"Enable MFA","x-title-i18n":{"jpn":"MFAを有効にするか否か"},"description":"enable MFA","x-description-i18n":{"jpn":"MFAを有効にするか否か"},"type":"boolean"},"method":{"title":"MFA Method","x-title-i18n":{"jpn":"MFAの方法"},"description":"MFA method (required if enabled is true)","x-description-i18n":{"jpn":"MFAの方法(enabledがtrueの場合は必須)"},"type":"string","enum":["softwareToken"]}},"required":["enabled"]},
  'updateUserMfaPreference'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updateusermfapreference',
      description: `Update User's MFA Settings: Update user's MFA settings. `,
      parameters: {
      "type": "object",
      "properties": {
            "user_id": {
                  "type": "string",
                  "description": "User ID"
            },
            "enabled": {
                  "type": "boolean",
                  "description": "enable MFA"
            },
            "method": {
                  "type": "string",
                  "description": "MFA method (required if enabled is true)",
                  "enum": [
                        "softwareToken"
                  ]
            }
      },
      "required": [
            "user_id",
            "enabled"
      ]
}
    }
  }
};

export { apiTool };
