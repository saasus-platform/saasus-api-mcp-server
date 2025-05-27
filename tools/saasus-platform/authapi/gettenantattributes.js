/**
 * Get Tenant Attributes
 * Get definitions for additional tenant attributes managed by the SaaSus Platform.
For example, tenant name, memo, etc., then get the attributes from SaaS using the SaaSus SDK/API.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/tenant-attributes',
  [],
  [],
  {"properties":{},"required":[]},
  'getTenantAttributes'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'gettenantattributes',
      description: `Get Tenant Attributes: Get definitions for additional tenant attributes managed by the SaaSus Platform. For example, tenant name, memo, etc., then get the attributes from SaaS using the SaaSus SDK/API. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
