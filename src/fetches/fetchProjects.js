import axios from 'axios';
import { buildApiUrl, profileId } from '../config/api';
import { mapProjects } from '../mappers/projectMapper.js';
import { defaultProjects } from '../utils/defaultData';
import logger from '../utils/logger';

/**
 * Fetches projects information for the profile
 * @returns {Promise<Array>} Array of mapped project objects
 */
export const fetchProjects = async () => {
  try {
    const response = await axios.get(buildApiUrl(`projects/profile/${profileId}`));
    const mappedProjects = mapProjects(response.data);
    return mappedProjects;
  } catch (error) {
    logger.error('Error fetching projects:', error);
    return defaultProjects;
  }
};

