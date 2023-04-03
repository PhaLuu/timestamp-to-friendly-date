// index.js

import dayjs from 'dayjs';

/**
 * formatFriendlyDateString - A function to convert Unix timestamp to a human-friendly date string.
 *
 * This function takes a Unix timestamp as an input and returns a formatted date string,
 * providing a more meaningful representation of the timestamp based on the current date and time.
 *
 * @param {number} timestamp - The Unix timestamp to be converted to a human-friendly date string.
 *
 * @returns {string} - A human-friendly date string based on the input timestamp and the current date.
 *
 * @example
 * const timestamp = 1672527600000;
 * const dateString = formatFriendlyDateString(timestamp);
 * console.log(dateString); // Output: "Today, 2:00 PM" (if the timestamp corresponds to the current date)
 */
export function formatFriendlyDateString(timestamp) {
  const date = dayjs(timestamp);
  const now = dayjs();

  if (date.isSame(now, 'day')) {
    return `Today, ${date.format('h:mm A')}`;
  }

  if (date.isSame(now.add(1, 'day'), 'day')) {
    return `Tomorrow, ${date.format('h:mm A')}`;
  }

  if (date.isSame(now.subtract(1, 'day'), 'day')) {
    return `Yesterday, ${date.format('h:mm A')}`;
  }

  if (date.isSame(now, 'week')) {
    return date.format('dddd, h:mm A');
  }

  if (date.isSame(now, 'year')) {
    return date.format('MMM DD, h:mm A');
  }

  return date.format('MMM DD, YYYY, h:mm A');
}
