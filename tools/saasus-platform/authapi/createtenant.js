/**
 * Create Tenant
 * Create a tenant managed by the SaaSus Platform.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/tenants',
  [],
  [],
  {"properties":{"name":{"type":"string","example":"Anti-Pattern Inc.","description":"tenant name","x-description-i18n":{"jpn":"テナント名"}},"attributes":{"type":"object","additionalProperties":true,"example":{"address":"東京都","employee_number":100},"description":"attribute info","x-description-i18n":{"jpn":"属性情報"}},"back_office_staff_email":{"type":"string","example":"hoge@example.com","description":"administrative staff email address","x-description-i18n":{"jpn":"事務管理部門スタッフメールアドレス"}}},"required":["name","attributes","back_office_staff_email"]},
  'createTenant'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createtenant',
      description: `Create Tenant: Create a tenant managed by the SaaSus Platform. `,
      parameters: {
      "type": "object",
      "properties": {
            "name": {
                  "type": "string",
                  "description": "tenant name"
            },
            "attributes": {
                  "type": "object",
                  "description": "attribute info"
            },
            "back_office_staff_email": {
                  "type": "string",
                  "description": "administrative staff email address"
            }
      },
      "required": [
            "name",
            "attributes",
            "back_office_staff_email"
      ]
}
    }
  }
};

export { apiTool };
