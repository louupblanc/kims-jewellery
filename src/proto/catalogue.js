// Catalogue CONFIRMÉ uniquement. Aucune fiche sur hypothèse.
// Descriptions : traits visibles uniquement (motif, allure), SANS affirmation
// non vérifiée (résistance à l'eau, hypoallergénique). Matière : acier
// inoxydable 316L confirmé pour tout le catalogue (21/10/2026). À valider par Kim : le reste.
// Les images vivent dans src/images/bijoux/. Vinted : pas d'URL inventée.
//
// Source de vérité des PRODUITS uniquement. La configuration du site vit dans
// src/content/site.js, les utilitaires dans src/lib/format.js. Les alias
// SETTINGS/fmt ci-dessous existent pour compatibilité et sont dépréciés.

import { SITE } from './content/site.js';
import { formatPrice } from './lib/format.js';

/**
 * Dimensions intrinsèques des visuels (anti-CLS : l'espace est réservé
 * avant chargement). Clé = nom du fichier (les chemins varient selon le
 * contexte : `src/images/…` dans le prototype, `/images/…` en repli
 * Astro, URL CDN via Sanity — voir `imageDims`).
 * Quand Kim ajoute une photo, ajouter sa ligne ici (largeur/hauteur réelles).
 */
export const IMAGE_DIMS = {
  'hero-banner.jpg': [1376, 768],
  'un-bijou-une-histoire.jpg': [1376, 768],
  'banniere-reseaux.jpg': [1600, 669],
  'banniere-collection.jpg': [1897, 560],
  'banniere-a-propos.jpg': [1920, 1076],
  'anais.jpeg': [1080, 1920],
  'anna.jpeg': [1200, 2133],
  'elia.jpeg': [1080, 1920],
  'esmee.jpeg': [1080, 1920],
  'iris.jpeg': [1200, 2133],
  'marina.jpeg': [1200, 2133],
  'maya.jpeg': [1080, 1920],
  'stecy.jpeg': [1080, 1920],
  'alma.jpeg': [1080, 1920],
  'clemence.jpeg': [1080, 1920],
  'naia.jpeg': [1080, 1920],
  'bracelet-ambre-personnalise.jpeg': [1080, 1920],
  'jonc_ambre.jpeg': [1080, 1920],
  'chaine-de-taille.jpeg': [1080, 1920],
  'bracelet-de-bras.jpeg': [1080, 1920],
};

/**
 * Dimensions d'un produit : champs explicites d'abord (données CMS :
 * `imageW`/`imageH` renseignés par `toProtoProducts`), sinon table locale
 * par nom de fichier, sinon `null` (pas d'attributs — jamais de valeurs
 * inventées).
 * @param {{ image?: string, imageW?: number, imageH?: number }} product
 * @returns {Array<number>|null}
 */
export function imageDims(product) {
  if (Number.isFinite(product.imageW) && Number.isFinite(product.imageH)) {
    return [product.imageW, product.imageH];
  }
  const base = String(product.image || '').split('/').pop();
  const dims = IMAGE_DIMS[base];
  return Array.isArray(dims) ? dims : null;
}

/** @deprecated Préférer `import { SITE } from './content/site.js'` */
export const SETTINGS = {
  brandName: SITE.brandName,
  tagline: SITE.tagline,
  instagramUrl: SITE.instagramUrl,
  tiktokUrl: SITE.tiktokUrl,
  vintedProfileUrl: SITE.vintedProfileUrl
};

/** @deprecated Préférer `import { formatPrice } from './lib/format.js'` */
export const fmt = formatPrice;

export const PRODUCTS = [
  { name: 'Bague Anais', slug: 'bague-anais', price: 15, cat: 'bagues', catLabel: 'Bagues', image: 'src/images/bijoux/anais.jpeg', featured: true, desc: 'Anneau doré au relief torsadé, simple et lumineux.' },
  { name: 'Bague Anna', slug: 'bague-anna', price: 15, cat: 'bagues', catLabel: 'Bagues', image: 'src/images/bijoux/anna.jpeg', featured: true, desc: 'Bague dorée en forme de cœur, tendre et intemporelle.' },
  { name: 'Bague Elia', slug: 'bague-elia', price: 15, cat: 'bagues', catLabel: 'Bagues', image: 'src/images/bijoux/elia.jpeg', featured: false, desc: 'Bague soleil aux rayons délicats, un point de lumière au quotidien.' },
  { name: 'Bague Esmee', slug: 'bague-esmee', price: 15, cat: 'bagues', catLabel: 'Bagues', image: 'src/images/bijoux/esmee.jpeg', featured: false, desc: 'Bague fleur dorée, douce et féminine.' },
  { name: 'Bague Iris', slug: 'bague-iris', price: 15, cat: 'bagues', catLabel: 'Bagues', image: 'src/images/bijoux/iris.jpeg', featured: false, desc: 'Petite bague fleur aux pétales fins, discrète et raffinée.' },
  { name: 'Bague Marina', slug: 'bague-marina', price: 15, cat: 'bagues', catLabel: 'Bagues', image: 'src/images/bijoux/marina.jpeg', featured: false, desc: 'Bague dôme dorée, lisse et éclatante.' },
  { name: 'Bague Maya', slug: 'bague-maya', price: 15, cat: 'bagues', catLabel: 'Bagues', image: 'src/images/bijoux/maya.jpeg', featured: false, desc: 'Bague fine aux anneaux entrelacés, à porter seule ou accumulée.' },
  { name: 'Bague Stecy', slug: 'bague-stecy', price: 15, cat: 'bagues', catLabel: 'Bagues', image: 'src/images/bijoux/stecy.jpeg', featured: false, desc: 'Anneau doré à la surface martelée, au charme artisanal.' },
  { name: 'Alma', slug: 'alma', price: 14, cat: 'accessoires', catLabel: 'Accessoires', image: 'src/images/bijoux/alma.jpeg', featured: false, desc: "Paire de clous d'oreilles soleil, joyeuse et lumineuse." },
  { name: 'Clemence', slug: 'clemence', price: 20, cat: 'bracelets', catLabel: 'Bracelets', image: 'src/images/bijoux/clemence.jpeg', featured: true, desc: 'Bracelet à breloques dorées, joyeux et plein de détails.' },
  { name: 'Naia', slug: 'naia', price: 20, cat: 'bracelets', catLabel: 'Bracelets', image: 'src/images/bijoux/naia.jpeg', featured: true, desc: 'Bracelet fin aux petits motifs, délicat au poignet.' },
  { name: 'Bracelet Ambre personnalise', slug: 'bracelet-ambre-personnalise', price: 22, cat: 'bracelets', catLabel: 'Bracelets', image: 'src/images/bijoux/bracelet-ambre-personnalise.jpeg', featured: false, desc: 'Bracelet à breloques colorées aux tons ambrés.' },
  { name: 'Jonc Ambre', slug: 'jonc-ambre', price: 17, cat: 'bracelets', catLabel: 'Bracelets', image: 'src/images/bijoux/jonc_ambre.jpeg', featured: false, desc: "Jonc fin doré orné d'une petite pierre rouge." },
  { name: 'Chaine de taille', slug: 'chaine-de-taille', price: 22, cat: 'accessoires', catLabel: 'Accessoires', image: 'src/images/bijoux/chaine-de-taille.jpeg', featured: false, desc: 'Chaîne fine dorée, pensée pour sublimer la taille.' },
  { name: 'Bracelet de bras', slug: 'bracelet-de-bras', price: 17, cat: 'accessoires', catLabel: 'Accessoires', image: 'src/images/bijoux/bracelet-de-bras.jpeg', featured: false, desc: 'Bracelet de bras doré au motif organique, pour les beaux jours.' }
];
