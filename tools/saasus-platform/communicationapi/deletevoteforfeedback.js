/**
 * Delete Vote For Feedback
 * Cancel vote for feedback.
 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/communication',
  'delete',
  '/feedbacks/{feedback_id}/votes/users/{user_id}',
  [{"name":"feedback_id","type":"string","required":true,"description":""},{"name":"user_id","type":"string","required":true,"description":""}],
  [],
  {"properties":{},"required":[]},
  'deleteVoteForFeedback'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deletevoteforfeedback',
      description: `Delete Vote For Feedback: Cancel vote for feedback.`,
      parameters: {
      "type": "object",
      "properties": {
            "feedback_id": {
                  "type": "string",
                  "description": ""
            },
            "user_id": {
                  "type": "string",
                  "description": ""
            }
      },
      "required": [
            "feedback_id",
            "user_id"
      ]
}
    }
  }
};

export { apiTool };
