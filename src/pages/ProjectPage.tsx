import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
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

              <figure className="case-figure">
                <div
                  className="case-hero__media"
                  style={
                    {
                      '--project-accent': project.accent,
                    } as React.CSSProperties
                  }
                >
                  <ProjectPicture
                    src={project.image}
                    fallback={project.fallbackImage}
                    alt={project.imageAlt}
                    eager
                  />
                </div>
                {project.imageCaption && (
                  <figcaption>{project.imageCaption}</figcaption>
                )}
              </figure>
            </div>
          </header>

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
                  <h3>The challenge</h3>
                  <p>{project.problem}</p>
                </article>
                <article>
                  <h3>My contribution</h3>
                  <p>{project.role}</p>
                </article>
              </div>

              <div className="case-solution">
                <div className="case-solution__heading">
                  <h3>Implementation</h3>
                </div>
                <ul>
                  {project.solution.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="case-outcome">
                <h3>Result</h3>
                <p>{project.outcome}</p>
              </div>

              <div className="case-footer-grid">
                <div>
                  <h3>Built with</h3>
                  <ul className="technology-list">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
                {project.note && (
                  <aside>
                    <h3>Project context</h3>
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
