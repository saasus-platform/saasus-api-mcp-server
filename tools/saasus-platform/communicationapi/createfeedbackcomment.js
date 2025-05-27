/**
 * Create Feedback Comment
 * Post comment to feedback.
 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/communication',
  'post',
  '/feedbacks/{feedback_id}/comments',
  [{"name":"feedback_id","type":"string","required":true,"description":""}],
  [],
  {"properties":{"body":{"title":"Comment Content","x-title-i18n":{"jpn":"コメント内容"},"type":"string","example":"貴重なご意見ありがとうございます。"}},"required":["body"]},
  'createFeedbackComment'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createfeedbackcomment',
      description: `Create Feedback Comment: Post comment to feedback.`,
      parameters: {
      "type": "object",
      "properties": {
            "feedback_id": {
                  "type": "string",
                  "description": ""
            },
            "body": {
                  "type": "string",
                  "description": ""
            }
      },
      "required": [
            "feedback_id",
            "body"
      ]
}
    }
  }
};

export { apiTool };
