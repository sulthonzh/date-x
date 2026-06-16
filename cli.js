#!/usr/bin/env node

/**
 * Date-x CLI - Command line interface for date utilities
 */

// Simple CLI parser - no external dependencies
const args = process.argv.slice(2);
const command = args[0];
const options = {};

// Parse options
for (let i = 1; i < args.length; i++) {
  const arg = args[i];
  if (arg.startsWith('--')) {
    options[arg.substring(2)] = true;
  }
}

// Import our utilities
const utils = await import('./src/index.js');
const {
  formatYYYYMMDD,
  formatDDMMYYYY,
  formatMMDDYYYY,
  formatRelative,
  getDayName,
  getMonthName,
  isToday,
  isPast,
  isFuture,
  isWeekend,
  getAge,
  diffInDays,
  diffInHours,
  diffInMinutes,
  diffInYears
} = utils;

function showHelp() {
  console.log(`
date-x - Zero-dependency date manipulation and formatting utilities

Usage:
  date-x <command> [options]
  date-x <date> [options]

Commands:
  format <date>     Format a date in various formats
  info <date>       Get information about a date
  diff <date1> <date2> Calculate difference between two dates
  demo              Run a demo of date-x features

Format options:
  --iso            Format as ISO string
  --yyyy-mm-dd     Format as YYYY-MM-DD
  --dd-mm-yyyy     Format as DD/MM/YYYY
  --mm-dd-yyyy     Format as MM/DD/YYYY
  --relative       Format as relative time
  --day-name       Show day name
  --month-name     Show month name
  --time           Show time only

Info options:
  --today          Check if date is today
  --past           Check if date is in the past
  --future         Check if date is in the future
  --weekend        Check if date is weekend
  --age            Calculate age from date
  --year           Show year
  --month          Show month (1-12)
  --day            Show day (1-31)
  --day-name       Show day name
  --month-name     Show month name

Diff options:
  --days           Show difference in days
  --hours          Show difference in hours
  --minutes        Show difference in minutes
  --years          Show difference in years
  --all            Show all differences

Examples:
  date-x 2024-01-01 --yyyy-mm-dd
  date-x 2024-01-01 --age
  date-x 2020-01-01 2024-01-01 --days
  date-x demo
`);
}

function parseInput(input) {
  if (!input) return new Date();
  
  // Try to parse as date
  const parsed = new Date(input);
  if (!isNaN(parsed.getTime())) {
    return parsed;
  }
  
  // If not a valid date, throw error
  throw new Error('Invalid date format');
}

if (args.length === 0 || args[0] === '--help' || args[0] === 'help') {
  showHelp();
  process.exit(0);
}

try {
  if (command === 'format' && args[1]) {
    const dateInput = args[1];
    const date = parseInput(dateInput);
    
    if (options.iso) {
      console.log(date.toISOString());
    } else if (options['yyyy-mm-dd']) {
      console.log(formatYYYYMMDD(date));
    } else if (options['dd-mm-yyyy']) {
      console.log(formatDDMMYYYY(date));
    } else if (options['mm-dd-yyyy']) {
      console.log(formatMMDDYYYY(date));
    } else if (options.relative) {
      console.log(formatRelative(date));
    } else if (options['day-name']) {
      console.log(getDayName(date));
    } else if (options['month-name']) {
      console.log(getMonthName(date));
    } else if (options.time) {
      console.log(date.toLocaleTimeString());
    } else {
      // Default format
      console.log(date.toLocaleString());
    }
  } else if (command === 'info' && args[1]) {
    const dateInput = args[1];
    const date = parseInput(dateInput);
    
    const info = {};
    
    if (options.today) {
      info.isToday = isToday(date);
    }
    
    if (options.past) {
      info.isPast = isPast(date);
    }
    
    if (options.future) {
      info.isFuture = isFuture(date);
    }
    
    if (options.weekend) {
      info.isWeekend = isWeekend(date);
    }
    
    if (options.age) {
      info.age = getAge(date);
    }
    
    if (options.year) {
      info.year = date.getFullYear();
    }
    
    if (options.month) {
      info.month = date.getMonth() + 1;
    }
    
    if (options.day) {
      info.day = date.getDate();
    }
    
    // Additional info to always show
    info.dateString = date.toDateString();
    info.timeString = date.toLocaleTimeString();
    
    console.log(JSON.stringify(info, null, 2));
  } else if (command === 'diff' && args[1] && args[2]) {
    const date1Input = args[1];
    const date2Input = args[2];
    const date1 = parseInput(date1Input);
    const date2 = parseInput(date2Input);
    
    if (options.all) {
      const diff = {
        milliseconds: Math.abs(date1 - date2),
        seconds: Math.abs(diffInMinutes(date1, date2) * 60),
        minutes: diffInMinutes(date1, date2),
        hours: diffInHours(date1, date2),
        days: diffInDays(date1, date2),
        years: diffInYears(date1, date2)
      };
      
      console.log(JSON.stringify(diff, null, 2));
    } else {
      let result;
      if (options.days) {
        result = diffInDays(date1, date2);
      } else if (options.hours) {
        result = diffInHours(date1, date2);
      } else if (options.minutes) {
        result = diffInMinutes(date1, date2);
      } else if (options.years) {
        result = diffInYears(date1, date2);
      } else {
        // Default to days
        result = diffInDays(date1, date2);
      }
      
      console.log(result);
    }
  } else if (command === 'demo') {
    console.log('=== Date-x Demo ===\n');
    
    const now = new Date();
    const past = new Date('2020-01-01');
    const future = new Date('2030-12-31');
    
    console.log('Current date:', now.toLocaleString());
    console.log('Past date:', past.toLocaleString());
    console.log('Future date:', future.toLocaleString());
    console.log();
    
    console.log('=== Formatting ===');
    console.log('YYYY-MM-DD:', formatYYYYMMDD(now));
    console.log('DD/MM/YYYY:', formatDDMMYYYY(now));
    console.log('MM/DD/YYYY:', formatMMDDYYYY(now));
    console.log('Relative time:', formatRelative(past));
    console.log('Day name:', getDayName(now));
    console.log('Month name:', getMonthName(now));
    console.log();
    
    console.log('=== Checks ===');
    console.log('Is today?', isToday(now));
    console.log('Is past date?', isPast(past));
    console.log('Is future date?', isFuture(future));
    console.log('Is weekend?', isWeekend(now));
    console.log();
    
    console.log('=== Age calculation ===');
    console.log('Age from 1990-01-01:', getAge('1990-01-01'));
    console.log();
    
    console.log('=== Differences ===');
    console.log('Days between dates:', diffInDays(future, past));
    console.log('Hours between dates:', diffInHours(future, past));
    console.log('Years between dates:', diffInYears(future, past));
    console.log();
    
    console.log('Demo completed! Use --help for more commands.');
  } else {
    console.log('Invalid command. Use --help for usage information.');
    process.exit(1);
  }
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}