import { track } from '@vercel/analytics/react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../../content/site';

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div className="page">
      <header className="topbar">
        <Link className="site-mark" to="/" aria-label={`${site.name}, home`}>
          <img src="/logo.svg" width="28" height="28" alt="" />
        </Link>
        <nav className="topbar__nav" aria-label="Main">
          <Link to="/#work">Work</Link>
          <Link to="/#about">About</Link>
          <a
            href="/javier-vallejo-cv.pdf"
            download
            onClick={() => track('Download CV', { location: 'nav' })}
          >
            CV
          </a>
        </nav>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">Updated {__UPDATED__}</footer>
    </div>
  );
}
