/**
 * Get API execution log
 * Retrieve the log of the API execution with the specified ID.
 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apilog',
  'get',
  '/logs/{api_log_id}',
  [{"name":"api_log_id","type":"string","required":true,"description":"API Log ID"}],
  [],
  {"properties":{},"required":[]},
  'getLog'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getlog',
      description: `Get API execution log: Retrieve the log of the API execution with the specified ID.`,
      parameters: {
      "type": "object",
      "properties": {
            "api_log_id": {
                  "type": "string",
                  "description": "API Log ID"
            }
      },
      "required": [
            "api_log_id"
      ]
}
    }
  }
};

export { apiTool };
