/**
 * Acquisition of user behavior history
 * Obtain user activity history for the past month.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/analysis',
  'get',
  '/users/{user_id}/behavior-histories',
  [{"name":"user_id","type":"string","required":true,"description":"User ID"}],
  [],
  {"properties":{},"required":[]},
  'getUserBehaviorHistories'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getuserbehaviorhistories',
      description: `Acquisition of user behavior history: Obtain user activity history for the past month. `,
      parameters: {
      "type": "object",
      "properties": {
            "user_id": {
                  "type": "string",
                  "description": "User ID"
            }
      },
      "required": [
            "user_id"
      ]
}
    }
  }
};

export { apiTool };
