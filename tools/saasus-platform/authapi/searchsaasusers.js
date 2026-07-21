/**
 * Search SaaS Users
 * Search SaaS users by user ID, email, or sign-in ID.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'get',
  '/users/search',
  [],
  [{"name":"id","type":"string","required":false,"description":"User ID"},{"name":"email","type":"string","required":false,"description":"Email prefix"},{"name":"sign_in_id","type":"string","required":false,"description":"Sign-in ID prefix"},{"name":"limit","type":"number","required":false,"description":"Maximum number of items to retrieve"},{"name":"cursor","type":"string","required":false,"description":"Cursor for cursor pagination"}],
  {"properties":{},"required":[]},
  'searchSaasUsers'
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
      name: 'searchsaasusers',
      description: `Search SaaS Users: Search SaaS users by user ID, email, or sign-in ID. `,
      parameters: {
      "type": "object",
      "properties": {
            "id": {
                  "type": "string",
                  "description": "User ID"
            },
            "email": {
                  "type": "string",
                  "description": "Email prefix"
            },
            "sign_in_id": {
                  "type": "string",
                  "description": "Sign-in ID prefix"
            },
            "limit": {
                  "type": "number",
                  "description": "Maximum number of items to retrieve"
            },
            "cursor": {
                  "type": "string",
                  "description": "Cursor for cursor pagination"
            }
      },
      "required": []
}
    }
  }
};

export { apiTool };
