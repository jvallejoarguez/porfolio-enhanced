import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function NotFoundPage() {
  return (
    <div className="site-frame">
      <Header />
      <main id="main-content" className="not-found">
        <div className="site-container">
          <p className="eyebrow">404 · Not found</p>
          <h1>This route does not lead to a project.</h1>
          <p>The work is still here. The URL just took a wrong turn.</p>
          <Link className="button button--primary" to="/">
            <ArrowLeft size={17} aria-hidden="true" />
            Return home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
