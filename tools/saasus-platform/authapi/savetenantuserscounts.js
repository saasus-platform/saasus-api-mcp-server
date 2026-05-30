/**
 * Save Tenant Users Count
 * Save the count of tenant users for each tenant.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/tenants/all/users/count',
  [],
  [],
  {"properties":{"tenant_user_counts":{"type":"array","maxItems":10000,"items":{"title":"Save Tenant User Count Parameter","x-title-i18n":{"jpn":"テナントユーザー数の保存パラメータ"},"type":"object","properties":{"tenant_id":{"type":"string","example":"69e732d6-8ecc-45c4-c2eb-8438f7ffe775"},"count":{"type":"integer","minimum":0,"example":5,"description":"Count of tenant users","x-description-i18n":{"jpn":"テナントユーザー数"}}},"required":["tenant_id","count"]}}},"required":["tenant_user_counts"]},
  'saveTenantUsersCounts'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  httpMethod: 'post',
  definition: {
    type: 'function',
    function: {
      name: 'savetenantuserscounts',
      description: `Save Tenant Users Count: Save the count of tenant users for each tenant. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_user_counts": {
                  "type": "array",
                  "description": "",
                  "items": {
                        "title": "Save Tenant User Count Parameter",
                        "x-title-i18n": {
                              "jpn": "テナントユーザー数の保存パラメータ"
                        },
                        "type": "object",
                        "properties": {
                              "tenant_id": {
                                    "type": "string",
                                    "example": "69e732d6-8ecc-45c4-c2eb-8438f7ffe775"
                              },
                              "count": {
                                    "type": "integer",
                                    "minimum": 0,
                                    "example": 5,
                                    "description": "Count of tenant users",
                                    "x-description-i18n": {
                                          "jpn": "テナントユーザー数"
                                    }
                              }
                        },
                        "required": [
                              "tenant_id",
                              "count"
                        ]
                  }
            }
      },
      "required": [
            "tenant_user_counts"
      ]
}
    }
  }
};

export { apiTool };
