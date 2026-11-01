// Couche isolee d'acces Sanity. Seul endroit qui parle au CMS.
// Prototype : si Sanity non configure, repli sur donnees confirmees locales (cahier 4.1).
import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? 'production';

export const sanityConfigured = Boolean(projectId);
export const sanity = sanityConfigured ? createClient({ projectId, dataset, apiVersion: '2024-10-01', useCdn: true }) : null;
const builder = sanityConfigured ? createImageUrlBuilder(sanity) : null;

/**
 * Construit l'URL affichable d'une image (CDN Sanity ou chemin local).
 * @param {import('./cms-types.js').CmsImage | null | undefined} src
 * @param {number} [w]
 * @returns {string}
 */
export function img(src, w = 900) {
  if (!src) return '';
  if (typeof src === 'string') return src;
  if (!builder) return '';
  try { return builder.image(src).width(w).auto('format').url(); } catch { return ''; }
}

/**
 * Catalogue CMS, ou repli local si Sanity est absent ou en panne.
 * @returns {Promise<import('./cms-types.js').CatalogueData>}
 */
export async function getCatalogue() {
  if (!sanityConfigured) {
    const local = await import('./catalogue-fallback.js');
    return local.fallback;
  }
  const q = '{ "products": *[_type=="product" && status=="publie"]{name,slug,price,description,material,images,"imgDims": images[0].asset->metadata.dimensions,vintedUrl,featured,order,category->{title,slug}}, "collections": *[_type=="collection" && published==true]{title,slug,description,order}, "settings": *[_type=="settings"][0]{brandName,tagline,instagramUrl,tiktokUrl,vintedProfileUrl} }';
  try {
    return await sanity.fetch(q);
  } catch (err) {
    // Panne Sanity (réseau, quota, projet injoignable) : le site reste en
    // ligne avec le catalogue validé, et l'erreur reste visible dans le log
    // de build. Disponibilité > fraîcheur pour une vitrine.
    console.warn('[sanity] lecture impossible, repli local :', err instanceof Error ? err.message : String(err));
    const local = await import('./catalogue-fallback.js');
    return local.fallback;
  }
}
