// src/components/ThemeToggle.js

"use client";

import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.theme) {
      setTheme(localStorage.theme);
      document.documentElement.classList.add(localStorage.theme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-slate-700 dark:bg-slate-950 rounded hover:bg-slate-800 dark:hover:bg-slate-900 transition-all"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-6 w-6 text-slate-50" />
      ) : (
        <SunIcon className="h-6 w-6 text-slate-50 " />
      )}
    </button>
  );
}
