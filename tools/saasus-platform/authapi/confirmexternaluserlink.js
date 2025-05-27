/**
 * Confirm External User Account Link
 * Verify the code for external account user link confirmation.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/external-users/confirm',
  [],
  [],
  {"properties":{"access_token":{"title":"Access Token","x-title-i18n":{"jpn":"アクセストークン"},"type":"string"},"code":{"title":"Verification Code","x-title-i18n":{"jpn":"検証コード"},"type":"string","example":"123456"}},"required":["access_token","code"]},
  'confirmExternalUserLink'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'confirmexternaluserlink',
      description: `Confirm External User Account Link: Verify the code for external account user link confirmation. `,
      parameters: {
      "type": "object",
      "properties": {
            "access_token": {
                  "type": "string",
                  "description": ""
            },
            "code": {
                  "type": "string",
                  "description": ""
            }
      },
      "required": [
            "access_token",
            "code"
      ]
}
    }
  }
};

export { apiTool };
