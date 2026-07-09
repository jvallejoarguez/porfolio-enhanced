import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { track } from '@vercel/analytics/react';
import { site } from '../../content/site';

const contactLinks = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'jvallejoarguez',
    href: site.socialLinks[0].href,
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'Javier Vallejo',
    href: site.socialLinks[1].href,
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section
      className="section contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="site-container contact-panel">
        <div className="contact-panel__copy">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">
            Let’s build something that earns its place.
          </h2>
          <p>
            {site.availability} Tell me what you are building, what is getting
            in the way, and where I can help.
          </p>
          <div className="contact-panel__actions">
            <a
              className="button button--light"
              href={`mailto:${site.email}`}
              onClick={() =>
                track('Contact', { method: 'email', location: 'panel' })
              }
            >
              Start a conversation
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              className="button button--ghost-light"
              href="/javier-vallejo-cv.pdf"
              download
              onClick={() => track('Download CV', { location: 'contact' })}
            >
              <Download size={17} aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>

        <div className="contact-list">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={
                link.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
            >
              <link.icon size={20} aria-hidden="true" />
              <span>
                <small>{link.label}</small>
                <strong>{link.value}</strong>
              </span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
