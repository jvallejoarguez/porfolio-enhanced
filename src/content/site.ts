export const site = {
  name: 'Javier Vallejo',
  shortName: 'JV',
  role: 'Full-stack developer',
  email: 'jvallejoarguez@gmail.com',
  location: 'La Línea de la Concepción, Cádiz',
  url: 'https://www.jvallejo.dev',
  description:
    'Performance-minded full-stack developer based in La Línea de la Concepción and working in Gibraltar, building fast, app-like products with Svelte, TypeScript, React, and Web Components.',
  availability:
    'Open to full-stack product roles and selected freelance collaborations.',
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/jvallejoarguez',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/javier-vallejo-arguez',
    },
  ],
} as const;

export const capabilities = [
  {
    title: 'Product engineering',
    description:
      'Taking product ideas from interface and interaction design through APIs, data, deployment, and iteration.',
    technologies: ['Svelte 5', 'TypeScript', 'React', 'Next.js', 'Node.js'],
  },
  {
    title: 'Platforms and data',
    description:
      'Building dependable application foundations with typed APIs, relational data, and maintainable operational workflows.',
    technologies: ['PostgreSQL', 'FastAPI', 'Hono', 'Supabase', 'Docker'],
  },
  {
    title: 'Edge and delivery',
    description:
      'Shipping responsive products with practical performance work, edge infrastructure, and production-minded quality checks.',
    technologies: [
      'Cloudflare',
      'Durable Objects',
      'AWS',
      'Vercel',
      'Tailwind',
    ],
  },
] as const;

export const workingPrinciples = [
  {
    index: '01',
    title: 'Measure the outcome',
    description:
      'Performance and product decisions should be tied to an observable improvement, not just a new implementation.',
  },
  {
    index: '02',
    title: 'Design for the real constraint',
    description:
      'Good interfaces account for device limits, content, operations, brand requirements, and the people maintaining them.',
  },
  {
    index: '03',
    title: 'Use tools with judgment',
    description:
      'AI-assisted prototyping and review can accelerate delivery when architecture, testing, and final decisions stay deliberate.',
  },
] as const;
