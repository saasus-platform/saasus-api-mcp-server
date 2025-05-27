/**
 * Get Feedbacks
 * Get the list of feedbacks.
 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/communication',
  'get',
  '/feedbacks',
  [],
  [],
  {"properties":{},"required":[]},
  'getFeedbacks'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getfeedbacks',
      description: `Get Feedbacks: Get the list of feedbacks.`,
      parameters: {
      "type": "object",
      "properties": {},
      "required": []
}
    }
  }
};

export { apiTool };
