import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site 100% statique (Cloudflare Pages : build 'astro build', sortie 'dist/').
// L'URL definitive sera renseignee au deploiement.
export default defineConfig({
  output: 'static',
  site: process.env.PUBLIC_SITE_URL ?? 'https://example.com',
  integrations: [sitemap()],
});
