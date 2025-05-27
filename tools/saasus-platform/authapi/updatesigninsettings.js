/**
 * Update Password Requirements
 * Update user password requirements.
Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'put',
  '/sign-in-settings',
  [],
  [],
  {"properties":{"password_policy":{"type":"object","description":"Password Policy","x-description-i18n":{"jpn":"パスワードポリシー"},"properties":{"minimum_length":{"type":"integer","x-go-type":"uint64","example":10,"description":"Minimum number of characters","x-description-i18n":{"jpn":"最小文字数"}},"is_require_lowercase":{"type":"boolean","example":true,"description":"Contains one or more lowercase characters","x-description-i18n":{"jpn":"一文字以上の小文字を含むが設定されているか"}},"is_require_numbers":{"type":"boolean","example":true,"description":"Contains one or more numeric characters","x-description-i18n":{"jpn":"一文字以上の数字を含むが設定されているか"}},"is_require_symbols":{"type":"boolean","example":true,"description":"Contains one or more special characters","x-description-i18n":{"jpn":"一文字以上の特殊文字を含むが設定されているか"}},"is_require_uppercase":{"type":"boolean","example":true,"description":"Contains one or more uppercase letters","x-description-i18n":{"jpn":"一文字以上の大文字を含むが設定されているか"}},"temporary_password_validity_days":{"type":"integer","x-go-type":"uint64","example":10,"description":"Temporary password expiration date","x-description-i18n":{"jpn":"仮パスワードの有効期限"}}},"required":["minimum_length","is_require_lowercase","is_require_numbers","is_require_symbols","is_require_uppercase","temporary_password_validity_days"]},"device_configuration":{"type":"object","description":"Settings for remembering trusted devices","x-description-i18n":{"jpn":"信頼済みデバイスの記憶の設定"},"properties":{"device_remembering":{"type":"string","enum":["always","userOptIn","no"],"example":"always","description":"always: always remember\nuserOptIn: user opt-in\nno: don't save\n","x-description-i18n":{"jpn":"always: 常に記憶する\nuserOptIn: ユーザーオプトイン\nno: 記録しない\n"}}},"required":["device_remembering"]},"mfa_configuration":{"type":"object","description":"MFA device authentication settings\n※ This function is not yet provided, so it cannot be changed or saved.\n","x-description-i18n":{"jpn":"MFAデバイス認証設定\n※ 未提供の機能のため、変更・保存はできません\n"},"properties":{"mfa_configuration":{"type":"string","enum":["on","optional"],"example":"on","description":"on: apply when all users log in\noptional: apply to individual users with MFA factor enabled\n※ The parameter is currently optional and fixed.\n","x-description-i18n":{"jpn":"on: 全ユーザーがログイン時に適用\noptional: MFA要素が有効になっている個別ユーザーに適用\n※ パラメータは現在optionalで固定となります。\n"}}},"required":["mfa_configuration"]},"recaptcha_props":{"type":"object","description":"reCAPTCHA authentication settings\n※ This function is not yet provided, so it cannot be changed or saved.\n","x-description-i18n":{"jpn":"reCAPTCHA認証設定\n※ 未提供の機能のため、変更・保存はできません。\n"},"properties":{"site_key":{"type":"string","example":"ede66c43-9b9d-4222-93ed-5f11c96e08e2","description":"site key","x-description-i18n":{"jpn":"サイトキー"}},"secret_key":{"type":"string","example":"d5794b1b-5f92-4dc6-aa48-085dbb08b813","description":"secret key","x-description-i18n":{"jpn":"シークレットキー"}}},"required":["site_key","secret_key"]},"account_verification":{"type":"object","description":"Account authentication settings\n※ This function is not yet provided, so it cannot be changed or saved.\n","x-description-i18n":{"jpn":"アカウント認証設定\n※ 未提供の機能のため、変更・保存はできません。\n"},"properties":{"verification_method":{"type":"string","enum":["code","link"],"example":"code","description":"code: verification code\nlink: verification link\n※ This function is not yet provided, so it cannot be changed or saved.\n","x-description-i18n":{"jpn":"code: 検証コード\nlink: 検証リンク\n※ 未提供の機能のため、変更・保存はできません\n"}},"sending_to":{"type":"string","enum":["email","sms","smsOrEmail"],"example":"email","description":"email: e-mail\nsms: SMS\nsmsOrEmail: email if SMS is not possible\n","x-description-i18n":{"jpn":"email: Eメール\nsms: SMS\nsmsOrEmail: SMS不可の場合にEメール\n"}}},"required":["verification_method","sending_to"]},"self_regist":{"type":"object","description":"self sign-up permission","x-description-i18n":{"jpn":"セルフサインアップを許可設定"},"properties":{"enable":{"type":"boolean","example":true}},"required":["enable"]}},"required":[]},
  'updateSignInSettings'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatesigninsettings',
      description: `Update Password Requirements: Update user password requirements. Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols. `,
      parameters: {
      "type": "object",
      "properties": {
            "password_policy": {
                  "type": "object",
                  "description": "Password Policy"
            },
            "device_configuration": {
                  "type": "object",
                  "description": "Settings for remembering trusted devices"
            },
            "mfa_configuration": {
                  "type": "object",
                  "description": "MFA device authentication settings\n※ This function is not yet provided, so it cannot be changed or saved.\n"
            },
            "recaptcha_props": {
                  "type": "object",
                  "description": "reCAPTCHA authentication settings\n※ This function is not yet provided, so it cannot be changed or saved.\n"
            },
            "account_verification": {
                  "type": "object",
                  "description": "Account authentication settings\n※ This function is not yet provided, so it cannot be changed or saved.\n"
            },
            "self_regist": {
                  "type": "object",
                  "description": "self sign-up permission"
            }
      },
      "required": []
}
    }
  }
};

export { apiTool };
