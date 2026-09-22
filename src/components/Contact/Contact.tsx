import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
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
          <h2 id="contact-title">Get in touch</h2>
          <p>{site.availability}</p>
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
              onClick={() =>
                track('Contact', {
                  method: link.label.toLowerCase(),
                  location: 'panel',
                })
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
