/**
 * Date-x - Zero-dependency date manipulation and formatting utilities
 * @version 1.0.0
 * @author sulthonzh
 */

/**
 * Check if a value is a valid Date object
 * @param {*} date - Value to check
 * @returns {boolean}
 */
export function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

/**
 * Check if a date is today
 * @param {Date|string|number} date - Date to check
 * @returns {boolean}
 */
export function isToday(date) {
  const d = new Date(date);
  const today = new Date();
  return d.toDateString() === today.toDateString();
}

/**
 * Check if a date is yesterday
 * @param {Date|string|number} date - Date to check
 * @returns {boolean}
 */
export function isYesterday(date) {
  const d = new Date(date);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return d.toDateString() === yesterday.toDateString();
}

/**
 * Check if a date is tomorrow
 * @param {Date|string|number} date - Date to check
 * @returns {boolean}
 */
export function isTomorrow(date) {
  const d = new Date(date);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return d.toDateString() === tomorrow.toDateString();
}

/**
 * Check if a date is in the past
 * @param {Date|string|number} date - Date to check
 * @returns {boolean}
 */
export function isPast(date) {
  const d = new Date(date);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  d.setHours(0, 0, 0, 0);
  return d < now;
}

/**
 * Check if a date is in the future
 * @param {Date|string|number} date - Date to check
 * @returns {boolean}
 */
export function isFuture(date) {
  const d = new Date(date);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  d.setHours(0, 0, 0, 0);
  return d > now;
}

/**
 * Check if a date is a weekend day
 * @param {Date|string|number} date - Date to check
 * @returns {boolean}
 */
export function isWeekend(date) {
  const d = new Date(date);
  const day = d.getDay();
  return day === 0 || day === 6;
}

/**
 * Check if a date is a weekday
 * @param {Date|string|number} date - Date to check
 * @returns {boolean}
 */
export function isWeekday(date) {
  return !isWeekend(date);
}

/**
 * Get the day name of a date
 * @param {Date|string|number} date - Date to get day name for
 * @param {string} [locale='en-US'] - Locale for day name
 * @returns {string}
 */
export function getDayName(date, locale = 'en-US') {
  const d = new Date(date);
  return d.toLocaleDateString(locale, { weekday: 'long' });
}

/**
 * Get the short day name of a date
 * @param {Date|string|number} date - Date to get day name for
 * @param {string} [locale='en-US'] - Locale for day name
 * @returns {string}
 */
export function getDayNameShort(date, locale = 'en-US') {
  const d = new Date(date);
  return d.toLocaleDateString(locale, { weekday: 'short' });
}

/**
 * Get the month name of a date
 * @param {Date|string|number} date - Date to get month name for
 * @param {string} [locale='en-US'] - Locale for month name
 * @returns {string}
 */
export function getMonthName(date, locale = 'en-US') {
  const d = new Date(date);
  return d.toLocaleDateString(locale, { month: 'long' });
}

/**
 * Get the short month name of a date
 * @param {Date|string|number} date - Date to get month name for
 * @param {string} [locale='en-US'] - Locale for month name
 * @returns {string}
 */
export function getMonthNameShort(date, locale = 'en-US') {
  const d = new Date(date);
  return d.toLocaleDateString(locale, { month: 'short' });
}

/**
 * Format a date as YYYY-MM-DD
 * @param {Date|string|number} date - Date to format
 * @returns {string}
 */
export function formatYYYYMMDD(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Format a date as DD/MM/YYYY
 * @param {Date|string|number} date - Date to format
 * @returns {string}
 */
export function formatDDMMYYYY(date) {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Format a date as MM/DD/YYYY
 * @param {Date|string|number} date - Date to format
 * @returns {string}
 */
export function formatMMDDYYYY(date) {
  const d = new Date(date);
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const year = d.getFullYear();
  return `${month}/${day}/${year}`;
}

/**
 * Format a date with custom format
 * @param {Date|string|number} date - Date to format
 * @param {string} format - Format string (YYYY, MM, DD, HH, mm, ss)
 * @returns {string}
 */
export function format(date, format) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');

  return format
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds);
}

/**
 * Parse a date string (multiple formats supported)
 * @param {string} dateStr - Date string to parse
 * @returns {Date|null}
 */
export function parse(dateStr) {
  // Handle DD/MM/YYYY format directly
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
    const [day, month, year] = dateStr.split('/');
    const parsed = new Date(`${year}-${month}-${day}`);
    if (!isNaN(parsed.getTime())) {
      return parsed;
    }
  }
  
  // Handle MM/DD/YYYY format directly
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
    const [month, day, year] = dateStr.split('/');
    const parsed = new Date(`${year}-${month}-${day}`);
    if (!isNaN(parsed.getTime())) {
      return parsed;
    }
  }
  
  const formats = [
    /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD
    /^\d{2}\/\d{2}\/\d{2}$/, // DD/MM/YY
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/, // ISO format
    /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, // ISO format with space
  ];

  for (const regex of formats) {
    if (regex.test(dateStr)) {
      const parsed = new Date(dateStr);
      if (!isNaN(parsed.getTime())) {
        return parsed;
      }
    }
  }

  // Try parsing directly
  const parsed = new Date(dateStr);
  if (!isNaN(parsed.getTime())) {
    return parsed;
  }

  return null;
}

/**
 * Add days to a date
 * @param {Date|string|number} date - Base date
 * @param {number} days - Days to add (can be negative)
 * @returns {Date}
 */
export function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

/**
 * Add weeks to a date
 * @param {Date|string|number} date - Base date
 * @param {number} weeks - Weeks to add (can be negative)
 * @returns {Date}
 */
export function addWeeks(date, weeks) {
  return addDays(date, weeks * 7);
}

/**
 * Add months to a date
 * @param {Date|string|number} date - Base date
 * @param {number} months - Months to add (can be negative)
 * @returns {Date}
 */
export function addMonths(date, months) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

/**
 * Add years to a date
 * @param {Date|string|number} date - Base date
 * @param {number} years - Years to add (can be negative)
 * @returns {Date}
 */
export function addYears(date, years) {
  const d = new Date(date);
  d.setFullYear(d.getFullYear() + years);
  return d;
}

/**
 * Get the start of the day for a date
 * @param {Date|string|number} date - Date to get start of day for
 * @returns {Date}
 */
export function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Get the end of the day for a date
 * @param {Date|string|number} date - Date to get end of day for
 * @returns {Date}
 */
export function endOfDay(date) {
  const d = new Date(date);
  d.setHours(23, 59, 59, 999);
  return d;
}

/**
 * Get the start of the week (Sunday) for a date
 * @param {Date|string|number} date - Date to get start of week for
 * @returns {Date}
 */
export function startOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day;
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Get the end of the week (Saturday) for a date
 * @param {Date|string|number} date - Date to get end of week for
 * @returns {Date}
 */
export function endOfWeek(date) {
  const start = startOfWeek(date);
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  end.setHours(23, 59, 59, 999);
  return end;
}

/**
 * Get the start of the month for a date
 * @param {Date|string|number} date - Date to get start of month for
 * @returns {Date}
 */
export function startOfMonth(date) {
  const d = new Date(date);
  d.setDate(1);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Get the end of the month for a date
 * @param {Date|string|number} date - Date to get end of month for
 * @returns {Date}
 */
export function endOfMonth(date) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + 1, 0);
  d.setHours(23, 59, 59, 999);
  return d;
}

/**
 * Get the start of the year for a date
 * @param {Date|string|number} date - Date to get start of year for
 * @returns {Date}
 */
export function startOfYear(date) {
  const d = new Date(date);
  d.setMonth(0, 1);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Get the end of the year for a date
 * @param {Date|string|number} date - Date to get end of year for
 * @returns {Date}
 */
export function endOfYear(date) {
  const d = new Date(date);
  d.setMonth(11, 31);
  d.setHours(23, 59, 59, 999);
  return d;
}

/**
 * Get the difference between two dates in milliseconds
 * @param {Date|string|number} date1 - First date
 * @param {Date|string|number} date2 - Second date
 * @returns {number}
 */
export function diffInMilliseconds(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1 - d2;
}

/**
 * Get the difference between two dates in seconds
 * @param {Date|string|number} date1 - First date
 * @param {Date|string|number} date2 - Second date
 * @returns {number}
 */
export function diffInSeconds(date1, date2) {
  return Math.floor(diffInMilliseconds(date1, date2) / 1000);
}

/**
 * Get the difference between two dates in minutes
 * @param {Date|string|number} date1 - First date
 * @param {Date|string|number} date2 - Second date
 * @returns {number}
 */
export function diffInMinutes(date1, date2) {
  return Math.floor(diffInMilliseconds(date1, date2) / (1000 * 60));
}

/**
 * Get the difference between two dates in hours
 * @param {Date|string|number} date1 - First date
 * @param {Date|string|number} date2 - Second date
 * @returns {number}
 */
export function diffInHours(date1, date2) {
  return Math.floor(diffInMilliseconds(date1, date2) / (1000 * 60 * 60));
}

/**
 * Get the difference between two dates in days
 * @param {Date|string|number} date1 - First date
 * @param {Date|string|number} date2 - Second date
 * @returns {number}
 */
export function diffInDays(date1, date2) {
  return Math.floor(diffInMilliseconds(date1, date2) / (1000 * 60 * 60 * 24));
}

/**
 * Get the difference between two dates in weeks
 * @param {Date|string|number} date1 - First date
 * @param {Date|string|number} date2 - Second date
 * @returns {number}
 */
export function diffInWeeks(date1, date2) {
  return Math.floor(diffInDays(date1, date2) / 7);
}

/**
 * Get the difference between two dates in months
 * @param {Date|string|number} date1 - First date
 * @param {Date|string|number} date2 - Second date
 * @returns {number}
 */
export function diffInMonths(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  
  const years = d1.getFullYear() - d2.getFullYear();
  const months = d1.getMonth() - d2.getMonth();
  
  return years * 12 + months;
}

/**
 * Get the difference between two dates in years
 * @param {Date|string|number} date1 - First date
 * @param {Date|string|number} date2 - Second date
 * @returns {number}
 */
export function diffInYears(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1.getFullYear() - d2.getFullYear();
}

/**
 * Get age from birth date
 * @param {Date|string|number} birthDate - Birth date
 * @returns {number}
 */
export function getAge(birthDate) {
  const birth = new Date(birthDate);
  const today = new Date();
  
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}

/**
 * Check if a date is between two other dates
 * @param {Date|string|number} date - Date to check
 * @param {Date|string|number} start - Start date
 * @param {Date|string|number} end - End date
 * @param {boolean} [inclusive=true] - Whether to include start and end dates
 * @returns {boolean}
 */
export function isBetween(date, start, end, inclusive = true) {
  const d = new Date(date);
  const s = new Date(start);
  const e = new Date(end);
  
  if (inclusive) {
    return d >= s && d <= e;
  }
  
  return d > s && d < e;
}

/**
 * Get the day of the year (1-366)
 * @param {Date|string|number} date - Date to get day of year for
 * @returns {number}
 */
export function getDayOfYear(date) {
  const d = new Date(date);
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d - start;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

/**
 * Get the week number of the year (ISO week)
 * @param {Date|string|number} date - Date to get week number for
 * @returns {number}
 */
export function getWeekNumber(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  const yearStart = new Date(d.getFullYear(), 0, 1);
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

/**
 * Get the quarter of the year (1-4)
 * @param {Date|string|number} date - Date to get quarter for
 * @returns {number}
 */
export function getQuarter(date) {
  const d = new Date(date);
  return Math.floor(d.getMonth() / 3) + 1;
}

/**
 * Format relative time (e.g., "2 days ago", "in 3 hours")
 * @param {Date|string|number} date - Date to format
 * @param {string} [locale='en-US'] - Locale for formatting
 * @returns {string}
 */
export function formatRelative(date, locale = 'en-US') {
  const d = new Date(date);
  const now = new Date();
  const diffMs = d - now;
  
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  
  if (Math.abs(diffMs) < 60000) { // Less than 1 minute
    return rtf.format(0, 'second');
  }
  
  const intervals = {
    year: 31536000000,
    month: 2592000000,
    week: 604800000,
    day: 86400000,
    hour: 3600000,
    minute: 60000,
    second: 1000
  };
  
  for (const [unit, value] of Object.entries(intervals)) {
    const diff = Math.floor(diffMs / value);
    if (Math.abs(diff) >= 1) {
      return rtf.format(diff, unit);
    }
  }
  
  return rtf.format(0, 'second');
}

/**
 * Format duration as human-readable string
 * @param {number} milliseconds - Duration in milliseconds
 * @param {Object} [options] - Formatting options
 * @param {boolean} [options.includeSeconds=true] - Whether to include seconds
 * @param {boolean} [options.includeMilliseconds=true] - Whether to include milliseconds
 * @returns {string}
 */
export function formatDuration(milliseconds, options = {}) {
  const {
    includeSeconds = true,
    includeMilliseconds = true
  } = options;
  
  if (milliseconds < 0) milliseconds = Math.abs(milliseconds);
  
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  const ms = milliseconds % 1000;
  
  const parts = [];
  
  if (hours > 0) {
    parts.push(`${hours}h`);
  }
  
  if (minutes > 0) {
    parts.push(`${minutes}m`);
  }
  
  if (includeSeconds && seconds > 0) {
    parts.push(`${seconds}s`);
  }
  
  if (includeMilliseconds && ms > 0) {
    parts.push(`${ms}ms`);
  }
  
  if (parts.length === 0) {
    return '0ms';
  }
  
  return parts.join(' ');
}

/**
 * Clamp a date between two dates
 * @param {Date|string|number} date - Date to clamp
 * @param {Date|string|number} min - Minimum date
 * @param {Date|string|number} max - Maximum date
 * @param {boolean} [inclusive=true] - Whether to include boundaries
 * @returns {Date}
 */
export function clamp(date, min, max, inclusive = true) {
  const d = new Date(date);
  
  // Handle min - preserve original if possible
  let minValue;
  if (min instanceof Date) {
    minValue = min;
  } else {
    minValue = new Date(min);
  }
  
  // Handle max - preserve original if possible
  let maxValue;
  if (max instanceof Date) {
    maxValue = max;
  } else {
    maxValue = new Date(max);
  }
  
  if (inclusive) {
    if (d <= minValue) {
      return minValue;
    }
    if (d >= maxValue) {
      return maxValue;
    }
  } else {
    if (d < minValue) {
      return minValue;
    }
    if (d > maxValue) {
      return maxValue;
    }
  }
  
  // Return original date object if it doesn't need clamping
  if (d.getTime() === date.getTime() && date instanceof Date) {
    return date;
  }
  
  return d;
}

/**
 * Get the next occurrence of a specific day of the week
 * @param {Date|string|number} date - Starting date
 * @param {number} dayOfWeek - Day of week (0=Sunday, 6=Saturday)
 * @returns {Date}
 */
export function nextDay(date, dayOfWeek) {
  const d = new Date(date);
  const currentDay = d.getDay();
  const daysUntil = (dayOfWeek - currentDay + 7) % 7;
  
  if (daysUntil === 0) {
    return addDays(d, 7); // If it's the same day, return next week
  }
  
  return addDays(d, daysUntil);
}

/**
 * Get the previous occurrence of a specific day of the week
 * @param {Date|string|number} date - Starting date
 * @param {number} dayOfWeek - Day of week (0=Sunday, 6=Saturday)
 * @returns {Date}
 */
export function previousDay(date, dayOfWeek) {
  const d = new Date(date);
  const currentDay = d.getDay();
  const daysAgo = (currentDay - dayOfWeek + 7) % 7;
  
  if (daysAgo === 0) {
    return addDays(d, -7); // If it's the same day, return previous week
  }
  
  return addDays(d, -daysAgo);
}

/**
 * Get the first day of the month
 * @param {Date|string|number} date - Date to get first day for
 * @returns {Date}
 */
export function firstDayOfMonth(date) {
  return startOfMonth(date);
}

/**
 * Get the last day of the month
 * @param {Date|string|number} date - Date to get last day for
 * @returns {Date}
 */
export function lastDayOfMonth(date) {
  return endOfMonth(date);
}

/**
 * Check if a date is leap year
 * @param {Date|string|number} date - Date to check
 * @returns {boolean}
 */
export function isLeapYear(date) {
  let year;
  if (typeof date === 'number' && date > 1000 && date < 10000) {
    // If it's a 4-digit number, treat it as a year
    year = date;
  } else {
    // Otherwise, get year from Date object
    const d = new Date(date);
    year = d.getFullYear();
  }
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * Get number of days in month
 * @param {Date|string|number} date - Date to get days for
 * @returns {number}
 */
export function daysInMonth(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth();
  
  // Using a trick: get month 0 of next year, subtract 1 day
  const nextMonth = new Date(year, month + 1, 0);
  return nextMonth.getDate();
}

/**
 * Check if two dates are the same day
 * @param {Date|string|number} date1 - First date
 * @param {Date|string|number} date2 - Second date
 * @returns {boolean}
 */
export function isSameDay(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
}

/**
 * Check if two dates are the same month
 * @param {Date|string|number} date1 - First date
 * @param {Date|string|number} date2 - Second date
 * @returns {boolean}
 */
export function isSameMonth(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth();
}

/**
 * Check if two dates are the same year
 * @param {Date|string|number} date1 - First date
 * @param {Date|string|number} date2 - Second date
 * @returns {boolean}
 */
export function isSameYear(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  
  return d1.getFullYear() === d2.getFullYear();
}

/**
 * Create a date from components
 * @param {number} year - Year
 * @param {number} month - Month (1-12)
 * @param {number} day - Day (1-31)
 * @param {number} [hour=0] - Hour (0-23)
 * @param {number} [minute=0] - Minute (0-59)
 * @param {number} [second=0] - Second (0-59)
 * @param {number} [millisecond=0] - Millisecond (0-999)
 * @returns {Date}
 */
export function createDate(year, month, day, hour = 0, minute = 0, second = 0, millisecond = 0) {
  return new Date(year, month - 1, day, hour, minute, second, millisecond);
}

/**
 * Get maximum date from array
 * @param {Array<Date|string|number>} dates - Array of dates
 * @returns {Date|null}
 */
export function maxDate(dates) {
  if (dates.length === 0) return null;
  
  let maxIndex = 0;
  let maxTime = new Date(dates[0]).getTime();
  
  for (let i = 1; i < dates.length; i++) {
    const currentTime = new Date(dates[i]).getTime();
    if (currentTime > maxTime) {
      maxTime = currentTime;
      maxIndex = i;
    }
  }
  
  // Return original object if it's a Date
  const result = dates[maxIndex];
  if (result instanceof Date) {
    return result;
  }
  
  // Otherwise return new Date object
  return new Date(result);
}

/**
 * Get minimum date from array
 * @param {Array<Date|string|number>} dates - Array of dates
 * @returns {Date|null}
 */
export function minDate(dates) {
  if (dates.length === 0) return null;
  
  let minIndex = 0;
  let minTime = new Date(dates[0]).getTime();
  
  for (let i = 1; i < dates.length; i++) {
    const currentTime = new Date(dates[i]).getTime();
    if (currentTime < minTime) {
      minTime = currentTime;
      minIndex = i;
    }
  }
  
  // Return original object if it's a Date
  const result = dates[minIndex];
  if (result instanceof Date) {
    return result;
  }
  
  // Otherwise return new Date object
  return new Date(result);
}

/**
 * Sort dates in ascending order
 * @param {Array<Date|string|number>} dates - Array of dates
 * @returns {Array<Date>}
 */
export function sortDatesAscending(dates) {
  // Create array of {original, date} pairs to preserve original references
  const withOriginal = dates.map((date, index) => ({
    original: date,
    date: new Date(date),
    index
  }));
  
  // Sort by date value
  withOriginal.sort((a, b) => a.date - b.date);
  
  // Return original Date objects when possible
  return withOriginal.map(item => {
    if (item.original instanceof Date) {
      return item.original;
    }
    return item.date;
  });
}

/**
 * Sort dates in descending order
 * @param {Array<Date|string|number>} dates - Array of dates
 * @returns {Array<Date>}
 */
export function sortDatesDescending(dates) {
  // Create array of {original, date} pairs to preserve original references
  const withOriginal = dates.map((date, index) => ({
    original: date,
    date: new Date(date),
    index
  }));
  
  // Sort by date value (descending)
  withOriginal.sort((a, b) => b.date - a.date);
  
  // Return original Date objects when possible
  return withOriginal.map(item => {
    if (item.original instanceof Date) {
      return item.original;
    }
    return item.date;
  });
}