/**
 * Update Feedback Comment
 * Edit comment for feedback.
 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/communication',
  'patch',
  '/feedbacks/{feedback_id}/comments/{comment_id}',
  [{"name":"feedback_id","type":"string","required":true,"description":""},{"name":"comment_id","type":"string","required":true,"description":""}],
  [],
  {"properties":{"body":{"title":"Edited Content","x-title-i18n":{"jpn":"編集内容"},"type":"string","example":"貴重なご意見ありがとうございます。"}},"required":["body"]},
  'updateFeedbackComment'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatefeedbackcomment',
      description: `Update Feedback Comment: Edit comment for feedback.`,
      parameters: {
      "type": "object",
      "properties": {
            "feedback_id": {
                  "type": "string",
                  "description": ""
            },
            "comment_id": {
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
            "comment_id",
            "body"
      ]
}
    }
  }
};

export { apiTool };
