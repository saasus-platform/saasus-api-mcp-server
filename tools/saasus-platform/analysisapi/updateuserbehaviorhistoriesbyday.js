/**
 * Analysis of user behavior on the day
 * Analysis of user behavior on the day.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/analysis',
  'put',
  '/user-behavior-day',
  [],
  [],
  {"properties":{"timestamp":{"title":"Date subject to renewal","x-title-i18n":{"jpn":"更新対象日"},"description":"Date subject to renewal","x-description-i18n":{"jpn":"更新対象日"},"type":"integer","example":1640995200},"user_id":{"type":"string","example":"69e732d6-8ecc-45c4-c2eb-8438f7ffe775"},"histories":{"type":"array","items":{"type":"object","properties":{"timestamp":{"title":"operation time stamp","x-title-i18n":{"jpn":"行動履歴のタイムスタンプ"},"description":"Behavior Timestamp","x-description-i18n":{"jpn":"行動履歴のタイムスタンプ"},"type":"integer","example":1640995200},"referer":{"title":"Referer","x-title-i18n":{"jpn":"リファラー"},"description":"URL of the request origin","x-description-i18n":{"jpn":"リクエスト元のURL"},"type":"string","example":"https://examaple.com/examaple"}},"required":["timestamp","referer"]},"description":"user behavior history list","x-description-i18n":{"jpn":"ユーザの行動履歴一覧"}}},"required":["timestamp","user_id","histories"]},
  'updateUserBehaviorHistoriesByDay'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updateuserbehaviorhistoriesbyday',
      description: `Analysis of user behavior on the day: Analysis of user behavior on the day. `,
      parameters: {
      "type": "object",
      "properties": {
            "timestamp": {
                  "type": "number",
                  "description": "Date subject to renewal"
            },
            "user_id": {
                  "type": "string",
                  "description": ""
            },
            "histories": {
                  "type": "array",
                  "description": "user behavior history list",
                  "items": {
                        "type": "object",
                        "properties": {
                              "timestamp": {
                                    "title": "operation time stamp",
                                    "x-title-i18n": {
                                          "jpn": "行動履歴のタイムスタンプ"
                                    },
                                    "description": "Behavior Timestamp",
                                    "x-description-i18n": {
                                          "jpn": "行動履歴のタイムスタンプ"
                                    },
                                    "type": "integer",
                                    "example": 1640995200
                              },
                              "referer": {
                                    "title": "Referer",
                                    "x-title-i18n": {
                                          "jpn": "リファラー"
                                    },
                                    "description": "URL of the request origin",
                                    "x-description-i18n": {
                                          "jpn": "リクエスト元のURL"
                                    },
                                    "type": "string",
                                    "example": "https://examaple.com/examaple"
                              }
                        },
                        "required": [
                              "timestamp",
                              "referer"
                        ]
                  }
            }
      },
      "required": [
            "timestamp",
            "user_id",
            "histories"
      ]
}
    }
  }
};

export { apiTool };
