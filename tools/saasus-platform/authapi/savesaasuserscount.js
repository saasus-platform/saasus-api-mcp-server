/**
 * Save SaaS Users Count
 * Save the count of SaaS users.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/users/count',
  [],
  [],
  {"properties":{"count":{"type":"integer","minimum":0,"example":42,"description":"Count of SaaS users","x-description-i18n":{"jpn":"SaaSユーザー数"}}},"required":["count"]},
  'saveSaasUsersCount'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  httpMethod: 'post',
  definition: {
    type: 'function',
    function: {
      name: 'savesaasuserscount',
      description: `Save SaaS Users Count: Save the count of SaaS users. `,
      parameters: {
      "type": "object",
      "properties": {
            "count": {
                  "type": "number",
                  "description": "Count of SaaS users"
            }
      },
      "required": [
            "count"
      ]
}
    }
  }
};

export { apiTool };
