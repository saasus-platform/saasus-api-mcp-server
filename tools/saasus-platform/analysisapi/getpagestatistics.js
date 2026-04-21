/**
 * Get Page Statistics
 * Get page statistics for the specified period.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/analysis',
  'get',
  '/metrics/page-statistics',
  [],
  [{"name":"start_timestamp","type":"number","required":true,"description":"Start timestamp of statistics period (UNIX timestamp)"},{"name":"end_timestamp","type":"number","required":true,"description":"End timestamp of statistics period (UNIX timestamp)"}],
  {"properties":{},"required":[]},
  'getPageStatistics'
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
      name: 'getpagestatistics',
      description: `Get Page Statistics: Get page statistics for the specified period. `,
      parameters: {
      "type": "object",
      "properties": {
            "start_timestamp": {
                  "type": "number",
                  "description": "Start timestamp of statistics period (UNIX timestamp)"
            },
            "end_timestamp": {
                  "type": "number",
                  "description": "End timestamp of statistics period (UNIX timestamp)"
            }
      },
      "required": [
            "start_timestamp",
            "end_timestamp"
      ]
}
    }
  }
};

export { apiTool };
