/**
 * Update identity provider per tenant
 * Update sign-in information via external identity provider per tenant.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'put',
  '/tenants/{tenant_id}/identity-providers',
  [{"name":"tenant_id","type":"string","required":true,"description":"Tenant ID"}],
  [],
  {"properties":{"provider_type":{"type":"string","enum":["SAML"],"example":"SAML"},"identity_provider_props":{"title":"SAML Identity Provider","x-title-i18n":{"jpn":"SAML外部IDプロバイダ"},"type":"object","properties":{"metadata_url":{"type":"string","example":"https://example.com/saml/metadata"},"email_attribute":{"type":"string","example":"email"}},"required":["metadata_url","email_attribute"]}},"required":["provider_type"]},
  'updateTenantIdentityProvider'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatetenantidentityprovider',
      description: `Update identity provider per tenant: Update sign-in information via external identity provider per tenant. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": "Tenant ID"
            },
            "provider_type": {
                  "type": "string",
                  "description": "",
                  "enum": [
                        "SAML"
                  ]
            },
            "identity_provider_props": {
                  "type": "object",
                  "description": ""
            }
      },
      "required": [
            "tenant_id",
            "provider_type"
      ]
}
    }
  }
};

export { apiTool };
