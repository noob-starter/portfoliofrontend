// Utility function to map API contact data to component format
// This transforms the backend API structure to match the Card component's expected props

import { processImageUrl } from '../utils/helper';

/**
 * Maps a single contact object from API format to Card component format
 * @param {Object} contact - Contact object from API
 * @returns {Object} Mapped contact object for Card component
 */
export const mapContact = (contact) => {
  const mappedContact = {
    title: contact.platform,                        
    subtitle: contact.description,                   
    image: processImageUrl(contact.banner),                            
    url: contact.url,                                 
    hideMoreButton: true                            
  };
  return mappedContact;
};

/**
 * Maps an array of contacts from API format to Card component format
 * @param {Array} contacts - Array of contact objects from API
 * @returns {Array} Array of mapped contact objects
 */
export const mapContacts = (contacts) => {
  if (!Array.isArray(contacts)) {
    return [];
  }
  return contacts.map(mapContact);
};

