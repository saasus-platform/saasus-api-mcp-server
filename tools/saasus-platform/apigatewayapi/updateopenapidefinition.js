/**
 * Update OpenAPI definition file
 * Update OpenAPI definition file. The OpenAPI definition file is used for automatically generated documentation.

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'put',
  '/settings/open-api-definition',
  [],
  [],
  {"properties":{"content":{"title":"OpenAPI Definition File Content","x-title-i18n":{"jpn":"OpenAPI定義ファイルのコンテンツ"},"description":"OpenAPI definition file content","x-description-i18n":{"jpn":"OpenAPI定義ファイルのコンテンツ"},"type":"string","format":"base64","example":"UEsDBBQACAAIAJr6oFQmTAuRfvOGAA=="}},"required":["content"]},
  'updateOpenApiDefinition'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'updateopenapidefinition',
      description: `Update OpenAPI definition file: Update OpenAPI definition file. The OpenAPI definition file is used for automatically generated documentation. `,
      parameters: {
      "type": "object",
      "properties": {
            "content": {
                  "type": "string",
                  "description": "OpenAPI definition file content"
            }
      },
      "required": [
            "content"
      ]
}
    }
  }
};

export { apiTool };
