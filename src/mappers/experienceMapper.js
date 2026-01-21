// Utility function to map API experience data to component format
// This transforms the backend API structure to match the Card component's expected props

import { joinContentUsingSeperator } from '../utils/helper';

/**
 * Maps a single experience object from API format to Card component format
 * @param {Object} exp - Experience object from API
 * @returns {Object} Mapped experience object for Card component
 */
export const mapExperience = (exp) => {
  const dateRange = exp.startDate 
    ? `${exp.startDate}  to  ${exp.endDate || 'Current'}`
    : '';

  const duration = joinContentUsingSeperator(
    [dateRange, exp.location].filter(Boolean),
    ' • '
  );

  const technologies = exp.technologies && exp.technologies.length > 0
    ? exp.technologies.map(tech => tech.name)
    : [];

  const points = exp.experiencePoints && exp.experiencePoints.length > 0
    ? exp.experiencePoints.map(point => point.content)
    : [];

  const mappedExperience = {
    title: exp.company,
    subtitle: exp.position,
    duration: duration,
    link: exp.url,
    image: exp.banner,
    githubLink: exp.github,
    points: points,  
    technologies: technologies,  
    useModal: true  
  };
  return mappedExperience;
};

/**
 * Maps an array of experiences from API format to Card component format
 * @param {Array} experiences - Array of experience objects from API
 * @returns {Array} Array of mapped experience objects
 */
export const mapExperiences = (experiences) => {
  if (!Array.isArray(experiences)) {
    return [];
  }
  return experiences.map(mapExperience);
};

