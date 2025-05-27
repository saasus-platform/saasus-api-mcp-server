/**
 * Delete Env Info
 * Delete env info. Env with id 3 cannot be deleted.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'delete',
  '/envs/{env_id}',
  [{"name":"env_id","type":"string","required":true,"description":"Env ID"}],
  [],
  {"properties":{},"required":[]},
  'deleteEnv'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'deleteenv',
      description: `Delete Env Info: Delete env info. Env with id 3 cannot be deleted. `,
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
