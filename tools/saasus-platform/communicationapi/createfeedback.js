/**
 * Create Feedback
 * Create Feedback.
 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/communication',
  'post',
  '/feedbacks',
  [],
  [],
  {"properties":{"user_id":{"type":"string","example":"69e732d6-8ecc-45c4-c2eb-8438f7ffe775"},"feedback_title":{"title":"Feedback Title","x-title-i18n":{"jpn":"フィードバックのタイトル"},"type":"string","example":"保存ボタンの位置を変えてほしい"},"feedback_description":{"title":"Feedback Content","x-title-i18n":{"jpn":"フィードバックの内容"},"type":"string","example":"編集ダイアログの保存ボタンが押しにくいので、位置を変えてほしい"}},"required":["user_id","feedback_title","feedback_description"]},
  'createFeedback'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createfeedback',
      description: `Create Feedback: Create Feedback.`,
      parameters: {
      "type": "object",
      "properties": {
            "user_id": {
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
            "user_id",
            "feedback_title",
            "feedback_description"
      ]
}
    }
  }
};

export { apiTool };
