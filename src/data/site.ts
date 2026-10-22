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
  url: 'https://khemalms.github.io',
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
    'Information Systems',
  ],
};
