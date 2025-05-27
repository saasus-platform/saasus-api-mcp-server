/**
 * Request External User Account Link
 * Request to link an external account user.
Get the email address of the user to be linked from the access token and send a verification code to that email address.
The verification code is valid for 24 hours.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/external-users/request',
  [],
  [],
  {"properties":{"access_token":{"title":"Access Token","x-title-i18n":{"jpn":"アクセストークン"},"type":"string"}},"required":["access_token"]},
  'requestExternalUserLink'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'requestexternaluserlink',
      description: `Request External User Account Link: Request to link an external account user. Get the email address of the user to be linked from the access token and send a verification code to that email address. The verification code is valid for 24 hours. `,
      parameters: {
      "type": "object",
      "properties": {
            "access_token": {
                  "type": "string",
                  "description": ""
            }
      },
      "required": [
            "access_token"
      ]
}
    }
  }
};

export { apiTool };
