/**
 * Delete Feedback Comment
 * Delete comment for feedback.
 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/communication',
  'delete',
  '/feedbacks/{feedback_id}/comments/{comment_id}',
  [{"name":"feedback_id","type":"string","required":true,"description":""},{"name":"comment_id","type":"string","required":true,"description":""}],
  [],
  {"properties":{},"required":[]},
  'deleteFeedbackComment'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deletefeedbackcomment',
      description: `Delete Feedback Comment: Delete comment for feedback.`,
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
            }
      },
      "required": [
            "feedback_id",
            "comment_id"
      ]
}
    }
  }
};

export { apiTool };
