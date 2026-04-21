/**
 * Update or insert active users data
 * Update or insert daily or monthly active users data.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/analysis',
  'put',
  '/active-users',
  [],
  [],
  {"properties":{"type":{"title":"Type","x-title-i18n":{"jpn":"タイプ"},"description":"Type of active users data (monthly or daily)","x-description-i18n":{"jpn":"アクティブユーザーデータのタイプ（月次または日次）"},"type":"string","enum":["daily","monthly"],"example":"daily"},"date":{"title":"Date","x-title-i18n":{"jpn":"日付"},"description":"Date (YYYY-MM for monthly, YYYY-MM-DD for daily)","x-description-i18n":{"jpn":"日付（月次の場合はYYYY-MM、日次の場合はYYYY-MM-DD）"},"type":"string","example":"2025-01-01"},"tenant_id":{"type":"string","example":"69e732d6-8ecc-45c4-c2eb-8438f7ffe775"},"env_id":{"type":"integer","x-go-type":"uint64","example":1},"active_users":{"title":"Active Users Count","x-title-i18n":{"jpn":"アクティブユーザー数"},"description":"Number of active users","x-description-i18n":{"jpn":"アクティブユーザー数"},"type":"integer","example":100}},"required":["type","date","tenant_id","env_id","active_users"]},
  'updateActiveUsers'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  httpMethod: 'put',
  definition: {
    type: 'function',
    function: {
      name: 'updateactiveusers',
      description: `Update or insert active users data: Update or insert daily or monthly active users data. `,
      parameters: {
      "type": "object",
      "properties": {
            "type": {
                  "type": "string",
                  "description": "Type of active users data (monthly or daily)",
                  "enum": [
                        "daily",
                        "monthly"
                  ]
            },
            "date": {
                  "type": "string",
                  "description": "Date (YYYY-MM for monthly, YYYY-MM-DD for daily)"
            },
            "tenant_id": {
                  "type": "string",
                  "description": ""
            },
            "env_id": {
                  "type": "number",
                  "description": ""
            },
            "active_users": {
                  "type": "number",
                  "description": "Number of active users"
            }
      },
      "required": [
            "type",
            "date",
            "tenant_id",
            "env_id",
            "active_users"
      ]
}
    }
  }
};

export { apiTool };
