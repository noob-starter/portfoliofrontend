// Utility function to map API project data to component format
// This transforms the backend API structure to match the Card component's expected props

import { joinContentUsingSeperator, processImageUrl } from '../utils/helper';

/**
 * Maps a single project object from API format to Card component format
 * @param {Object} project - Project object from API
 * @returns {Object} Mapped project object for Card component
 */
export const mapProject = (project) => {
  const dateRange = project.startDate 
    ? `${project.startDate} - ${project.endDate || 'Current'}`
    : '';

  const subtitle = joinContentUsingSeperator(
    [project.issuer, project.dateAchieved].filter(Boolean),
    ' • '
  );

  const technologies = project.technologies && project.technologies.length > 0
    ? project.technologies.map(tech => tech.name)
    : [];

  const points = project.projectPoints && project.projectPoints.length > 0
    ? project.projectPoints.map(point => point.content)
    : [];

  const mappedProject = {
    title: project.name,
    subtitle: subtitle,
    duration: dateRange,
    description: project.description,
    link: project.url,
    image: processImageUrl(project.banner),
    githubLink: project.github,
    points: points,  
    technologies: technologies,  
    useModal: true  
  };
  
  return mappedProject;
};

/**
 * Maps an array of projects from API format to Card component format
 * @param {Array} projects - Array of project objects from API
 * @returns {Array} Array of mapped project objects
 */
export const mapProjects = (projects) => {
  if (!Array.isArray(projects)) {
    return [];
  }
  return projects.map(mapProject);
};

