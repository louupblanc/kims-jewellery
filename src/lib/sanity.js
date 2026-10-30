// Couche isolee d'acces Sanity. Seul endroit qui parle au CMS.
// Prototype : si Sanity non configure, repli sur donnees confirmees locales (cahier 4.1).
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? 'production';

export const sanityConfigured = Boolean(projectId);
export const sanity = sanityConfigured ? createClient({ projectId, dataset, apiVersion: '2024-10-01', useCdn: true }) : null;
const builder = sanityConfigured ? imageUrlBuilder(sanity) : null;

export function img(src, w = 900) {
  if (!src) return '';
  if (typeof src === 'string') return src;
  try { return builder.image(src).width(w).auto('format').url(); } catch { return ''; }
}

export async function getCatalogue() {
  if (!sanityConfigured) {
    const local = await import('./catalogue-fallback.js');
    return local.fallback;
  }
  const q = '{ "products": *[_type=="product" && status=="publie"]{name,slug,price,description,material,images,vintedUrl,featured,order,category->{title,slug}}, "collections": *[_type=="collection" && published==true]{title,slug,description,order}, "settings": *[_type=="settings"][0]{brandName,tagline,instagramUrl,tiktokUrl,vintedProfileUrl} }';
  return sanity.fetch(q);
}
