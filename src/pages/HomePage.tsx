import { track } from '@vercel/analytics/react';
import { Link } from 'react-router-dom';
import Page from '../components/Page/Page';
import { jobs } from '../content/experience';
import { projects } from '../content/projects';
import { site } from '../content/site';

export default function HomePage() {
  return (
    <Page>
      <header className="intro">
        <h1>{site.name}</h1>
        <p className="muted">Full-stack developer, Gibraltar</p>
      </header>

      <div className="prose">
        <p>
          I’m a developer at DigitalBeat in Gibraltar. I work on{' '}
          <Link to="/work/db-games-grid/">DB Games Grid</Link>, the game
          catalogue on the Hard Rock Bet Mexico casino, and on the portal around
          it. I took it over at version 1.4. It’s on 2.7.1 now, and the whole
          thing is 46 KB gzipped.
        </p>
        <p>
          I live in La Línea, on the Spanish side of the border. Outside work I
          made <Link to="/work/el-impostor/">El Impostor</Link>, a party game to
          play with friends, and <Link to="/work/nosotros/">Nosotros</Link>, a
          private app for sharing everyday plans.
        </p>
      </div>

      <section aria-labelledby="work-title">
        <h2 id="work-title">Work</h2>
        <ul className="list">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link className="row" to={`/work/${project.slug}/`}>
                <span className="row__title">{project.title}</span>
                <span className="row__meta">{project.year}</span>
                <span className="row__note">{project.line}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="experience-title">
        <h2 id="experience-title">Experience</h2>
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

      <section aria-labelledby="contact-title">
        <h2 id="contact-title">Contact</h2>
        <p>
          Email is best:{' '}
          <a
            href={`mailto:${site.email}`}
            onClick={() => track('Contact', { method: 'email' })}
          >
            {site.email}
          </a>
          . I’m also on{' '}
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
          is a one-page PDF. I’m open to full-stack roles and freelance work.
        </p>
      </section>
    </Page>
  );
}
