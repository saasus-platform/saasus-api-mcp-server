/**
 * Create Tenant Invitation
 * Create an invitation to the tenant.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/tenants/{tenant_id}/invitations',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"}],
  [],
  {"properties":{"email":{"title":"Email Address","x-title-i18n":{"jpn":"メールアドレス"},"description":"Email address of the user to be invited","x-description-i18n":{"jpn":"招待するユーザーのメールアドレス"},"type":"string","example":"test@example.com"},"access_token":{"title":"Access Token","x-title-i18n":{"jpn":"アクセストークン"},"description":"Access token of the user who creates an invitation","x-description-i18n":{"jpn":"招待を作成するユーザーのアクセストークン"},"type":"string"},"envs":{"title":"Invited User Environment Information","x-title-i18n":{"jpn":"招待するユーザーの環境情報"},"type":"array","items":{"type":"object","properties":{"id":{"type":"integer","x-go-type":"uint64","example":1},"role_names":{"title":"Role Name","x-title-i18n":{"jpn":"役割名"},"description":"Role name","x-description-i18n":{"jpn":"役割名"},"type":"array","items":{"type":"string","example":"admin"}}},"required":["id","role_names"]}}},"required":["email","access_token","envs"]},
  'createTenantInvitation'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'createtenantinvitation',
      description: `Create Tenant Invitation: Create an invitation to the tenant. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": "Tenant ID"
            },
            "email": {
                  "type": "string",
                  "description": "Email address of the user to be invited"
            },
            "access_token": {
                  "type": "string",
                  "description": "Access token of the user who creates an invitation"
            },
            "envs": {
                  "type": "array",
                  "description": "",
                  "items": {
                        "type": "object",
                        "properties": {
                              "id": {
                                    "type": "integer",
                                    "x-go-type": "uint64",
                                    "example": 1
                              },
                              "role_names": {
                                    "title": "Role Name",
                                    "x-title-i18n": {
                                          "jpn": "役割名"
                                    },
                                    "description": "Role name",
                                    "x-description-i18n": {
                                          "jpn": "役割名"
                                    },
                                    "type": "array",
                                    "items": {
                                          "type": "string",
                                          "example": "admin"
                                    }
                              }
                        },
                        "required": [
                              "id",
                              "role_names"
                        ]
                  }
            }
      },
      "required": [
            "tenant_id",
            "email",
            "access_token",
            "envs"
      ]
}
    }
  }
};

export { apiTool };
