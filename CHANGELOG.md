# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-06-16

### Added
- Initial release with 40+ date utilities
- CLI interface (`date-x format`, `date-x info`, `date-x diff`, `date-x demo`)
- Zero-dependency design (no runtime deps)
- Comprehensive test suite (14 test groups, all passing)
- Full ESM support (`"type": "module"`)
- Browser and Node.js compatibility

### Features
- Date validation and parsing (YYYY-MM-DD, DD/MM/YYYY, MM/DD/YYYY, ISO)
- Date checks (isToday, isYesterday, isTomorrow, isPast, isFuture, isWeekend, isWeekday)
- Date formatting (YYYY-MM-DD, DD/MM/YYYY, MM/DD/YYYY, custom format, relative)
- Date arithmetic (addDays, addWeeks, addMonths, addYears)
- Date boundaries (startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear)
- Date differences (ms, seconds, minutes, hours, days, weeks, months, years)
- Utility functions (getAge, isBetween, getDayOfYear, getWeekNumber, getQuarter, isLeapYear, daysInMonth)
- Comparison functions (isSameDay, isSameMonth, isSameYear)
- Array functions (maxDate, minDate, sortDatesAscending, sortDatesDescending)
- Helper functions (createDate, clamp, nextDay, previousDay, firstDayOfMonth, lastDayOfMonth)

## [1.0.1] - 2026-07-07

### Fixed
- `parse()`: DD/MM/YYYY and MM/DD/YYYY branches had identical regex patterns, making the MM/DD/YYYY branch unreachable. Replaced with heuristic detection (if first part > 12 → DD/MM, if second part > 12 → MM/DD, ambiguous defaults to DD/MM/YYYY)
- `parse()`: Added type guard for non-string inputs (returns null instead of throwing)
- `format()`: Renamed `format` parameter to `formatStr` to avoid shadowing the function name

### Improved
- Parse function now handles ISO datetime strings with space separator (e.g., "2024-01-15 10:30:00")
- Better JSDoc documentation for parse() listing all supported formats
