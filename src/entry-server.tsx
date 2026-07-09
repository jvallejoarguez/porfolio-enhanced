import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { projects } from './content/projects';
import { getSeoForPath, getStructuredDataForPath } from './seo';

export function render(url: string) {
  return {
    html: renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
    ),
    seo: getSeoForPath(url),
    structuredData: getStructuredDataForPath(url),
  };
}

export const prerenderRoutes = [
  '/',
  ...projects.map((project) => `/work/${project.slug}/`),
];
