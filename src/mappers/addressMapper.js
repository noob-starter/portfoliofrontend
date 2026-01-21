// Utility function to map API address data to component format
// This transforms the backend API structure to match the Card component's expected props

import { joinContentUsingSeperator, processImageUrl } from '../utils/helper';

/**
 * Maps a single address object from API format to Card component format
 * @param {Object} address - Address object from API
 * @returns {Object} Mapped address object for Card component
 */
export const mapAddress = (address) => {
  const addressComponents = [
    address.street,
    address.landmark,
    address.city,
    address.state,
    address.country,
    address.pincode
  ].filter(component => component !== null && component !== undefined && component !== '');
  
  const addressLine = joinContentUsingSeperator(addressComponents, ', ');
  
  // Add email and phone if they exist
  const contactComponents = [];
  if (address.email) {
    contactComponents.push(address.email);
  }
  if (address.phone) {
    contactComponents.push(address.phone);
  }
  
  let subtitle = addressLine;
  if (contactComponents.length > 0) {
    subtitle += '\n\n' + joinContentUsingSeperator(contactComponents, '\n');
  }
  
  const mappedAddress = {
    title: address.type ? `${address.type} Address` : 'Address',  
    subtitle: subtitle,                                            
    image: processImageUrl(address.url),                                            
    hideMoreButton: true                                           
  };
  
  return mappedAddress;
};

/**
 * Maps an array of addresses from API format to Card component format
 * @param {Array} addresses - Array of address objects from API
 * @returns {Array} Array of mapped address objects
 */
export const mapAddresses = (addresses) => {
  if (!Array.isArray(addresses)) {
    return [];
  }
  return addresses.map(mapAddress);
};

