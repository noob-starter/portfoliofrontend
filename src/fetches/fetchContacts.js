import axios from 'axios';
import { buildApiUrl, profileId } from '../config/api';
import { mapContacts } from '../mappers/contactsMapper.js';
import { defaultContacts } from '../utils/defaultData';
import logger from '../utils/logger';

/**
 * Fetches contact information for the profile
 * @returns {Promise<Array>} Array of mapped contact objects
 */
export const fetchContacts = async () => {
  try {
    const response = await axios.get(buildApiUrl(`contacts/profile/${profileId}`));
    const mappedContacts = mapContacts(response.data);
    return mappedContacts;
  } catch (error) {
    logger.error('Error fetching contacts:', error);
    return defaultContacts;
  }
};

