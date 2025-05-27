/**
 * Create Vote User
 * Vote for feedback.
 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/communication',
  'post',
  '/feedbacks/{feedback_id}/votes/users',
  [{"name":"feedback_id","type":"string","required":true,"description":""}],
  [],
  {"properties":{"user_id":{"type":"string","example":"69e732d6-8ecc-45c4-c2eb-8438f7ffe775"}},"required":["user_id"]},
  'createVoteUser'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createvoteuser',
      description: `Create Vote User: Vote for feedback.`,
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
