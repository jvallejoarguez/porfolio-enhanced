import type { CSSProperties } from 'react';

type Marks = 'ui' | 'routes' | 'network' | 'table';

const layers: {
  name: string;
  tools: string;
  color: string;
  marks: Marks;
}[] = [
  {
    name: 'Interface',
    tools: 'Svelte, React, TypeScript',
    color: 'var(--blue)',
    marks: 'ui',
  },
  {
    name: 'API',
    tools: 'Node, Hono, Cloudflare Workers',
    color: 'var(--mustard)',
    marks: 'routes',
  },
  {
    name: 'Real time',
    tools: 'WebSockets, Durable Objects',
    color: 'var(--teal)',
    marks: 'network',
  },
  {
    name: 'Data',
    tools: 'PostgreSQL, Drizzle, Supabase',
    color: 'var(--violet)',
    marks: 'table',
  },
];

// Maps a point on the slab's top face (0..1 on each edge) to the 200×100 isometric view.
function iso(x: number, y: number) {
  return `${100 + 100 * x - 100 * y},${50 * x + 50 * y}`;
}

function face(x0: number, y0: number, x1: number, y1: number) {
  return [iso(x0, y0), iso(x1, y0), iso(x1, y1), iso(x0, y1)].join(' ');
}

function line(x0: number, y0: number, x1: number, y1: number) {
  return `M${iso(x0, y0)} L${iso(x1, y1)}`;
}

function marks(kind: Marks) {
  switch (kind) {
    case 'ui':
      return (
        <>
          <polygon points={face(0.14, 0.14, 0.86, 0.26)} />
          <polygon points={face(0.14, 0.36, 0.46, 0.86)} />
          <polygon points={face(0.54, 0.36, 0.86, 0.58)} />
          <polygon points={face(0.54, 0.66, 0.86, 0.86)} />
        </>
      );
    case 'routes':
      return (
        <>
          <polygon points={face(0.16, 0.2, 0.84, 0.3)} />
          <polygon points={face(0.16, 0.45, 0.68, 0.55)} />
          <polygon points={face(0.16, 0.7, 0.76, 0.8)} />
        </>
      );
    case 'network': {
      const nodes: [number, number][] = [
        [0.25, 0.25],
        [0.75, 0.3],
        [0.5, 0.52],
        [0.28, 0.76],
        [0.74, 0.74],
      ];
      return (
        <>
          <path
            className="stack__stroke"
            d={[
              line(0.25, 0.25, 0.5, 0.52),
              line(0.75, 0.3, 0.5, 0.52),
              line(0.28, 0.76, 0.5, 0.52),
              line(0.74, 0.74, 0.5, 0.52),
            ].join(' ')}
          />
          {nodes.map(([x, y]) => {
            const [cx, cy] = iso(x, y).split(',');
            return <ellipse key={`${x}-${y}`} cx={cx} cy={cy} rx="8" ry="4" />;
          })}
        </>
      );
    }
    case 'table':
      return (
        <path
          className="stack__stroke"
          d={[
            line(0.15, 0.15, 0.85, 0.15),
            line(0.15, 0.38, 0.85, 0.38),
            line(0.15, 0.62, 0.85, 0.62),
            line(0.15, 0.85, 0.85, 0.85),
            line(0.15, 0.15, 0.15, 0.85),
            line(0.5, 0.15, 0.5, 0.85),
            line(0.85, 0.15, 0.85, 0.85),
          ].join(' ')}
        />
      );
  }
}

export default function StackDiagram() {
  return (
    <ul
      className="stack"
      aria-label="What I work with, from the interface to the data"
    >
      {layers.map((layer, index) => (
        <li
          key={layer.name}
          className="stack__layer"
          style={{ '--i': index, color: layer.color } as CSSProperties}
        >
          <svg viewBox="0 0 200 114" aria-hidden="true">
            <polygon points="0,50 100,100 100,114 0,64" fill="currentColor" />
            <polygon
              points="0,50 100,100 100,114 0,64"
              className="stack__shade"
            />
            <polygon
              points="100,100 200,50 200,64 100,114"
              fill="currentColor"
            />
            <polygon
              points="100,100 200,50 200,64 100,114"
              className="stack__shade stack__shade--deep"
            />
            <polygon points="100,0 200,50 100,100 0,50" fill="currentColor" />
            <g className="stack__marks">{marks(layer.marks)}</g>
          </svg>
          <span className="stack__label">
            <strong>{layer.name}</strong>
            <span>{layer.tools}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
