/**
 * 共通のAPI実行関数
 */
import { makeSigHeader } from "../preRequest.js";
import { logError } from "../log.js";

/**
 * API実行関数を生成する
 * @param {string} baseUrl - API定義ファイルのbaseURL
 * @param {string} method - HTTPメソッド
 * @param {string} path - APIパス
 * @param {Array} pathParams - パスパラメータ
 * @param {Array} queryParams - クエリパラメータ
 * @param {Object} requestBodyParams - リクエストボディパラメータ
 * @param {string} functionName - 関数名（エラーログ用）
 * @returns {Function} 実行関数
 */
export function createExecuteFunction(
  baseUrl,
  method,
  path,
  pathParams,
  queryParams,
  requestBodyParams,
  functionName
) {
  return async (args = {}) => {
    const baseApiUrl =
      process.env.SAASUS_PLATFORM_API_URL_BASE || "https://api.saasus.io";
    const apiPath = baseUrl.replace("https://api.saasus.io", "");
    const urlBase = baseApiUrl + apiPath;
    const APIKey = process.env.SAASUS_PLATFORM_APIKEY;
    const SaaSID = process.env.SAASUS_PLATFORM_SAASID;
    const SecretKey = process.env.SAASUS_PLATFORM_SECRETKEY;

    try {
      // URLの構築
      let url = urlBase + path;

      // パスパラメータの置換
      for (const param of pathParams) {
        url = url.replace(`{${param.name}}`, args[param.name]);
      }

      // クエリパラメータの追加
      if (queryParams.length > 0) {
        const queryParamsObj = new URLSearchParams();
        for (const param of queryParams) {
          if (args[param.name] !== undefined) {
            queryParamsObj.append(param.name, args[param.name]);
          }
        }

        if (queryParamsObj.toString()) {
          url += "?" + queryParamsObj.toString();
        }
      }

      // ヘッダーの設定
      const headers = {
        Accept: "application/json",
      };

      if (method.toUpperCase() !== "GET" && method.toUpperCase() !== "DELETE") {
        headers["Content-Type"] = "application/json";
      }

      // リクエストボディの設定
      let body = "";
      if (
        method.toUpperCase() !== "GET" &&
        method.toUpperCase() !== "DELETE" &&
        requestBodyParams.properties &&
        Object.keys(requestBodyParams.properties).length > 0
      ) {
        const requestBody = {};
        for (const propName of Object.keys(requestBodyParams.properties)) {
          if (args[propName] !== undefined) {
            requestBody[propName] = args[propName];
          }
        }
        body = JSON.stringify(requestBody);
      }

      // 認証ヘッダーの追加
      const authHeader = await makeSigHeader(
        url,
        APIKey,
        SaaSID,
        SecretKey,
        body,
        method.toUpperCase()
      );
      headers["Authorization"] = authHeader;

      // APIリクエストの実行
      const fetchOptions = {
        method: method.toUpperCase(),
        headers,
      };

      if (method.toUpperCase() !== "GET" && method.toUpperCase() !== "DELETE") {
        fetchOptions.body = body;
      }

      const response = await fetch(url, fetchOptions);

      logError("Request URL:", url);
      logError("Request Headers:", headers);

      // レスポンスの処理
      if (!response.ok) {
        const errorData = await response.text();
        logError("API Error:", errorData);
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      // レスポンスが空の場合の処理
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        logError("API Response:", data);
        return data;
      } else {
        logError("API Response: Success (No Content)");
        return { success: true };
      }
    } catch (error) {
      logError(`Error in ${functionName}:`, error);
      return { error: error.message };
    }
  };
}
