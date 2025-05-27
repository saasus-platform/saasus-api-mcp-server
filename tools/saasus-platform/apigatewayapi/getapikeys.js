/**
 * API key list or get API key by condition
 * The response content changes based on the combination of parameters tenant_id, env_id, and user_id.
- If tenant_id is not specified, the full list is returned.
- If only tenant_id is specified, the API keys within that tenant are returned.
- If tenant_id and env_id are specified, the keys are filtered by the environment.
- If tenant_id, env_id, and user_id are specified, a complete match returns the API keys for the target user.
- Additionally, searching is supported even when only env_id or only user_id are provided.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'get',
  '/api-keys',
  [],
  [{"name":"tenant_id","type":"string","required":false,"description":"If specified, the API keys for the target tenant are returned.\n"},{"name":"env_id","type":"number","required":false,"description":"If specified, the API keys for the target environment are returned.\n"},{"name":"user_id","type":"string","required":false,"description":"If specified, the API keys for the target user (up to 2) are returned.\n"},{"name":"tenant_only","type":"boolean","required":false,"description":"If true, only API keys that do not have a User_id specified are returned.\n"}],
  {"properties":{},"required":[]},
  'getApiKeys'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getapikeys',
      description: `API key list or get API key by condition: The response content changes based on the combination of parameters tenant_id, env_id, and user_id. - If tenant_id is not specified, the full list is returned. - If only tenant_id is specified, the API keys within that tenant are returned. - If tenant_id and env_id are specified, the keys are filtered by the environment. - If tenant_id, env_id, and user_id are specified, a complete match returns the API keys for the target user. - Additionally, searching is supported even when only env_id or only user_id are provided. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": "If specified, the API keys for the target tenant are returned.\n"
            },
            "env_id": {
                  "type": "number",
                  "description": "If specified, the API keys for the target environment are returned.\n"
            },
            "user_id": {
                  "type": "string",
                  "description": "If specified, the API keys for the target user (up to 2) are returned.\n"
            },
            "tenant_only": {
                  "type": "boolean",
                  "description": "If true, only API keys that do not have a User_id specified are returned.\n"
            }
      },
      "required": []
}
    }
  }
};

export { apiTool };
