/**
 * Identité du site et libellés de navigation.
 * Seul endroit où vivent ces textes (les composants les reçoivent en paramètres).
 * @module content/site
 */

export const SITE = {
  brandName: "Kim's",
  brandSuffix: "JEWELLERY",
  tagline: "Des bijoux tendance, une signature personnelle.",
  location: "Montpellier",
  instagramUrl: "https://www.instagram.com/aura_jewellery00",
  tiktokUrl: "https://www.tiktok.com/@aura_jewellery00",
  vintedProfileUrl: "",
  instagramHandle: "@aura_jewellery00",
  copyright: "\u00A9 2026 Kim's Jewellery. Tous droits r\u00E9serv\u00E9s.",
};

/** Liens de navigation principale : { id (actif), label, hash } */
export const NAV_MAIN = [
  { id: "home", label: "Accueil", hash: "#/" },
  { id: "collection", label: "Collection", hash: "#/collection" },
  { id: "apropos", label: "\u00C0 propos", hash: "#/a-propos" },
];

/** Navigation secondaire (pied de page). */
export const NAV_SECONDARY = [
  { label: "Accueil", hash: "#/" },
  { label: "Collection", hash: "#/collection" },
  { label: "\u00C0 propos", hash: "#/a-propos" },
  { label: "Style", hash: "#/style" },
];

/** Pages juridiques : { id, label, hash } */
export const LEGAL_LINKS = [
  { id: "mentions-legales", label: "Mentions l\u00E9gales", hash: "#/mentions-legales" },
  { id: "confidentialite", label: "Confidentialit\u00E9", hash: "#/confidentialite" },
  { id: "cgu", label: "CGU", hash: "#/cgu" },
];

/** Catégories du catalogue : l'entrée "tous" est une convention d'affichage. */
export const CATEGORIES = [
  { id: "tous", label: "Tous" },
  { id: "bagues", label: "Bagues" },
  { id: "bracelets", label: "Bracelets" },
  { id: "accessoires", label: "Accessoires" },
];

/** Libellés partagés nav / footer (aria + intitulés). */
export const CHROME_COPY = {
  navMainLabel: "Navigation principale",
  navSecondaryLabel: "Navigation secondaire",
  menuLabel: "Menu",
  brandHomeLabel: "Kim's Jewellery \u2014 accueil",
  followUs: "Suivez-nous :",
  brandSectionLabel: "Marque",
  contactSectionLabel: "Contact et informations",
};
