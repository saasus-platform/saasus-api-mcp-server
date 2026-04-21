import { toolPaths } from "../tools/paths.js";

/**
 * Discovers and loads available tools from the tools directory
 * @param {boolean} readOnlyMode - If true, only load GET method tools
 * @returns {Promise<Array<object>>} Array of tool objects
 */
export async function discoverTools(readOnlyMode = false) {
  const toolPromises = toolPaths.map(async (file) => {
    const module = await import(`../tools/${file}`);
    return {
      ...module.apiTool,
      path: file,
    };
  });

  const allTools = await Promise.all(toolPromises);

  if (readOnlyMode) {
    return allTools.filter(
      (tool) => tool.httpMethod && tool.httpMethod.toLowerCase() === "get"
    );
  }

  return allTools;
}
