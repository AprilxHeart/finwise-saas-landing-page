// Location detection utility
export const detectUserLocation = async (): Promise<string> => {
  try {
    // Try to get IP-based location
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    // If user is in Thailand, return 'th', otherwise 'en'
    if (data.country_code === 'TH') {
      return 'th';
    }
    
    return 'en';
  } catch (error) {
    console.warn('Failed to detect location:', error);
    
    // Fallback to browser language detection
    const browserLang = navigator.language || 'en';
    return browserLang.startsWith('th') ? 'th' : 'en';
  }
};

// Get user's preferred language from various sources
export const getUserLanguage = (): string => {
  // Check if we're in browser environment
  if (typeof window === 'undefined') {
    return 'th'; // Default for SSR
  }
  
  // Check localStorage first
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang) {
    return savedLang;
  }
  
  // Check browser language
  const browserLang = navigator.language || 'en';
  return browserLang.startsWith('th') ? 'th' : 'en';
};

// Save user's language preference
export const saveLanguagePreference = (language: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-language', language);
  }
};
