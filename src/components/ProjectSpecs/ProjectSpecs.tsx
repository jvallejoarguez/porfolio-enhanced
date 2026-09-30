import type { Project } from '../../content/projects';

export default function ProjectSpecs({ specs }: Pick<Project, 'specs'>) {
  if (!specs) return null;

  return (
    <dl className="specs">
      {specs.map((spec) => (
        <div key={spec.label}>
          <dt>{spec.label}</dt>
          <dd>{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
