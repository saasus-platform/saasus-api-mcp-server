/**
 * Update configuration information for single-tenant functionality
 * Updates configuration information for single-tenant functionality
Returns error if single tenant feature cannot be enabled.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/auth',
  'patch',
  '/single-tenant/settings',
  [],
  [],
  {"properties":{"enabled":{"title":"Enable Single Tenant settings or Not","x-title-i18n":{"jpn":"シングルテナント設定を有効にするか否か"},"description":"enable Single Tenant settings or not","x-description-i18n":{"jpn":"シングルテナント設定を有効にするか否か"},"type":"boolean"},"role_arn":{"title":"ARN of the role to be AssumeRole","x-title-i18n":{"jpn":"AssumeRoleするためのロールのARN"},"description":"ARN of the role for SaaS Platform to AssumeRole","x-description-i18n":{"jpn":"SaaS PlatformがAssumeRoleするためのロールのARN"},"type":"string","example":"arn:aws:iam::123456789012:role/role-name"},"cloudformation_template":{"title":"CloudFormation template file","x-title-i18n":{"jpn":"CloudFormationテンプレートファイル"},"description":"CloudFormation template file","x-description-i18n":{"jpn":"SaaS環境で実行するCloudFormationTemplateファイル"},"type":"string","format":"base64","example":"U3dhZ2dlciByb2Nrcw=="},"ddl_template":{"title":"ddl template file","x-title-i18n":{"jpn":"ddlテンプレートファイル"},"description":"ddl file to run in SaaS environment","x-description-i18n":{"jpn":"SaaS環境で実行するddlファイル"},"type":"string","format":"base64","example":"U3dhZ2dlciByb2Nrcw=="},"role_external_id":{"title":"External id to use when AssumeRole","x-title-i18n":{"jpn":"AssumeRoleする時に使用するExternalID"},"description":"External id used by SaaSus when AssumeRole to operate SaaS","x-description-i18n":{"jpn":"SaaSusがSaaSを操作するためにAssumeRoleする時に使用するexternal id"},"type":"string","example":1234567890}},"required":[]},
  'updateSingleTenantSettings'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updatesingletenantsettings',
      description: `Update configuration information for single-tenant functionality: Updates configuration information for single-tenant functionality Returns error if single tenant feature cannot be enabled. `,
      parameters: {
      "type": "object",
      "properties": {
            "enabled": {
                  "type": "boolean",
                  "description": "enable Single Tenant settings or not"
            },
            "role_arn": {
                  "type": "string",
                  "description": "ARN of the role for SaaS Platform to AssumeRole"
            },
            "cloudformation_template": {
                  "type": "string",
                  "description": "CloudFormation template file"
            },
            "ddl_template": {
                  "type": "string",
                  "description": "ddl file to run in SaaS environment"
            },
            "role_external_id": {
                  "type": "string",
                  "description": "External id used by SaaSus when AssumeRole to operate SaaS"
            }
      },
      "required": []
}
    }
  }
};

export { apiTool };
