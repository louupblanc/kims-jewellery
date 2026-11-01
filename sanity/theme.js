import {buildTheme} from '@sanity/ui/theme'

// Teinte « Kim'ys » : l'accent principal du Studio (boutons, liens actifs,
// surlignages) passe du bleu Sanity à une terre cuite chaude, proche du
// marron de la marque (#6E5741).
// Tout le reste (fonds, textes, thèmes clair/sombre) reste le défaut
// officiel de Sanity : les mises à jour futures ne casseront pas l'affichage.
// Note assumée : le choix clair/sombre reste celui de Kim (icône
// soleil/lune, mémorisé par navigateur) — Sanity ne permet pas de
// l'imposer par configuration, et le forcer par contournement casserait
// à la première mise à jour.
export const kimTheme = buildTheme({
  color: {
    base: {
      primary: {_hue: 'orange'},
    },
  },
})
