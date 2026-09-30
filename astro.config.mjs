// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

// Set SITE_URL in .env (or in the host's environment variables) once the domain is known.
// It is used for canonical URLs, hreflang alternates, Open Graph URLs, the sitemap and robots.txt.
const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
// On Vercel, fall back to the project's production URL (e.g. https://<project>.vercel.app) until a domain is set.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = env.SITE_URL || (vercelUrl ? `https://${vercelUrl}` : 'https://tstudio.example');

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'he',
        locales: { he: 'he', en: 'en' },
      },
    }),
  ],
});
