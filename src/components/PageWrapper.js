// src/components/PageWrapper.js

import { useEffect } from 'react';

export default function PageWrapper({ children, pageClass = '' }) {
  useEffect(() => {
    // This hook ensures the theme is applied on every page load/transition
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.className = `${pageClass} ${savedTheme}`;
    
    // Cleanup function to remove the specific page class on unmount
    return () => {
      document.body.className = savedTheme;
    };
  }, [pageClass]);

  return (
    <>
      <div className="background-grid"></div>
      {children}
    </>
  );
}