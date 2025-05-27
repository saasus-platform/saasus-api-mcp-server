/**
 * Get Basic Configurations
 * Get the domain name and CNAME record based on the SaaS ID.
By setting the CNAME record on the DNS the login screen will be generated.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/basic-info',
  [],
  [],
  {"properties":{},"required":[]},
  'getBasicInfo'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getbasicinfo',
      description: `Get Basic Configurations: Get the domain name and CNAME record based on the SaaS ID. By setting the CNAME record on the DNS the login screen will be generated. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
