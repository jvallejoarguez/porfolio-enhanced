export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  type: 'live' | 'code' | 'reference';
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  image: string;
  fallbackImage: string;
  imageAlt: string;
  accent: string;
  technologies: string[];
  metrics: ProjectMetric[];
  problem: string;
  role: string;
  solution: string[];
  outcome: string;
  links: ProjectLink[];
  featured: boolean;
  note?: string;
}

export const projects: Project[] = [
  {
    slug: 'db-games-grid',
    title: 'DB Games Grid 2.0',
    category: 'Production platform',
    year: '2025',
    summary:
      'A multi-brand games discovery platform rebuilt for faster rendering, smoother interaction, and maintainable client-specific delivery.',
    image: '/img/digibeat.avif',
    fallbackImage: '/digibeat.jpg',
    imageAlt: 'DigitalBeat company logo',
    accent: '#1686f7',
    technologies: ['Svelte 5', 'TypeScript', 'Node.js', 'Internal APIs'],
    metrics: [
      { value: '~50%', label: 'Faster than the legacy implementation' },
      { value: 'Multi-brand', label: 'Shared platform delivery' },
      { value: 'Production', label: 'Used on live gaming surfaces' },
    ],
    problem:
      'The existing grid needed a modern frontend foundation that could render faster, support smoother product interactions, and still accommodate the requirements of multiple brands.',
    role: 'I led the frontend rewrite, translated product and brand requirements into reusable Svelte components, integrated internal APIs, and worked across design, product, and delivery teams.',
    solution: [
      'Structured the interface as reusable Svelte 5 and TypeScript components instead of client-specific page implementations.',
      'Kept brand configuration and shared interaction behavior separate so improvements could roll out without erasing product differences.',
      'Profiled the legacy experience and prioritized rendering and interaction work that could be measured against the previous implementation.',
    ],
    outcome:
      'The rewrite delivered approximately 50% better performance than the legacy grid and became a shared production foundation for multiple brand experiences.',
    links: [
      {
        label: 'NorthStar Bets',
        href: 'https://www.northstarbets.ca',
        type: 'reference',
      },
      {
        label: 'Hard Rock Bet Mexico',
        href: 'https://www.hardrockbet.mx',
        type: 'reference',
      },
    ],
    featured: true,
    note: 'The implementation is internal. Public production surfaces are linked where possible; proprietary architecture and client data are intentionally excluded.',
  },
  {
    slug: 'el-impostor',
    title: 'El Impostor',
    category: 'Real-time multiplayer game',
    year: '2025',
    summary:
      'A Spanish-language social deduction game with private rooms, server-authoritative state, reconnectable sessions, timers, and voting.',
    image: '/img/el-impostor.svg',
    fallbackImage: '/img/el-impostor.svg',
    imageAlt: 'El Impostor landing page and multiplayer lobby interface',
    accent: '#efb84a',
    technologies: [
      'React',
      'Vite',
      'Cloudflare Workers',
      'Durable Objects',
      'WebSockets',
    ],
    metrics: [
      { value: '3-12', label: 'Players per private room' },
      { value: 'Real time', label: 'WebSocket game state' },
      { value: 'No accounts', label: 'Anonymous session flow' },
    ],
    problem:
      'A party game needs to feel immediate on unreliable personal devices while keeping secret roles private and ensuring that every player sees the same authoritative state.',
    role: 'I designed and built the product end to end: interface, room lifecycle, WebSocket protocol, server-authoritative game logic, reconnection behavior, timers, and deployment.',
    solution: [
      'Used one Durable Object per room to own game state, WebSocket sessions, and timed transitions.',
      'Separated public state broadcasts from private role messages so secret words and impostor identity never leak to other clients.',
      'Added reconnectable player identities and server alarms so a dropped browser or inactive client does not stop the game.',
    ],
    outcome:
      'The result is a live, account-free multiplayer experience that supports complete game sessions across phones and desktops with a small edge-native backend.',
    links: [
      {
        label: 'Play the game',
        href: 'https://juegoimpostor.app/',
        type: 'live',
      },
    ],
    featured: true,
  },
  {
    slug: 'nosotros',
    title: 'Nosotros',
    category: 'Private iOS-first PWA',
    year: '2025',
    summary:
      'A private shared space for two people, bringing calendars, photos, lists, mood tracking, memories, and games into one installable app.',
    image: '/img/nosotros.avif',
    fallbackImage: '/img/nosotros.png',
    imageAlt:
      'Illustrated identity for the private Nosotros couple application',
    accent: '#ff8fa3',
    technologies: ['Next.js 15', 'React 19', 'Hono', 'PostgreSQL', 'Drizzle'],
    metrics: [
      { value: 'iOS-first', label: 'Installable mobile experience' },
      { value: '14', label: 'Connected data models' },
      { value: 'Private', label: 'Self-hosted application data' },
    ],
    problem:
      'Shared relationship tools are often scattered across calendars, photo libraries, notes, and generic productivity apps, with little control over how personal data is stored.',
    role: 'I designed the product and built the monorepo across the Next.js frontend, Hono API, PostgreSQL schema, shared validation, PWA behavior, and self-hosted operations.',
    solution: [
      'Created a mobile-first application shell designed for installation and everyday use on iOS.',
      'Shared Zod schemas and TypeScript types between the web and API packages to keep data contracts aligned.',
      'Connected a hosted frontend to a self-hosted API and PostgreSQL database through a secured Cloudflare tunnel.',
    ],
    outcome:
      'Nosotros consolidates a broad set of personal workflows into a private product with one coherent interface and an architecture that can evolve feature by feature.',
    links: [
      {
        label: 'Watch private demo',
        href: 'https://www.youtube.com/shorts/c__sfVVFmIA',
        type: 'live',
      },
    ],
    featured: true,
    note: 'The live application and source remain private because they contain personal data. A short product demo is available instead.',
  },
  {
    slug: 'lineup',
    title: 'LineUp',
    category: 'Productivity experiment',
    year: '2024',
    summary:
      'A focused productivity product combining task planning, timed work sessions, and AI-assisted guidance.',
    image: '/img/lineup.avif',
    fallbackImage: '/img/lineup.jpg',
    imageAlt: 'LineUp dark productivity dashboard',
    accent: '#8b7cf6',
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    metrics: [
      { value: '3', label: 'Connected focus workflows' },
      { value: 'Typed', label: 'React and TypeScript interface' },
      { value: 'Hosted', label: 'Supabase-backed prototype' },
    ],
    problem:
      'Task lists, focus timers, and planning advice often live in separate tools, creating friction before concentrated work begins.',
    role: 'I designed and built the product interface, application state, Supabase integration, and responsive workflow as a product exploration.',
    solution: [
      'Combined planning and focus modes in a single restrained interface.',
      'Used typed frontend models and Supabase for persisted user data.',
      'Explored AI assistance as contextual support instead of a separate chat-first experience.',
    ],
    outcome:
      'The prototype tested a cohesive deep-work workflow and informed later decisions about information density and AI-assisted product interactions.',
    links: [
      {
        label: 'Open prototype',
        href: 'https://lineupai.vercel.app/',
        type: 'live',
      },
      {
        label: 'View source',
        href: 'https://github.com/jvallejoarguez/lineup-code',
        type: 'code',
      },
    ],
    featured: false,
  },
  {
    slug: 'warera-automator',
    title: 'Warera Automator',
    category: 'API orchestration experiment',
    year: '2024',
    summary:
      'A personal technical experiment connecting a Next.js interface to a Python automation service and relational data store.',
    image: '/img/warera-automator.avif',
    fallbackImage: '/img/warera-automator.jpg',
    imageAlt: 'Warera Automator dark landing page',
    accent: '#ef6464',
    technologies: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL'],
    metrics: [
      { value: '2', label: 'Application runtimes' },
      { value: 'API-first', label: 'Frontend and service boundary' },
      { value: 'Archived', label: 'Technical exploration' },
    ],
    problem:
      'The project explored how a small interface could trigger, observe, and persist a longer-running API automation workflow.',
    role: 'I built the Next.js frontend, Python service integration, data flow, and deployment as a personal engineering experiment.',
    solution: [
      'Separated the user-facing application from the Python automation service.',
      'Used FastAPI endpoints and PostgreSQL persistence to track work across requests.',
      'Deployed the services independently so the interface and processing layer could evolve separately.',
    ],
    outcome:
      'The archived experiment provided practical experience with cross-runtime deployment and API orchestration. It is presented as a technical prototype rather than a commercial product.',
    links: [
      {
        label: 'Open archive',
        href: 'https://warera-automator.vercel.app/',
        type: 'live',
      },
    ],
    featured: false,
    note: 'This is an archived personal experiment. Users are responsible for following the terms of any third-party service they interact with.',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const archivedProjects = projects.filter((project) => !project.featured);

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug);
}
