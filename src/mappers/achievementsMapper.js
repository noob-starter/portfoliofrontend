// Utility function to map API achievement data to component format
// This transforms the backend API structure to match the Card component's expected props

import { joinContentUsingSeperator, processImageUrl } from '../utils/helper';

/**
 * Maps a single achievement object from API format to Card component format
 * @param {Object} achievement - Achievement object from API
 * @returns {Object} Mapped achievement object for Card component
 */
export const mapAchievement = (achievement) => {
  const subtitle = joinContentUsingSeperator(
    [achievement.issuer, achievement.dateAchieved].filter(Boolean),
    ' • '
  );

  const mappedAchievement = {
    title: achievement.name,
    subtitle: subtitle,
    description: achievement.description,
    link: achievement.url,
    image: processImageUrl(achievement.banner),
    githubLink: achievement.github,
    useModal: true  
  };
  
  return mappedAchievement;
};

/**
 * Maps an array of achievements from API format to Card component format
 * @param {Array} achievements - Array of achievement objects from API
 * @returns {Array} Array of mapped achievement objects
 */
export const mapAchievements = (achievements) => {
  if (!Array.isArray(achievements)) {
    return [];
  }
  return achievements.map(mapAchievement);
};

