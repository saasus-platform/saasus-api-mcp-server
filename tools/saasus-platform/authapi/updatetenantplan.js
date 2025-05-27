/**
 * Update Tenant Plan Information
 * Update SaaSus Platform tenant plan information.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'put',
  '/tenants/{tenant_id}/plans',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"}],
  [],
  {"properties":{"next_plan_id":{"type":"string","example":"69e732d6-8ecc-45c4-c2eb-8438f7ffe775"},"using_next_plan_from":{"type":"integer","example":1640995200,"description":"Next billing plan start time (When using stripe, you can create a subscription that starts at the beginning of the current month by specifying 00:00 (UTC) at the beginning of the current month. Ex. 1672531200 for January 2023.)\n","x-description-i18n":{"jpn":"次回料金プラン開始日時（stripe連携時、当月月初の0時（UTC）を指定すると当月月初開始のサブスクリプションを作成できます。ex. 2023年1月の場合は、1672531200 ）\n"}},"next_plan_tax_rate_id":{"type":"string","example":"69e732d6-8ecc-45c4-c2eb-8438f7ffe775"},"proration_behavior":{"type":"string","title":"Proration Behavior When Changing Plans","x-title-i18n":{"jpn":"プラン変更時の比例配分の挙動"},"description":"If you have a strine linkage, you can set the behavior of the proportional allocation when changing plans.\nWhen a plan is changed, you can set whether to prorate the billing amount and reflect it on the next invoice, to issue a prorated invoice immediately, or not to prorate at all.\n","x-description-i18n":{"jpn":"stripe連携している場合で、プラン変更時の比例配分の挙動を設定できます。\nプラン変更した場合に、請求金額を日割り計算し次回請求書に反映させるか、日割り計算した請求を即時に発行する、日割り計算をしないを設定できます。\n"},"enum":["create_prorations","none","always_invoice"]},"delete_usage":{"type":"boolean","title":"Proration Behavior When Changing Plans","x-title-i18n":{"jpn":"プラン変更時の従量課金アイテムの削除"},"description":"If you have a stripe linkage,  you can set whether to delete pay-as-you-go items when changing plans.\nWhen you change plan, you can remove all pay-as-you-go items included in your current subscription to stop being billed based on pay-as-you-go items.\nThe recorded usage is cleared immediately. Since it cannot be restored, please note that plan change reservations with delete_usage set to true cannot be canceled.\n","x-description-i18n":{"jpn":"stripe連携している場合で、プラン変更時に従量課金アイテムを削除するか設定できます。\nプラン変更した場合に、現在のサブスクリプションに含まれる従量課金アイテムを全て削除して、従量課金アイテムに基づく請求の発生を止めることができます。\n即時に記録している使用量がクリアされます。それらは復元できないため、delete_usageをtrueにしたプラン変更予約は取り消しできません。\n"}}},"required":[]},
  'updateTenantPlan'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatetenantplan',
      description: `Update Tenant Plan Information: Update SaaSus Platform tenant plan information. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": "Tenant ID"
            },
            "next_plan_id": {
                  "type": "string",
                  "description": ""
            },
            "using_next_plan_from": {
                  "type": "number",
                  "description": "Next billing plan start time (When using stripe, you can create a subscription that starts at the beginning of the current month by specifying 00:00 (UTC) at the beginning of the current month. Ex. 1672531200 for January 2023.)\n"
            },
            "next_plan_tax_rate_id": {
                  "type": "string",
                  "description": ""
            },
            "proration_behavior": {
                  "type": "string",
                  "description": "If you have a strine linkage, you can set the behavior of the proportional allocation when changing plans.\nWhen a plan is changed, you can set whether to prorate the billing amount and reflect it on the next invoice, to issue a prorated invoice immediately, or not to prorate at all.\n",
                  "enum": [
                        "create_prorations",
                        "none",
                        "always_invoice"
                  ]
            },
            "delete_usage": {
                  "type": "boolean",
                  "description": "If you have a stripe linkage,  you can set whether to delete pay-as-you-go items when changing plans.\nWhen you change plan, you can remove all pay-as-you-go items included in your current subscription to stop being billed based on pay-as-you-go items.\nThe recorded usage is cleared immediately. Since it cannot be restored, please note that plan change reservations with delete_usage set to true cannot be canceled.\n"
            }
      },
      "required": [
            "tenant_id"
      ]
}
    }
  }
};

export { apiTool };
