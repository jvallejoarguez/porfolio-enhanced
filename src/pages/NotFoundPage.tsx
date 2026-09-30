import { Link } from 'react-router-dom';
import Page from '../components/Page/Page';

export default function NotFoundPage() {
  return (
    <Page>
      <header className="case__head">
        <h1 className="display">Page not found</h1>
        <p className="muted">There’s nothing at this address.</p>
      </header>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </Page>
  );
}
