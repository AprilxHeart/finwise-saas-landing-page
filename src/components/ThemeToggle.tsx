'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-md bg-gray-200 dark:bg-gray-800">
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <HiOutlineSun className="w-5 h-5 text-yellow-500" />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
};
