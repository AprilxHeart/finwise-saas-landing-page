'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function TestPage() {
  const { t, language, setLanguage, isLoading } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen p-8 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Feature Test Page</h1>
        
        {/* Language Test */}
        <div className="mb-8 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">🌐 Language Test</h2>
          <p className="mb-4">Current Language: <strong>{language}</strong></p>
          <p className="mb-4">Site Title: <strong>{t.hero.title}</strong></p>
          <p className="mb-4">Navigation Contact: <strong>{t.nav.contact}</strong></p>
          <button
            onClick={() => setLanguage(language === 'th' ? 'en' : 'th')}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-accent"
          >
            Switch to {language === 'th' ? 'English' : 'Thai'}
          </button>
        </div>

        {/* Theme Test */}
        <div className="mb-8 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">🌙 Theme Test</h2>
          <p className="mb-4">Current Theme: <strong>{theme}</strong></p>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
        </div>

        {/* Translation Test */}
        <div className="mb-8 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">📝 Translation Test</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Hero Section:</h3>
              <p>Title: {t.hero.title}</p>
              <p>Subtitle: {t.hero.subtitle}</p>
              <p>Primary CTA: {t.hero.ctaPrimary}</p>
            </div>
            <div>
              <h3 className="font-semibold">Navigation:</h3>
              <p>Features: {t.nav.features}</p>
              <p>Products: {t.nav.products}</p>
              <p>Contact: {t.nav.contact}</p>
            </div>
          </div>
        </div>

        {/* Color Test */}
        <div className="mb-8 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">🎨 Color Test</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-primary text-white rounded">Primary</div>
            <div className="p-4 bg-secondary text-white rounded">Secondary</div>
            <div className="p-4 bg-foreground text-background rounded">Foreground</div>
            <div className="p-4 bg-background text-foreground border rounded">Background</div>
          </div>
        </div>

        <div className="text-center">
          <a href="/" className="text-primary hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
