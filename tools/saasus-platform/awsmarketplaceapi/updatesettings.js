/**
 * Update AWS Marketplace Settings
 * Update AWS Marketplace Settings.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/awsmarketplace',
  'put',
  '/settings',
  [],
  [],
  {"properties":{"product_code":{"type":"string","example":1234567890},"role_arn":{"type":"string","example":"arn:aws:iam::123456789012:role/role-name"},"role_external_id":{"type":"string","example":1234567890},"sns_topic_arn":{"type":"string","example":"arn:aws:sns:us-east-1:123456789012:topic-name"},"cas_bucket_name":{"type":"string","example":"cas-bucket-name"},"cas_sns_topic_arn":{"type":"string","example":"arn:aws:sns:us-east-1:123456789012:topic-name"},"seller_sns_topic_arn":{"type":"string","example":"arn:aws:sns:us-east-1:123456789012:topic-name"},"sqs_arn":{"type":"string","example":"arn:aws:sqs:us-east-1:123456789012:queue_name"}},"required":[]},
  'updateSettings'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatesettings',
      description: `Update AWS Marketplace Settings: Update AWS Marketplace Settings. `,
      parameters: {
      "type": "object",
      "properties": {
            "product_code": {
                  "type": "string",
                  "description": ""
            },
            "role_arn": {
                  "type": "string",
                  "description": ""
            },
            "role_external_id": {
                  "type": "string",
                  "description": ""
            },
            "sns_topic_arn": {
                  "type": "string",
                  "description": ""
            },
            "cas_bucket_name": {
                  "type": "string",
                  "description": ""
            },
            "cas_sns_topic_arn": {
                  "type": "string",
                  "description": ""
            },
            "seller_sns_topic_arn": {
                  "type": "string",
                  "description": ""
            },
            "sqs_arn": {
                  "type": "string",
                  "description": ""
            }
      },
      "required": []
}
    }
  }
};

export { apiTool };
