/**
 * Update Basic Configurations
 * Update the domain name that was set as a parameter based on the SaaS ID.
After the CNAME record is generated, set it in your DNS.
If it is set on a SaaS application that is already running, it will affect the behavior.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'put',
  '/basic-info',
  [],
  [],
  {"properties":{"domain_name":{"type":"string","example":"dev.saasus.io","description":"Domain Name","x-description-i18n":{"jpn":"ドメイン名"}},"from_email_address":{"type":"string","description":"Sender email of authentication email","x-description-i18n":{"jpn":"認証メールの送信元メールアドレス"},"example":"test@example.com"},"reply_email_address":{"type":"string","description":"Reply-from email address of authentication email","x-description-i18n":{"jpn":"認証メールの返信元メールアドレス"},"example":"test@example.com"}},"required":["domain_name","from_email_address"]},
  'updateBasicInfo'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatebasicinfo',
      description: `Update Basic Configurations: Update the domain name that was set as a parameter based on the SaaS ID. After the CNAME record is generated, set it in your DNS. If it is set on a SaaS application that is already running, it will affect the behavior. `,
      parameters: {
      "type": "object",
      "properties": {
            "domain_name": {
                  "type": "string",
                  "description": "Domain Name"
            },
            "from_email_address": {
                  "type": "string",
                  "description": "Sender email of authentication email"
            },
            "reply_email_address": {
                  "type": "string",
                  "description": "Reply-from email address of authentication email"
            }
      },
      "required": [
            "domain_name",
            "from_email_address"
      ]
}
    }
  }
};

export { apiTool };
