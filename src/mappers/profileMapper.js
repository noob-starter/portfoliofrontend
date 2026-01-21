// Utility function to map API profile data to component format
// This transforms the backend API structure to match the Home component's expected profile props

/**
 * Maps a single profile object from API format to Home component format
 * @param {Object} profile - Profile object from API
 * @returns {Object} Mapped profile object for Home component
 */
export const mapProfile = (profile) => {
  const roleTitles = profile.contour 
    ? profile.contour.split(',').map(role => role.trim()).filter(Boolean)
    : [];

  const mappedProfile = {
    banner: profile.banner || '',
    firstName: profile.fname || '',
    lastName: profile.lname || '',
    intro: profile.intro || '',
    bio: profile.bio || '',
    roleTitles: roleTitles,
    fullName: `${profile.fname || ''} ${profile.lname || ''}`.trim()
  };

  return mappedProfile;
};

/**
 * Maps profile data or returns default profile structure
 * @param {Object} profile - Profile object from API
 * @returns {Object} Mapped profile object
 */
export const mapProfileData = (profile) => {
  if (!profile) {
    return {
      banner: '',
      firstName: 'Pratik',
      lastName: 'Yawalkar',
      intro: 'Walking on water and developing software from a specification are easy if both are frozen, hence I wanted to transform my ideas to innovations that change world.',
      bio: 'As a passionate software engineer and AI enthusiast, I transform ideas into innovative solutions that have the potential to change the world.',
      roleTitles: ['Software Engineer', 'AI & ML Enthusiast', 'Full Stack Developer'],
      fullName: 'Pratik Yawalkar'
    };
  }
  return mapProfile(profile);
};

