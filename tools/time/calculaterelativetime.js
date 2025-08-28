/**
 * Calculate Relative Time
 * Calculate UTC timestamp for a relative time from now.
 */
const calculateRelativeTime = async (args) => {
  const { 
    offset_minutes = 0, 
    offset_hours = 0, 
    offset_days = 0,
    reset_seconds = false,
    reset_milliseconds = false
  } = args;
  
  const now = new Date();
  
  // Reset seconds and milliseconds if specified
  if (reset_seconds) {
    now.setSeconds(0);
  }
  if (reset_milliseconds) {
    now.setMilliseconds(0);
  }
  
  const totalMinutes = offset_minutes + (offset_hours * 60) + (offset_days * 24 * 60);
  const targetTime = new Date(now.getTime() + (totalMinutes * 60 * 1000));
  
  const utcTimestamp = Math.floor(targetTime.getTime() / 1000);
  const utcISO = targetTime.toISOString();
  
  return {
    utc_timestamp: utcTimestamp,
    utc_iso: utcISO,
    utc_formatted: targetTime.toUTCString(),
    offset_minutes: totalMinutes,
    calculation: `Current time plus ${totalMinutes} minutes`,
    original_offsets: {
      minutes: offset_minutes,
      hours: offset_hours,
      days: offset_days
    },
    time_adjustments: {
      seconds_reset: reset_seconds,
      milliseconds_reset: reset_milliseconds
    }
  };
};

/**
 * ツール設定
 */
const apiTool = {
  function: calculateRelativeTime,
  definition: {
    type: 'function',
    function: {
      name: 'calculaterelativetime',
      description: `Calculate Relative Time: Calculate UTC timestamp for a relative time from now.`,
      parameters: {
        type: 'object',
        properties: {
          offset_minutes: {
            type: 'number',
            description: 'Minutes to add to current time (default: 0)'
          },
          offset_hours: {
            type: 'number',
            description: 'Hours to add to current time (default: 0)'
          },
          offset_days: {
            type: 'number',
            description: 'Days to add to current time (default: 0)'
          },
          reset_seconds: {
            type: 'boolean',
            description: 'Reset seconds to 0 (default: false)'
          },
          reset_milliseconds: {
            type: 'boolean',
            description: 'Reset milliseconds to 0 (default: false)'
          }
        },
        required: []
      }
    }
  }
};

export { apiTool };