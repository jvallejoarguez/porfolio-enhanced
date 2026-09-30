import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from './App';
import { projects } from './content/projects';

function renderRoute(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );
}

describe('portfolio routes', () => {
  it('renders the homepage with every project in the work list', () => {
    renderRoute('/');

    expect(
      screen.getByRole('heading', { level: 1, name: /^Javier Vallejo builds/ }),
    ).toBeInTheDocument();
    const work = screen.getByRole('region', { name: 'Work' });
    expect(within(work).getAllByRole('link')).toHaveLength(projects.length);
  });

  it('renders the flagship case study and client reference', () => {
    renderRoute('/work/db-games-grid/');

    expect(
      screen.getByRole('heading', { name: 'What it does' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Hard Rock Bet Mexico' }),
    ).toHaveAttribute('href', 'https://www.hardrockbet.mx');
  });

  it('renders a dedicated project case-study route', () => {
    renderRoute('/work/el-impostor/');

    expect(
      screen.getByRole('heading', { level: 1, name: 'El Impostor' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Play it' })).toBeVisible();
  });

  it('renders a useful not-found page', () => {
    renderRoute('/missing-page');
    expect(
      screen.getByRole('heading', { level: 1, name: 'Page not found' }),
    ).toBeInTheDocument();
  });
});
