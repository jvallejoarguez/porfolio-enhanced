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
  it('renders the proof-led homepage and persistent project actions', () => {
    renderRoute('/');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /product experiences that hold up in production/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: 'Read case study' }),
    ).toHaveLength(3);
    expect(screen.getByText('DB Games Grid')).toBeInTheDocument();
  });

  it('renders a dedicated project case-study route', () => {
    renderRoute('/work/el-impostor/');

    expect(
      screen.getByRole('heading', { level: 1, name: 'El Impostor' }),
    ).toBeInTheDocument();
    expect(screen.getByText('What needed to change')).toBeInTheDocument();
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
