/**
 * Create Tenant User
 * Create a tenant user.
If attributes is empty, the additional attributes will be created empty.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/tenants/{tenant_id}/users',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"}],
  [],
  {"properties":{"email":{"type":"string","example":"hoge@example.com","description":"E-mail","x-description-i18n":{"jpn":"メールアドレス"}},"sign_in_id":{"type":"string","example":"user123","description":"Sign-in ID (alphanumeric and symbols -_ only, max 50 characters)\n","x-description-i18n":{"jpn":"ログインID（英数字と記号-_のみ、最大50文字）\n"}},"attributes":{"type":"object","additionalProperties":true,"example":{"address":"東京都","birthday":19940925,"sex":"男"},"description":"Attribute information (Get information set by defining user attributes in the SaaS development console)\n","x-description-i18n":{"jpn":"属性情報（SaaS 開発コンソールでユーザー属性定義を行い設定された情報を取得します）\n"}}},"required":["attributes"]},
  'createTenantUser'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createtenantuser',
      description: `Create Tenant User: Create a tenant user. If attributes is empty, the additional attributes will be created empty. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": "Tenant ID"
            },
            "email": {
                  "type": "string",
                  "description": "E-mail"
            },
            "sign_in_id": {
                  "type": "string",
                  "description": "Sign-in ID (alphanumeric and symbols -_ only, max 50 characters)\n"
            },
            "attributes": {
                  "type": "object",
                  "description": "Attribute information (Get information set by defining user attributes in the SaaS development console)\n"
            }
      },
      "required": [
            "tenant_id",
            "attributes"
      ]
}
    }
  }
};

export { apiTool };
