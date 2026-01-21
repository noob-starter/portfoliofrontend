import axios from 'axios';
import { buildApiUrl, profileId } from '../config/api';
import { mapAchievements } from '../mappers/achievementsMapper.js';
import { defaultAchievements } from '../utils/defaultData';
import logger from '../utils/logger';

/**
 * Fetches achievements information for the profile
 * @returns {Promise<Array>} Array of mapped achievement objects
 */
export const fetchAchievements = async () => {
  try {
    const response = await axios.get(buildApiUrl(`achievements/profile/${profileId}`));
    const mappedAchievements = mapAchievements(response.data);
    return mappedAchievements;
  } catch (error) {
    logger.error('Error fetching achievements:', error);
    return defaultAchievements;
  }
};

