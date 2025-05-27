/**
 * Verify Registration Token
 * Verify Registration Token.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/awsmarketplace',
  'post',
  '/registration-token/verify',
  [],
  [],
  {"properties":{"registration_token":{"type":"string","example":"registration_token"}},"required":["registration_token"]},
  'verifyRegistrationToken'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'verifyregistrationtoken',
      description: `Verify Registration Token: Verify Registration Token. `,
      parameters: {
      "type": "object",
      "properties": {
            "registration_token": {
                  "type": "string",
                  "description": ""
            }
      },
      "required": [
            "registration_token"
      ]
}
    }
  }
};

export { apiTool };
