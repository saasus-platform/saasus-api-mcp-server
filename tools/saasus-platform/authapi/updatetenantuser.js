/**
 * Update Tenant User Attribute
 * Update tenant user attributes.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'patch',
  '/tenants/{tenant_id}/users/{user_id}',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"},{"name":"user_id","type":"string","required":true,"description":"User ID"}],
  [],
  {"properties":{"attributes":{"type":"object","additionalProperties":true,"example":{"address":"東京都","birthday":19940925,"sex":"男"},"description":"Attribute information (Get information set by defining user attributes in the SaaS development console)\n","x-description-i18n":{"jpn":"属性情報（SaaS 開発コンソールでユーザー属性定義を行い設定された情報を取得します）\n"}}},"required":["attributes"]},
  'updateTenantUser'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatetenantuser',
      description: `Update Tenant User Attribute: Update tenant user attributes. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": "Tenant ID"
            },
            "user_id": {
                  "type": "string",
                  "description": "User ID"
            },
            "attributes": {
                  "type": "object",
                  "description": "Attribute information (Get information set by defining user attributes in the SaaS development console)\n"
            }
      },
      "required": [
            "tenant_id",
            "user_id",
            "attributes"
      ]
}
    }
  }
};

export { apiTool };
