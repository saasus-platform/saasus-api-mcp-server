/**
 * Get the link to create the AWS CloudFormation stack
 * Get the CloudFormation Quick Create link.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'get',
  '/cloudformation-launch-stack-link',
  [],
  [],
  {"properties":{},"required":[]},
  'getCloudFormationLaunchStackLink'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getcloudformationlaunchstacklink',
      description: `Get the link to create the AWS CloudFormation stack: Get the CloudFormation Quick Create link. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
