// Utility function to map API technologies data to component format
// This transforms the backend API structure to match the Card component's expected props

import { joinContentUsingSeperator } from '../utils/helper';

/**
 * Maps a single technology object from API format to Card component format
 * @param {Object} tech - Technology object from API
 * @returns {Object} Mapped technology object for Card component
 */
export const mapTechnology = (tech) => {
  const subtitle = joinContentUsingSeperator(
    [tech.category, tech.proficiency].filter(Boolean),
    '  |  '
  );

  const mappedTechnology = {
    image: tech.banner,
    title: tech.name,
    subtitle: subtitle,
    description: tech.description || '',
    link: tech.url || '#',
    githubLink: tech.github,
  };
  
  return mappedTechnology;
};

/**
 * Maps an array of technologies from API format to Card component format
 * and sorts them by type
 * @param {Array} technologies - Array of technology objects from API
 * @returns {Object} Object containing arrays of technologies sorted by type
 */
export const mapTechnologies = (technologies) => {
  if (!Array.isArray(technologies)) {
    return {
      technicalSkills: [],
      interpersonalSkills: [],
      others: {}
    };
  }

  const mappedTechnologies = technologies.map(mapTechnology);

  const sortedTechnologies = {
    technicalSkills: [],
    interpersonalSkills: [],
    others: {}
  };

  technologies.forEach((tech, index) => {
    const mappedTech = mappedTechnologies[index];
    
    if (tech.type === 'Technology') {
      sortedTechnologies.technicalSkills.push(mappedTech);
    } else if (tech.type === 'Interpersonal') {
      sortedTechnologies.interpersonalSkills.push(mappedTech);
    } else {
      const typeKey = tech.type || 'Uncategorized';
      if (!sortedTechnologies.others[typeKey]) {
        sortedTechnologies.others[typeKey] = [];
      }
      sortedTechnologies.others[typeKey].push(mappedTech);
    }
  });

  return sortedTechnologies;
};

