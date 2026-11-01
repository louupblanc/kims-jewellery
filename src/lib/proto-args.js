// Adapte les données (Sanity ou repli local, même forme) aux rendus du
// prototype (src/proto/components) : même HTML, liens réécrits en routes Astro.
import { SITE, NAV_MAIN, NAV_SECONDARY, LEGAL_LINKS, CHROME_COPY } from '../proto/content/site.js';
import { img } from './sanity.js';

/**
 * @param {unknown} title
 * @returns {string}
 */
function slugId(title) {
  return String(title ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * @param {import('./cms-types.js').CmsSlug | null | undefined} ref
 * @returns {string}
 */
function asSlug(ref) {
  if (!ref) return '';
  if (typeof ref === 'string') return ref;
  return ref.current ?? '';
}

/**
 * @param {import('./cms-types.js').CatalogueData} data
 * @returns {import('./cms-types.js').ProductView[]}
 */
export function toProtoProducts(data) {
  return (data.products || []).map((p) => {
    const images = Array.isArray(p.images) ? p.images : [];
    const catTitle = p.category?.title ?? 'Accessoires';
    return {
      name: p.name,
      slug: asSlug(p.slug) || slugId(p.name),
      price: p.price,
      cat: asSlug(p.category?.slug) || slugId(catTitle),
      catLabel: catTitle,
      image: img(images[0]),
      imageW: p.imgDims?.w,
      imageH: p.imgDims?.h,
      featured: !!p.featured,
      desc: p.description ?? '',
    };
  });
}

/**
 * @param {import('./cms-types.js').CatalogueData} data
 * @returns {import('./cms-types.js').CategoryView[]}
 */
export function toProtoCategories(data) {
  const cols = [...(data.collections || [])].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return [
    { id: 'tous', label: 'Tous' },
    ...cols.map((c) => ({ id: asSlug(c.slug) || slugId(c.title), label: c.title })),
  ];
}

/**
 * @param {import('./cms-types.js').CatalogueData} data
 * @returns {Record<string, string>}
 */
export function toProtoSite(data) {
  /** @type {import('./cms-types.js').CmsSettings} */
  const s = data.settings ?? {};
  /** @type {Record<string, string>} */
  const site = { ...SITE };
  for (const key of ['brandName', 'brandSuffix', 'tagline', 'instagramUrl', 'tiktokUrl', 'vintedProfileUrl']) {
    const v = s[key];
    if (typeof v === 'string' && v !== '') site[key] = v;
  }
  // Seul champ effaçable : un suffixe vidé dans le Studio retire le suffixe
  // du site (les autres champs vides gardent leur valeur par défaut).
  if (s.brandSuffix === '') site.brandSuffix = '';
  return site;
}

/**
 * @template T
 * @param {import('./cms-types.js').CatalogueData} data
 * @param {T} [extra]
 * @returns {import('./cms-types.js').ProtoArgs & T}
 */
export function baseArgs(data, extra) {
  return Object.assign(
    {
      site: toProtoSite(data),
      nav: NAV_MAIN,
      navSecondary: NAV_SECONDARY,
      legalLinks: LEGAL_LINKS,
      chrome: CHROME_COPY,
      products: toProtoProducts(data),
      categories: toProtoCategories(data),
    },
    extra
  );
}

// Le prototype écrit des liens en hash (#/collection/x) et des images en
// src/images/... : on les convertit en routes et chemins absolus du site.
/**
 * @param {string} html
 * @returns {string}
 */
export function rewriteHtml(html) {
  return String(html).split('#/').join('/').split('src/images/').join('/images/');
}
