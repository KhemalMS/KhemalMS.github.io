export const locales = ['id', 'en'] as const;
export const defaultLocale = 'id' as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  id: 'ID',
  en: 'EN',
};

export const localeNames: Record<Locale, string> = {
  id: 'Bahasa Indonesia',
  en: 'English',
};

/** Baca locale dari pathname (`/en/...` -> 'en', selain itu -> 'id'). */
export function getLocaleFromPath(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0];
  return first === 'en' ? 'en' : defaultLocale;
}

/**
 * Bangun URL untuk locale tujuan dari pathname saat ini.
 * `/projects/rakit/` + 'en' -> `/en/projects/rakit/`
 * `/en/projects/rakit/` + 'id' -> `/projects/rakit/`
 */
export function localizePath(pathname: string, target: Locale): string {
  const current = getLocaleFromPath(pathname);
  const stripped =
    current === 'id'
      ? pathname
      : pathname.replace(/^\/en(?=\/|$)/, '') || '/';

  if (target === defaultLocale) return stripped.startsWith('/') ? stripped : `/${stripped}`;

  const base = stripped === '/' ? '' : stripped.replace(/\/$/, '');
  return `/en${base}/`.replace(/\/{2,}/g, '/');
}

export const otherLocale = (locale: Locale): Locale => (locale === 'id' ? 'en' : 'id');
