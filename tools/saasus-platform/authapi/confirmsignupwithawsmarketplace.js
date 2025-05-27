/**
 * Confirm Sign Up with AWS Marketplace
 * Confirm a new use registeration linked to AWS Marketplace. Create a new tenant linked to AWS Marketplace.
If the Registration Token is not valid, an error is returned.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'post',
  '/aws-marketplace/sign-up-confirm',
  [],
  [],
  {"properties":{"tenant_name":{"title":"Tenant Name","x-title-i18n":{"jpn":"テナント名"},"description":"Tenant name","x-description-i18n":{"jpn":"テナント名"},"type":"string"},"access_token":{"title":"Access Token","x-title-i18n":{"jpn":"アクセストークン"},"description":"Access token","x-description-i18n":{"jpn":"アクセストークン"},"type":"string"},"registration_token":{"title":"Registration Token","x-title-i18n":{"jpn":"登録トークン"},"description":"Registration Token","x-description-i18n":{"jpn":"登録トークン"},"type":"string"}},"required":["access_token","registration_token"]},
  'confirmSignUpWithAwsMarketplace'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'confirmsignupwithawsmarketplace',
      description: `Confirm Sign Up with AWS Marketplace: Confirm a new use registeration linked to AWS Marketplace. Create a new tenant linked to AWS Marketplace. If the Registration Token is not valid, an error is returned. `,
      parameters: {
      "type": "object",
      "properties": {
            "tenant_name": {
                  "type": "string",
                  "description": "Tenant name"
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
            "access_token",
            "registration_token"
      ]
}
    }
  }
};

export { apiTool };
