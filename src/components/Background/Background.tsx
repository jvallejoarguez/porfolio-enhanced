import { ArrowUpRight } from 'lucide-react';
import { capabilities, workingPrinciples } from '../../content/site';
import { experiences } from '../../content/experience';

export default function Background() {
  return (
    <>
      <section
        className="section experience-section"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div className="site-container experience-layout">
          <div className="section-heading experience-intro">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">
              Shipping across product and operations.
            </h2>
            <p>
              My path into full-stack development combines production
              engineering, frontend delivery, customer experiences, and the
              operational context needed to keep releases dependable.
            </p>
          </div>

          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={experience.company}>
                <div className="timeline-item__marker" aria-hidden="true" />
                <div className="timeline-item__company">
                  <h3>{experience.company}</h3>
                  <p>{experience.location}</p>
                  <span>{experience.tenure}</span>
                </div>
                <div className="timeline-item__roles">
                  {experience.roles.map((role) => (
                    <div className="role" key={`${role.title}-${role.period}`}>
                      <div className="role__heading">
                        <h4>{role.title}</h4>
                        <span>{role.period}</span>
                      </div>
                      <ul>
                        {role.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {experience.links && (
                    <div className="timeline-item__links">
                      {experience.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section about-section"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="site-container">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2 id="about-title">The stack follows the product.</h2>
            </div>
            <p>
              I am strongest where product thinking and implementation meet:
              making the interface feel considered while keeping the system
              practical to ship and maintain.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((capability, index) => (
              <article className="capability-card" key={capability.title}>
                <span>0{index + 1}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <ul aria-label={`${capability.title} technologies`}>
                  {capability.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="principles">
            <div className="principles__heading">
              <p className="eyebrow">How I work</p>
              <h3>Practical standards for better delivery.</h3>
            </div>
            <div className="principles__list">
              {workingPrinciples.map((principle) => (
                <article key={principle.index}>
                  <span>{principle.index}</span>
                  <div>
                    <h4>{principle.title}</h4>
                    <p>{principle.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
