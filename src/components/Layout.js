// src/components/Layout.js

import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  // This state now correctly manages the theme for all pages that USE this layout.
  const [theme, setTheme] = useState('light-mode');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light-mode' ? 'dark-mode' : 'light-mode';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  };

  return (
    <>
      <div className="background-grid"></div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}