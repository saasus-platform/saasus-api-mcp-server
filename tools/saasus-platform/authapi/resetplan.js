/**
 * Delete all information related to rate plans
 * Delete all information related to rate plans.
Delete plans linked to tenants and plan definitions.
If you are using the Stripe linkage, the linkage will be removed.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'put',
  '/plans/reset',
  [],
  [],
  {"properties":{},"required":[]},
  'resetPlan'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'resetplan',
      description: `Delete all information related to rate plans: Delete all information related to rate plans. Delete plans linked to tenants and plan definitions. If you are using the Stripe linkage, the linkage will be removed. `,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
