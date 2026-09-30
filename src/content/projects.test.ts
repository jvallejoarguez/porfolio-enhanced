import { describe, expect, it } from 'vitest';
import { projects } from './projects';

describe('project content', () => {
  it('uses unique route slugs', () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('gives every case study an intro, a link and at least one section', () => {
    for (const project of projects) {
      expect(project.intro.length).toBeGreaterThan(60);
      expect(project.links.length).toBeGreaterThan(0);
      expect(project.sections.length).toBeGreaterThan(0);
    }
  });
});
