/**
 * Get API execution log list
 * Retrieve the log of all API executions.
 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apilog',
  'get',
  '/logs',
  [],
  [{"name":"created_date","type":"string","required":false,"description":"The date, in format of YYYY-MM-DD, to retrieve the log."},{"name":"created_at","type":"string","required":false,"description":"The datetime, in ISO 8601 format, to retrieve the log."},{"name":"limit","type":"number","required":false,"description":"Maximum number of logs to retrieve."},{"name":"cursor","type":"string","required":false,"description":"Cursor for cursor pagination."}],
  {"properties":{},"required":[]},
  'getLogs'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getlogs',
      description: `Get API execution log list: Retrieve the log of all API executions.`,
      parameters: {
      "type": "object",
      "properties": {
            "created_date": {
                  "type": "string",
                  "description": "The date, in format of YYYY-MM-DD, to retrieve the log."
            },
            "created_at": {
                  "type": "string",
                  "description": "The datetime, in ISO 8601 format, to retrieve the log."
            },
            "limit": {
                  "type": "number",
                  "description": "Maximum number of logs to retrieve."
            },
            "cursor": {
                  "type": "string",
                  "description": "Cursor for cursor pagination."
            }
      },
      "required": []
}
    }
  }
};

export { apiTool };
