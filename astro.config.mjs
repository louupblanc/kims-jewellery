import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site 100% statique (Cloudflare Pages : build 'astro build', sortie 'dist/').
// L'URL definitive sera renseignee au deploiement.
export default defineConfig({
  output: 'static',
  site: process.env.PUBLIC_SITE_URL ?? 'https://example.com',
  // Styles toujours en fichier externe (jamais inlinés dans le HTML) : la CSP
  // style-src 'self' de public/_headers reste ainsi déterministe.
  build: { inlineStylesheets: 'never' },
  integrations: [sitemap()],
});
