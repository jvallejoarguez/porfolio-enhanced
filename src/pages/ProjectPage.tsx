import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  Github,
} from 'lucide-react';
import { track } from '@vercel/analytics/react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
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
    <div className="site-frame project-page">
      <Header />
      <main id="main-content">
        <article>
          <header className="case-hero">
            <div className="site-container">
              <Link className="back-link" to="/#work">
                <ArrowLeft size={16} aria-hidden="true" />
                Back to selected work
              </Link>

              <div className="case-hero__heading">
                <div>
                  <p className="eyebrow">
                    {project.category} · {project.year}
                  </p>
                  <h1>{project.title}</h1>
                </div>
                <p>{project.summary}</p>
              </div>

              <div className="case-hero__actions">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    className={
                      link.type === 'live'
                        ? 'button button--primary'
                        : 'button button--secondary'
                    }
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
                    {link.type === 'code' ? (
                      <Github size={17} aria-hidden="true" />
                    ) : (
                      <ExternalLink size={17} aria-hidden="true" />
                    )}
                    {link.label}
                  </a>
                ))}
              </div>

              <div
                className="case-hero__media"
                style={
                  { '--project-accent': project.accent } as React.CSSProperties
                }
              >
                <ProjectPicture
                  src={project.image}
                  fallback={project.fallbackImage}
                  alt={project.imageAlt}
                  eager
                />
              </div>
            </div>
          </header>

          <section className="case-metrics" aria-label="Project summary">
            <div className="site-container case-metrics__grid">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section
            className="section case-story"
            aria-labelledby="case-story-title"
          >
            <div className="site-container">
              <h2 id="case-story-title" className="sr-only">
                {project.title} project story
              </h2>

              <div className="case-story__intro">
                <article>
                  <p className="eyebrow">The challenge</p>
                  <h3>{project.challengeTitle ?? 'What needed to change'}</h3>
                  <p>{project.problem}</p>
                </article>
                <article>
                  <p className="eyebrow">My role</p>
                  <h3>{project.roleTitle ?? 'What I owned'}</h3>
                  <p>{project.role}</p>
                </article>
              </div>

              <div className="case-solution">
                <div className="case-solution__heading">
                  <p className="eyebrow">The approach</p>
                  <h3>
                    {project.approachTitle ??
                      'Decisions shaped by the constraint.'}
                  </h3>
                </div>
                <ol>
                  {project.solution.map((item, index) => (
                    <li key={item}>
                      <span>0{index + 1}</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="case-outcome">
                <Check size={22} aria-hidden="true" />
                <div>
                  <p className="eyebrow">Outcome</p>
                  <blockquote>{project.outcome}</blockquote>
                </div>
              </div>

              <div className="case-footer-grid">
                <div>
                  <p className="eyebrow">Technology</p>
                  <ul className="technology-list">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
                {project.note && (
                  <aside>
                    <p className="eyebrow">Context</p>
                    <p>{project.note}</p>
                  </aside>
                )}
              </div>
            </div>
          </section>
        </article>

        <section className="next-project" aria-labelledby="next-project-title">
          <div className="site-container">
            <p className="eyebrow">Next case study</p>
            <Link to={`/work/${nextProject.slug}/`}>
              <span id="next-project-title">{nextProject.title}</span>
              <ArrowRight size={28} aria-hidden="true" />
            </Link>
            <p>{nextProject.category}</p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
