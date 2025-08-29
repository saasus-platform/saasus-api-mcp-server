/**
 * Get Current Time
 * Get the current UTC time in multiple formats.
 */
const getCurrentTime = async () => {
  const now = new Date();
  const utcTimestamp = Math.floor(now.getTime() / 1000);
  const utcISO = now.toISOString();
  const jstDate = new Date(now.getTime() + (9 * 60 * 60 * 1000)); // JST (UTC+9)
  const jstTime = jstDate.toISOString();

  return {
    utc_timestamp: utcTimestamp,
    utc_iso: utcISO,
    jst_iso: jstTime,
    utc_formatted: now.toUTCString(),
    jst_formatted: jstDate.toLocaleString('en-US', { timeZone: 'Asia/Tokyo', hour12: false }),
    unix_timestamp: now.getTime()
  };
};

/**
 * ツール設定
 */
const apiTool = {
  function: getCurrentTime,
  definition: {
    type: 'function',
    function: {
      name: 'getcurrenttime',
      description: `Get Current Time: Get the current UTC time in multiple formats.`,
      parameters: {
        type: 'object',
        properties: {},
        required: []
      }
    }
  }
};

export { apiTool };