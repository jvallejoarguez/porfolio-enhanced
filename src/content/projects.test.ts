import { describe, expect, it } from 'vitest';
import { archivedProjects, featuredProjects, projects } from './projects';

describe('project content', () => {
  it('uses unique route slugs', () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('keeps the homepage focused on three featured case studies', () => {
    expect(featuredProjects).toHaveLength(3);
    expect(archivedProjects.length).toBeGreaterThan(0);
  });

  it('provides complete case-study content for every project', () => {
    for (const project of projects) {
      expect(project.problem.length).toBeGreaterThan(60);
      expect(project.role.length).toBeGreaterThan(60);
      expect(project.solution).toHaveLength(3);
      expect(project.metrics).toHaveLength(3);
    }
  });
});
