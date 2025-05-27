/**
 * Update Feedback Status
 * Update Feedback Status.
 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/communication',
  'patch',
  '/feedbacks/{feedback_id}/status',
  [{"name":"feedback_id","type":"string","required":true,"description":""}],
  [],
  {"properties":{"status":{"title":"Feedback Status","x-title-i18n":{"jpn":"フィードバックのステータス"},"type":"integer","x-go-type":"uint64","example":1}},"required":["status"]},
  'updateFeedbackStatus'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatefeedbackstatus',
      description: `Update Feedback Status: Update Feedback Status.`,
      parameters: {
      "type": "object",
      "properties": {
            "feedback_id": {
                  "type": "string",
                  "description": ""
            },
            "status": {
                  "type": "number",
                  "description": ""
            }
      },
      "required": [
            "feedback_id",
            "status"
      ]
}
    }
  }
};

export { apiTool };
