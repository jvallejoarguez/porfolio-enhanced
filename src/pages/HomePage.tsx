import { Download } from 'lucide-react';
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
              <p className="hero__role">{site.role}</p>
              <h1 id="hero-title">{site.name}</h1>
              <p className="hero__lede">
                I work at DigitalBeat in Gibraltar, building the Hard Rock Bet
                Mexico portal and DB Games Grid, a Svelte component for finding
                and launching casino games.
              </p>

              <div className="hero__actions" aria-label="Portfolio actions">
                <Link
                  className="button button--primary"
                  to="/#work"
                  onClick={() =>
                    track('Explore case studies', { location: 'hero' })
                  }
                >
                  View my work
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
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Background />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
