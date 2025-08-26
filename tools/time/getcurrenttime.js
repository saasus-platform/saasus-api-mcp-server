/**
 * Get Current Time
 * Get the current UTC time in multiple formats.
 */
const getCurrentTime = async () => {
  const now = new Date();
  const utcTimestamp = Math.floor(now.getTime() / 1000);
  const utcISO = now.toISOString();
  const jstTime = new Date(now.getTime() + (9 * 60 * 60 * 1000)).toISOString(); // JST (UTC+9)
  
  return {
    utc_timestamp: utcTimestamp,
    utc_iso: utcISO,
    jst_iso: jstTime,
    utc_formatted: now.toUTCString(),
    jst_formatted: new Date(now.getTime() + (9 * 60 * 60 * 1000)).toUTCString().replace('GMT', 'JST'),
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