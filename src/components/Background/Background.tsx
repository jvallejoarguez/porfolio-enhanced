import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
            <h2 id="experience-title">Experience</h2>
          </div>

          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={experience.company}>
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
        <div className="site-container about-layout">
          <div className="section-heading">
            <h2 id="about-title">About me</h2>
          </div>
          <div className="about-copy">
            <p>
              I live in La Línea de la Concepción and cross the border to
              Gibraltar for work. I studied Web Application Development (DAW) at
              Cesur, finished in 2024 with a 9.8/10, and joined DigitalBeat the
              same year.
            </p>
            <p>
              Most of my recent work is about keeping interfaces fast on low-end
              phones and correct over unreliable connections: the casino grid at
              work, and <Link to="/work/el-impostor/">El Impostor</Link> and{' '}
              <Link to="/work/nosotros/">Nosotros</Link> outside it. I work in
              Spanish and English.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
