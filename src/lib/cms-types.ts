/**
 * Formes de données du site — SEUL endroit où elles sont décrites.
 * Les .js les référencent en JSDoc (`import('./cms-types.js').X`),
 * les .astro en héritent par inférence. Aucun type dupliqué ailleurs.
 * @module lib/cms-types
 */
import type { SanityImageSource } from '@sanity/image-url';

/** Image CMS : telle que renvoyée par Sanity ou le repli local (chaîne). */
export type CmsImage = SanityImageSource;

/** Slug Sanity ({ current }) ou déjà aplati (repli local, URLs). */
export type CmsSlug = string | { current: string };

/** Catégorie : titre + slug (+ ordre optionnel côté collections). */
export interface CmsCategory {
  title: string;
  slug: CmsSlug;
  order?: number;
}

/** Produit tel que renvoyé par la requête GROQ (ou le repli local). */
export interface CmsProduct {
  name: string;
  slug: CmsSlug;
  price: number;
  description?: string;
  material?: string;
  images?: CmsImage[] | null;
  /** Dimensions de la 1re image (requête GROQ `imgDims`), absentes en repli local. */
  imgDims?: {w: number; h: number} | null;
  vintedUrl?: string;
  featured?: boolean;
  order?: number;
  category?: CmsCategory | null;
}

/** Réglages marque (tout optionnel : le repli local complète). */
export interface CmsSettings {
  brandName?: string;
  brandSuffix?: string;
  tagline?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  vintedProfileUrl?: string;
  [key: string]: string | undefined;
}

/** Réponse de getCatalogue(), du CMS comme du repli local. */
export interface CatalogueData {
  products: CmsProduct[];
  collections: CmsCategory[];
  settings: CmsSettings | null;
}

/** Produit normalisé pour les rendus (proto-args → components). */
export interface ProductView {
  name: string;
  slug: string;
  price: number;
  cat: string;
  catLabel: string;
  image: string;
  /** Dimensions réelles : CMS (`imgDims`) ou table locale, sinon absentes. */
  imageW?: number;
  imageH?: number;
  featured: boolean;
  desc: string;
}

/** Filtre collection normalisé ({ id:'tous' } + collections CMS). */
export interface CategoryView {
  id: string;
  label: string;
}

/** Lien de navigation (nav secondaire : sans `id`). */
export interface NavItem {
  id?: string;
  label: string;
  hash: string;
}

/** Argument unique des rendus de pages (baseArgs). */
export interface ProtoArgs {
  site: Record<string, string>;
  nav: NavItem[];
  navSecondary: NavItem[];
  legalLinks: NavItem[];
  chrome: Record<string, unknown>;
  products: ProductView[];
  categories: CategoryView[];
  [key: string]: unknown;
}
