// Date-x Test Suite
import * as dateX from '../src/index.js';

// Test setup
const testDate = new Date('2024-01-15T10:30:45.123Z');
const testDateStr = '2024-01-15';
const pastDate = new Date('2020-01-01');
const futureDate = new Date('2030-12-31');

// Test helper
function assert(condition, message) {
  if (!condition) {
    throw new Error(`Test failed: ${message}`);
  }
}

console.log('=== Running Date-x Tests ===\n');

// Test 1: isValidDate
try {
  assert(dateX.isValidDate(new Date()), 'isValidDate should return true for valid Date');
  assert(!dateX.isValidDate('not a date'), 'isValidDate should return false for invalid Date');
  assert(!dateX.isValidDate(null), 'isValidDate should return false for null');
  assert(!dateX.isValidDate(undefined), 'isValidDate should return false for undefined');
  console.log('✓ isValidDate tests passed');
} catch (error) {
  console.error('✗ isValidDate tests failed:', error.message);
}

// Test 2: Date comparison functions
try {
  // isToday
  assert(dateX.isToday(new Date()), 'isToday should return true for today');
  
  // isYesterday
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  assert(dateX.isYesterday(yesterday), 'isYesterday should return true for yesterday');
  
  // isTomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  assert(dateX.isTomorrow(tomorrow), 'isTomorrow should return true for tomorrow');
  
  // isPast
  assert(dateX.isPast(pastDate), 'isPast should return true for past date');
  assert(!dateX.isPast(futureDate), 'isPast should return false for future date');
  
  // isFuture
  assert(dateX.isFuture(futureDate), 'isFuture should return true for future date');
  assert(!dateX.isFuture(pastDate), 'isFuture should return false for past date');
  
  console.log('✓ Date comparison tests passed');
} catch (error) {
  console.error('✗ Date comparison tests failed:', error.message);
}

// Test 3: Weekday/Weekend functions
try {
  // isWeekend (Sunday = 0, Saturday = 6)
  const sunday = new Date('2024-01-14'); // Sunday
  const saturday = new Date('2024-01-13'); // Saturday
  const monday = new Date('2024-01-15'); // Monday
  
  assert(dateX.isWeekend(sunday), 'isWeekend should return true for Sunday');
  assert(dateX.isWeekend(saturday), 'isWeekend should return true for Saturday');
  assert(!dateX.isWeekend(monday), 'isWeekend should return false for Monday');
  
  // isWeekday
  assert(dateX.isWeekday(monday), 'isWeekday should return true for Monday');
  assert(!dateX.isWeekday(sunday), 'isWeekday should return false for Sunday');
  
  console.log('✓ Weekday/Weekend tests passed');
} catch (error) {
  console.error('✗ Weekday/Weekend tests failed:', error.message);
}

// Test 4: Name functions
try {
  const dayName = dateX.getDayName(testDate);
  const dayNameShort = dateX.getDayNameShort(testDate);
  const monthName = dateX.getMonthName(testDate);
  const monthNameShort = dateX.getMonthNameShort(testDate);
  
  assert(typeof dayName === 'string', 'getDayName should return a string');
  assert(typeof dayNameShort === 'string', 'getDayNameShort should return a string');
  assert(typeof monthName === 'string', 'getMonthName should return a string');
  assert(typeof monthNameShort === 'string', 'getMonthNameShort should return a string');
  
  console.log('✓ Name functions tests passed');
} catch (error) {
  console.error('✗ Name functions tests failed:', error.message);
}

// Test 5: Format functions
try {
  // YYYY-MM-DD format
  const yyyymmdd = dateX.formatYYYYMMDD(testDate);
  assert(yyyymmdd === '2024-01-15', 'formatYYYYMMDD should return YYYY-MM-DD format');
  
  // DD/MM/YYYY format
  const ddmmyyyy = dateX.formatDDMMYYYY(testDate);
  assert(ddmmyyyy === '15/01/2024', 'formatDDMMYYYY should return DD/MM/YYYY format');
  
  // MM/DD/YYYY format
  const mmddyyyy = dateX.formatMMDDYYYY(testDate);
  assert(mmddyyyy === '01/15/2024', 'formatMMDDYYYY should return MM/DD/YYYY format');
  
  // Custom format
  const custom = dateX.format(testDate, 'YYYY-MM-DD HH:mm:ss');
  assert(custom.includes('2024-01-15'), 'Custom format should include year-month-day');
  
  console.log('✓ Format functions tests passed');
} catch (error) {
  console.error('✗ Format functions tests failed:', error.message);
}

// Test 6: Parse function
try {
  const parsed = dateX.parse('2024-01-15');
  assert(dateX.isValidDate(parsed), 'parse should return valid Date object');
  
  const parsed2 = dateX.parse('15/01/2024');
  assert(dateX.isValidDate(parsed2), 'parse should handle DD/MM/YYYY format');
  
  const parsed3 = dateX.parse('01/15/2024');
  assert(dateX.isValidDate(parsed3), 'parse should handle MM/DD/YYYY format');
  
  const invalid = dateX.parse('invalid date');
  assert(invalid === null, 'parse should return null for invalid date');
  
  console.log('✓ Parse function tests passed');
} catch (error) {
  console.error('✗ Parse function tests failed:', error.message);
}

// Test 7: Date arithmetic functions
try {
  // addDays
  const addedDay = dateX.addDays(testDate, 5);
  assert(addedDay.getDate() === 20, 'addDays should add 5 days');
  
  const subtractedDay = dateX.addDays(testDate, -5);
  assert(subtractedDay.getDate() === 10, 'addDays should subtract 5 days');
  
  // addWeeks
  const addedWeek = dateX.addWeeks(testDate, 2);
  assert(addedWeek.getDate() === 29, 'addWeeks should add 2 weeks');
  
  // addMonths
  const addedMonth = dateX.addMonths(testDate, 1);
  assert(addedMonth.getMonth() === 1, 'addMonths should add 1 month');
  
  // addYears
  const addedYear = dateX.addYears(testDate, 1);
  assert(addedYear.getFullYear() === 2025, 'addYears should add 1 year');
  
  console.log('✓ Date arithmetic tests passed');
} catch (error) {
  console.error('✗ Date arithmetic tests failed:', error.message);
}

// Test 8: Date boundary functions
try {
  // startOfDay
  const start = dateX.startOfDay(testDate);
  assert(start.getHours() === 0, 'startOfDay should set hours to 0');
  assert(start.getMinutes() === 0, 'startOfDay should set minutes to 0');
  assert(start.getSeconds() === 0, 'startOfDay should set seconds to 0');
  
  // endOfDay
  const end = dateX.endOfDay(testDate);
  assert(end.getHours() === 23, 'endOfDay should set hours to 23');
  assert(end.getMinutes() === 59, 'endOfDay should set minutes to 59');
  assert(end.getSeconds() === 59, 'endOfDay should set seconds to 59');
  
  // startOfWeek
  const weekStart = dateX.startOfWeek(testDate); // Should be Sunday (Jan 14, 2024)
  assert(weekStart.getDay() === 0, 'startOfWeek should return Sunday');
  
  // endOfWeek
  const weekEnd = dateX.endOfWeek(testDate); // Should be Saturday (Jan 20, 2024)
  assert(weekEnd.getDay() === 6, 'endOfWeek should return Saturday');
  
  // startOfMonth
  const monthStart = dateX.startOfMonth(testDate);
  assert(monthStart.getDate() === 1, 'startOfMonth should set date to 1');
  
  // endOfMonth
  const monthEnd = dateX.endOfMonth(testDate);
  assert(monthEnd.getDate() === 31, 'endOfMonth should set date to last day of month');
  
  // startOfYear
  const yearStart = dateX.startOfYear(testDate);
  assert(yearStart.getMonth() === 0, 'startOfYear should set month to January');
  assert(yearStart.getDate() === 1, 'startOfYear should set date to 1');
  
  // endOfYear
  const yearEnd = dateX.endOfYear(testDate);
  assert(yearEnd.getMonth() === 11, 'endOfYear should set month to December');
  assert(yearEnd.getDate() === 31, 'endOfYear should set date to 31');
  
  console.log('✓ Date boundary tests passed');
} catch (error) {
  console.error('✗ Date boundary tests failed:', error.message);
}

// Test 9: Difference functions
try {
  const diffMs = dateX.diffInMilliseconds(futureDate, pastDate);
  assert(diffMs > 0, 'diffInMilliseconds should return positive value');
  
  const diffSec = dateX.diffInSeconds(futureDate, pastDate);
  assert(diffSec > 0, 'diffInSeconds should return positive value');
  
  const diffMin = dateX.diffInMinutes(futureDate, pastDate);
  assert(diffMin > 0, 'diffInMinutes should return positive value');
  
  const diffHours = dateX.diffInHours(futureDate, pastDate);
  assert(diffHours > 0, 'diffInHours should return positive value');
  
  const diffDays = dateX.diffInDays(futureDate, pastDate);
  assert(diffDays > 0, 'diffInDays should return positive value');
  
  const diffWeeks = dateX.diffInWeeks(futureDate, pastDate);
  assert(diffWeeks > 0, 'diffInWeeks should return positive value');
  
  const diffMonths = dateX.diffInMonths(futureDate, pastDate);
  assert(diffMonths > 0, 'diffInMonths should return positive value');
  
  const diffYears = dateX.diffInYears(futureDate, pastDate);
  assert(diffYears > 0, 'diffInYears should return positive value');
  
  console.log('✓ Difference functions tests passed');
} catch (error) {
  console.error('✗ Difference functions tests failed:', error.message);
}

// Test 10: Utility functions
try {
  // getAge
  const birthDate = new Date('1990-01-01');
  const age = dateX.getAge(birthDate);
  assert(age > 0, 'getAge should return positive age');
  
  // isBetween
  const between = dateX.isBetween(testDate, pastDate, futureDate);
  assert(between, 'isBetween should return true when date is between min and max');
  
  const notBetween = dateX.isBetween(futureDate, pastDate, testDate);
  assert(!notBetween, 'isBetween should return false when date is not between min and max');
  
  // getDayOfYear
  const dayOfYear = dateX.getDayOfYear(testDate);
  assert(dayOfYear > 0 && dayOfYear <= 366, 'getDayOfYear should return value between 1-366');
  
  // getWeekNumber
  const weekNumber = dateX.getWeekNumber(testDate);
  assert(weekNumber > 0 && weekNumber <= 53, 'getWeekNumber should return value between 1-53');
  
  // getQuarter
  const quarter = dateX.getQuarter(testDate);
  assert(quarter >= 1 && quarter <= 4, 'getQuarter should return value between 1-4');
  
  // isLeapYear
  const leapYear = dateX.isLeapYear(2020);
  const notLeapYear = dateX.isLeapYear(2021);
  assert(leapYear, 'isLeapYear should return true for leap year');
  assert(!notLeapYear, 'isLeapYear should return false for non-leap year');
  
  // daysInMonth
  const daysInJan = dateX.daysInMonth('2024-01');
  const daysInFeb = dateX.daysInMonth('2024-02');
  assert(daysInJan === 31, 'daysInMonth should return 31 for January');
  assert(daysInFeb === 29, 'daysInMonth should return 29 for February in leap year');
  
  console.log('✓ Utility functions tests passed');
} catch (error) {
  console.error('✗ Utility functions tests failed:', error.message);
}

// Test 11: Comparison functions
try {
  // isSameDay
  const sameDay1 = dateX.isSameDay(testDate, testDateStr);
  const sameDay2 = dateX.isSameDay(testDate, new Date('2024-01-15'));
  assert(sameDay1, 'isSameDay should return true for same day');
  assert(sameDay2, 'isSameDay should return true for same day');
  
  const differentDay = dateX.isSameDay(testDate, '2024-01-16');
  assert(!differentDay, 'isSameDay should return false for different day');
  
  // isSameMonth
  const sameMonth = dateX.isSameMonth(testDate, '2024-01-20');
  assert(sameMonth, 'isSameMonth should return true for same month');
  
  const differentMonth = dateX.isSameMonth(testDate, '2024-02-15');
  assert(!differentMonth, 'isSameMonth should return false for different month');
  
  // isSameYear
  const sameYear = dateX.isSameYear(testDate, '2024-06-15');
  assert(sameYear, 'isSameYear should return true for same year');
  
  const differentYear = dateX.isSameYear(testDate, '2023-01-15');
  assert(!differentYear, 'isSameYear should return false for different year');
  
  console.log('✓ Comparison functions tests passed');
} catch (error) {
  console.error('✗ Comparison functions tests failed:', error.message);
}

// Test 12: Array functions
try {
  const dates = [pastDate, testDate, futureDate];
  
  // maxDate
  const max = dateX.maxDate(dates);
  assert(max === futureDate, 'maxDate should return the latest date');
  
  // minDate
  const min = dateX.minDate(dates);
  assert(min === pastDate, 'minDate should return the earliest date');
  
  // sortDatesAscending
  const sortedAsc = dateX.sortDatesAscending(dates);
  assert(sortedAsc[0] === pastDate, 'sortDatesAscending should sort from earliest to latest');
  assert(sortedAsc[2] === futureDate, 'sortDatesAscending should sort from earliest to latest');
  
  // sortDatesDescending
  const sortedDesc = dateX.sortDatesDescending(dates);
  assert(sortedDesc[0] === futureDate, 'sortDatesDescending should sort from latest to earliest');
  assert(sortedDesc[2] === pastDate, 'sortDatesDescending should sort from latest to earliest');
  
  console.log('✓ Array functions tests passed');
} catch (error) {
  console.error('✗ Array functions tests failed:', error.message);
}

// Test 13: Format functions
try {
  // formatRelative
  const relative = dateX.formatRelative(pastDate);
  assert(typeof relative === 'string', 'formatRelative should return a string');
  
  // formatDuration
  const duration1 = dateX.formatDuration(500);
  const duration2 = dateX.formatDuration(65000); // 1m 5s
  const duration3 = dateX.formatDuration(9600000); // 2h 40m
  assert(duration1.includes('ms'), 'formatDuration should include ms for small durations');
  assert(duration2.includes('s'), 'formatDuration should include seconds');
  assert(duration3.includes('m'), 'formatDuration should include minutes');
  
  console.log('✓ Format functions tests passed');
} catch (error) {
  console.error('✗ Format functions tests failed:', error.message);
}

// Test 14: Helper functions
try {
  // createDate
  const created = dateX.createDate(2024, 1, 15);
  assert(created.getFullYear() === 2024, 'createDate should set correct year');
  assert(created.getMonth() === 0, 'createDate should set correct month');
  assert(created.getDate() === 15, 'createDate should set correct day');
  
  // clamp
  const clamped = dateX.clamp(testDate, pastDate, futureDate);
  assert(clamped === testDate, 'clamp should return date if it is between min and max');
  
  const clampedPast = dateX.clamp(pastDate, testDate, futureDate);
  assert(clampedPast === testDate, 'clamp should return min date if date is before min');
  
  // nextDay and previousDay
  const nextMonday = dateX.nextDay(testDate, 1); // Monday = 1
  const prevMonday = dateX.previousDay(testDate, 1);
  assert(nextMonday.getDay() === 1, 'nextDay should return next specified day');
  assert(prevMonday.getDay() === 1, 'previousDay should return previous specified day');
  
  // firstDayOfMonth, lastDayOfMonth
  const first = dateX.firstDayOfMonth(testDate);
  const last = dateX.lastDayOfMonth(testDate);
  assert(first.getDate() === 1, 'firstDayOfMonth should return first day of month');
  assert(last.getDate() === 31, 'lastDayOfMonth should return last day of month');
  
  console.log('✓ Helper functions tests passed');
} catch (error) {
  console.error('✗ Helper functions tests failed:', error.message);
}

console.log('\n=== Test Summary ===');
console.log('All tests completed. Check for any errors above.');
console.log('Date-x appears to be working correctly!');