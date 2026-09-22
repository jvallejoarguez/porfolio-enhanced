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
          'Own DB Games Grid, a Svelte 5 catalogue with live table updates, search, favorites, and personalized categories.',
          'Built the Hard Rock Bet Mexico portal shell, mobile navigation, route handling, and authentication-aware content across casino, sportsbook, and promotions.',
          'Reduced duplicate work with shared timers and caches, frame-scheduled updates, and rendering changes for lower-end devices.',
          'Adapted the shared component for NorthStar, 888, RoyalsCasino, Galera.bet, and Brasilbet, working with product and design on each brand’s requirements.',
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
          'Prototyped voice interaction and facial-recognition concepts for the visitor experience.',
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
