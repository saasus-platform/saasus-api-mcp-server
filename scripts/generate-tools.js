#!/usr/bin/env node

import fs from "fs";
import path from "path";
import yaml from "js-yaml";

// $refを再帰的に解決する関数
function resolveRef(ref, spec) {
  if (!ref || !ref.startsWith("#/")) {
    return ref;
  }

  const pathSegments = ref.substring(2).split("/");
  let current = spec;

  for (const segment of pathSegments) {
    if (current && typeof current === "object" && segment in current) {
      current = current[segment];
    } else {
      console.warn(`Could not resolve $ref: ${ref}`);
      return null;
    }
  }

  // 解決した結果がさらに$refを含む場合は再帰的に解決
  if (current && typeof current === "object" && current.$ref) {
    return resolveRef(current.$ref, spec);
  }

  return current;
}

// スキーマを再帰的に展開する関数
function expandSchema(schema, spec, visited = new Set()) {
  if (!schema || typeof schema !== "object") {
    return schema;
  }

  // 循環参照を防ぐ
  const schemaKey = JSON.stringify(schema);
  if (visited.has(schemaKey)) {
    return schema;
  }
  visited.add(schemaKey);

  if (schema.$ref) {
    const resolved = resolveRef(schema.$ref, spec);
    if (resolved) {
      return expandSchema(resolved, spec, visited);
    }
    return schema;
  }

  const expanded = {};

  // allOfを処理
  if (schema.allOf) {
    const merged = { type: "object", properties: {}, required: [] };
    for (const subSchema of schema.allOf) {
      const expandedSub = expandSchema(subSchema, spec, visited);
      if (expandedSub.properties) {
        Object.assign(merged.properties, expandedSub.properties);
      }
      if (expandedSub.required) {
        merged.required.push(...expandedSub.required);
      }
      if (expandedSub.type && expandedSub.type !== "object") {
        merged.type = expandedSub.type;
      }
    }
    // 重複を除去
    merged.required = [...new Set(merged.required)];
    return merged;
  }

  // oneOfを処理（最初のスキーマを使用）
  if (schema.oneOf && schema.oneOf.length > 0) {
    return expandSchema(schema.oneOf[0], spec, visited);
  }

  // 通常のプロパティをコピー
  for (const [key, value] of Object.entries(schema)) {
    if (key === "$ref" || key === "allOf" || key === "oneOf") {
      continue;
    }

    if (key === "properties" && typeof value === "object") {
      expanded[key] = {};
      for (const [propKey, propValue] of Object.entries(value)) {
        expanded[key][propKey] = expandSchema(propValue, spec, visited);
      }
    } else if (key === "items" && typeof value === "object") {
      expanded[key] = expandSchema(value, spec, visited);
    } else {
      expanded[key] = value;
    }
  }

  return expanded;
}
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// API定義ファイルのディレクトリ
const API_DEFINITIONS_DIR = path.join(__dirname, "../api/definitions");
const TOOLS_DIR = path.join(__dirname, "../tools/saasus-platform");
const PATHS_FILE = path.join(__dirname, "../tools/paths.js");

// HTTPメソッドとパラメータの型マッピング
const TYPE_MAPPING = {
  string: "string",
  integer: "number",
  number: "number",
  boolean: "boolean",
  array: "array",
  object: "object",
};

// パラメータの説明を生成
function generateParameterDescription(param) {
  const description =
    param.description || param["x-description-i18n"]?.jpn || "";
  const example = param.example ? ` (例: ${param.example})` : "";
  return description + example;
}

// リクエストボディのパラメータを解析
function parseRequestBodyParameters(requestBody, spec) {
  if (!requestBody?.content?.["application/json"]?.schema) {
    return { properties: {}, required: [] };
  }

  const schema = requestBody.content["application/json"].schema;
  const expandedSchema = expandSchema(schema, spec);

  return {
    properties: expandedSchema.properties || {},
    required: expandedSchema.required || [],
  };
}

// パスパラメータを解析
function parsePathParameters(pathItem, operation, parameters) {
  const pathParams = pathItem.parameters || [];
  const operationParams = operation.parameters || [];

  return [...pathParams, ...operationParams]
    .filter((param) => {
      // $refを解決
      if (param.$ref) {
        const refName = param.$ref.split("/").pop();
        const resolvedParam = parameters[refName];
        return resolvedParam && resolvedParam.in === "path";
      }
      return param.in === "path";
    })
    .map((param) => {
      // $refを解決
      if (param.$ref) {
        const refName = param.$ref.split("/").pop();
        param = parameters[refName];
      }

      const paramDef = {
        name: param.name,
        type: TYPE_MAPPING[param.schema?.type] || "string",
        required: param.required || false,
        description: generateParameterDescription(param),
      };

      // 配列タイプの場合はitemsプロパティを追加
      if (param.schema?.type === "array" && param.schema?.items) {
        paramDef.items = param.schema.items;
      }

      // enumプロパティがある場合は追加
      if (param.schema?.enum) {
        paramDef.enum = param.schema.enum;
      }

      return paramDef;
    });
}

// クエリパラメータを解析
function parseQueryParameters(pathItem, operation, parameters) {
  const pathParams = pathItem.parameters || [];
  const operationParams = operation.parameters || [];

  return [...pathParams, ...operationParams]
    .filter((param) => {
      // $refを解決
      if (param.$ref) {
        const refName = param.$ref.split("/").pop();
        const resolvedParam = parameters[refName];
        return resolvedParam && resolvedParam.in === "query";
      }
      return param.in === "query";
    })
    .map((param) => {
      // $refを解決
      if (param.$ref) {
        const refName = param.$ref.split("/").pop();
        param = parameters[refName];
      }

      const paramDef = {
        name: param.name,
        type: TYPE_MAPPING[param.schema?.type] || "string",
        required: param.required || false,
        description: generateParameterDescription(param),
      };

      // 配列タイプの場合はitemsプロパティを追加
      if (param.schema?.type === "array" && param.schema?.items) {
        paramDef.items = param.schema.items;
      }

      // enumプロパティがある場合は追加
      if (param.schema?.enum) {
        paramDef.enum = param.schema.enum;
      }

      return paramDef;
    });
}

// ツールファイルを生成
function generateToolFile(
  baseUrl,
  operationId,
  method,
  path,
  operation,
  pathParams,
  queryParams,
  requestBodyParams
) {
  const functionName =
    operationId.charAt(0).toLowerCase() + operationId.slice(1);
  const toolName = operationId
    .toLowerCase()
    .replace(/([A-Z])/g, "_$1")
    .toLowerCase();

  // パラメータの定義
  const allParams = [...pathParams, ...queryParams];
  if (
    requestBodyParams.properties &&
    Object.keys(requestBodyParams.properties).length > 0
  ) {
    for (const [propName, propSchema] of Object.entries(
      requestBodyParams.properties
    )) {
      const param = {
        name: propName,
        type: TYPE_MAPPING[propSchema.type] || "string",
        required: requestBodyParams.required?.includes(propName) || false,
        description:
          propSchema.description || propSchema["x-description-i18n"]?.jpn || "",
      };

      // 配列タイプの場合はitemsプロパティを追加
      if (propSchema.type === "array" && propSchema.items) {
        param.items = propSchema.items;
      }

      // enumプロパティがある場合は追加
      if (propSchema.enum) {
        param.enum = propSchema.enum;
      }

      allParams.push(param);
    }
  }

  // パラメータスキーマの生成
  const parameterSchema = {
    type: "object",
    properties: {},
    required: allParams.filter((p) => p.required).map((p) => p.name),
  };

  for (const param of allParams) {
    const paramDef = {
      type: param.type,
      description: param.description,
    };

    // 配列タイプの場合はitemsプロパティを追加
    if (param.type === "array" && param.items) {
      paramDef.items = param.items;
    }

    // enumプロパティがある場合は追加
    if (param.enum) {
      paramDef.enum = param.enum;
    }

    parameterSchema.properties[param.name] = paramDef;
  }

  const content = `/**
 * ${operation.summary || operationId}
 * ${operation.description || operation["x-description-i18n"]?.jpn || ""}
 */
import { createExecuteFunction } from "../../common/executeFunction.js";

const executeFunction = createExecuteFunction(
  '${baseUrl}',
  '${method}',
  '${path}',
  ${JSON.stringify(pathParams)},
  ${JSON.stringify(queryParams)},
  ${JSON.stringify(requestBodyParams)},
  '${functionName}'
);

/**
 * ツール設定
 */
const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: '${toolName}',
      description: \`${operation.summary || operationId}${
    operation.description
      ? ": " +
        (operation.description || operation["x-description-i18n"]?.jpn || "")
          .replace(/\n/g, " ")
          .replace(/'/g, "\\'")
          .replace(/`/g, "\\`")
      : ""
  }\`,
      parameters: ${JSON.stringify(parameterSchema, null, 6)}
    }
  }
};

export { apiTool };
`;

  return content;
}

// メイン処理
async function generateTools() {
  try {
    // API定義ファイルの一覧を取得
    const apiFiles = fs
      .readdirSync(API_DEFINITIONS_DIR)
      .filter((file) => file.endsWith(".yml") || file.endsWith(".yaml"));

    const toolPaths = [];

    for (const apiFile of apiFiles) {
      console.log(`Processing ${apiFile}...`);

      const apiFilePath = path.join(API_DEFINITIONS_DIR, apiFile);
      const apiContent = fs.readFileSync(apiFilePath, "utf8");
      const apiSpec = yaml.load(apiContent);

      const apiName = path.basename(apiFile, path.extname(apiFile));
      const baseUrl = apiSpec.servers?.[0]?.url || "";
      const parameters = apiSpec.components?.parameters || {};

      // API用のディレクトリを作成
      const apiDir = path.join(TOOLS_DIR, apiName);
      if (!fs.existsSync(apiDir)) {
        fs.mkdirSync(apiDir, { recursive: true });
      } else {
        // 既存のJSファイルを削除
        const existingFiles = fs
          .readdirSync(apiDir)
          .filter((file) => file.endsWith(".js"));
        for (const file of existingFiles) {
          fs.unlinkSync(path.join(apiDir, file));
        }
        console.log(
          `  - Cleaned ${existingFiles.length} existing files from ${apiName}`
        );
      }

      // 各パスとオペレーションを処理
      for (const [pathKey, pathItem] of Object.entries(apiSpec.paths || {})) {
        for (const [method, operation] of Object.entries(pathItem)) {
          if (!operation.operationId || typeof operation !== "object") continue;

          // returninternalservererrorのoperationIdをスキップ
          if (operation.operationId === "ReturnInternalServerError") {
            console.log(
              `  - Skipping ${method.toUpperCase()} ${pathKey} (${
                operation.operationId
              })`
            );
            continue;
          }

          console.log(
            `  - ${method.toUpperCase()} ${pathKey} (${operation.operationId})`
          );

          // パラメータの解析
          const pathParams = parsePathParameters(
            pathItem,
            operation,
            parameters
          );
          const queryParams = parseQueryParameters(
            pathItem,
            operation,
            parameters
          );
          const requestBodyParams = parseRequestBodyParameters(
            operation.requestBody,
            apiSpec
          );

          // ツールファイルの生成
          const toolContent = generateToolFile(
            baseUrl,
            operation.operationId,
            method,
            pathKey,
            operation,
            pathParams,
            queryParams,
            requestBodyParams
          );

          // ファイルの保存
          const toolFileName = `${operation.operationId
            .toLowerCase()
            .replace(/([A-Z])/g, "-$1")
            .toLowerCase()}.js`;
          const toolFilePath = path.join(apiDir, toolFileName);
          fs.writeFileSync(toolFilePath, toolContent);

          // ツールパスを記録
          toolPaths.push(`saasus-platform/${apiName}/${toolFileName}`);
        }
      }
    }

    // paths.jsファイルの更新
    const pathsContent = `export const toolPaths = [
${toolPaths.map((path) => `  '${path}'`).join(",\n")}
];
`;

    fs.writeFileSync(PATHS_FILE, pathsContent);

    console.log(`\n✅ Generated ${toolPaths.length} tools successfully!`);
    console.log(`📁 Tools saved in: ${TOOLS_DIR}`);
    console.log(`📄 Paths updated in: ${PATHS_FILE}`);
  } catch (error) {
    console.error("❌ Error generating tools:", error);
    process.exit(1);
  }
}

// スクリプトが直接実行された場合
if (import.meta.url === `file://${process.argv[1]}`) {
  generateTools();
}

export { generateTools };
