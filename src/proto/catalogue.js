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
