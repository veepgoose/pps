// src/utils/themeUtils.js
export function getCurrentTheme() {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light'; // Default to light theme on server-side
  }