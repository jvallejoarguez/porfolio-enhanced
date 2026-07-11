export interface Role {
  title: string;
  period: string;
  points: string[];
}

export interface Experience {
  company: string;
  location: string;
  tenure: string;
  roles: Role[];
  links?: { label: string; href: string }[];
}

export const experiences: Experience[] = [
  {
    company: 'DigitalBeat LTD',
    location: 'Gibraltar · On-site',
    tenure: 'Apr 2024 - Present',
    roles: [
      {
        title: 'Full Stack Developer',
        period: 'May 2025 - Present',
        points: [
          'Took primary ownership of DB Games Grid around its 1.4-era codebase and led its 2.x evolution into a reusable Svelte 5 product platform.',
          'Led the flagship Hard Rock Bet Mexico portal overhaul across casino, live casino, sportsbook, and promotions, including the app-like shell, custom mobile navigation, route orchestration, and authentication-aware content.',
          'Made performance a product constraint: reduced duplicate work, introduced shared timers and caches, scheduled visual updates efficiently, kept the bundle lean, and optimized rendering for lower-end devices.',
          'Expanded the product with real-time casino state, discovery and facets, favorites and recent games, personalization, jackpots, provider navigation, deep routes, analytics, and accessible interaction.',
          'Worked across engineering, product, design, and delivery—refining modern responsive patterns and adapting the shared foundation for NorthStar, 888, RoyalsCasino, Galera.bet, and Brasilbet.',
        ],
      },
      {
        title: 'Web Operations Executive',
        period: 'Apr 2024 - May 2025',
        points: [
          'Developed responsive HTML, CSS, and JavaScript implementations for production campaigns and brand experiences.',
          'Improved frontend reliability through recurring troubleshooting, performance checks, and cross-browser QA.',
          'Managed content versioning and release workflows through Playtech CMS.',
        ],
      },
    ],
  },
  {
    company: 'The Rock Hotel Gibraltar',
    location: 'Gibraltar · On-site',
    tenure: 'Feb 2024 - Apr 2024',
    roles: [
      {
        title: 'Web Developer Intern',
        period: '3 months',
        points: [
          'Turned the hotel’s physical Wall of Fame into an interactive web experience using HTML, CSS, JavaScript, and AroSuite.',
          'Built a touchscreen-compatible local experience and adapted it for multiple display sizes and visitor contexts.',
          'Prototyped voice interaction and facial-recognition concepts for a more immersive visitor journey.',
        ],
      },
    ],
    links: [
      {
        label: 'The Rock Hotel',
        href: 'https://www.rockhotelgibraltar.com/',
      },
      {
        label: 'Wall of Fame',
        href: 'https://www.rockhotelgibraltar.com/about-us/wof',
      },
    ],
  },
  {
    company: 'Informática CR',
    location: 'Spain · Remote',
    tenure: 'Sep 2023 - Dec 2023',
    roles: [
      {
        title: 'Web Developer Intern',
        period: '4 months',
        points: [
          'Built a WordPress-based ticket and receipt management workflow for a digital printing business.',
          'Implemented customer accounts, print-request submission, receipt history, PDF generation, and document retrieval.',
        ],
      },
    ],
    links: [
      {
        label: 'Informática CR',
        href: 'https://informaticacr.es/',
      },
    ],
  },
];
