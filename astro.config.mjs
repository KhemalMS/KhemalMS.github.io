// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://tosan.my.id';

// ponytail: i18n pakai routing bawaan Astro (bukan manual) supaya hreflang
// dan /en/ redirect diurus framework. Upgrade ke manual hanya kalau butuh
// logic redirect kustom per-path.
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'id',
        locales: { id: 'id-ID', en: 'en-US' },
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  build: { format: 'directory' },
});
