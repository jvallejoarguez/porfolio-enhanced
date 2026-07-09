import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Download,
  MapPin,
} from 'lucide-react';
import { track } from '@vercel/analytics/react';
import { Link } from 'react-router-dom';
import Background from '../components/Background/Background';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ProjectPicture from '../components/ProjectPicture/ProjectPicture';
import Projects from '../components/Projects/Projects';
import { site } from '../content/site';

export default function HomePage() {
  return (
    <div className="site-frame">
      <Header />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="site-container hero__grid">
            <div className="hero__content">
              <p className="eyebrow hero__eyebrow">
                <span className="status-dot" aria-hidden="true" />
                {site.role} · {site.location}
              </p>
              <h1 id="hero-title">
                I build product experiences that hold up in{' '}
                <span>production.</span>
              </h1>
              <p className="hero__lede">
                I work across interface, architecture, APIs, and delivery—most
                recently leading a multi-brand frontend rewrite that improved
                performance by approximately 50% over its legacy implementation.
              </p>

              <div className="hero__actions" aria-label="Portfolio actions">
                <Link
                  className="button button--primary"
                  to="/#work"
                  onClick={() =>
                    track('Explore case studies', { location: 'hero' })
                  }
                >
                  Explore case studies
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <a
                  className="button button--secondary"
                  href="/javier-vallejo-cv.pdf"
                  download
                  onClick={() => track('Download CV', { location: 'hero' })}
                >
                  <Download size={17} aria-hidden="true" />
                  Download CV
                </a>
              </div>

              <div className="hero__availability">
                <CheckCircle2 size={17} aria-hidden="true" />
                <span>{site.availability}</span>
              </div>
            </div>

            <div
              className="hero__visual"
              aria-label="Portrait of Javier Vallejo"
            >
              <div className="hero-portrait">
                <ProjectPicture
                  src="/img/pfp-720.avif"
                  fallback="/img/pfp.jpg"
                  alt="Javier Vallejo, full-stack developer"
                  eager
                />
                <div className="hero-portrait__caption">
                  <span>Currently</span>
                  <strong>Full Stack Developer at DigitalBeat</strong>
                </div>
              </div>
              <div className="hero-callout" aria-hidden="true">
                <span>From interface</span>
                <ArrowDownRight size={18} />
                <strong>to production</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="proof" aria-label="Selected professional outcomes">
          <div className="site-container proof__grid">
            {site.proof.map((item) => (
              <article key={item.label} className="proof__item">
                <strong>{item.value}</strong>
                <div>
                  <h2>{item.label}</h2>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Projects />
        <Background />
        <Contact />

        <section
          className="location-strip"
          aria-label="Location and working style"
        >
          <div className="site-container location-strip__inner">
            <MapPin size={18} aria-hidden="true" />
            <p>
              Based in Gibraltar, collaborating with product and engineering
              teams across locations and time zones.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
