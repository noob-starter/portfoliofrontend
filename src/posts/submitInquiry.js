import axios from 'axios';
import { buildApiUrl, profileId } from '../config/api.js';

/**
 * Submits an inquiry form to the API
 * @param {Object} inquiryData - The inquiry data object
 * @param {string} inquiryData.firstName - User's first name
 * @param {string} inquiryData.lastName - User's last name
 * @param {string} inquiryData.email - User's email address
 * @param {string} inquiryData.message - User's message
 * @returns {Promise<Object>} API response data
 */
export const submitInquiry = async (inquiryData) => {
  try {
    const payload = {
      name: `${inquiryData.firstName} ${inquiryData.lastName}`,
      email: inquiryData.email,
      message: inquiryData.message,
      profileId: profileId
    };

    const response = await axios.post(buildApiUrl('inquires'), payload, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

