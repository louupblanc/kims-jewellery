// Adapte les données (Sanity ou repli local, même forme) aux rendus du
// prototype (src/proto/components) : même HTML, liens réécrits en routes Astro.
import { SITE, NAV_MAIN, NAV_SECONDARY, LEGAL_LINKS, CHROME_COPY } from '../proto/content/site.js';
import { img } from './sanity.js';

function slugId(title) {
  return String(title ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function asSlug(ref) {
  if (!ref) return '';
  if (typeof ref === 'string') return ref;
  return ref.current ?? '';
}

export function toProtoProducts(data) {
  return (data.products || []).map((p) => {
    const images = Array.isArray(p.images) ? p.images : (p.image ? [p.image] : []);
    const catTitle = p.category?.title ?? p.catLabel ?? 'Accessoires';
    return {
      name: p.name,
      slug: asSlug(p.slug) || slugId(p.name),
      price: p.price,
      cat: asSlug(p.category?.slug) || p.cat || slugId(catTitle),
      catLabel: catTitle,
      image: img(images[0]),
      featured: !!p.featured,
      desc: p.description ?? p.desc ?? '',
    };
  });
}

export function toProtoCategories(data) {
  const cols = [...(data.collections || [])].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return [
    { id: 'tous', label: 'Tous' },
    ...cols.map((c) => ({ id: asSlug(c.slug) || slugId(c.title), label: c.title })),
  ];
}

export function toProtoSite(data) {
  const s = data.settings || {};
  const site = { ...SITE };
  for (const key of ['tagline', 'instagramUrl', 'tiktokUrl', 'vintedProfileUrl']) {
    if (typeof s[key] === 'string' && s[key] !== '') site[key] = s[key];
  }
  return site;
}

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
export function rewriteHtml(html) {
  return String(html).split('#/').join('/').split('src/images/').join('/images/');
}
