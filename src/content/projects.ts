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
  challengeTitle?: string;
  role: string;
  roleTitle?: string;
  approachTitle?: string;
  solution: string[];
  outcome: string;
  links: ProjectLink[];
  featured: boolean;
  note?: string;
}

export const projects: Project[] = [
  {
    slug: 'db-games-grid',
    title: 'DB Games Grid',
    category: 'Flagship product platform',
    year: '2025 - Present',
    summary:
      'The product transformation I am most proud of: a performance-first games platform and portal overhaul that turned Hard Rock Bet Mexico into a fast, modern, app-like experience across casino, live casino, sportsbook, and promotions.',
    image: '/img/digibeat.avif',
    fallbackImage: '/digibeat.jpg',
    imageAlt: 'DigitalBeat company logo',
    accent: '#1686f7',
    technologies: [
      'Svelte 5',
      'TypeScript',
      'Web Components',
      'Playtech APIs',
      'WebSockets',
    ],
    metrics: [
      { value: '1.4 → 2.7', label: 'From component to product platform' },
      { value: '4 surfaces', label: 'One coherent gaming experience' },
      { value: 'Every KB', label: 'Performance budget for real devices' },
    ],
    problem:
      'The grid began as a functional catalogue component. The opportunity was to turn it into the product engine for a complete gaming experience: large catalogues, live state, discovery, personalization, casino and sportsbook navigation, promotions, and brand expression—all inside a constrained third-party runtime and across devices with very different capabilities.',
    challengeTitle: 'From functional grid to product platform',
    role: 'I inherited the grid around its 1.4-era codebase and made it my own, becoming its primary technical owner through the 2.x evolution. My work extended beyond implementation: I shaped architecture, challenged design decisions that did not translate well to responsive products, and turned product ambition into a coherent system that remained fast on real hardware.',
    roleTitle: 'Engineering ownership with product judgment',
    approachTitle: 'One product, engineered from engine to experience.',
    solution: [
      'Rebuilt the grid into a typed Svelte 5 and Web Component platform with dynamic layouts, search and facets, favorites, recent and personalized categories, providers, jackpots, live-table state, deep routes, analytics, accessibility, and reusable brand configuration.',
      'Created the app-like portal shell around it: pre-paint route and theme state, staged content bootstrapping, authentication-aware UI, custom header and mobile bottom navigation, casino and sportsbook coordination, and targeted promotional delivery.',
      'Treated performance and design as one discipline. I removed repeated work, shared timers and caches, scheduled visual updates by frame, rendered only what users needed, kept the bundle lean, and worked with design to refine hierarchy, motion, touch behavior, and responsive patterns for lower-end devices.',
    ],
    outcome:
      'DB Games Grid became a reusable product platform, and its flagship deployment became a cohesive, next-generation gaming experience where casino, live casino, sportsbook, and promotions feel like parts of the same product. This work defined the developer I am today: performance is a product feature, every shipped kilobyte matters, and exceptional frontend engineering requires both architectural discipline and design judgment.',
    links: [
      {
        label: 'Hard Rock Bet Mexico',
        href: 'https://www.hardrockbet.mx',
        type: 'reference',
      },
      {
        label: 'NorthStar Bets',
        href: 'https://www.northstarbets.ca',
        type: 'reference',
      },
    ],
    featured: true,
    note: 'The same foundation also supported major NorthStar work and targeted adaptations for Arabic 888 Casino and Sports, RoyalsCasino, Galera.bet, and Brasilbet. Source, client data, and internal contracts remain proprietary.',
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
