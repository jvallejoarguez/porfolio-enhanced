export interface Job {
  period: string;
  title: string;
  company: string;
  href?: string;
  note: string;
}

export const jobs: Job[] = [
  {
    period: '2025 – now',
    title: 'Full-stack developer',
    company: 'DigitalBeat',
    note: 'DB Games Grid and the Hard Rock Bet Mexico portal.',
  },
  {
    period: '2024 – 2025',
    title: 'Web operations',
    company: 'DigitalBeat',
    note: 'Campaign pages, QA and releases in Playtech CMS.',
  },
  {
    period: '2024',
    title: 'Web developer intern',
    company: 'The Rock Hotel',
    href: 'https://www.rockhotelgibraltar.com/about-us/wof',
    note: 'Turned the hotel’s Wall of Fame into a touchscreen web app.',
  },
  {
    period: '2023',
    title: 'Web developer intern',
    company: 'Informática CR',
    href: 'https://informaticacr.es/',
    note: 'A WordPress print-request and receipt system.',
  },
];
