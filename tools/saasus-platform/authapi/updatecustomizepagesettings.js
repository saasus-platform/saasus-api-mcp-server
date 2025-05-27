/**
 * Update Authentication Authorization Basic Information
 * Update authentication authorization basic information.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'patch',
  '/customize-page-settings',
  [],
  [],
  {"properties":{"icon":{"type":"string","format":"base64","example":"data:image/png;base64,ZDMiIHN0UmVmOmRvY3VtZW50SUQ9Inhtc==","description":"service icon","x-description-i18n":{"jpn":"サービスアイコン"}},"favicon":{"type":"string","format":"base64","example":"data:image/png;base64,ZDMiIHN0UmVmOmRvY3VtZW50SUQ9Inhtc==","description":"favicon","x-description-i18n":{"jpn":"ファビコン"}},"title":{"type":"string","example":"SaaSus","description":"service name","x-description-i18n":{"jpn":"サービス名"}},"terms_of_service_url":{"type":"string","example":"http://dev.example.com/terms","description":"terms of service URL","x-description-i18n":{"jpn":"利用規約URL"}},"privacy_policy_url":{"type":"string","example":"http://dev.example.com/privacy","description":"privacy policy URL","x-description-i18n":{"jpn":"プライバシーポリシーURL"}},"google_tag_manager_container_id":{"type":"string","example":"GTM-XXXXXXX","description":"Google Tag Manager container ID","x-description-i18n":{"jpn":"Google Tag Manager コンテナ ID"}}},"required":["icon","favicon","title","terms_of_service_url","privacy_policy_url","google_tag_manager_container_id"]},
  'updateCustomizePageSettings'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatecustomizepagesettings',
      description: `Update Authentication Authorization Basic Information: Update authentication authorization basic information. `,
      parameters: {
      "type": "object",
      "properties": {
            "icon": {
                  "type": "string",
                  "description": "service icon"
            },
            "favicon": {
                  "type": "string",
                  "description": "favicon"
            },
            "title": {
                  "type": "string",
                  "description": "service name"
            },
            "terms_of_service_url": {
                  "type": "string",
                  "description": "terms of service URL"
            },
            "privacy_policy_url": {
                  "type": "string",
                  "description": "privacy policy URL"
            },
            "google_tag_manager_container_id": {
                  "type": "string",
                  "description": "Google Tag Manager container ID"
            }
      },
      "required": [
            "icon",
            "favicon",
            "title",
            "terms_of_service_url",
            "privacy_policy_url",
            "google_tag_manager_container_id"
      ]
}
    }
  }
};

export { apiTool };
