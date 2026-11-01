/**
 * Icône du workspace (en-tête du Studio) : monogramme « K » aux couleurs
 * de la marque. Composant React pur (aucune dépendance) : il rend pareil
 * sur toutes les versions du Studio.
 * Format contraint par Sanity : petit, carré.
 */
export function KimsIcon() {
  return (
    <svg viewBox="0 0 64 64" width="100%" height="100%" role="img" aria-label="Kim'ys Jewellery">
      <rect x="2" y="2" width="60" height="60" rx="14" fill="#FFFDF9" />
      <text
        x="32"
        y="43"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="36"
        fill="#6E5741"
      >
        K
      </text>
    </svg>
  )
}
