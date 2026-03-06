/**
 * Confirm Device
 * Confirms a device for remembering.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/device/confirm',
  [],
  [],
  {"properties":{"access_token":{"title":"Access Token","x-title-i18n":{"jpn":"アクセストークン"},"description":"A valid access token.","x-description-i18n":{"jpn":"有効なアクセストークン。"},"type":"string"},"device_key":{"title":"Device Key","x-title-i18n":{"jpn":"デバイスキー"},"description":"The unique identifier of the device.","x-description-i18n":{"jpn":"デバイスの一意識別子。"},"type":"string"},"device_name":{"title":"Device Name","x-title-i18n":{"jpn":"デバイス名"},"description":"A friendly name for the device.","x-description-i18n":{"jpn":"デバイスのフレンドリー名。"},"type":"string"},"device_secret_verifier_config":{"title":"Device Secret Verifier Config","x-title-i18n":{"jpn":"デバイスシークレット検証設定"},"description":"The configuration of the device secret verifier.\n","x-description-i18n":{"jpn":"デバイスシークレット検証の設定。\n"},"type":"object","properties":{"password_verifier":{"title":"Password Verifier","x-title-i18n":{"jpn":"パスワード検証子"},"description":"A password verifier for a user's device. Used in SRP authentication.","x-description-i18n":{"jpn":"ユーザーデバイスのパスワード検証子。SRP認証に使用されます。"},"type":"string"},"salt":{"title":"Salt","x-title-i18n":{"jpn":"ソルト"},"description":"The salt for SRP authentication with the user's device.","x-description-i18n":{"jpn":"ユーザーデバイスとのSRP認証に使用するソルト。"},"type":"string"}}}},"required":["access_token","device_key"]},
  'confirmDevice'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'confirmdevice',
      description: `Confirm Device: Confirms a device for remembering. `,
      parameters: {
      "type": "object",
      "properties": {
            "access_token": {
                  "type": "string",
                  "description": "A valid access token."
            },
            "device_key": {
                  "type": "string",
                  "description": "The unique identifier of the device."
            },
            "device_name": {
                  "type": "string",
                  "description": "A friendly name for the device."
            },
            "device_secret_verifier_config": {
                  "type": "object",
                  "description": "The configuration of the device secret verifier.\n"
            }
      },
      "required": [
            "access_token",
            "device_key"
      ]
}
    }
  }
};

export { apiTool };
