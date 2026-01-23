/**
 * Respond to Sign In Challenge
 * Respond to a sign-in challenge.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/sign-in/challenge',
  [],
  [],
  {"properties":{"challenge_name":{"title":"Challenge Name","x-title-i18n":{"jpn":"チャレンジ名"},"description":"Challenge name","x-description-i18n":{"jpn":"チャレンジ名"},"type":"string","enum":["SMS_MFA","EMAIL_OTP","SOFTWARE_TOKEN_MFA","SELECT_MFA_TYPE","MFA_SETUP","PASSWORD_VERIFIER","CUSTOM_CHALLENGE","SELECT_CHALLENGE","DEVICE_SRP_AUTH","DEVICE_PASSWORD_VERIFIER","ADMIN_NO_SRP_AUTH","NEW_PASSWORD_REQUIRED","SMS_OTP","PASSWORD","WEB_AUTHN","PASSWORD_SRP"]},"challenge_responses":{"title":"Challenge Responses","x-title-i18n":{"jpn":"チャレンジ応答"},"description":"Responses to the challenge.\nThe required responses vary depending on the challenge_name.\n","x-description-i18n":{"jpn":"チャレンジへの応答。\nchallenge_nameごとに必要なパラメータが変わります。\n"},"type":"object","additionalProperties":{"type":"string"}},"session":{"title":"Session","x-title-i18n":{"jpn":"セッション"},"description":"Session identifier for the challenge.\n","x-description-i18n":{"jpn":"チャレンジのセッション識別子。\n"},"type":"string"}},"required":["challenge_name"]},
  'respondToSignInChallenge'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'respondtosigninchallenge',
      description: `Respond to Sign In Challenge: Respond to a sign-in challenge. `,
      parameters: {
      "type": "object",
      "properties": {
            "challenge_name": {
                  "type": "string",
                  "description": "Challenge name",
                  "enum": [
                        "SMS_MFA",
                        "EMAIL_OTP",
                        "SOFTWARE_TOKEN_MFA",
                        "SELECT_MFA_TYPE",
                        "MFA_SETUP",
                        "PASSWORD_VERIFIER",
                        "CUSTOM_CHALLENGE",
                        "SELECT_CHALLENGE",
                        "DEVICE_SRP_AUTH",
                        "DEVICE_PASSWORD_VERIFIER",
                        "ADMIN_NO_SRP_AUTH",
                        "NEW_PASSWORD_REQUIRED",
                        "SMS_OTP",
                        "PASSWORD",
                        "WEB_AUTHN",
                        "PASSWORD_SRP"
                  ]
            },
            "challenge_responses": {
                  "type": "object",
                  "description": "Responses to the challenge.\nThe required responses vary depending on the challenge_name.\n"
            },
            "session": {
                  "type": "string",
                  "description": "Session identifier for the challenge.\n"
            }
      },
      "required": [
            "challenge_name"
      ]
}
    }
  }
};

export { apiTool };
