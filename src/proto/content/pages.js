/**
 * Copie rédactionnelle des pages (données, pas de HTML).
 * Les composants de src/components/ reçoivent ces objets en paramètres.
 * @module content/pages
 */

export const HOME_COPY = {
  heroAlt: "Mod\u00E8le portant des bijoux Kim's Jewellery",
  heroCta: "D\u00E9couvrir la collection \u2192",
  heroSectionLabel: "Pr\u00E9sentation",
  reassuranceLabel: "Nos engagements",
  reassurance: [
    { icon: "\u2726", text: "Acier inoxydable 316L" },
    { icon: "\u25AD", text: "Livraison via Vinted" },
    { icon: "\u2661", text: "Cr\u00E9ations uniques" },
    { icon: "\u2316", text: "Montpellier" },
  ],
  coupsTitle: "Nos coups de c\u0153ur",
  coupsLink: "Voir toute la collection \u2192",
  histoireLabel: "L'histoire de la marque",
  histoireImgAlt: "Un bijou, une histoire \u2014 broche fleur Kim's Jewellery",
  histoireCta: "D\u00E9couvrir Kim \u2192",
  instaLabel: "Instagram",
  instaCta: "Rejoins l'univers sur Instagram \u2192",
  reseauxLabel: "R\u00E9seaux sociaux",
  reseauxImgAlt: "Suivez Kim's Jewellery sur les r\u00E9seaux",
  reseauxTitle: "Suivez-moi sur les r\u00E9seaux",
  reseauxText: "Pour ne rien manquer des nouveaut\u00E9s, des collections et de l'univers de Kim's Jewellery",
  reseauxCtaPrefix: "Rejoindre",
  reseauxCtaSuffix: "\u2192",
};

export const COLLECTION_COPY = {
  heroLabel: "Collection",
  heroTitle: "Collection",
  heroSub: "Des pi\u00E8ces choisies avec soin, pour sublimer chaque instant.",
  heroImgAlt: "Collection Kim's Jewellery \u2014 satin et fleurs",
  crumbHome: "Accueil",
  crumbCurrent: "Collection",
  crumbLabel: "Fil d'Ariane",
};

export const PRODUCT_COPY = {
  crumbHome: "Accueil",
  crumbCollection: "Collection",
  crumbLabel: "Fil d'Ariane",
  material: "Acier inoxydable 316L.",
  categoryPrefix: "Cat\u00E9gorie :",
  vintedCta: "Voir sur Vinted \u2192",
  vintedPending: "Lien Vinted bient\u00F4t disponible",
  perks: [{ icon: "▭", text: "Livraison via Vinted" }, { icon: "Ⓥ", text: "Paiement sécurisé (via Vinted)" }],
  relatedTitle: "Vous aimerez aussi",
  relatedLabel: "Vous aimerez aussi",
};

export const APROPOS_COPY = {
  heroLabel: "\u00C0 propos",
  heroTitle: "\u00C0 propos",
  heroSub: "Une histoire de passion, d\u00E9but\u00E9e il y a quelques ann\u00E9es...",
  heroImgAlt: "Montpellier vue du ciel",
  crumbHome: "Accueil",
  crumbCurrent: "\u00C0 propos",
  portraitAlt: "Kim, fondatrice",
  title: "Kim, la fondatrice",
  paragraphs: [
    "Passionn\u00E9e de bijoux depuis longtemps, Kim notait d\u00E9j\u00E0 \u00E0 16 ans son projet de marque dans un carnet : noms, styles, fournisseurs. \u00C0 18 ans, elle concr\u00E9tise ce r\u00EAve \u00E0 Montpellier.",
    "Kim's Jewellery, c'est bien plus qu'une marque, c'est une partie d'elle. Texte d\u00E9finitif \u00E0 valider par Kim.",
  ],
  signature: "Merci d'\u00EAtre ici \u2014 Kim",
  portraitNote: "Portrait d\u00E9finitif de Kim \u00E0 venir (visuel \u00E9ditorial temporaire).",
  pillars: [
    { icon: "\u2316", title: "Montpellier", note: "Ma ville, mon inspiration" },
    { icon: "\u2661", title: "Passion", note: "Un r\u00EAve devenu r\u00E9alit\u00E9" },
    { icon: "\u2726", title: "Bijoux", note: "Des pi\u00E8ces qui racontent une histoire" },
  ],
};

export const STYLE_COPY = {
  crumbHome: "Accueil",
  crumbCurrent: "Le style Kim's",
  title: "Le style Kim's",
  subtitleA: "Un m\u00E9lange de douceur et de caract\u00E8re,",
  subtitleB: "pour s'exprimer \u00E0 chaque occasion.",
  mosaic: [
    { src: "src/images/bijoux/elia.jpeg", alt: "Bague Elia" },
    { src: "src/images/hero-banner.jpg", alt: "Bijoux port\u00E9s" },
    { src: "src/images/un-bijou-une-histoire.jpg", alt: "Broche fleur" },
    { src: "src/images/bijoux/naia.jpeg", alt: "Bracelet Naia" },
    { src: "src/images/bijoux/clemence.jpeg", alt: "Bracelet Clemence" },
  ],
  wordCard: ["Fleur", "C\u0153ur", "\u00C9toile", "Soleil", "Couleur", "Toi \u2661"],
  values: [
    { icon: "\u2726", label: "F\u00E9minin" },
    { icon: "\u2661", label: "Tendance" },
    { icon: "\u2740", label: "Color\u00E9" },
    { icon: "\u25CB", label: "Minimaliste" },
  ],
};

export const NOT_FOUND_COPY = {
  sectionLabel: "Page introuvable",
  title: "Oups, cette page s'est \u00E9gar\u00E9e\u2026",
  text: "Elle n'existe pas (ou plus). Mais la collection, elle, est bien l\u00E0.",
  homeCta: "Retour \u00E0 l'accueil \u2192",
  collectionCta: "Voir la collection",
};

export const META_COPY = {
  defaultDescription: "Kim's Jewellery \u2014 des bijoux tendance, une signature personnelle.",
  separator: " \u2014 ",
};
