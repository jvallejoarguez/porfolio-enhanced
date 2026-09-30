export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  line: string;
  intro: string;
  image: string;
  fallbackImage: string;
  imageAlt: string;
  imageCaption?: string;
  /** Background behind the screenshot in the gallery and case study. */
  color: string;
  /** How the project appears in the homepage gallery; omitted means a text row. */
  layout?: 'wide' | 'half';
  stack: string[];
  links: ProjectLink[];
  sections: { heading: string; text: string }[];
}

export const projects: Project[] = [
  {
    slug: 'db-games-grid',
    title: 'DB Games Grid',
    year: '2025 – now',
    line: 'The game catalogue on the Hard Rock Bet Mexico casino.',
    intro:
      'DB Games Grid is the part of an online casino where you search, filter and open games. It’s a Svelte 5 web component that DigitalBeat adds to portals running on Playtech, with a configuration per brand. I took it over around version 1.4 and have been its main developer since. It’s on 2.7.1 now.',
    image: '/img/hardrockbet-casino.jpg',
    fallbackImage: '/img/hardrockbet-casino.jpg',
    imageAlt:
      'Hard Rock Bet Mexico casino page with the portal header, category filters and a grid of game tiles',
    imageCaption:
      'The Hard Rock Bet Mexico casino, 22 September 2026. The grid and the portal around it are my work; the game art belongs to the studios.',
    color: 'var(--blue)',
    layout: 'wide',
    stack: [
      'Svelte 5',
      'TypeScript',
      'Web Components',
      'Playtech APIs',
      'WebSockets',
    ],
    links: [
      { label: 'Hard Rock Bet Mexico', href: 'https://www.hardrockbet.mx' },
      { label: 'NorthStar Bets', href: 'https://www.northstarbets.ca' },
    ],
    sections: [
      {
        heading: 'What it does',
        text: 'Search, favourites, recently played, provider filters, jackpots, and live tables that update over WebSockets. The categories change depending on who is logged in. The same build runs on Hard Rock Bet Mexico and, with a different configuration, on NorthStar Bets, 888 (Arabic), RoyalsCasino, Galera.bet and Brasilbet.',
      },
      {
        heading: 'The portal around it',
        text: 'For Hard Rock Bet Mexico I also built the portal shell: route and theme set-up before the first paint, the header and mobile navigation, content that changes when you log in, and the hand-off between the casino and sportsbook pages.',
      },
      {
        heading: 'Keeping it light',
        text: 'The grid has to stay smooth on low-end phones. The tiles share one set of timers and caches, visual updates wait for the next animation frame, and only what’s on screen gets rendered. The whole component, Svelte runtime and styles included, is one 141 KB script: 46 KB gzipped.',
      },
      {
        heading: 'What I can’t show',
        text: 'The code, client data and contracts are private, so this page only uses the public site.',
      },
    ],
  },
  {
    slug: 'el-impostor',
    title: 'El Impostor',
    year: '2025',
    line: 'A party game for 3 to 12 friends, played on their phones.',
    intro:
      'El Impostor is a social deduction game in Spanish. Everyone gets the same secret word except one player, the impostor, who has to bluff their way through. Someone creates a room, friends join with the code, and nobody needs an account.',
    image: '/img/el-impostor.svg',
    fallbackImage: '/img/el-impostor.svg',
    imageAlt:
      'El Impostor cover: “Todos reciben una palabra secreta. Uno no la tiene.” with buttons to create or join a room',
    color: 'var(--mustard)',
    layout: 'half',
    stack: [
      'React',
      'Vite',
      'Cloudflare Workers',
      'Durable Objects',
      'WebSockets',
    ],
    links: [{ label: 'Play it', href: 'https://juegoimpostor.app/' }],
    sections: [
      {
        heading: 'One room, one object',
        text: 'Each room is a Cloudflare Durable Object. It holds the game state, the WebSocket connections and the round timers, so every player sees the same game and the server decides what happens next.',
      },
      {
        heading: 'Keeping the secret',
        text: 'The server sends the public state to everyone and the secret word only to the players who should have it. Opening the browser’s dev tools won’t tell you who the impostor is.',
      },
      {
        heading: 'Phones drop out',
        text: 'Phones lock and change networks mid-round. Each player keeps an identity they can reconnect with, and server alarms move the round on if someone goes quiet, so one bad connection doesn’t stop the game.',
      },
    ],
  },
  {
    slug: 'nosotros',
    title: 'Nosotros',
    year: '2025',
    line: 'A private app for two: shared calendar, photos and lists.',
    intro:
      'Nosotros (“us” in Spanish) is an app for two people to share a calendar, photos, lists, moods, memories and a few games. It installs like a phone app and isn’t public, so there’s a short demo video instead.',
    image: '/img/nosotros.avif',
    fallbackImage: '/img/nosotros.png',
    imageAlt:
      'Nosotros illustration: two chinchillas, one with a flower and one with a bow tie',
    color: 'var(--pink)',
    layout: 'half',
    stack: ['Next.js', 'React', 'Hono', 'PostgreSQL', 'Drizzle', 'Zod'],
    links: [
      {
        label: 'Watch the demo',
        href: 'https://youtube.com/shorts/zm5x7qSL5IQ?feature=share',
      },
    ],
    sections: [
      {
        heading: 'How it’s built',
        text: 'A Next.js frontend and a Hono API in one repository. They share Zod schemas and TypeScript types, so both sides agree on what the data looks like. The frontend is hosted; the API and PostgreSQL run on a server I look after, reached through a Cloudflare tunnel.',
      },
      {
        heading: 'Why self-hosted',
        text: 'It holds personal photos and memories, and I wanted that data on a machine I control.',
      },
    ],
  },
  {
    slug: 'lineup',
    title: 'LineUp',
    year: '2024',
    line: 'A task list and a focus timer on one screen. Prototype.',
    intro:
      'LineUp was an experiment: put the task list and the focus timer on the same screen, and show AI planning suggestions next to the tasks they’re about.',
    image: '/img/lineup.avif',
    fallbackImage: '/img/lineup.jpg',
    imageAlt: 'LineUp dashboard with a task list and a focus timer',
    color: 'var(--violet)',
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    links: [
      { label: 'Open the prototype', href: 'https://lineupai.vercel.app/' },
      {
        label: 'Source',
        href: 'https://github.com/jvallejoarguez/lineup-code',
      },
    ],
    sections: [
      {
        heading: 'Status',
        text: 'It stayed a prototype. Tasks are saved in Supabase, and both the demo and the source are public.',
      },
    ],
  },
];

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug);
}
