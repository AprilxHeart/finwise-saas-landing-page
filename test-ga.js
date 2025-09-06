// Test script to check if Google Analytics ID is loaded correctly
console.log('GOOGLE_ANALYTICS_ID from env:', process.env.GOOGLE_ANALYTICS_ID);

// Import and check siteDetails
import { siteDetails } from './src/data/siteDetails.js';
console.log('googleAnalyticsId from siteDetails:', siteDetails.googleAnalyticsId);
