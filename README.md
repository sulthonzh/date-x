# Date-x - Zero-dependency Date Utilities

A comprehensive, zero-dependency JavaScript library for date manipulation, formatting, and comparison. Date-x provides robust utilities for working with dates in both browser and Node.js environments.

## Why Date-x?

JavaScript's built-in Date object is powerful but cumbersome for common tasks. Date-x fills the gaps with:

- **Intuitive API**: Methods that read like plain English (`isToday`, `addDays`, `startOfWeek`)
- **Comprehensive Coverage**: 40+ utilities covering formatting, validation, arithmetic, and comparison
- **Zero Dependencies**: No external dependencies, lightweight bundle
- **Consistent Behavior**: Handles edge cases like timezones and DST properly
- **CLI Interface**: Command-line tools for quick date operations
- **TypeScript Ready**: Full type definitions included

## Installation

```bash
npm install date-x
```

```bash
# Or use via CLI (no install needed)
npx date-x demo
```

## Quick Start

```javascript
import * as dateX from 'date-x';

// Basic formatting
const now = new Date();
console.log(dateX.formatYYYYMMDD(now)); // "2024-01-15"
console.log(dateX.formatDDMMYYYY(now)); // "15/01/2024"
console.log(dateX.formatRelative(now));  // "2 days ago"

// Date checks
console.log(dateX.isToday(now));       // true
console.log(dateX.isWeekend(now));    // false
console.log(dateX.isPast('2020-01-01')); // true

// Date arithmetic
const nextWeek = dateX.addWeeks(now, 1);
const monthStart = dateX.startOfMonth(now);

// Comparisons
const diff = dateX.diffInDays(nextWeek, now);
console.log(`Difference: ${diff} days`); // "Difference: 7 days"
```

## API Reference

### Date Validation

- `isValidDate(date)` - Check if a value is a valid Date object
- `parse(dateStr)` - Parse date strings (supports multiple formats)

### Date Checks

- `isToday(date)` - Check if date is today
- `isYesterday(date)` - Check if date is yesterday  
- `isTomorrow(date)` - Check if date is tomorrow
- `isPast(date)` - Check if date is in the past
- `isFuture(date)` - Check if date is in the future
- `isWeekend(date)` - Check if date is Saturday or Sunday
- `isWeekday(date)` - Check if date is Monday-Friday

### Date Information

- `getDayName(date, locale?)` - Get full day name (Monday, Tuesday, etc.)
- `getDayNameShort(date, locale?)` - Get abbreviated day name (Mon, Tue, etc.)
- `getMonthName(date, locale?)` - Get full month name (January, February, etc.)
- `getMonthNameShort(date, locale?)` - Get abbreviated month name (Jan, Feb, etc.)

### Date Formatting

- `formatYYYYMMDD(date)` - Format as YYYY-MM-DD
- `formatDDMMYYYY(date)` - Format as DD/MM/YYYY  
- `formatMMDDYYYY(date)` - Format as MM/DD/YYYY
- `format(date, formatStr)` - Custom formatting with placeholders:
  - `YYYY` - 4-digit year
  - `MM` - 2-digit month
  - `DD` - 2-digit day
  - `HH` - 2-digit hour (24-hour)
  - `mm` - 2-digit minute
  - `ss` - 2-digit second

### Date Arithmetic

- `addDays(date, days)` - Add/subtract days
- `addWeeks(date, weeks)` - Add/subtract weeks
- `addMonths(date, months)` - Add/subtract months
- `addYears(date, years)` - Add/subtract years

### Date Boundaries

- `startOfDay(date)` - Get start of day (00:00:00)
- `endOfDay(date)` - Get end of day (23:59:59)
- `startOfWeek(date)` - Get start of week (Sunday)
- `endOfWeek(date)` - Get end of week (Saturday)
- `startOfMonth(date)` - Get start of month (1st)
- `endOfMonth(date)` - Get end of month (last day)
- `startOfYear(date)` - Get start of year (Jan 1st)
- `endOfYear(date)` - Get end of year (Dec 31st)

### Date Differences

- `diffInMilliseconds(date1, date2)`
- `diffInSeconds(date1, date2)`
- `diffInMinutes(date1, date2)`
- `diffInHours(date1, date2)`
- `diffInDays(date1, date2)`
- `diffInWeeks(date1, date2)`
- `diffInMonths(date1, date2)`
- `diffInYears(date1, date2)`

### Utility Functions

- `getAge(birthDate)` - Calculate age from birth date
- `isBetween(date, start, end, inclusive?)` - Check if date is between two dates
- `getDayOfYear(date)` - Get day of year (1-366)
- `getWeekNumber(date)` - Get ISO week number (1-53)
- `getQuarter(date)` - Get quarter of year (1-4)
- `formatRelative(date, locale?)` - Format as relative time ("2 days ago")
- `formatDuration(ms, options?)` - Format duration as human-readable string
- `clamp(date, min, max)` - Clamp date between min and max values
- `nextDay(date, dayOfWeek)` - Get next occurrence of day of week
- `previousDay(date, dayOfWeek)` - Get previous occurrence of day of week
- `isLeapYear(date)` - Check if year is leap year
- `daysInMonth(date)` - Get number of days in month
- `isSameDay(date1, date2)` - Check if dates are same day
- `isSameMonth(date1, date2)` - Check if dates are same month
- `isSameYear(date1, date2)` - Check if dates are same year
- `createDate(year, month, day, hour?, minute?, second?, millisecond?)` - Create date from components
- `maxDate(dates)` - Get maximum date from array
- `minDate(dates)` - Get minimum date from array
- `sortDatesAscending(dates)` - Sort dates in ascending order
- `sortDatesDescending(dates)` - Sort dates in descending order

## CLI Usage

Date-x includes a command-line interface for quick date operations:

```bash
# Format dates
date-x 2024-01-15 --yyyy-mm-dd        # Output: 2024-01-15
date-x 2024-01-15 --dd-mm-yyyy        # Output: 15/01/2024
date-x 2024-01-15 --mm-dd-yyyy        # Output: 01/15/2024
date-x 2024-01-15 --relative           # Output: 2 days ago
date-x 2024-01-15 --day-name          # Output: Monday
date-x 2024-01-15 --month-name        # Output: January

# Get date info
date-x 2024-01-15 --today              # Check if date is today
date-x 2024-01-15 --age               # Calculate age from date
date-x 2024-01-15 --weekend           # Check if date is weekend

# Calculate differences
date-x 2020-01-01 2024-01-01 --days   # Output: 1461
date-x 2020-01-01 2024-01-01 --hours  # Output: 35064
date-x 2020-01-01 2024-01-01 --all    # Output: all differences

# Run demo
date-x demo                            # Show all features
```

## Real-World Examples

### Age Calculator

```javascript
import { getAge, parse } from 'date-x';

// Calculate age from various date formats
const age1 = getAge('1990-05-15');
const age2 = getAge('15/05/1990');
const age3 = getAge(new Date(1990, 4, 15));

console.log(`Age: ${age1} years`);
```

### Business Day Calculations

```javascript
import { addDays, isWeekend, startOfDay } from 'date-x';

function addBusinessDays(startDate, days) {
  let date = startOfDay(startDate);
  let added = 0;
  
  while (added < days) {
    date = addDays(date, 1);
    if (!isWeekend(date)) {
      added++;
    }
  }
  
  return date;
}

const nextBusinessWeek = addBusinessDays(new Date(), 5);
console.log(`Next business week: ${dateX.formatYYYYMMDD(nextBusinessWeek)}`);
```

### Date Range Validation

```javascript
import { isBetween, parse } from 'date-x';

function isValidBooking(checkin, checkout) {
  const today = new Date();
  const maxBooking = addDays(today, 90); // Max 90 days in advance
  
  const checkinDate = parse(checkin);
  const checkoutDate = parse(checkout);
  
  return isBetween(checkinDate, today, maxBooking) && 
         isBetween(checkoutDate, checkinDate, maxBooking);
}

console.log(isValidBooking('2024-02-01', '2024-02-10')); // true
console.log(isValidBooking('2025-01-01', '2025-01-10')); // false (too far)
```

### Date Formatting for Reports

```javascript
import { format, getQuarter, getYear } from 'date-x';

function formatReportPeriod(date) {
  const quarter = getQuarter(date);
  const year = getYear(date);
  return `Q${quarter} ${year}`;
}

const now = new Date();
console.log(`Current report period: ${formatReportPeriod(now)}`);
// Output: Q1 2024
```

### Countdown Timer

```javascript
import { diffInDays, diffInHours, diffInMinutes, formatDuration } from 'date-x';

function countDownTo(targetDate) {
  const now = new Date();
  const diff = targetDate - now;
  
  if (diff <= 0) {
    return "Time's up!";
  }
  
  return `Time remaining: ${formatDuration(diff)}`;
}

const eventDate = new Date('2024-12-31T23:59:59');
console.log(countDownTo(eventDate));
// Output: Time remaining: 2m 30s 456ms
```

### Date Sorting and Filtering

```javascript
import { sortDatesAscending, isWeekend, startOfDay } from 'date-x';

// Filter out weekends
function filterWeekendDates(dates) {
  return dates.filter(date => !isWeekend(date));
}

// Get upcoming weekdays
const allDates = ['2024-01-13', '2024-01-14', '2024-01-15', '2024-01-16'];
const weekdays = filterWeekendDates(allDates);
const sorted = sortDatesAscending(weekdays);

console.log('Upcoming weekdays:', sorted);
```

## Browser Usage

Date-x works in browsers with ES modules:

```html
<script type="module">
  import { isToday, formatYYYYMMDD } from './date-x/dist/index.js';
  
  console.log(isToday(new Date()));
  console.log(formatYYYYMMDD(new Date()));
</script>
```

## Performance

Date-x is optimized for performance:

- All functions are pure and side-effect free
- Minimal object creation (no intermediate Date objects where possible)
- Efficient date calculations using native Date methods
- Zero overhead CLI implementation

## Error Handling

The library handles edge cases gracefully:

```javascript
// Invalid dates return null
const invalid = dateX.parse('invalid date');
console.log(invalid === null); // true

// Non-date inputs return false for checks
console.log(dateX.isToday('not a date')); // false

// Arithmetic operations handle negative values
const pastDate = dateX.addDays(new Date(), -5); // 5 days ago
```

## Contributing

Date-x is designed to be extensible. To add new features:

1. Follow the existing API patterns
2. Include comprehensive tests
3. Document real-world use cases
4. Ensure zero-dependency compliance

## License

MIT License - see LICENSE file for details.

## Changelog

### v1.0.0
- Initial release with 40+ date utilities
- CLI interface
- Comprehensive test suite
- Zero-dependency design