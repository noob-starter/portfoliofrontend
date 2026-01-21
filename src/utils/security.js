/**
 * Security Utilities
 * Collection of security-related helper functions
 */

import logger from './logger';


/**
 * Sanitize user input to prevent XSS attacks
 * @param {string} input - User input to sanitize
 * @returns {string} - Sanitized input
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;

  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };

  return input.replace(/[&<>"'/]/g, (char) => map[char]);
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate URL format
 * @param {string} url - URL to validate
 * @returns {boolean} - True if valid URL
 */
export const isValidURL = (url) => {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
};

/**
 * Detect potential XSS patterns
 * @param {string} input - Input to check
 * @returns {boolean} - True if suspicious patterns found
 */
export const containsXSSPatterns = (input) => {
  if (typeof input !== 'string') return false;

  const xssPatterns = [
    /<script[^>]*>.*?<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi, // onclick, onerror, onload, etc.
    /<iframe/gi,
    /eval\(/gi,
    /expression\(/gi,
  ];

  return xssPatterns.some(pattern => pattern.test(input));
};

/**
 * Rate limiting helper using localStorage
 * @param {string} key - Unique key for the action
 * @param {number} maxAttempts - Maximum attempts allowed
 * @param {number} timeWindow - Time window in milliseconds
 * @returns {object} - { allowed: boolean, remaining: number, resetTime: number }
 */
export const checkRateLimit = (key, maxAttempts = 5, timeWindow = 60000) => {
  const now = Date.now();
  const storageKey = `rateLimit_${key}`;

  try {
    const data = localStorage.getItem(storageKey);
    const rateLimitData = data ? JSON.parse(data) : { attempts: [], resetTime: now + timeWindow };

    // Remove old attempts outside the time window
    rateLimitData.attempts = rateLimitData.attempts.filter(
      timestamp => now - timestamp < timeWindow
    );

    // Check if rate limit exceeded
    if (rateLimitData.attempts.length >= maxAttempts) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: rateLimitData.attempts[0] + timeWindow,
      };
    }

    // Add current attempt
    rateLimitData.attempts.push(now);
    localStorage.setItem(storageKey, JSON.stringify(rateLimitData));

    return {
      allowed: true,
      remaining: maxAttempts - rateLimitData.attempts.length,
      resetTime: now + timeWindow,
    };
  } catch (error) {
    logger.error('Rate limit check error:', error);
    return { allowed: true, remaining: maxAttempts, resetTime: now + timeWindow };
  }
};

/**
 * Clear rate limit for a specific key
 * @param {string} key - Rate limit key to clear
 */
export const clearRateLimit = (key) => {
  const storageKey = `rateLimit_${key}`;
  try {
    localStorage.removeItem(storageKey);
  } catch (error) {
    logger.error('Clear rate limit error:', error);
  }
};

/**
 * Validate form data against common injection attacks
 * @param {object} formData - Form data to validate
 * @returns {object} - { valid: boolean, errors: string[] }
 */
export const validateFormData = (formData) => {
  const errors = [];

  Object.entries(formData).forEach(([key, value]) => {
    if (typeof value === 'string') {
      if (containsXSSPatterns(value)) {
        errors.push(`${key} contains potentially unsafe content`);
      }

      if (value.length > 10000) {
        errors.push(`${key} exceeds maximum length`);
      }
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
};

/**
 * Create a Content Security Policy meta tag
 * @returns {string} - CSP content string
 */
export const getCSPContent = () => {
  return [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ');
};

/**
 * Secure session storage wrapper
 */
export const secureStorage = {
  set: (key, value) => {
    try {
      const encrypted = btoa(JSON.stringify({ value, timestamp: Date.now() }));
      sessionStorage.setItem(key, encrypted);
      return true;
    } catch (error) {
      logger.error('Secure storage set error:', error);
      return false;
    }
  },

  get: (key, maxAge = 3600000) => { // Default 1 hour
    try {
      const encrypted = sessionStorage.getItem(key);
      if (!encrypted) return null;

      const { value, timestamp } = JSON.parse(atob(encrypted));

      // Check if expired
      if (Date.now() - timestamp > maxAge) {
        sessionStorage.removeItem(key);
        return null;
      }

      return value;
    } catch (error) {
      logger.error('Secure storage get error:', error);
      return null;
    }
  },

  remove: (key) => {
    try {
      sessionStorage.removeItem(key);
      return true;
    } catch (error) {
      logger.error('Secure storage remove error:', error);
      return false;
    }
  },

  clear: () => {
    try {
      sessionStorage.clear();
      return true;
    } catch (error) {
      logger.error('Secure storage clear error:', error);
      return false;
    }
  },
};

export default {
  sanitizeInput,
  isValidEmail,
  isValidURL,
  containsXSSPatterns,
  checkRateLimit,
  clearRateLimit,
  validateFormData,
  getCSPContent,
  secureStorage,
};
