import axios from 'axios';
import { buildApiUrl, profileId } from '../config/api';
import { mapAddresses } from '../mappers/addressMapper.js';
import { defaultAddresses } from '../utils/defaultData';
import logger from '../utils/logger';

/**
 * Fetches address information for the profile
 * @returns {Promise<Array>} Array of mapped address objects
 */
export const fetchAddresses = async () => {
  try {
    const response = await axios.get(buildApiUrl(`addresses/profile/${profileId}`));
    const mappedAddresses = mapAddresses(response.data);
    return mappedAddresses;
  } catch (error) {
    logger.error('Error fetching addresses:', error);
    const mappedDefaultAddresses = mapAddresses(defaultAddresses);
    return mappedDefaultAddresses;
  }
};

