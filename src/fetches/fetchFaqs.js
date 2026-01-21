import axios from 'axios';
import { buildApiUrl, profileId } from '../config/api';
import { defaultFaqs } from '../utils/defaultData';
import logger from '../utils/logger';

/**
 * Fetches FAQs for the profile
 * @returns {Promise<Array>} Array of FAQ objects
 */
export const fetchFaqs = async () => {
  try {
    const response = await axios.get(buildApiUrl(`faqs/profile/${profileId}`));
    return response.data;
  } catch (error) {
    logger.error('Error fetching FAQs:', error);
    return defaultFaqs;
  }
};

