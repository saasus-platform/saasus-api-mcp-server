/**
 * Create Env Info
 * Create environment information.
Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/envs',
  [],
  [],
  {"properties":{"id":{"type":"integer","x-go-type":"uint64","example":1},"name":{"type":"string","example":"saasus_dev","description":"env name","x-description-i18n":{"jpn":"環境名"}},"display_name":{"type":"string","example":"SaaSus dev","description":"env display name","x-description-i18n":{"jpn":"環境表示名"}}},"required":["id","name"]},
  'createEnv'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createenv',
      description: `Create Env Info: Create environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation. `,
      parameters: {
      "type": "object",
      "properties": {
            "id": {
                  "type": "number",
                  "description": ""
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
            "id",
            "name"
      ]
}
    }
  }
};

export { apiTool };
