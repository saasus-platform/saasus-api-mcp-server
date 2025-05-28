/**
 * Get User Attributes
 * Get additional attributes of the user saved in the SaaSus Platform.
For example, you can define items associated with a user, such as user name, birthday, etc.
If you don't want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/user-attributes',
  [],
  [],
  {"properties":{},"required":[]},
  'getUserAttributes'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getuserattributes',
      description: `Get User Attributes: Get additional attributes of the user saved in the SaaSus Platform. For example, you can define items associated with a user, such as user name, birthday, etc. If you don't want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
