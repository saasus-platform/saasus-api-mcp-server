/**
 * Link an existing tenant with AWS Marketplace
 * Link an existing tenant with AWS Marketplace.
If the Registration Token is not valid, an error is returned.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'patch',
  '/aws-marketplace/link',
  [],
  [],
  {"properties":{"tenant_id":{"title":"Tenant ID","x-title-i18n":{"jpn":"テナントID"},"description":"Tenant ID","x-description-i18n":{"jpn":"テナントID"},"type":"string"},"access_token":{"title":"Access Token","x-title-i18n":{"jpn":"アクセストークン"},"description":"Access token","x-description-i18n":{"jpn":"アクセストークン"},"type":"string"},"registration_token":{"title":"Registration Token","x-title-i18n":{"jpn":"登録トークン"},"description":"Registration Token","x-description-i18n":{"jpn":"登録トークン"},"type":"string"}},"required":["tenant_id","access_token","registration_token"]},
  'linkAwsMarketplace'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'linkawsmarketplace',
      description: `Link an existing tenant with AWS Marketplace: Link an existing tenant with AWS Marketplace. If the Registration Token is not valid, an error is returned. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_id": {
                  "type": "string",
                  "description": "Tenant ID"
            },
            "access_token": {
                  "type": "string",
                  "description": "Access token"
            },
            "registration_token": {
                  "type": "string",
                  "description": "Registration Token"
            }
      },
      "required": [
            "tenant_id",
            "access_token",
            "registration_token"
      ]
}
    }
  }
};

export { apiTool };
