/**
 * Production-Safe Logger Utility
 * 
 * This logger only outputs to console in development mode.
 * In production, it either silences logs or can be configured to send to a logging service.
 */

const isDevelopment = import.meta.env.MODE === 'development';

const logger = {
  /**
   * Log informational messages
   * @param {...any} args - Arguments to log
   */
  log: (...args) => {
    if (isDevelopment) {
      console.log(...args);
    }
  },

  /**
   * Log informational messages (alias for log)
   * @param {...any} args - Arguments to log
   */
  info: (...args) => {
    if (isDevelopment) {
      console.info(...args);
    }
  },

  /**
   * Log warning messages
   * @param {...any} args - Arguments to log
   */
  warn: (...args) => {
    if (isDevelopment) {
      console.warn(...args);
    }
  },

  /**
   * Log error messages
   * In production, you might want to send these to an error tracking service
   * @param {...any} args - Arguments to log
   */
  error: (...args) => {
    if (isDevelopment) {
      console.error(...args);
    } else {
      // In production, you could send to an error tracking service like Sentry
      // Example: Sentry.captureException(args[0]);
    }
  },

  /**
   * Log debug messages (only in development)
   * @param {...any} args - Arguments to log
   */
  debug: (...args) => {
    if (isDevelopment) {
      console.debug(...args);
    }
  },

  /**
   * Group logs together (only in development)
   * @param {string} label - Group label
   */
  group: (label) => {
    if (isDevelopment) {
      console.group(label);
    }
  },

  /**
   * End log group (only in development)
   */
  groupEnd: () => {
    if (isDevelopment) {
      console.groupEnd();
    }
  },

  /**
   * Log a table (only in development)
   * @param {any} data - Data to display as table
   */
  table: (data) => {
    if (isDevelopment) {
      console.table(data);
    }
  },

  /**
   * Assert a condition (only in development)
   * @param {boolean} condition - Condition to assert
   * @param {...any} args - Arguments to log if assertion fails
   */
  assert: (condition, ...args) => {
    if (isDevelopment) {
      console.assert(condition, ...args);
    }
  },

  /**
   * Clear console (only in development)
   */
  clear: () => {
    if (isDevelopment) {
      console.clear();
    }
  },

  /**
   * Time a block of code (only in development)
   * @param {string} label - Timer label
   */
  time: (label) => {
    if (isDevelopment) {
      console.time(label);
    }
  },

  /**
   * End timing a block of code (only in development)
   * @param {string} label - Timer label
   */
  timeEnd: (label) => {
    if (isDevelopment) {
      console.timeEnd(label);
    }
  },
};

export default logger;

