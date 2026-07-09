import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { track } from '@vercel/analytics/react';
import { Link } from 'react-router-dom';
import {
  archivedProjects,
  featuredProjects,
  type Project,
} from '../../content/projects';
import ProjectPicture from '../ProjectPicture/ProjectPicture';

function LinkIcon({ type }: { type: Project['links'][number]['type'] }) {
  return type === 'code' ? (
    <Github size={16} aria-hidden="true" />
  ) : (
    <ExternalLink size={16} aria-hidden="true" />
  );
}

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="project-actions">
      <Link
        className="text-link text-link--strong"
        to={`/work/${project.slug}/`}
        onClick={() => track('Open case study', { project: project.slug })}
      >
        Read case study
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
      {project.links.slice(0, 1).map((link) => (
        <a
          key={link.href}
          className="text-link"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            track('Open project link', {
              project: project.slug,
              type: link.type,
            })
          }
        >
          <LinkIcon type={link.type} />
          {link.label}
        </a>
      ))}
    </div>
  );
}

function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const primary = index === 0;

  return (
    <article
      className={`${primary ? 'project-card project-card--lead' : 'project-card'} project-card--${project.slug}`}
      style={{ '--project-accent': project.accent } as React.CSSProperties}
    >
      <Link
        className="project-card__media"
        to={`/work/${project.slug}/`}
        aria-label={`Read the ${project.title} case study`}
        onClick={() => track('Open case study', { project: project.slug })}
      >
        <ProjectPicture
          src={project.image}
          fallback={project.fallbackImage}
          alt={project.imageAlt}
        />
        <span className="project-card__number" aria-hidden="true">
          0{index + 1}
        </span>
      </Link>

      <div className="project-card__content">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3>
          <Link to={`/work/${project.slug}/`}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>

        {primary && (
          <dl className="project-card__metrics">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <ProjectActions project={project} />
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      className="section work-section"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="site-container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">Proof, not just pixels.</h2>
          </div>
          <p>
            A closer look at the product decisions, engineering constraints, and
            outcomes behind the interfaces.
          </p>
        </div>

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="archive" aria-labelledby="archive-title">
          <div className="archive__heading">
            <p className="eyebrow">Archive</p>
            <h3 id="archive-title">Earlier experiments</h3>
          </div>
          <div className="archive__list">
            {archivedProjects.map((project) => (
              <Link
                key={project.slug}
                className="archive-row"
                to={`/work/${project.slug}/`}
              >
                <span className="archive-row__title">{project.title}</span>
                <span className="archive-row__category">
                  {project.category}
                </span>
                <span className="archive-row__stack">
                  {project.technologies.slice(0, 3).join(' · ')}
                </span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
