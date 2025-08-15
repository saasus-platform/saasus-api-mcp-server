/**
 * Update tenant information
 * Update tenant information.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'patch',
  '/tenants/{tenant_id}',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"}],
  [],
  {"properties":{"allowed_ips":{"title":"Allowed IP addresses","x-title-i18n":{"jpn":"許可されたIPアドレス一覧"},"description":"Allowed IP addresses in CIDR format","x-description-i18n":{"jpn":"CIDR形式で指定された許可IPアドレス一覧"},"type":"array","items":{"type":"string"},"example":["192.168.0.0/24","172.16.0.0/24"]},"routing":{"title":"Tenant Routing","x-title-i18n":{"jpn":"テナントルーティング"},"description":"Information about tenant routing.\nRefer to the tenant_routing_type in ApiGatewaySettings and route the request.\n","x-description-i18n":{"jpn":"テナントのルーティングに関する情報。\nApiGatewaySettings の tenant_routing_type に対応する情報を参照し、リクエストをルーティングします。\n"},"type":"object","properties":{"path":{"title":"Path","x-title-i18n":{"jpn":"パス"},"description":"Path for each tenant","x-description-i18n":{"jpn":"テナント毎のパス"},"type":"string","example":"/4c4eefe8-35fd-4e51-8bd4-798e090e439d"},"header_key":{"title":"Header Key","x-title-i18n":{"jpn":"ヘッダーキー"},"description":"Header key to specify the tenant identifier","x-description-i18n":{"jpn":"テナントの識別子を設定するヘッダーのキー名"},"type":"string","example":"x-tenant-id"},"header_value":{"title":"Header Value","x-title-i18n":{"jpn":"ヘッダー値"},"description":"Tenant identifier set in header key","x-description-i18n":{"jpn":"ヘッダーキーに設定されるテナントの識別子"},"type":"string","example":"4c4eefe8-35fd-4e51-8bd4-798e090e439d"},"host_name":{"title":"Host Name","x-title-i18n":{"jpn":"ホスト名"},"description":"Host Name for each tenant","x-description-i18n":{"jpn":"テナント毎のホスト名"},"type":"string","example":"tenantid.api.samplesaas.saasus.io"}}}},"required":[]},
  'updateTenant'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatetenant',
      description: `Update tenant information: Update tenant information. `,
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
            },
            "routing": {
                  "type": "object",
                  "description": "Information about tenant routing.\nRefer to the tenant_routing_type in ApiGatewaySettings and route the request.\n"
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
