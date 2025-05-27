/**
 * Get Feedback
 * Retrieve feedback.
 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/communication',
  'get',
  '/feedbacks/{feedback_id}',
  [{"name":"feedback_id","type":"string","required":true,"description":""}],
  [],
  {"properties":{},"required":[]},
  'getFeedback'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getfeedback',
      description: `Get Feedback: Retrieve feedback.`,
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
