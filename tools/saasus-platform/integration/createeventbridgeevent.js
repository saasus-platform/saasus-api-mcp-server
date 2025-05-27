/**
 * Send Events
 * Send events to Amazon EventBridge.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/integration',
  'post',
  '/eventbridge/event',
  [],
  [],
  {"properties":{"event_messages":{"type":"array","items":{"title":"EventMessage","type":"object","properties":{"event_type":{"type":"string","example":"api_call","description":"event type","x-description-i18n":{"jpn":"イベントタイプ"}},"event_detail_type":{"type":"string","example":"create_user","description":"detailed event type","x-description-i18n":{"jpn":"詳細イベントタイプ"}},"message":{"type":"string","example":"{id:8b79528a-ec3b-4f68-b7c4-d793e3894561,name:test222}","description":"event message","x-description-i18n":{"jpn":"イベントメッセージ"}}},"required":["event_type","event_detail_type","message"]},"description":"event message","x-description-i18n":{"jpn":"イベントメッセージ"}}},"required":["event_messages"]},
  'createEventBridgeEvent'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createeventbridgeevent',
      description: `Send Events: Send events to Amazon EventBridge. `,
      parameters: {
      "type": "object",
      "properties": {
            "event_messages": {
                  "type": "array",
                  "description": "event message",
                  "items": {
                        "title": "EventMessage",
                        "type": "object",
                        "properties": {
                              "event_type": {
                                    "type": "string",
                                    "example": "api_call",
                                    "description": "event type",
                                    "x-description-i18n": {
                                          "jpn": "イベントタイプ"
                                    }
                              },
                              "event_detail_type": {
                                    "type": "string",
                                    "example": "create_user",
                                    "description": "detailed event type",
                                    "x-description-i18n": {
                                          "jpn": "詳細イベントタイプ"
                                    }
                              },
                              "message": {
                                    "type": "string",
                                    "example": "{id:8b79528a-ec3b-4f68-b7c4-d793e3894561,name:test222}",
                                    "description": "event message",
                                    "x-description-i18n": {
                                          "jpn": "イベントメッセージ"
                                    }
                              }
                        },
                        "required": [
                              "event_type",
                              "event_detail_type",
                              "message"
                        ]
                  }
            }
      },
      "required": [
            "event_messages"
      ]
}
    }
  }
};

export { apiTool };
