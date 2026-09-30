import { getProject } from './content/projects';
import { site } from './content/site';

export interface SeoData {
  title: string;
  description: string;
  canonical: string;
  image: string;
  type: 'website' | 'article';
  noindex?: boolean;
}

function pathnameFromUrl(url: string) {
  return url.split(/[?#]/)[0].replace(/\/$/, '') || '/';
}

export function getSeoForPath(url: string): SeoData {
  const pathname = pathnameFromUrl(url);
  const project = pathname.startsWith('/work/')
    ? getProject(pathname.split('/')[2])
    : undefined;

  if (project) {
    const socialImage = '/img/og-card.jpg';
    return {
      title: `${project.title} case study | ${site.name}`,
      description: project.line,
      canonical: `${site.url}/work/${project.slug}/`,
      image: socialImage.startsWith('http')
        ? socialImage
        : `${site.url}${socialImage}`,
      type: 'article',
    };
  }

  return {
    title:
      pathname === '/'
        ? `${site.name} | Full-stack developer`
        : `Page not found | ${site.name}`,
    description: site.description,
    canonical: `${site.url}/`,
    image: `${site.url}/img/og-card.jpg`,
    type: 'website',
    noindex: pathname !== '/',
  };
}

export function getStructuredDataForPath(url: string) {
  const seo = getSeoForPath(url);
  const pathname = pathnameFromUrl(url);
  const project = pathname.startsWith('/work/')
    ? getProject(pathname.split('/')[2])
    : undefined;

  const person = {
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: site.name,
    url: `${site.url}/`,
    image: `${site.url}/img/pfp.jpg`,
    jobTitle: 'Full Stack Developer',
    email: `mailto:${site.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.location,
      addressCountry: 'ES',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'DigitalBeat LTD',
    },
    sameAs: site.socialLinks.map((link) => link.href),
    knowsAbout: [
      'TypeScript',
      'JavaScript',
      'Svelte',
      'React',
      'Node.js',
      'PostgreSQL',
      'Cloudflare Workers',
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      person,
      project
        ? {
            '@type': 'CreativeWork',
            '@id': seo.canonical,
            name: project.title,
            description: project.line,
            url: seo.canonical,
            image: seo.image,
            dateCreated: project.year.slice(0, 4),
            author: { '@id': `${site.url}/#person` },
            keywords: project.stack.join(', '),
          }
        : {
            '@type': 'WebSite',
            '@id': `${site.url}/#website`,
            url: `${site.url}/`,
            name: `${site.name} | Full-stack developer`,
            description: site.description,
            inLanguage: 'en',
            publisher: { '@id': `${site.url}/#person` },
          },
    ],
  };
}
