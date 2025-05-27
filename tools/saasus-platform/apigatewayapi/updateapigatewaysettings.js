/**
 * Update configuration information for api gateway function
 * Update configuration information for api gateway function.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'patch',
  '/settings',
  [],
  [],
  {"properties":{"role_arn":{"title":"ARN of the role to be AssumeRole","x-title-i18n":{"jpn":"AssumeRoleするためのロールのARN"},"description":"ARN of the role for SaaSus Platform to AssumeRole","x-description-i18n":{"jpn":"SaaSus PlatformがAssumeRoleするためのロールのARN"},"type":"string","example":"arn:aws:iam::123456789012:role/role-name"},"role_external_id":{"title":"External id to use when AssumeRole","x-title-i18n":{"jpn":"AssumeRoleする時に使用するExternalID"},"description":"External id used by SaaSus when AssumeRole to operate SaaS","x-description-i18n":{"jpn":"SaaSus PlatformがSaaSを操作するためにAssumeRoleする時に使用するexternal id"},"type":"string","example":1234567890},"internal_endpoint_health_check_path":{"title":"Internal endpoint health check path","x-title-i18n":{"jpn":"インターナルエンドポイントのヘルスチェックパス"},"description":"The path to be used for health checks on the internal endpoint.","x-description-i18n":{"jpn":"インターナルエンドポイントのヘルスチェックに使用するパス"},"type":"string","example":"/health"},"internal_endpoint_health_check_port":{"title":"Internal endpoint health check port","x-title-i18n":{"jpn":"インターナルエンドポイントのヘルスチェックポート"},"description":"The port to be used for health checks on the internal endpoint.","x-description-i18n":{"jpn":"インターナルエンドポイントのヘルスチェックに使用するポート"},"type":"integer","example":80},"internal_endpoint_health_check_protocol":{"title":"Internal endpoint health check protocol","x-title-i18n":{"jpn":"インターナルエンドポイントのヘルスチェックプロトコル"},"description":"The protocol to be used for health checks on the internal endpoint.","x-description-i18n":{"jpn":"インターナルエンドポイントのヘルスチェックに使用するプロトコル"},"type":"string","example":"HTTP or HTTPS"},"internal_endpoint_health_status_codes":{"title":"Internal endpoint health check status codes","x-title-i18n":{"jpn":"インターナルエンドポイントのヘルスチェックステータスコード"},"description":"The status codes to be used for health checks on the internal endpoint.","x-description-i18n":{"jpn":"インターナルエンドポイントのヘルスチェックに使用するステータスコード"},"type":"string","example":200},"saas_subnet_ids":{"title":"SaaS Subnet IDs","x-title-i18n":{"jpn":"SaaSサブネットID"},"description":"Subnet IDs for SaaS","x-description-i18n":{"jpn":"SaaSのサブネットID"},"type":"array","items":{"type":"string"},"example":["subnet-1234567890abcdef0","subnet-1234567890abcdef1"]},"saas_vpc_id":{"title":"SaaS VPC ID","x-title-i18n":{"jpn":"SaaS VPC ID"},"description":"VPC ID for SaaS","x-description-i18n":{"jpn":"SaaSのVPC ID"},"type":"string","example":"vpc-12345678"},"domain_name":{"type":"string","example":"dev.saasus.io","description":"Domain Name","x-description-i18n":{"jpn":"ドメイン名"}},"saas_alb_arn":{"title":"SaaS Application Load Balancer ARN","x-title-i18n":{"jpn":"SaaS アプリケーションロードバランサーARN"},"description":"SaaS Application Load Balancer ARN","x-description-i18n":{"jpn":"SaaS アプリケーションロードバランサーARN"},"type":"string","example":"arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188"},"endpoint_settings_list":{"title":"Endpoint Settings List","x-title-i18n":{"jpn":"エンドポイント設定一覧"},"description":"Endpoint Settings List","x-description-i18n":{"jpn":"エンドポイント毎の設定一覧"},"type":"array","items":{"title":"Endpoint Settings","x-title-i18n":{"jpn":"エンドポイント設定"},"description":"Settings per endpoint","x-description-i18n":{"jpn":"エンドポイント毎の設定"},"type":"object","properties":{"path":{"title":"Path","x-title-i18n":{"jpn":"パス"},"description":"Path","x-description-i18n":{"jpn":"パス"},"type":"string","example":"/users/get-by-id"},"method":{"title":"Method","x-title-i18n":{"jpn":"メソッド"},"description":"Method","x-description-i18n":{"jpn":"メソッド"},"type":"string","enum":["GET","HEAD","POST","PUT","PATCH","DELETE","CONNECT","OPTIONS","TRACE"],"example":"GET"},"throttling":{"title":"Throttling Settings","x-title-i18n":{"jpn":"スロットリング設定"},"type":"object","description":"Permit requests up to the limit number of times within a range (seconds) time for each target.","x-description-i18n":{"jpn":"targetごとにrange（秒）の時間内にlimitの回数までリクエストを許可します。"},"properties":{"target":{"title":"Target","x-title-i18n":{"jpn":"対象"},"description":"Target of restriction","x-description-i18n":{"jpn":"制限対象"},"type":"string","enum":["tenant","user"],"example":"tenant"},"range":{"title":"range","x-title-i18n":{"jpn":"範囲"},"description":"Throttling time range (seconds)","x-description-i18n":{"jpn":"スロットリングの時間範囲（秒）"},"type":"integer","minimum":60,"maximum":31536000,"example":600},"limit":{"title":"limit","x-title-i18n":{"jpn":"上限"},"description":"Throttling limit","x-description-i18n":{"jpn":"スロットリングの上限"},"type":"integer","example":100}},"required":["target","range","limit"]},"role_names":{"title":"Role Names","x-title-i18n":{"jpn":"役割(ロール)名"},"description":"Role names that can access the endpoint","x-description-i18n":{"jpn":"エンドポイントにアクセスできる役割名"},"type":"array","items":{"type":"string","example":"admin"}}},"required":["path","method"]}},"tenant_routing_type":{"title":"Tenant Routing Type","x-title-i18n":{"jpn":"テナントルーティングタイプ"},"description":"Tenant Routing Type","x-description-i18n":{"jpn":"テナントルーティングタイプ"},"type":"string","enum":["path","hostName","headerValue","none"],"example":"path"}},"required":[]},
  'updateApiGatewaySettings'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updateapigatewaysettings',
      description: `Update configuration information for api gateway function: Update configuration information for api gateway function. `,
      parameters: {
      "type": "object",
      "properties": {
            "role_arn": {
                  "type": "string",
                  "description": "ARN of the role for SaaSus Platform to AssumeRole"
            },
            "role_external_id": {
                  "type": "string",
                  "description": "External id used by SaaSus when AssumeRole to operate SaaS"
            },
            "internal_endpoint_health_check_path": {
                  "type": "string",
                  "description": "The path to be used for health checks on the internal endpoint."
            },
            "internal_endpoint_health_check_port": {
                  "type": "number",
                  "description": "The port to be used for health checks on the internal endpoint."
            },
            "internal_endpoint_health_check_protocol": {
                  "type": "string",
                  "description": "The protocol to be used for health checks on the internal endpoint."
            },
            "internal_endpoint_health_status_codes": {
                  "type": "string",
                  "description": "The status codes to be used for health checks on the internal endpoint."
            },
            "saas_subnet_ids": {
                  "type": "array",
                  "description": "Subnet IDs for SaaS",
                  "items": {
                        "type": "string"
                  }
            },
            "saas_vpc_id": {
                  "type": "string",
                  "description": "VPC ID for SaaS"
            },
            "domain_name": {
                  "type": "string",
                  "description": "Domain Name"
            },
            "saas_alb_arn": {
                  "type": "string",
                  "description": "SaaS Application Load Balancer ARN"
            },
            "endpoint_settings_list": {
                  "type": "array",
                  "description": "Endpoint Settings List",
                  "items": {
                        "title": "Endpoint Settings",
                        "x-title-i18n": {
                              "jpn": "エンドポイント設定"
                        },
                        "description": "Settings per endpoint",
                        "x-description-i18n": {
                              "jpn": "エンドポイント毎の設定"
                        },
                        "type": "object",
                        "properties": {
                              "path": {
                                    "title": "Path",
                                    "x-title-i18n": {
                                          "jpn": "パス"
                                    },
                                    "description": "Path",
                                    "x-description-i18n": {
                                          "jpn": "パス"
                                    },
                                    "type": "string",
                                    "example": "/users/get-by-id"
                              },
                              "method": {
                                    "title": "Method",
                                    "x-title-i18n": {
                                          "jpn": "メソッド"
                                    },
                                    "description": "Method",
                                    "x-description-i18n": {
                                          "jpn": "メソッド"
                                    },
                                    "type": "string",
                                    "enum": [
                                          "GET",
                                          "HEAD",
                                          "POST",
                                          "PUT",
                                          "PATCH",
                                          "DELETE",
                                          "CONNECT",
                                          "OPTIONS",
                                          "TRACE"
                                    ],
                                    "example": "GET"
                              },
                              "throttling": {
                                    "title": "Throttling Settings",
                                    "x-title-i18n": {
                                          "jpn": "スロットリング設定"
                                    },
                                    "type": "object",
                                    "description": "Permit requests up to the limit number of times within a range (seconds) time for each target.",
                                    "x-description-i18n": {
                                          "jpn": "targetごとにrange（秒）の時間内にlimitの回数までリクエストを許可します。"
                                    },
                                    "properties": {
                                          "target": {
                                                "title": "Target",
                                                "x-title-i18n": {
                                                      "jpn": "対象"
                                                },
                                                "description": "Target of restriction",
                                                "x-description-i18n": {
                                                      "jpn": "制限対象"
                                                },
                                                "type": "string",
                                                "enum": [
                                                      "tenant",
                                                      "user"
                                                ],
                                                "example": "tenant"
                                          },
                                          "range": {
                                                "title": "range",
                                                "x-title-i18n": {
                                                      "jpn": "範囲"
                                                },
                                                "description": "Throttling time range (seconds)",
                                                "x-description-i18n": {
                                                      "jpn": "スロットリングの時間範囲（秒）"
                                                },
                                                "type": "integer",
                                                "minimum": 60,
                                                "maximum": 31536000,
                                                "example": 600
                                          },
                                          "limit": {
                                                "title": "limit",
                                                "x-title-i18n": {
                                                      "jpn": "上限"
                                                },
                                                "description": "Throttling limit",
                                                "x-description-i18n": {
                                                      "jpn": "スロットリングの上限"
                                                },
                                                "type": "integer",
                                                "example": 100
                                          }
                                    },
                                    "required": [
                                          "target",
                                          "range",
                                          "limit"
                                    ]
                              },
                              "role_names": {
                                    "title": "Role Names",
                                    "x-title-i18n": {
                                          "jpn": "役割(ロール)名"
                                    },
                                    "description": "Role names that can access the endpoint",
                                    "x-description-i18n": {
                                          "jpn": "エンドポイントにアクセスできる役割名"
                                    },
                                    "type": "array",
                                    "items": {
                                          "type": "string",
                                          "example": "admin"
                                    }
                              }
                        },
                        "required": [
                              "path",
                              "method"
                        ]
                  }
            },
            "tenant_routing_type": {
                  "type": "string",
                  "description": "Tenant Routing Type",
                  "enum": [
                        "path",
                        "hostName",
                        "headerValue",
                        "none"
                  ]
            }
      },
      "required": []
}
    }
  }
};

export { apiTool };
