/**
 * Centralized Color System
 *
 * This file serves as the single source of truth for all colors in the application.
 * Import this file in both Tailwind config and React components.
 */

export const colors = {

  // Background Colors (Light Mode)
  background: {
    primary: '#ffffff',
    secondary: '#a6a8a6',
    tertiary: '#d3d4d3',
    glass: 'rgba(255, 255, 255, 0.7)',
  },

  // Dark Mode Background Colors (from reference site)
  darkBackground: {
    primary: '#0a0a0a',
    secondary: '#1a1a1a',
    tertiary: '#2a2a2a',
    glass: 'rgba(10, 10, 10, 0.7)',
  },

  // Theme Colors
  theme: {
    blue: '#44BCFF',
    mint: '#99edc3',
    green: '#028a0f',
  },

  // Text Colors (Light Mode)
  text: {
    primary: '#1f2937',
    secondary: '#374151',
    tertiary: '#4b5563',
    link: '#44BCFF',
    linkHover: '#3AA8E5',
    muted: '#6b7280',
  },

  // Dark Mode Text Colors
  darkText: {
    primary: '#ffffff',
    secondary: '#e5e7eb',
    tertiary: '#d1d5db',
    link: '#44BCFF',
    linkHover: '#3AA8E5',
    muted: '#9ca3af',
  },

  // Utility Colors
  ui: {
    white: '#ffffff',
    black: '#000000',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
};

// Export individual color groups for convenience
export const themeColors = colors.theme;
export const backgroundColors = colors.background;
export const textColors = colors.text;
export const uiColors = colors.ui;

// Default export
export default colors;

