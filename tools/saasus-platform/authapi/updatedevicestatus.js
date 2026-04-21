/**
 * Update Device Status
 * Updates the device status.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/device/status',
  [],
  [],
  {"properties":{"access_token":{"title":"Access Token","x-title-i18n":{"jpn":"アクセストークン"},"description":"A valid access token.","x-description-i18n":{"jpn":"有効なアクセストークン。"},"type":"string"},"device_key":{"title":"Device Key","x-title-i18n":{"jpn":"デバイスキー"},"description":"The unique identifier of the device.","x-description-i18n":{"jpn":"デバイスの一意識別子。"},"type":"string"},"device_remembered_status":{"title":"Device Remembered Status","x-title-i18n":{"jpn":"デバイス記憶ステータス"},"description":"The status of whether a device is remembered.\n\"remembered\" enables device authentication, \"not_remembered\" disables it.\n","x-description-i18n":{"jpn":"デバイスが記憶されているかどうかのステータス。\n\"remembered\"はデバイス認証を有効にし、\"not_remembered\"は無効にします。\n"},"type":"string","enum":["remembered","not_remembered"]}},"required":["access_token","device_key","device_remembered_status"]},
  'updateDeviceStatus'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  httpMethod: 'post',
  definition: {
    type: 'function',
    function: {
      name: 'updatedevicestatus',
      description: `Update Device Status: Updates the device status. `,
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
            "device_remembered_status": {
                  "type": "string",
                  "description": "The status of whether a device is remembered.\n\"remembered\" enables device authentication, \"not_remembered\" disables it.\n",
                  "enum": [
                        "remembered",
                        "not_remembered"
                  ]
            }
      },
      "required": [
            "access_token",
            "device_key",
            "device_remembered_status"
      ]
}
    }
  }
};

export { apiTool };
