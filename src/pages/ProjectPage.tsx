import { track } from '@vercel/analytics/react';
import { Fragment, type CSSProperties } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Page from '../components/Page/Page';
import ProjectPicture from '../components/ProjectPicture/ProjectPicture';
import { getProject, projects } from '../content/projects';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return <Navigate to="/not-found" replace />;
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <Page>
      <article className="case">
        <header className="case__head">
          <h1 className="display">{project.title}</h1>
          <p className="muted">
            {project.year} · {project.stack.join(', ')}
          </p>
        </header>

        <div className="prose">
          <p>{project.intro}</p>
          <p>
            {project.links.map((link, index) => (
              <Fragment key={link.href}>
                {index > 0 && ' · '}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    track('Open project link', { project: project.slug })
                  }
                >
                  {link.label}
                </a>
              </Fragment>
            ))}
          </p>
        </div>

        <figure className="figure">
          <div
            className="mat mat--figure"
            style={{ '--mat': project.color } as CSSProperties}
          >
            <ProjectPicture
              src={project.image}
              fallback={project.fallbackImage}
              alt={project.imageAlt}
              eager
            />
          </div>
          {project.imageCaption && (
            <figcaption className="muted">{project.imageCaption}</figcaption>
          )}
        </figure>

        {project.sections.map((section) => (
          <section className="case__section" key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}
      </article>

      <nav className="next" aria-label="More work">
        <Link to={`/work/${nextProject.slug}/`}>
          Next: {nextProject.title} →
        </Link>
        <Link to="/">All work</Link>
      </nav>
    </Page>
  );
}
