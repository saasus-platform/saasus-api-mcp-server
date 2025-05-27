/**
 * Get Env Details
 * Get environment details.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/envs/{env_id}',
  [{"name":"env_id","type":"string","required":true,"description":"Env ID"}],
  [],
  {"properties":{},"required":[]},
  'getEnv'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getenv',
      description: `Get Env Details: Get environment details. `,
      parameters: {
      "type": "object",
      "properties": {
            "env_id": {
                  "type": "string",
                  "description": "Env ID"
            }
      },
      "required": [
            "env_id"
      ]
}
    }
  }
};

export { apiTool };
