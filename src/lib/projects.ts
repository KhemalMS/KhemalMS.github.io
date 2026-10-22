import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/utils';
import type { ProjectSummary } from '../components/ProjectCard.astro';

export type ProjectEntry = CollectionEntry<'projects'>;

/** Slug proyek = bagian id setelah prefix locale (`id/rakit` -> `rakit`). */
export const slugOf = (entry: ProjectEntry): string =>
  entry.data.locale === 'id'
    ? entry.id.replace(/^id\//, '')
    : entry.id.replace(/^en\//, '');

export const sortProjects = (entries: ProjectEntry[]): ProjectEntry[] =>
  [...entries].sort((a, b) => a.data.order - b.data.order);

export async function getProjects(locale: Locale): Promise<ProjectEntry[]> {
  const all = await getCollection('projects', ({ data }) => data.locale === locale);
  return sortProjects(all);
}

export const toSummary = (entry: ProjectEntry): ProjectSummary => ({
  slug: slugOf(entry),
  title: entry.data.title,
  tagline: entry.data.tagline,
  category: entry.data.category,
  status: entry.data.status,
  stack: entry.data.stack,
  year: entry.data.year,
  cover: entry.data.cover
    ? { src: entry.data.cover.src, alt: entry.data.cover.alt }
    : undefined,
});

export async function getFeatured(locale: Locale): Promise<ProjectEntry[]> {
  const all = await getProjects(locale);
  const featured = all.filter((p) => p.data.featured);
  return featured.length > 0 ? featured : all.slice(0, 2);
}
