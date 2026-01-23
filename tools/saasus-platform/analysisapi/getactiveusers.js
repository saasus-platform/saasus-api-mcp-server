/**
 * Get daily or monthly active users
 * Get daily or monthly active users information.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/analysis',
  'get',
  '/active-users',
  [],
  [{"name":"type","type":"string","required":true,"description":"Type of active users data (monthly or daily)","enum":["monthly","daily"]},{"name":"date_from","type":"string","required":true,"description":"Start date (YYYY-MM for monthly, YYYY-MM-DD for daily)"},{"name":"date_to","type":"string","required":false,"description":"End date (YYYY-MM for monthly, YYYY-MM-DD for daily). Optional."},{"name":"tenant_id","type":"string","required":false,"description":"Tenant ID (optional)"},{"name":"env_id","type":"string","required":false,"description":"Environment ID (optional, requires tenant_id)"}],
  {"properties":{},"required":[]},
  'getActiveUsers'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getactiveusers',
      description: `Get daily or monthly active users: Get daily or monthly active users information. `,
      parameters: {
      "type": "object",
      "properties": {
            "type": {
                  "type": "string",
                  "description": "Type of active users data (monthly or daily)",
                  "enum": [
                        "monthly",
                        "daily"
                  ]
            },
            "date_from": {
                  "type": "string",
                  "description": "Start date (YYYY-MM for monthly, YYYY-MM-DD for daily)"
            },
            "date_to": {
                  "type": "string",
                  "description": "End date (YYYY-MM for monthly, YYYY-MM-DD for daily). Optional."
            },
            "tenant_id": {
                  "type": "string",
                  "description": "Tenant ID (optional)"
            },
            "env_id": {
                  "type": "string",
                  "description": "Environment ID (optional, requires tenant_id)"
            }
      },
      "required": [
            "type",
            "date_from"
      ]
}
    }
  }
};

export { apiTool };
