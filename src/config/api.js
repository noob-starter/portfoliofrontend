import axios from 'axios';
import logger from '../utils/logger';

// API Configuration
// For production, use environment variables from your hosting platform
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://portfoliobackend-tqra.onrender.com';
const API_PORT = import.meta.env.VITE_API_PORT || '';
const API_VERSION = import.meta.env.VITE_API_VERSION || '/api/v1/';
const PROFILE_ID = import.meta.env.VITE_PROFILE_ID || '1';

// Social Links Configuration
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || 'https://github.com/noob-starter';

// Construct the full API URL
export const API_CONFIG = {
  baseUrl: API_BASE_URL,
  port: API_PORT,
  version: API_VERSION,
  profileId: PROFILE_ID,
  fullUrl: API_PORT ? `${API_BASE_URL}:${API_PORT}${API_VERSION}` : `${API_BASE_URL}${API_VERSION}`,
};

// Configure axios defaults
axios.defaults.timeout = 15000; // 15 seconds timeout
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Add request interceptor for logging and error handling
axios.interceptors.request.use(
  (config) => {
    logger.info('API Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    logger.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for consistent error handling
axios.interceptors.response.use(
  (response) => {
    logger.info('API Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    if (error.code === 'ECONNABORTED') {
      logger.error('Request timeout:', error.config?.url);
    } else if (error.response) {
      // Server responded with error status
      logger.error('API Error:', error.response.status, error.response.data);
    } else if (error.request) {
      // Request made but no response received
      logger.error('Network Error: No response received');
    } else {
      logger.error('Request Setup Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Helper function to build API endpoint URLs
export const buildApiUrl = (endpoint) => {
  return `${API_CONFIG.fullUrl}${endpoint}`;
};

// Export profileId for easy access
export const profileId = PROFILE_ID;

// Export social links
export const SOCIAL_LINKS = {
  github: GITHUB_URL,
};

export default API_CONFIG;

