/**
 * Update EventBridge Settings
 * Update configuration used to provide the host state via Amazon EventBridge.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/integration',
  'put',
  '/eventbridge/info',
  [],
  [],
  {"properties":{"aws_account_id":{"type":"string","example":267185063265,"description":"AWS Account ID","x-description-i18n":{"jpn":"AWSアカウントID"}},"aws_region":{"title":"AWS Regions","x-title-i18n":{"jpn":"AWSリージョン"},"type":"string","enum":["us-east-1","us-east-2","us-west-1","us-west-2","af-south-1","ap-east-1","ap-south-1","ap-northeast-1","ap-northeast-2","ap-northeast-3","ap-southeast-1","ap-southeast-2","ap-southeast-3","ca-central-1","eu-central-1","eu-north-1","eu-south-1","eu-west-1","eu-west-2","eu-west-3","me-south-1","sa-east-1"],"description":"All AWS regions except Ningxia and Beijing in China can be selected.\n","x-description-i18n":{"jpn":"中国の寧夏、北京を除く全てのAWSリージョンが選択可能です。\n"}}},"required":["aws_account_id","aws_region"]},
  'saveEventBridgeSettings'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'saveeventbridgesettings',
      description: `Update EventBridge Settings: Update configuration used to provide the host state via Amazon EventBridge. `,
      parameters: {
      "type": "object",
      "properties": {
            "aws_account_id": {
                  "type": "string",
                  "description": "AWS Account ID"
            },
            "aws_region": {
                  "type": "string",
                  "description": "All AWS regions except Ningxia and Beijing in China can be selected.\n",
                  "enum": [
                        "us-east-1",
                        "us-east-2",
                        "us-west-1",
                        "us-west-2",
                        "af-south-1",
                        "ap-east-1",
                        "ap-south-1",
                        "ap-northeast-1",
                        "ap-northeast-2",
                        "ap-northeast-3",
                        "ap-southeast-1",
                        "ap-southeast-2",
                        "ap-southeast-3",
                        "ca-central-1",
                        "eu-central-1",
                        "eu-north-1",
                        "eu-south-1",
                        "eu-west-1",
                        "eu-west-2",
                        "eu-west-3",
                        "me-south-1",
                        "sa-east-1"
                  ]
            }
      },
      "required": [
            "aws_account_id",
            "aws_region"
      ]
}
    }
  }
};

export { apiTool };
