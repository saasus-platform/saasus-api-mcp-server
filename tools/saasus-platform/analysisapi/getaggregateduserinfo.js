/**
 * Get aggregated userinfo call count
 * Get aggregated userinfo API call count by date range and tenants.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/analysis',
  'get',
  '/userinfo/aggregated',
  [],
  [{"name":"start_date","type":"string","required":true,"description":"Start date (YYYY-MM-DD)"},{"name":"end_date","type":"string","required":true,"description":"End date (YYYY-MM-DD)"},{"name":"tenant_ids","type":"array","required":false,"description":"Tenant IDs","items":{"type":"string","example":"f94bfffc-8be2-11ec-b41a-0242ac120004"}}],
  {"properties":{},"required":[]},
  'getAggregatedUserInfo'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'getaggregateduserinfo',
      description: `Get aggregated userinfo call count: Get aggregated userinfo API call count by date range and tenants. `,
      parameters: {
      "type": "object",
      "properties": {
            "start_date": {
                  "type": "string",
                  "description": "Start date (YYYY-MM-DD)"
            },
            "end_date": {
                  "type": "string",
                  "description": "End date (YYYY-MM-DD)"
            },
            "tenant_ids": {
                  "type": "array",
                  "description": "Tenant IDs",
                  "items": {
                        "type": "string",
                        "example": "f94bfffc-8be2-11ec-b41a-0242ac120004"
                  }
            }
      },
      "required": [
            "start_date",
            "end_date"
      ]
}
    }
  }
};

export { apiTool };
