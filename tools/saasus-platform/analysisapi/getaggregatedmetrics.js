/**
 * Get aggregated metrics
 * Get aggregated metrics by type and date range.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/analysis',
  'get',
  '/metrics/aggregated',
  [],
  [{"name":"metrics_type","type":"string","required":true,"description":"Metrics type","enum":["create_tenant","create_saas_user","create_tenant_user"]},{"name":"start_date","type":"string","required":true,"description":"Start date (YYYY-MM-DD)"},{"name":"end_date","type":"string","required":true,"description":"End date (YYYY-MM-DD)"},{"name":"tenant_ids","type":"array","required":false,"description":"Tenant IDs","items":{"type":"string","example":"f94bfffc-8be2-11ec-b41a-0242ac120004"}}],
  {"properties":{},"required":[]},
  'getAggregatedMetrics'
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
      name: 'getaggregatedmetrics',
      description: `Get aggregated metrics: Get aggregated metrics by type and date range. `,
      parameters: {
      "type": "object",
      "properties": {
            "metrics_type": {
                  "type": "string",
                  "description": "Metrics type",
                  "enum": [
                        "create_tenant",
                        "create_saas_user",
                        "create_tenant_user"
                  ]
            },
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
            "metrics_type",
            "start_date",
            "end_date"
      ]
}
    }
  }
};

export { apiTool };
