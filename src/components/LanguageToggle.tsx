'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/locales';

export const LanguageToggle = () => {
  const { language, setLanguage, isLoading } = useLanguage();

  if (isLoading) {
    return (
      <button className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800">
        <div className="w-6 h-4" />
      </button>
    );
  }

  const toggleLanguage = () => {
    const newLang: Language = language === 'th' ? 'en' : 'th';
    setLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
      aria-label="Toggle language"
    >
      {language === 'th' ? 'EN' : 'ไทย'}
    </button>
  );
};
