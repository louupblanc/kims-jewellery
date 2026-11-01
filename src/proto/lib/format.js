/**
 * Utilitaires de présentation purs (aucun texte métier ici).
 * @module lib/format
 */

/**
 * Échappe une valeur destinée à être interpolée dans du HTML.
 * Appliqué systématiquement aux données catalogue (saisie Kim / Sanity futur).
 * @param {unknown} value
 * @returns {string}
 */
export function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/**
 * Formatte un prix en euros (fr-FR, virgule).
 * @param {number} n
 * @returns {string}
 */
export function formatPrice(n) {
  return Number(n).toFixed(2).replace(".", ",") + " \u20AC";
}

/**
 * Attributs width/height à partir de dimensions [largeur, hauteur].
 * Réserve l'espace avant chargement (anti-CLS) sans changer le rendu
 * (le CSS garde la main via object-fit/aspect-ratio). Chaîne vide si
 * dimensions inconnues : on n'invente jamais de valeurs.
 * @param {Array<number>|null|undefined} dim
 * @returns {string}
 */
export function sizeAttrs(dim) {
  if (!Array.isArray(dim) || !Number.isFinite(dim[0]) || !Number.isFinite(dim[1])) return "";
  return ' width="' + dim[0] + '" height="' + dim[1] + '"';
}

/**
 * N'accepte qu'une URL sûre à rendre cliquable (https externe, ancre interne, image locale).
 * Retourne "" si l'URL est absente ou suspecte (ex. javascript:).
 * @param {unknown} url
 * @returns {string}
 */
export function safeUrl(url) {
  if (typeof url !== "string" || url === "") return "";
  if (url.startsWith("#/")) return url;
  if (url.startsWith("src/images/")) return url;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" ? url : "";
  } catch {
    return "";
  }
}
