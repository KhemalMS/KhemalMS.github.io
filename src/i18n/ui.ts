import type { Locale } from './utils';

export interface UiStrings {
  nav: {
    home: string;
    projects: string;
    experience: string;
    about: string;
    skills: string;
    contact: string;
    menu: string;
    close: string;
  };
  hero: {
    greeting: string;
    roles: string[];
    available: string;
    intro: string;
    cta: string;
    ctaSecondary: string;
  };
  statsSection: {
    projects: string;
    contributions: string;
  };
  contribSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    total: string;
    on: string;
    less: string;
    more: string;
  };
  timelineSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterOpen: string;
    filterPrivate: string;
    filterWip: string;
    empty: string;
    count: string;
  };
  projectPage: {
    back: string;
    overview: string;
    stack: string;
    highlights: string;
    metrics: string;
    role: string;
    year: string;
    status: string;
    viewRepo: string;
    viewDemo: string;
    viewVideo: string;
    privateNote: string;
    nextProject: string;
    allProjects: string;
  };
  statusLabels: {
    'open-source': string;
    private: string;
    'in-development': string;
  };
  skillsSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    groups: {
      languages: string;
      frontend: string;
      backend: string;
      mobile: string;
      data: string;
      infra: string;
      practices: string;
    };
  };
  aboutSection: {
    eyebrow: string;
    title: string;
    body: string[];
    facts: { label: string; value: string }[];
  };
  contactSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    email: string;
    github: string;
    linkedin: string;
    location: string;
  };
  footer: {
    rights: string;
    builtWith: string;
    backToTop: string;
  };
  theme: {
    toggle: string;
    light: string;
    dark: string;
    system: string;
  };
  language: {
    switchTo: string;
    label: string;
  };
  notFound: {
    code: string;
    title: string;
    subtitle: string;
    back: string;
  };
}

const id: UiStrings = {
  nav: {
    home: 'Beranda',
    projects: 'Proyek',
    experience: 'Pengalaman',
    about: 'Tentang',
    skills: 'Keahlian',
    contact: 'Kontak',
    menu: 'Buka menu',
    close: 'Tutup menu',
  },
  hero: {
    greeting: 'Halo, saya',
    roles: ['Full-Stack Developer', 'Mobile Developer', 'Mahasiswa Teknik Informatika'],
    available: 'Terbuka untuk peluang',
    intro:
      'Membangun sistem yang dipakai harian — kasir, inventaris aset, dan dashboard operasional. Next.js, NestJS, Flutter, dan disiplin pada data yang benar.',
    cta: 'Lihat proyek',
    ctaSecondary: 'Hubungi saya',
  },
  statsSection: {
    projects: 'proyek terdokumentasi',
    contributions: 'kontribusi GitHub (12 bulan)',
  },
  contribSection: {
    eyebrow: 'Aktivitas',
    title: 'Kontribusi GitHub',
    subtitle:
      'Data diambil langsung dari GitHub GraphQL API, bukan gambar statis. Repositori privat tidak ikut terhitung.',
    total: 'kontribusi dalam 12 bulan terakhir',
    on: 'kontribusi pada',
    less: 'Sedikit',
    more: 'Banyak',
  },
  timelineSection: {
    eyebrow: 'Pengalaman & Jejak',
    title: 'Riwayat & Pendidikan',
    subtitle: 'Perjalanan profesional, keterlibatan proyek independen, dan latar belakang akademik.',
  },
  projectsSection: {
    eyebrow: 'Portofolio',
    title: 'Proyek Pilihan',
    subtitle:
      'Sistem produksi dan eksperimen teknik. Sebagian berjalan di lingkungan privat organisasi — sumber tertutup, dokumentasi lengkap.',
    filterAll: 'Semua',
    filterOpen: 'Open source',
    filterPrivate: 'Privat',
    filterWip: 'Dalam pengembangan',
    empty: 'Belum ada proyek pada kategori ini.',
    count: 'proyek',
  },
  projectPage: {
    back: 'Kembali ke proyek',
    overview: 'Ringkasan',
    stack: 'Tumpukan teknologi',
    highlights: 'Poin utama',
    metrics: 'Angka',
    role: 'Peran',
    year: 'Tahun',
    status: 'Status',
    viewRepo: 'Lihat repositori',
    viewDemo: 'Coba demo',
    viewVideo: 'Tonton video',
    privateNote:
      'Repositori privat — source code tidak dipublikasikan. Screenshot dan arsitektur di bawah berasal dari sistem yang berjalan.',
    nextProject: 'Proyek selanjutnya',
    allProjects: 'Semua proyek',
  },
  statusLabels: {
    'open-source': 'Open source',
    private: 'Privat',
    'in-development': 'Dalam pengembangan',
  },
  skillsSection: {
    eyebrow: 'Keahlian',
    title: 'Keahlian & Perkakas',
    subtitle:
      'Yang saya pakai sehari-hari untuk membangun sistem dari skema database sampai aplikasi kasir di perangkat.',
    groups: {
      languages: 'Bahasa',
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Mobile',
      data: 'Data',
      infra: 'Infrastruktur',
      practices: 'Praktik',
    },
  },
  aboutSection: {
    eyebrow: 'Tentang',
    title: 'Tentang Khemal',
    body: [
      'Saya membangun perangkat lunak yang dipakai orang setiap hari — aplikasi kasir, sistem inventaris aset, dan dashboard operasional. Fokus saya: sistem yang tetap benar saat jaringan putus, data bertabrakan, atau penggunanya sedang terburu-buru.',
      'Keseharian saya berpindah antara Next.js di dashboard, Flutter di perangkat kasir, dan NestJS di backend. Saya lebih suka menulis test untuk alur yang mudah rusak daripada menambah fitur yang belum jelas pemakainya.',
    ],
    facts: [
      { label: 'Lokasi', value: 'Batam, Kepulauan Riau' },
      { label: 'Kampus', value: 'Universitas Putera Batam' },
      { label: 'Program studi', value: 'Teknik Informatika' },
      { label: 'Fokus', value: 'Full-stack & mobile' },
    ],
  },
  contactSection: {
    eyebrow: 'Kontak',
    title: 'Mari bicara',
    subtitle:
      'Terbuka untuk pekerjaan lepas, kolaborasi, atau diskusi teknis. Balasan biasanya dalam 1–2 hari.',
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    location: 'Lokasi',
  },
  footer: {
    rights: 'Seluruh hak cipta.',
    builtWith: 'Dibangun dengan Astro & Tailwind CSS.',
    backToTop: 'Kembali ke atas',
  },
  theme: {
    toggle: 'Ganti tema',
    light: 'Terang',
    dark: 'Gelap',
    system: 'Sistem',
  },
  language: {
    switchTo: 'Ganti bahasa ke Bahasa Inggris',
    label: 'Bahasa',
  },
  notFound: {
    code: '404',
    title: 'Halaman tidak ditemukan',
    subtitle: 'Tautan ini mungkin sudah dipindahkan atau tidak pernah ada.',
    back: 'Kembali ke beranda',
  },
};

const en: UiStrings = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    experience: 'Experience',
    about: 'About',
    skills: 'Skills',
    contact: 'Contact',
    menu: 'Open menu',
    close: 'Close menu',
  },
  hero: {
    greeting: "Hello, I'm",
    roles: ['Full-Stack Developer', 'Mobile Developer', 'Informatics Engineering Student'],
    available: 'Open to opportunities',
    intro:
      'Building software used every day — point of sale, asset inventory, and operational dashboards. Next.js, NestJS, Flutter, and a discipline for correct data.',
    cta: 'View projects',
    ctaSecondary: 'Get in touch',
  },
  statsSection: {
    projects: 'documented projects',
    contributions: 'GitHub contributions (12 months)',
  },
  contribSection: {
    eyebrow: 'Activity',
    title: 'GitHub Contributions',
    subtitle:
      'Pulled straight from the GitHub GraphQL API, not a static image. Private repository activity is excluded.',
    total: 'contributions in the last 12 months',
    on: 'contributions on',
    less: 'Less',
    more: 'More',
  },
  timelineSection: {
    eyebrow: 'Experience & Track',
    title: 'Career & Education',
    subtitle: 'Professional journey, independent project delivery, and academic background.',
  },
  projectsSection: {
    eyebrow: 'Portfolio',
    title: 'Selected Projects',
    subtitle:
      'Production systems and engineering experiments. Some run inside private organizational environments — closed source, fully documented.',
    filterAll: 'All',
    filterOpen: 'Open source',
    filterPrivate: 'Private',
    filterWip: 'In development',
    empty: 'No projects in this category yet.',
    count: 'projects',
  },
  projectPage: {
    back: 'Back to projects',
    overview: 'Overview',
    stack: 'Tech stack',
    highlights: 'Highlights',
    metrics: 'Numbers',
    role: 'Role',
    year: 'Year',
    status: 'Status',
    viewRepo: 'View repository',
    viewDemo: 'Try the demo',
    viewVideo: 'Watch video',
    privateNote:
      'Private repository — source code is not published. Screenshots and architecture below come from the running system.',
    nextProject: 'Next project',
    allProjects: 'All projects',
  },
  statusLabels: {
    'open-source': 'Open source',
    private: 'Private',
    'in-development': 'In development',
  },
  skillsSection: {
    eyebrow: 'Skills',
    title: 'Skills & Tooling',
    subtitle:
      'What I use daily to build systems end to end, from database schemas to a cashier app on the device.',
    groups: {
      languages: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Mobile',
      data: 'Data',
      infra: 'Infrastructure',
      practices: 'Practices',
    },
  },
  aboutSection: {
    eyebrow: 'About',
    title: 'About Khemal',
    body: [
      'I build software people use every day — point-of-sale apps, asset inventory systems, and operational dashboards. My focus is systems that stay correct when the network drops, data collides, or users are in a hurry.',
      'Day to day I move between Next.js in dashboards, Flutter on cashier devices, and NestJS on the backend. I would rather write tests for flows that break easily than add features nobody has asked for yet.',
    ],
    facts: [
      { label: 'Location', value: 'Batam, Riau Islands' },
      { label: 'University', value: 'Universitas Putera Batam' },
      { label: 'Major', value: 'Informatics Engineering' },
      { label: 'Focus', value: 'Full-stack & mobile' },
    ],
  },
  contactSection: {
    eyebrow: 'Contact',
    title: "Let's talk",
    subtitle:
      'Open to freelance work, collaboration, or technical discussion. I usually reply within 1–2 days.',
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    location: 'Location',
  },
  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with Astro & Tailwind CSS.',
    backToTop: 'Back to top',
  },
  theme: {
    toggle: 'Toggle theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  },
  language: {
    switchTo: 'Switch language to Indonesian',
    label: 'Language',
  },
  notFound: {
    code: '404',
    title: 'Page not found',
    subtitle: 'This link may have moved, or it never existed.',
    back: 'Back to home',
  },
};

export const ui: Record<Locale, UiStrings> = { id, en };

export const t = (locale: Locale): UiStrings => ui[locale];
