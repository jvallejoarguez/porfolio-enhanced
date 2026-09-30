import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../../content/site';

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div className="page">
      <header>
        <Link className="site-mark" to="/" aria-label={`${site.name}, home`}>
          <img src="/logo.svg" width="28" height="28" alt="" />
        </Link>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">Updated {__UPDATED__}</footer>
    </div>
  );
}
