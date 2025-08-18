/**
 * Get CloudFormation Stack Launch Link For SaaS Infrastructure Management
 * Get the CloudFormation stack activation link for SaaS Infrastructure Management.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/single-tenant/cloudformation-launch-stack-link',
  [],
  [],
  {"properties":{},"required":[]},
  'getCloudFormationLaunchStackLinkForSingleTenant'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getcloudformationlaunchstacklinkforsingletenant',
      description: `Get CloudFormation Stack Launch Link For SaaS Infrastructure Management: Get the CloudFormation stack activation link for SaaS Infrastructure Management. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
