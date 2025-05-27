/**
 * Update SaaS User Attributes
 * Update the additional attributes of the SaaS user.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'patch',
  '/users/{user_id}/attributes',
  [{"name":"user_id","type":"string","required":true,"description":"User ID"}],
  [],
  {"properties":{"attributes":{"type":"object","additionalProperties":true,"example":{"address":"東京都","birthday":19940925,"sex":"男"},"description":"Attribute information\n","x-description-i18n":{"jpn":"属性情報\n"}}},"required":["attributes"]},
  'updateSaasUserAttributes'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatesaasuserattributes',
      description: `Update SaaS User Attributes: Update the additional attributes of the SaaS user. `,
      parameters: {
      "type": "object",
      "properties": {
            "user_id": {
                  "type": "string",
                  "description": "User ID"
            },
            "attributes": {
                  "type": "object",
                  "description": "Attribute information\n"
            }
      },
      "required": [
            "user_id",
            "attributes"
      ]
}
    }
  }
};

export { apiTool };
