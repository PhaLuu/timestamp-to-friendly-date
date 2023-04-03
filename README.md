# Timestamp to Human-friendly Date String Converter

This package provides a simple utility function that converts a Unix timestamp into a human-friendly date string. It takes into account the current date and time to provide a more meaningful representation of the input timestamp. The package uses the `dayjs` library for date manipulation and formatting, which will be installed automatically as a dependency.

## Features

- Automatically formats the date string based on the input timestamp and the current date.
- Displays "Today", "Tomorrow", or "Yesterday" when appropriate.
- Shows the day of the week for dates within the same week.
- Formats the date string with a month, day, and time for dates within the same year.
- Includes the year in the date string for dates outside the current year.

## Usage:

1. Install the package:
```javascript
npm install timestamp-to-friendly-date
```
2. Import the convertTimestampToDateString function in your JavaScript or TypeScript file:

```javascript
import { formatFriendlyDateString } from 'timestamp-to-friendly-date';
```

3. Use the convertTimestampToDateString function to convert a Unix timestamp to a human-friendly date string: 

```javascript
import { formatFriendlyDateString } from 'timestamp-to-friendly-date';

// Today's timestamp
const todayTimestamp = new Date().getTime();
console.log(formatFriendlyDateString(todayTimestamp)); // Output: "Today, 2:00 PM" (assuming it's 2:00 PM now)

// Tomorrow's timestamp
const tomorrowTimestamp = new Date().getTime() + 24 * 60 * 60 * 1000;
console.log(formatFriendlyDateString(tomorrowTimestamp)); // Output: "Tomorrow, 2:00 PM" (assuming it's 2:00 PM now)

// Yesterday's timestamp
const yesterdayTimestamp = new Date().getTime() - 24 * 60 * 60 * 1000;
console.log(formatFriendlyDateString(yesterdayTimestamp)); // Output: "Yesterday, 2:00 PM" (assuming it's 2:00 PM now)

// Timestamp within the same week
const thisWeekTimestamp = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;
console.log(formatFriendlyDateString(thisWeekTimestamp)); // Output: "Wednesday, 2:00 PM" (assuming it's Monday 2:00 PM now)

// Timestamp within the same year
const thisYearTimestamp = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
console.log(formatFriendlyDateString(thisYearTimestamp)); // Output: "May 01, 2:00 PM" (assuming it's April 01, 2:00 PM now)

// Timestamp outside the current year
const otherYearTimestamp = new Date().getTime() + 365 * 24 * 60 * 60 * 1000;
console.log(formatFriendlyDateString(otherYearTimestamp)); // Output: "Apr 01, 2024, 2:00 PM" (assuming it's April 01, 2023, 2:00 PM now)

```

Please note that this package depends on dayjs, which will be installed automatically when you install this package.