/**
 * Update Env Info
 * Update env info.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'patch',
  '/envs/{env_id}',
  [{"name":"env_id","type":"string","required":true,"description":"Env ID"}],
  [],
  {"properties":{"name":{"type":"string","example":"saasus_dev","description":"env name","x-description-i18n":{"jpn":"環境名"}},"display_name":{"type":"string","example":"SaaSus dev","description":"env display name","x-description-i18n":{"jpn":"環境表示名"}}},"required":["name"]},
  'updateEnv'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updateenv',
      description: `Update Env Info: Update env info. `,
      parameters: {
      "type": "object",
      "properties": {
            "env_id": {
                  "type": "string",
                  "description": "Env ID"
            },
            "name": {
                  "type": "string",
                  "description": "env name"
            },
            "display_name": {
                  "type": "string",
                  "description": "env display name"
            }
      },
      "required": [
            "env_id",
            "name"
      ]
}
    }
  }
};

export { apiTool };
