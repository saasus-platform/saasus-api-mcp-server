/**
 * Update Feedback
 * Edit feedback.
 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/communication',
  'patch',
  '/feedbacks/{feedback_id}',
  [{"name":"feedback_id","type":"string","required":true,"description":""}],
  [],
  {"properties":{"feedback_title":{"title":"Feedback Title","x-title-i18n":{"jpn":"フィードバックのタイトル"},"type":"string","example":"保存ボタンの位置を変えてほしい"},"feedback_description":{"title":"Feedback Content","x-title-i18n":{"jpn":"フィードバックの内容"},"type":"string","example":"編集ダイアログの保存ボタンが押しにくいので、位置を変えてほしい"}},"required":["feedback_title","feedback_description"]},
  'updateFeedback'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatefeedback',
      description: `Update Feedback: Edit feedback.`,
      parameters: {
      "type": "object",
      "properties": {
            "feedback_id": {
                  "type": "string",
                  "description": ""
            },
            "feedback_title": {
                  "type": "string",
                  "description": ""
            },
            "feedback_description": {
                  "type": "string",
                  "description": ""
            }
      },
      "required": [
            "feedback_id",
            "feedback_title",
            "feedback_description"
      ]
}
    }
  }
};

export { apiTool };
