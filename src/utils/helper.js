/**
 * Utility helper functions
 */

/**
 * Truncates text to a specified length and adds ellipsis if needed
 * @param {string} text - The text to truncate
 * @param {number} truncateLength - Maximum length before truncation
 * @returns {string} - Truncated text with ellipsis or original text
 */
export const truncateText = (text, truncateLength) => {
  if (!text) return text;
  return text.length > truncateLength ? text.substring(0, truncateLength) + '...' : text;
};

/**
 * Joins content array with a separator
 * @param {Array} content - Array of content items to join
 * @param {string} separator - Separator string to use between items
 * @returns {string} - Joined string or empty string if content is empty
 */
export const joinContentUsingSeperator = (content, separator) => {
  if (!content || content.length === 0) return '';
  return content.join(separator);
};


