import { Link } from 'react-router-dom';
import { site } from '../../content/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__inner">
        <div>
          <Link
            className="brand brand--footer"
            to="/"
            aria-label={`${site.name}, home`}
          >
            <span className="brand__mark" aria-hidden="true">
              {site.shortName}
            </span>
            <span className="brand__name">{site.name}</span>
          </Link>
          <p>Full-stack product engineering from Gibraltar.</p>
        </div>
        <div className="site-footer__links">
          {site.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
          <a href={`mailto:${site.email}`}>Email</a>
        </div>
        <p className="site-footer__copyright">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
