/**
 * Update Notification Email Template
 * Update notification email template.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'put',
  '/notification-messages',
  [],
  [],
  {"properties":{"sign_up":{"type":"object","properties":{"subject":{"type":"string","example":"Verify your new account","description":"Title","x-description-i18n":{"jpn":"タイトル"}},"message":{"type":"string","example":"The verification code to your new account is {####}","description":"Message","x-description-i18n":{"jpn":"メッセージ"}}},"required":["subject","message"]},"create_user":{"type":"object","properties":{"subject":{"type":"string","example":"Verify your new account","description":"Title","x-description-i18n":{"jpn":"タイトル"}},"message":{"type":"string","example":"The verification code to your new account is {####}","description":"Message","x-description-i18n":{"jpn":"メッセージ"}}},"required":["subject","message"]},"resend_code":{"type":"object","properties":{"subject":{"type":"string","example":"Verify your new account","description":"Title","x-description-i18n":{"jpn":"タイトル"}},"message":{"type":"string","example":"The verification code to your new account is {####}","description":"Message","x-description-i18n":{"jpn":"メッセージ"}}},"required":["subject","message"]},"forgot_password":{"type":"object","properties":{"subject":{"type":"string","example":"Verify your new account","description":"Title","x-description-i18n":{"jpn":"タイトル"}},"message":{"type":"string","example":"The verification code to your new account is {####}","description":"Message","x-description-i18n":{"jpn":"メッセージ"}}},"required":["subject","message"]},"update_user_attribute":{"$ref":"#/components/schemas/MessageTemplate","description":"Confirmation code resend email for existing users","x-description-i18n":{"jpn":"既存ユーザーへの確認コード再送メール"}},"verify_user_attribute":{"type":"object","properties":{"subject":{"type":"string","example":"Verify your new account","description":"Title","x-description-i18n":{"jpn":"タイトル"}},"message":{"type":"string","example":"The verification code to your new account is {####}","description":"Message","x-description-i18n":{"jpn":"メッセージ"}}},"required":["subject","message"]},"authentication_mfa":{"type":"object","properties":{"subject":{"type":"string","example":"Verify your new account","description":"Title","x-description-i18n":{"jpn":"タイトル"}},"message":{"type":"string","example":"The verification code to your new account is {####}","description":"Message","x-description-i18n":{"jpn":"メッセージ"}}},"required":["subject","message"]},"invite_tenant_user":{"type":"object","properties":{"subject":{"type":"string","example":"Verify your new account","description":"Title","x-description-i18n":{"jpn":"タイトル"}},"message":{"type":"string","example":"The verification code to your new account is {####}","description":"Message","x-description-i18n":{"jpn":"メッセージ"}}},"required":["subject","message"]},"verify_external_user":{"type":"object","properties":{"subject":{"type":"string","example":"Verify your new account","description":"Title","x-description-i18n":{"jpn":"タイトル"}},"message":{"type":"string","example":"The verification code to your new account is {####}","description":"Message","x-description-i18n":{"jpn":"メッセージ"}}},"required":["subject","message"]}},"required":[]},
  'updateNotificationMessages'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatenotificationmessages',
      description: `Update Notification Email Template: Update notification email template. `,
      parameters: {
      "type": "object",
      "properties": {
            "sign_up": {
                  "type": "object",
                  "description": ""
            },
            "create_user": {
                  "type": "object",
                  "description": ""
            },
            "resend_code": {
                  "type": "object",
                  "description": ""
            },
            "forgot_password": {
                  "type": "object",
                  "description": ""
            },
            "update_user_attribute": {
                  "type": "string",
                  "description": "Confirmation code resend email for existing users"
            },
            "verify_user_attribute": {
                  "type": "object",
                  "description": ""
            },
            "authentication_mfa": {
                  "type": "object",
                  "description": ""
            },
            "invite_tenant_user": {
                  "type": "object",
                  "description": ""
            },
            "verify_external_user": {
                  "type": "object",
                  "description": ""
            }
      },
      "required": []
}
    }
  }
};

export { apiTool };
