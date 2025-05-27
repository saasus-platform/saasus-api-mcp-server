/**
 * Authentication Page Setting
 * Update the authentication page setting information (new registration, login, password reset, etc.).

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'patch',
  '/customize-pages',
  [],
  [],
  {"properties":{"sign_up_page":{"type":"object","properties":{"html_contents":{"type":"string","example":"<html><div>画面内容</div></html>","description":"Edit page HTML\n※ This function is not yet provided, so it cannot be changed or saved.\n","x-description-i18n":{"jpn":"画面のHTMLを編集できます\n※ 未提供の機能のため、変更・保存はできません\n"}},"is_terms_of_service":{"type":"boolean","example":true,"description":"display the terms of use agreement check box","x-description-i18n":{"jpn":"利用規約の同意チェックボックスを表示するが設定されているか"}},"is_privacy_policy":{"type":"boolean","example":true,"description":"show the privacy policy checkbox","x-description-i18n":{"jpn":"プライバシーポリシーチェックボックスを表示するが設定されているか"}}},"required":["html_contents","is_terms_of_service","is_privacy_policy"]},"sign_in_page":{"type":"object","properties":{"html_contents":{"type":"string","example":"<html><div>画面内容</div></html>","description":"Edit page HTML\n※ This function is not yet provided, so it cannot be changed or saved.\n","x-description-i18n":{"jpn":"画面のHTMLを編集できます\n※ 未提供の機能のため、変更・保存はできません\n"}},"is_terms_of_service":{"type":"boolean","example":true,"description":"display the terms of use agreement check box","x-description-i18n":{"jpn":"利用規約の同意チェックボックスを表示するが設定されているか"}},"is_privacy_policy":{"type":"boolean","example":true,"description":"show the privacy policy checkbox","x-description-i18n":{"jpn":"プライバシーポリシーチェックボックスを表示するが設定されているか"}}},"required":["html_contents","is_terms_of_service","is_privacy_policy"]},"password_reset_page":{"type":"object","properties":{"html_contents":{"type":"string","example":"<html><div>画面内容</div></html>","description":"Edit page HTML\n※ This function is not yet provided, so it cannot be changed or saved.\n","x-description-i18n":{"jpn":"画面のHTMLを編集できます\n※ 未提供の機能のため、変更・保存はできません\n"}},"is_terms_of_service":{"type":"boolean","example":true,"description":"display the terms of use agreement check box","x-description-i18n":{"jpn":"利用規約の同意チェックボックスを表示するが設定されているか"}},"is_privacy_policy":{"type":"boolean","example":true,"description":"show the privacy policy checkbox","x-description-i18n":{"jpn":"プライバシーポリシーチェックボックスを表示するが設定されているか"}}},"required":["html_contents","is_terms_of_service","is_privacy_policy"]}},"required":[]},
  'updateCustomizePages'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatecustomizepages',
      description: `Authentication Page Setting: Update the authentication page setting information (new registration, login, password reset, etc.). `,
      parameters: {
      "type": "object",
      "properties": {
            "sign_up_page": {
                  "type": "object",
                  "description": ""
            },
            "sign_in_page": {
                  "type": "object",
                  "description": ""
            },
            "password_reset_page": {
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
