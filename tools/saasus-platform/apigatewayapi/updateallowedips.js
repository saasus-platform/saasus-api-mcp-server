/**
 * Update allowed IP addresses for the tenant
 * Update allowed IP addresses for the tenant.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'patch',
  '/tenants/{tenant_id}/allowed-ips',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"}],
  [],
  {"properties":{"allowed_ips":{"title":"Allowed IP addresses","x-title-i18n":{"jpn":"許可されたIPアドレス一覧"},"description":"Allowed IP addresses in CIDR format","x-description-i18n":{"jpn":"CIDR形式で指定された許可IPアドレス一覧"},"type":"array","items":{"type":"string"},"example":["192.168.0.0/24","172.16.0.0/24"]}},"required":["allowed_ips"]},
  'updateAllowedIps'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updateallowedips',
      description: `Update allowed IP addresses for the tenant: Update allowed IP addresses for the tenant. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": "Tenant ID"
            },
            "allowed_ips": {
                  "type": "array",
                  "description": "Allowed IP addresses in CIDR format",
                  "items": {
                        "type": "string"
                  }
            }
      },
      "required": [
            "tenant_id",
            "allowed_ips"
      ]
}
    }
  }
};

export { apiTool };
