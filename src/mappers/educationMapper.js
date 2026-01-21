// Utility function to map API education data to component format
// This transforms the backend API structure to match the Card component's expected props

import { joinContentUsingSeperator, processImageUrl } from '../utils/helper';

/**
 * Maps a single education object from API format to Card component format
 * @param {Object} edu - Education object from API
 * @returns {Object} Mapped education object for Card component
 */
export const mapEducation = (edu) => {
  const dateRange = edu.startDate 
    ? `${edu.startDate} to ${edu.endDate || 'Current'}`
    : '';

  const percentageDisplay = edu.percentage !== null 
    ? (edu.percentage <= 35.00 
        ? `${edu.percentage} CGPA` 
        : `${edu.percentage}%`)
    : '';

  const duration = joinContentUsingSeperator(
    [dateRange, percentageDisplay].filter(Boolean),
    '  |  '
  );

  const subtitle = joinContentUsingSeperator(
    [edu.degree, edu.field].filter(Boolean),
    ' in '
  );

  const mappedEducation = {
    title: edu.institution,
    subtitle: subtitle,
    duration: duration,
    description: edu.description,
    link: edu.url,
    image: processImageUrl(edu.banner),
    githubLink: edu.github,
    useModal: true  
  };
  return mappedEducation;
};

/**
 * Maps an array of educations from API format to Card component format
 * @param {Array} educations - Array of education objects from API
 * @returns {Array} Array of mapped education objects
 */
export const mapEducations = (educations) => {
  if (!Array.isArray(educations)) {
    return [];
  }
  return educations.map(mapEducation);
};

