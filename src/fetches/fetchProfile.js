import axios from 'axios';
import { buildApiUrl, profileId } from '../config/api';
import logger from '../utils/logger';

/**
 * Fetches profile information
 * @returns {Promise<Object|null>} Profile object or null if fetch fails
 */
export const fetchProfile = async () => {
  try {
    const response = await axios.get(buildApiUrl(`profiles/${profileId}`));
    return response.data;
  } catch (error) {
    logger.error('Error fetching profile:', error);
    return null;
  }
};

