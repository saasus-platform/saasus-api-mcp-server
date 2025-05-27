/**
 * Create SaaS User Attributes
 * Create additional SaaS user attributes to be kept on the SaaSus Platform.
You can give common values to all tenants.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/saas-user-attributes',
  [],
  [],
  {"properties":{"attribute_name":{"type":"string","example":"birthday","description":"Attribute Name","x-description-i18n":{"jpn":"属性名"}},"display_name":{"type":"string","example":"Birthday","description":"Display Name","x-description-i18n":{"jpn":"表示名"}},"attribute_type":{"type":"string","enum":["string","number","bool","date"],"description":"Type (date can be set to YYYY-MM-DD format.)\n","x-description-i18n":{"jpn":"型（dateはYYYY-MM-DDの形式で使用する事ができます。）\n"}}},"required":["attribute_name","display_name","attribute_type"]},
  'createSaasUserAttribute'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createsaasuserattribute',
      description: `Create SaaS User Attributes: Create additional SaaS user attributes to be kept on the SaaSus Platform. You can give common values to all tenants. `,
      parameters: {
      "type": "object",
      "properties": {
            "attribute_name": {
                  "type": "string",
                  "description": "Attribute Name"
            },
            "display_name": {
                  "type": "string",
                  "description": "Display Name"
            },
            "attribute_type": {
                  "type": "string",
                  "description": "Type (date can be set to YYYY-MM-DD format.)\n",
                  "enum": [
                        "string",
                        "number",
                        "bool",
                        "date"
                  ]
            }
      },
      "required": [
            "attribute_name",
            "display_name",
            "attribute_type"
      ]
}
    }
  }
};

export { apiTool };
