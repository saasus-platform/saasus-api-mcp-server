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
  [{"name":"created_date","type":"string","required":false,"description":"The date, in format of YYYY-MM-DD, to retrieve the log."},{"name":"created_at","type":"string","required":false,"description":"The datetime, in ISO 8601 format, to retrieve the log. Cannot be specified together with start_at/end_at."},{"name":"limit","type":"number","required":false,"description":"Maximum number of logs to retrieve."},{"name":"start_at","type":"number","required":false,"description":"The start of the search range as an epoch second timestamp. Used for range search. Cannot be specified together with created_at. When specified, created_date is ignored."},{"name":"end_at","type":"number","required":false,"description":"The end of the search range as an epoch second timestamp. Used for range search. Cannot be specified together with created_at. When specified, created_date is ignored."},{"name":"cursor","type":"string","required":false,"description":"Cursor for cursor pagination."}],
  {"properties":{},"required":[]},
  'getLogs'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  httpMethod: 'get',
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
                  "description": "The datetime, in ISO 8601 format, to retrieve the log. Cannot be specified together with start_at/end_at."
            },
            "limit": {
                  "type": "number",
                  "description": "Maximum number of logs to retrieve."
            },
            "start_at": {
                  "type": "number",
                  "description": "The start of the search range as an epoch second timestamp. Used for range search. Cannot be specified together with created_at. When specified, created_date is ignored."
            },
            "end_at": {
                  "type": "number",
                  "description": "The end of the search range as an epoch second timestamp. Used for range search. Cannot be specified together with created_at. When specified, created_date is ignored."
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
