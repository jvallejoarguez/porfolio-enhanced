import { FileText } from 'lucide-react';
import { track } from '@vercel/analytics/react';
import { Link } from 'react-router-dom';
import { site } from '../../content/site';

const navigation = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <Link className="brand" to="/" aria-label={`${site.name}, home`}>
          <span className="brand__mark" aria-hidden="true">
            {site.shortName}
          </span>
          <span className="brand__name">{site.name}</span>
        </Link>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="header-resume"
          href="/javier-vallejo-cv.pdf"
          download
          aria-label="Download Javier Vallejo's CV"
          onClick={() => track('Download CV', { location: 'header' })}
        >
          <FileText size={16} aria-hidden="true" />
          <span>CV</span>
        </a>
      </div>
    </header>
  );
}
