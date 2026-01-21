import axios from 'axios';
import { buildApiUrl, profileId } from '../config/api';
import { mapExperiences } from '../mappers/experienceMapper.js';
import { defaultExperiences } from '../utils/defaultData';
import logger from '../utils/logger';

/**
 * Fetches experience information for the profile
 * @returns {Promise<Array>} Array of mapped experience objects
 */
export const fetchExperiences = async () => {
  try {
    const response = await axios.get(buildApiUrl(`experiences/profile/${profileId}`));
    const mappedExperiences = mapExperiences(response.data);
    return mappedExperiences;
  } catch (error) {
    logger.error('Error fetching experiences:', error);
    return defaultExperiences;
  }
};

