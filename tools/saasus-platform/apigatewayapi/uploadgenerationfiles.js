/**
 * Upload files to create an API Gateway
 * Upload files to create an API Gateway

 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  'https://api.saasus.io/v1/apigateway',
  'post',
  '/upload',
  [],
  [],
  {"properties":{"content":{"title":"Api Gateway Input File Content","x-title-i18n":{"jpn":"ApiGateway入力ファイルのコンテンツ"},"description":"The content of the file to be uploaded to create an API Gateway.","x-description-i18n":{"jpn":"API Gatewayを作成するためにアップロードするファイルのコンテンツ"},"type":"string","format":"base64","example":"UEsDBBQACAAIAJr6oFQmTAuRfvOGAA=="}},"required":["content"]},
  'uploadGenerationFiles'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'uploadgenerationfiles',
      description: `Upload files to create an API Gateway: Upload files to create an API Gateway `,
      parameters: {
      "type": "object",
      "properties": {
            "content": {
                  "type": "string",
                  "description": "The content of the file to be uploaded to create an API Gateway."
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
