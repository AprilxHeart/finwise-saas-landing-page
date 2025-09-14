// App constants
export const APP_CONFIG = {
  GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  SITE_VERIFICATION: {
    GOOGLE: process.env.GOOGLE_SITE_VERIFICATION || '',
    YANDEX: process.env.YANDEX_VERIFICATION || '',
    BING: process.env.BING_VERIFICATION || '',
  },
} as const;

// UI constants
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Animation durations
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;

// Default values
export const DEFAULTS = {
  LOADING_TEXT: 'กำลังโหลด...',
  CONTACT_EMAIL: 'info@eifel-thailand.com',
  CONTACT_PHONE: '+66 2 123 4567',
} as const;

// Social media platforms
export const SOCIAL_PLATFORMS = [
  'facebook',
  'github', 
  'instagram',
  'linkedin',
  'threads',
  'twitter',
  'youtube',
  'x',
] as const;

export type SocialPlatform = typeof SOCIAL_PLATFORMS[number];