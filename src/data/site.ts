import type { Locale } from '../i18n/utils';
import { ui } from '../i18n/ui';

export const site = {
  name: 'Khemal Muhammad Sofian',
  shortName: 'Khemal',
  initials: 'KMS',
  email: 'khemal.sofian08@gmail.com',
  github: 'https://github.com/KhemalMS',
  githubHandle: 'KhemalMS',
  linkedin: 'https://www.linkedin.com/in/khemalms/',
  location: { id: 'Batam, Kepulauan Riau', en: 'Batam, Riau Islands' },
  url: 'https://tosan.my.id',
} as const;

export interface SkillGroup {
  key: keyof (typeof ui)['id']['skillsSection']['groups'];
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    key: 'languages',
    items: ['TypeScript', 'JavaScript', 'Dart', 'SQL', 'Bash'],
  },
  {
    key: 'frontend',
    items: ['Next.js', 'React', 'Tailwind CSS', 'Vite', 'shadcn/ui', 'Recharts'],
  },
  {
    key: 'backend',
    items: [
      'NestJS',
      'Express',
      'Drizzle ORM',
      'Prisma',
      'Zod',
      'Socket.IO',
      'BullMQ',
      'JWT / Passport',
    ],
  },
  {
    key: 'mobile',
    items: ['Flutter', 'Riverpod', 'Drift (SQLite)', 'Bluetooth printing', 'Offline-first sync'],
  },
  {
    key: 'data',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'SQLite', 'Excel / CSV import'],
  },
  {
    key: 'infra',
    items: ['Docker', 'Docker Compose', 'Nginx', 'GitHub Actions', 'Vercel', 'Linux / Windows Server'],
  },
  {
    key: 'practices',
    items: ['RBAC', 'Audit trail', 'Integration testing', 'API contracts', 'Deployment runbooks'],
  },
];

export const socialLinks = (locale: Locale) => {
  const u = ui[locale];
  const loc = site.location[locale];
  return [
    { key: 'email', label: u.contactSection.email, href: `mailto:${site.email}`, value: site.email },
    { key: 'github', label: u.contactSection.github, href: site.github, value: `@${site.githubHandle}` },
    { key: 'linkedin', label: u.contactSection.linkedin, href: site.linkedin, value: 'in/khemalms' },
    { key: 'location', label: u.contactSection.location, href: null, value: loc },
  ];
};

/** Klaim faktual untuk JSON-LD & meta. */
export const personFacts = {
  jobTitle: 'Full-Stack Developer',
  alumniOf: 'Universitas Putera Batam',
  knowsAbout: [
    'Next.js',
    'React',
    'NestJS',
    'Flutter',
    'TypeScript',
    'PostgreSQL',
    'Docker',
    'Informatics Engineering',
  ],
};

export interface CareerItem {
  period: { id: string; en: string };
  role: { id: string; en: string };
  organization: string;
  description: { id: string; en: string };
  status: 'current' | 'completed';
}

export const careerTimeline: CareerItem[] = [
  {
    period: { id: '2024 — Sekarang', en: '2024 — Present' },
    role: { id: 'Full-Stack Developer (Independent)', en: 'Full-Stack Developer (Independent)' },
    organization: 'Client Projects & Production Systems',
    description: {
      id: 'Merancang dan membangun sistem kasir POS offline-first, manajemen inventaris, dan dashboard operasional real-time.',
      en: 'Architecting and building offline-first POS systems, asset inventory, and real-time operational dashboards.'
    },
    status: 'current',
  },
  {
    period: { id: '2021 — Sekarang', en: '2021 — Present' },
    role: { id: 'S1 Teknik Informatika', en: 'Informatics Engineering (Undergraduate)' },
    organization: 'Universitas Putera Batam',
    description: {
      id: 'Mendalami rekayasa perangkat lunak, algoritma & struktur data, arsitektur sistem komputer, dan perancangan basis data relasional.',
      en: 'Studying software engineering, algorithms & data structures, computer systems architecture, and relational database design.'
    },
    status: 'current',
  },
];

