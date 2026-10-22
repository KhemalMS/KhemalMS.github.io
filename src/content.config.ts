import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const shot = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
});

const metric = z.object({
  value: z.string(),
  label: z.string(),
});

const projects = defineCollection({
  // `src/content/projects/<locale>/<slug>.md`
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    locale: z.enum(['id', 'en']),
    /** Urutan tampil; angka kecil dulu. */
    order: z.number().int().nonnegative(),
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    role: z.string(),
    year: z.string(),
    status: z.enum(['open-source', 'private', 'in-development']),
    stack: z.array(z.string()).min(1),
    featured: z.boolean().default(false),
    repoUrl: z.url().optional(),
    demoUrl: z.url().optional(),
    videoUrl: z.url().optional(),
    /** Label kecil di atas judul, mis. "Sistem POS", "Enterprise". */
    category: z.string(),
    metrics: z.array(metric).default([]),
    cover: shot.optional(),
    gallery: z.array(shot).default([]),
  }),
});

export const collections = { projects };
