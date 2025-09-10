import { th } from './th';
import { en } from './en';

export type Language = 'th' | 'en';

export const translations = {
  th,
  en
};

export type TranslationKeys = typeof th;
