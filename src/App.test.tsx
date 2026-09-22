import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from './App';

function renderRoute(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );
}

describe('portfolio routes', () => {
  it('renders the homepage and persistent project actions without a global proof strip', () => {
    renderRoute('/');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Javier Vallejo',
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: 'Read case study' }),
    ).toHaveLength(3);
    expect(screen.getByText('DB Games Grid')).toBeInTheDocument();
    expect(
      screen.queryByLabelText('Selected professional outcomes'),
    ).not.toBeInTheDocument();
  });

  it('renders the flagship contribution and client reference', () => {
    renderRoute('/work/db-games-grid/');

    expect(
      screen.getByRole('heading', { name: 'My contribution' }),
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
    expect(screen.getByText('The challenge')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Play the game' })).toBeVisible();
  });

  it('renders a useful not-found page', () => {
    renderRoute('/missing-page');
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /route does not lead to a project/i,
      }),
    ).toBeInTheDocument();
  });
});
