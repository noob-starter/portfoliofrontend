import axios from 'axios';
import { buildApiUrl, profileId } from '../config/api';
import { mapTechnologies } from '../mappers/technologiesMapper.js';
import { defaultTechnologies, defaultInterpersonalSkills } from '../utils/defaultData';
import logger from '../utils/logger';

/**
 * Fetches technologies and skills for the profile
 * @returns {Promise<Object>} Object with technicalSkills and interpersonalSkills arrays
 */
export const fetchTechnologies = async () => {
  try {
    const response = await axios.get(buildApiUrl(`technologies/profile/${profileId}`));
    const sortedTechnologies = mapTechnologies(response.data);
    return {
      technicalSkills: sortedTechnologies.technicalSkills,
      interpersonalSkills: sortedTechnologies.interpersonalSkills
    };
  } catch (error) {
    logger.error('Error fetching technologies:', error);
    return {
      technicalSkills: defaultTechnologies,
      interpersonalSkills: defaultInterpersonalSkills
    };
  }
};

