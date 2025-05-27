/**
 * Delete Feedback
 * Delete Feedback.
 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/communication',
  'delete',
  '/feedbacks/{feedback_id}',
  [{"name":"feedback_id","type":"string","required":true,"description":""}],
  [],
  {"properties":{},"required":[]},
  'deleteFeedback'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deletefeedback',
      description: `Delete Feedback: Delete Feedback.`,
      parameters: {
      "type": "object",
      "properties": {
            "feedback_id": {
                  "type": "string",
                  "description": ""
            }
      },
      "required": [
            "feedback_id"
      ]
}
    }
  }
};

export { apiTool };
