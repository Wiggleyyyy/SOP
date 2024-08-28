"use client";

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <Button onClick={toggleTheme} aria-label="Toggle Theme" variant="secondary" className="dark:text-zinc-50">
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
  );
}
