import { track } from '@vercel/analytics/react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import GameTiles from '../components/GameTiles/GameTiles';
import Page from '../components/Page/Page';
import ProjectPicture from '../components/ProjectPicture/ProjectPicture';
import { jobs } from '../content/experience';
import { projects } from '../content/projects';
import { site } from '../content/site';

export default function HomePage() {
  return (
    <Page>
      <header className="hero">
        <div>
          <h1 className="display">
            <strong>{site.name}</strong> builds the casino game catalogue for
            Hard Rock Bet Mexico, and a party game to play with friends.
          </h1>
          <p className="hero__sub">
            Full-stack developer at DigitalBeat, Gibraltar
          </p>
        </div>
        <GameTiles />
      </header>

      <section id="work" aria-labelledby="work-title">
        <h2 className="section-title" id="work-title">
          Work
        </h2>
        <ul className="gallery">
          {projects.map((project) => (
            <li
              key={project.slug}
              className={`entry entry--${project.layout ?? 'row'}`}
            >
              <Link className="entry__link" to={`/work/${project.slug}/`}>
                {project.layout && (
                  <span
                    className="mat"
                    style={{ '--mat': project.color } as CSSProperties}
                  >
                    <ProjectPicture
                      src={project.image}
                      fallback={project.fallbackImage}
                      alt=""
                    />
                  </span>
                )}
                <span className="entry__text">
                  <span className="entry__title">{project.title}</span>
                  <span className="entry__year">{project.year}</span>
                  <span className="entry__line">{project.line}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="about" className="about" aria-labelledby="about-title">
        <h2 className="section-title" id="about-title">
          About
        </h2>
        <div className="about__body">
          <img
            className="about__photo"
            src="/img/pfp-192.jpg"
            width="96"
            height="96"
            alt="Javier Vallejo"
          />
          <div className="prose">
            <p>
              I live in La Línea, on the Spanish side of the border, and cross
              to Gibraltar for work. I studied web application development at
              Cesur and finished in 2024 with a 9.8/10, then joined DigitalBeat
              the same year.
            </p>
            <p>
              I took <Link to="/work/db-games-grid/">DB Games Grid</Link> over
              at version 1.4. It’s on 2.7.1 now, and the whole thing is 46 KB
              gzipped. Outside work I made{' '}
              <Link to="/work/el-impostor/">El Impostor</Link> and{' '}
              <Link to="/work/nosotros/">Nosotros</Link>, a private app for
              sharing everyday plans.
            </p>
          </div>
        </div>

        <h3 className="list-title">Experience</h3>
        <ul className="list">
          {jobs.map((job) => (
            <li className="row" key={`${job.company}-${job.period}`}>
              <span className="row__title">
                {job.title},{' '}
                {job.href ? (
                  <a href={job.href} target="_blank" rel="noopener noreferrer">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </span>
              <span className="row__meta">{job.period}</span>
              <span className="row__note">{job.note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="contact" aria-labelledby="contact-title">
        <h2 className="sr-only" id="contact-title">
          Contact
        </h2>
        <p className="display display--small">
          Write to me at{' '}
          <a
            href={`mailto:${site.email}`}
            onClick={() => track('Contact', { method: 'email' })}
          >
            {site.email}
          </a>
        </p>
        <p className="contact__more">
          I’m open to full-stack roles and freelance work. I’m also on{' '}
          <a
            href={site.socialLinks[0].href}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{' '}
          and{' '}
          <a
            href={site.socialLinks[1].href}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          , and my{' '}
          <a
            href="/javier-vallejo-cv.pdf"
            download
            onClick={() => track('Download CV', { location: 'contact' })}
          >
            CV
          </a>{' '}
          is a one-page PDF.
        </p>
      </section>
    </Page>
  );
}
