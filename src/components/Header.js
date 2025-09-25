// src/components/Header.js
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header({ theme, toggleTheme }) {
  const router = useRouter();

  return (
    <header className="main-header">
      <div className="container">
        <Link href="/" className="logo">Agentic Collective</Link>
        <div className="header-controls">
          <nav>
            <Link href="/" className={router.pathname === '/' ? 'is-active' : ''}>Explore</Link>
            <Link href="/dashboard" className={router.pathname === '/dashboard' ? 'is-active' : ''}>Dashboard</Link>
          </nav>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme" aria-label="Toggle theme">
            <span className="sun-icon">☀️</span>
            <span className="moon-icon">🌙</span>
          </button>
        </div>
      </div>
    </header>
  );
}