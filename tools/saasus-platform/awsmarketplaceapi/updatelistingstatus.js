/**
 * Update AWS Marketplace Listing Status
 * Update AWS Marketplace Listing Status.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/awsmarketplace',
  'put',
  '/listing-status',
  [],
  [],
  {"properties":{"listing_status":{"title":"AWS Marketplace Listing Status","x-title-i18n":{"jpn":"AWS Marketplace出品状況"},"type":"string","enum":["no_listing","first_step_working","first_step_completed","second_step_working","second_step_plan_created","second_step_completed","third_step_working","third_step_completed","limited","restricted","public"]}},"required":["listing_status"]},
  'updateListingStatus'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatelistingstatus',
      description: `Update AWS Marketplace Listing Status: Update AWS Marketplace Listing Status. `,
      parameters: {
      "type": "object",
      "properties": {
            "listing_status": {
                  "type": "string",
                  "description": "",
                  "enum": [
                        "no_listing",
                        "first_step_working",
                        "first_step_completed",
                        "second_step_working",
                        "second_step_plan_created",
                        "second_step_completed",
                        "third_step_working",
                        "third_step_completed",
                        "limited",
                        "restricted",
                        "public"
                  ]
            }
      },
      "required": [
            "listing_status"
      ]
}
    }
  }
};

export { apiTool };
