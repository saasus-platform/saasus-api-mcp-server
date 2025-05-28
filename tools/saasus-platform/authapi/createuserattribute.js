/**
 * Create User Attributes
 * Create additional user attributes to be kept on the SaaSus Platform.
You can give different values to each tenant.
For example, you can define items associated with a user, such as user name, birthday, etc.
If you don't want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/user-attributes',
  [],
  [],
  {"properties":{"attribute_name":{"type":"string","example":"birthday","description":"Attribute Name","x-description-i18n":{"jpn":"属性名"}},"display_name":{"type":"string","example":"Birthday","description":"Display Name","x-description-i18n":{"jpn":"表示名"}},"attribute_type":{"type":"string","enum":["string","number","bool","date"],"description":"Type (date can be set to YYYY-MM-DD format.)\n","x-description-i18n":{"jpn":"型（dateはYYYY-MM-DDの形式で使用する事ができます。）\n"}}},"required":["attribute_name","display_name","attribute_type"]},
  'createUserAttribute'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createuserattribute',
      description: `Create User Attributes: Create additional user attributes to be kept on the SaaSus Platform. You can give different values to each tenant. For example, you can define items associated with a user, such as user name, birthday, etc. If you don't want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition. `,
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
