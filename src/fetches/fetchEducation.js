import axios from 'axios';
import { buildApiUrl, profileId } from '../config/api';
import { mapEducations } from '../mappers/educationMapper.js';
import { defaultEducation } from '../utils/defaultData';
import logger from '../utils/logger';

/**
 * Fetches education information for the profile
 * @returns {Promise<Array>} Array of mapped education objects
 */
export const fetchEducation = async () => {
  try {
    const response = await axios.get(buildApiUrl(`educations/profile/${profileId}`));
    const mappedEducation = mapEducations(response.data);
    return mappedEducation;
  } catch (error) {
    logger.error('Error fetching education:', error);
    return defaultEducation;
  }
};

