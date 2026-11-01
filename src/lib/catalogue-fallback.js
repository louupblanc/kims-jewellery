// Données CONFIRMÉES uniquement (cahier §4.1). Même forme que la requête
// Sanity de lib/sanity.js : bascule CMS transparente.
// Matière 316L confirmée 21/10/2026. Vinted : pas d'URL inventée.
/** @type {import('./cms-types.js').CatalogueData} */
export const fallback = {
  settings: {
    brandName: "Kim's",
    brandSuffix: "JEWELLERY",
    tagline: "Des bijoux tendance, une signature personnelle.",
    instagramUrl: "https://www.instagram.com/aura_jewellery00",
    tiktokUrl: "https://www.tiktok.com/@aura_jewellery00",
    vintedProfileUrl: ""
  },
  collections: [
    { title: "Bagues", slug: { current: "bagues" }, order: 1 },
    { title: "Bracelets", slug: { current: "bracelets" }, order: 2 },
    { title: "Accessoires", slug: { current: "accessoires" }, order: 3 }
  ],
  products: [
    { name: "Bague Anais", slug: { current: "bague-anais" }, price: 15, description: "Anneau doré au relief torsadé, simple et lumineux.", material: "Acier inoxydable 316L", images: ["/images/bijoux/anais.jpeg"], vintedUrl: "", featured: true, order: 1, category: { title: "Bagues", slug: { current: "bagues" } } },
    { name: "Bague Anna", slug: { current: "bague-anna" }, price: 15, description: "Bague dorée en forme de cœur, tendre et intemporelle.", material: "Acier inoxydable 316L", images: ["/images/bijoux/anna.jpeg"], vintedUrl: "", featured: true, order: 2, category: { title: "Bagues", slug: { current: "bagues" } } },
    { name: "Bague Elia", slug: { current: "bague-elia" }, price: 15, description: "Bague soleil aux rayons délicats, un point de lumière au quotidien.", material: "Acier inoxydable 316L", images: ["/images/bijoux/elia.jpeg"], vintedUrl: "", featured: false, order: 3, category: { title: "Bagues", slug: { current: "bagues" } } },
    { name: "Bague Esmee", slug: { current: "bague-esmee" }, price: 15, description: "Bague fleur dorée, douce et féminine.", material: "Acier inoxydable 316L", images: ["/images/bijoux/esmee.jpeg"], vintedUrl: "", featured: false, order: 4, category: { title: "Bagues", slug: { current: "bagues" } } },
    { name: "Bague Iris", slug: { current: "bague-iris" }, price: 15, description: "Petite bague fleur aux pétales fins, discrète et raffinée.", material: "Acier inoxydable 316L", images: ["/images/bijoux/iris.jpeg"], vintedUrl: "", featured: false, order: 5, category: { title: "Bagues", slug: { current: "bagues" } } },
    { name: "Bague Marina", slug: { current: "bague-marina" }, price: 15, description: "Bague dôme dorée, lisse et éclatante.", material: "Acier inoxydable 316L", images: ["/images/bijoux/marina.jpeg"], vintedUrl: "", featured: false, order: 6, category: { title: "Bagues", slug: { current: "bagues" } } },
    { name: "Bague Maya", slug: { current: "bague-maya" }, price: 15, description: "Bague fine aux anneaux entrelacés, à porter seule ou accumulée.", material: "Acier inoxydable 316L", images: ["/images/bijoux/maya.jpeg"], vintedUrl: "", featured: false, order: 7, category: { title: "Bagues", slug: { current: "bagues" } } },
    { name: "Bague Stecy", slug: { current: "bague-stecy" }, price: 15, description: "Anneau doré à la surface martelée, au charme artisanal.", material: "Acier inoxydable 316L", images: ["/images/bijoux/stecy.jpeg"], vintedUrl: "", featured: false, order: 8, category: { title: "Bagues", slug: { current: "bagues" } } },
    { name: "Alma", slug: { current: "alma" }, price: 14, description: "Paire de clous d'oreilles soleil, joyeuse et lumineuse.", material: "Acier inoxydable 316L", images: ["/images/bijoux/alma.jpeg"], vintedUrl: "", featured: false, order: 9, category: { title: "Accessoires", slug: { current: "accessoires" } } },
    { name: "Clemence", slug: { current: "clemence" }, price: 20, description: "Bracelet à breloques dorées, joyeux et plein de détails.", material: "Acier inoxydable 316L", images: ["/images/bijoux/clemence.jpeg"], vintedUrl: "", featured: true, order: 10, category: { title: "Bracelets", slug: { current: "bracelets" } } },
    { name: "Naia", slug: { current: "naia" }, price: 20, description: "Bracelet fin aux petits motifs, délicat au poignet.", material: "Acier inoxydable 316L", images: ["/images/bijoux/naia.jpeg"], vintedUrl: "", featured: true, order: 11, category: { title: "Bracelets", slug: { current: "bracelets" } } },
    { name: "Bracelet Ambre personnalise", slug: { current: "bracelet-ambre-personnalise" }, price: 22, description: "Bracelet à breloques colorées aux tons ambrés.", material: "Acier inoxydable 316L", images: ["/images/bijoux/bracelet-ambre-personnalise.jpeg"], vintedUrl: "", featured: false, order: 12, category: { title: "Bracelets", slug: { current: "bracelets" } } },
    { name: "Jonc Ambre", slug: { current: "jonc-ambre" }, price: 17, description: "Jonc fin doré orné d'une petite pierre rouge.", material: "Acier inoxydable 316L", images: ["/images/bijoux/jonc_ambre.jpeg"], vintedUrl: "", featured: false, order: 13, category: { title: "Bracelets", slug: { current: "bracelets" } } },
    { name: "Chaine de taille", slug: { current: "chaine-de-taille" }, price: 22, description: "Chaîne fine dorée, pensée pour sublimer la taille.", material: "Acier inoxydable 316L", images: ["/images/bijoux/chaine-de-taille.jpeg"], vintedUrl: "", featured: false, order: 14, category: { title: "Accessoires", slug: { current: "accessoires" } } },
    { name: "Bracelet de bras", slug: { current: "bracelet-de-bras" }, price: 17, description: "Bracelet de bras doré au motif organique, pour les beaux jours.", material: "Acier inoxydable 316L", images: ["/images/bijoux/bracelet-de-bras.jpeg"], vintedUrl: "", featured: false, order: 15, category: { title: "Accessoires", slug: { current: "accessoires" } } }
  ]
};
