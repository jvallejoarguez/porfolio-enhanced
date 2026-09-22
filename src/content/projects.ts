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
  imageCaption?: string;
  accent: string;
  technologies: string[];
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
    title: 'DB Games Grid',
    category: 'DigitalBeat / Client work',
    year: '2025 - Present',
    summary:
      'A reusable casino catalogue built with Svelte and Web Components. I own its development at DigitalBeat and built the navigation, account-aware content, and promotions around it for Hard Rock Bet Mexico.',
    image: '/img/hardrockbet-casino.jpg',
    fallbackImage: '/img/hardrockbet-casino.jpg',
    imageAlt:
      'Hard Rock Bet Mexico casino with portal navigation, category filters, and DB Games Grid game tiles',
    imageCaption:
      'Hard Rock Bet Mexico casino, public desktop view captured on 22 September 2026. My work covers the catalogue and portal integration; game artwork and promotional assets belong to their respective owners.',
    accent: '#1686f7',
    technologies: [
      'Svelte 5',
      'TypeScript',
      'Web Components',
      'Playtech APIs',
      'WebSockets',
    ],
    problem:
      'The catalogue had to support search, live table updates, personalized categories, and game launches inside Playtech’s existing runtime. The surrounding portal also needed to coordinate casino and sportsbook routes, authentication, and promotions across desktop and mobile.',
    role: 'I took over the grid around version 1.4 and became its primary technical owner through the 2.x releases. I built the Hard Rock Bet Mexico portal shell, adapted designs for mobile, and worked with product and design on navigation and interaction.',
    solution: [
      'Used Svelte 5 and Web Components for a shared catalogue with search, favorites, recent games, provider filters, jackpots, and live-table state. Brand configuration lets the same component serve different portals.',
      'Built route and theme initialization, authentication-aware content, a custom header and mobile navigation, and coordination between casino and sportsbook pages.',
      'Shared timers and caches to avoid duplicate work, scheduled visual updates by frame, and limited rendering to visible content. Responsive layouts and touch interactions were adapted for lower-end devices.',
    ],
    outcome:
      'The shared catalogue is used in the Hard Rock Bet Mexico portal alongside the casino, live casino, sportsbook, and promotions pages. Its configuration also supports other DigitalBeat brands without maintaining a separate grid for each one.',
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
      'A Spanish-language social deduction game for 3–12 players. Friends join a private room without accounts, receive secret roles, and vote to find the impostor.',
    image: '/img/el-impostor.svg',
    fallbackImage: '/img/el-impostor.svg',
    imageAlt: 'Illustrated El Impostor project cover',
    accent: '#efb84a',
    technologies: [
      'React',
      'Vite',
      'Cloudflare Workers',
      'Durable Objects',
      'WebSockets',
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
      'The game is available to play on phones and desktops. Players can rejoin after a connection drops, while the server keeps the round and voting state.',
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
    category: 'Private app for two',
    year: '2025',
    summary:
      'A private shared space for two people, bringing calendars, photos, lists, mood tracking, memories, and games into one installable app.',
    image: '/img/nosotros.avif',
    fallbackImage: '/img/nosotros.png',
    imageAlt:
      'Illustrated identity for the private Nosotros couple application',
    accent: '#ff8fa3',
    technologies: ['Next.js 15', 'React 19', 'Hono', 'PostgreSQL', 'Drizzle'],
    problem:
      'Shared relationship tools are often scattered across calendars, photo libraries, notes, and generic productivity apps, with little control over how personal data is stored.',
    role: 'I designed the product and built the monorepo across the Next.js frontend, Hono API, PostgreSQL schema, shared validation, PWA behavior, and self-hosted operations.',
    solution: [
      'Created a mobile-first application shell designed for installation and everyday use on iOS.',
      'Shared Zod schemas and TypeScript types between the web and API packages to keep data contracts aligned.',
      'Connected a hosted frontend to a self-hosted API and PostgreSQL database through a secured Cloudflare tunnel.',
    ],
    outcome:
      'The app brings shared calendars, photos, and lists into one place, with personal data stored on a self-hosted backend. The linked demo shows the interface; the application itself is private.',
    links: [
      {
        label: 'Watch private demo',
        href: 'https://youtube.com/shorts/zm5x7qSL5IQ?feature=share',
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
    problem:
      'Task lists, focus timers, and planning advice often live in separate tools, creating friction before concentrated work begins.',
    role: 'I designed and built the product interface, application state, Supabase integration, and responsive workflow as a product exploration.',
    solution: [
      'Combined planning and focus modes in a single restrained interface.',
      'Used typed frontend models and Supabase for persisted user data.',
      'Explored AI assistance as contextual support instead of a separate chat-first experience.',
    ],
    outcome:
      'The prototype combines a task list, focus timer, and planning assistance. Both the demo and source code are available.',
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
