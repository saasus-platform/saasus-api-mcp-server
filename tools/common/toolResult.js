// Only a numeric HTTP status is exposed; response bodies and exception details may contain secrets.
export class ApiError extends Error {
  constructor(status) {
    super(`API request failed (HTTP ${status})`);
    this.name = "ApiError";
  }
}

export async function callTool(execute, args) {
  try {
    const result = await execute(args);
    return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
  } catch (error) {
    const message = error instanceof ApiError ? error.message : "API request failed";
    return { isError: true, content: [{ type: "text", text: message }] };
  }
}
