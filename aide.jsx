/**
 * Onglet « Aide » du Studio (guide de Kim).
 *
 * Contenu validé sur maquette : 6 fiches au style guide (infinitif,
 * factuel), sobres, sans renvoi vers un tiers — le site et le panel
 * sont à Kim.
 * Même technique que l'accueil : HTML brut + styles inline, AUCUNE
 * dépendance à @sanity/ui (dont les props ont déjà bougé entre
 * majeures). Les couleurs suivent le thème clair/sombre du Studio
 * (hook natif `useColorScheme`). Seules dépendances : react, sanity.
 */
import {useColorScheme} from 'sanity'

const SERIF = 'Georgia, "Times New Roman", serif'

// Mêmes rôles que l'accueil : crème en clair, bleu nuit en sombre.
const THEMES = {
  light: {
    carte: '#FFFDF9',
    bord: '#E7DAC4',
    encre: '#3A2C22',
    doux: '#8A7A68',
    accent: '#A68A68',
    code: '#F4EDE2',
  },
  dark: {
    carte: '#23262F',
    bord: '#3A3F4D',
    encre: '#F2EDE3',
    doux: '#B3AC9E',
    accent: '#C7A37E',
    code: '#2C303C',
  },
}

export function Aide() {
  // Couleurs du Studio (clair/sombre, réglable via l'icône soleil/lune).
  // Lecture défensive : objet {scheme} ou chaîne nue.
  const couleurStudio = useColorScheme()
  const scheme =
    couleurStudio?.scheme === 'light' || couleurStudio === 'light' ? 'light' : 'dark'
  const T = THEMES[scheme]

  const carte = {
    background: T.carte,
    border: '1px solid ' + T.bord,
    borderRadius: 10,
    padding: 24,
    color: T.encre,
  }
  const titreFiche = {fontFamily: SERIF, fontSize: 19, margin: 0, color: T.encre}
  const quand = {fontSize: 13, margin: '4px 0 0', color: T.doux}
  const liste = {fontSize: 14, lineHeight: 1.7, margin: '12px 0 0', paddingLeft: 22}
  const note = {
    borderLeft: '3px solid ' + T.bord,
    padding: '8px 14px',
    fontSize: 13.5,
    color: T.doux,
    marginTop: 12,
    lineHeight: 1.6,
  }
  const code = {
    fontFamily: 'inherit',
    fontSize: 12.5,
    background: T.code,
    border: '1px solid ' + T.bord,
    borderRadius: 6,
    padding: '1px 7px',
    whiteSpace: 'nowrap',
    color: T.encre,
  }
  const lien = {color: T.accent}
  const tableau = {width: '100%', borderCollapse: 'collapse', fontSize: 14, marginTop: 12}
  const cellule = {border: '1px solid ' + T.bord, padding: '8px 12px', textAlign: 'left', verticalAlign: 'top'}
  const entete = {...cellule, color: T.doux, fontWeight: 600, fontSize: 12.5}

  const FICHE = {marginTop: 16}

  return (
    <div style={{maxWidth: 900, margin: '0 auto', padding: '32px 20px 48px'}}>
      <section aria-labelledby="aide-titre" style={carte}>
        <h1 id="aide-titre" style={{fontFamily: SERIF, fontSize: 28, margin: 0, color: T.encre}}>
          Aide
        </h1>
        <p style={{fontSize: 14, margin: '10px 0 0', color: T.encre}}>
          Les noms entre <code style={code}>comme ceci</code> reprennent les boutons tels
          qu&apos;ils s&apos;affichent (Sanity les laisse en anglais :{' '}
          <code style={code}>Publish</code>, <code style={code}>Discard changes</code>…).
        </p>
        <p style={{...note, borderColor: T.accent, color: T.encre}}>
          Rien n&apos;est en ligne avant <code style={code}>Publish</code>. Après, laisser
          ~2 min au site pour se mettre à jour, puis recharger la page pour vérifier.
        </p>
      </section>

      <nav aria-label="Sommaire de l'aide" style={{...carte, ...FICHE}}>
        <strong style={{fontFamily: SERIF}}>Sommaire</strong>
        <ol style={liste}>
          <li>
            <a href="#aide-f1" style={lien}>
              Ajouter un bijou
            </a>
          </li>
          <li>
            <a href="#aide-f2" style={lien}>
              Modifier prix / photo / description
            </a>
          </li>
          <li>
            <a href="#aide-f3" style={lien}>
              Coups de cœur
            </a>
          </li>
          <li>
            <a href="#aide-f4" style={lien}>
              Cacher un bijou : archiver ou annuler ?
            </a>
          </li>
          <li>
            <a href="#aide-f5" style={lien}>
              Catégories et réglages
            </a>
          </li>
          <li>
            <a href="#aide-f6" style={lien}>
              Ça ne s&apos;affiche pas ?
            </a>
          </li>
        </ol>
      </nav>

      <section aria-labelledby="aide-f1" id="aide-f1" style={{...carte, ...FICHE}}>
        <h2 id="aide-f1-titre" style={titreFiche}>
          1. Ajouter un bijou
        </h2>
        <p style={quand}>Mes bijoux → Create</p>
        <ol style={liste}>
          <li>
            Renseigner <strong>Nom du bijou</strong>, <strong>Prix (€)</strong> sans
            centimes, <strong>Catégorie</strong> (= le filtre sur le site).
          </li>
          <li>
            Ajouter 1 à 4 photos (glisser-déposer accepté). La <strong>1re = image
            principale</strong> partout.
          </li>
          <li>
            Description en 1-2 phrases. Lien Vinted (facultatif ; vide = « bientôt
            disponible »).
          </li>
          <li>
            Cliquer <code style={code}>Publish</code>. Vérifier ~2 min après sur le site.
          </li>
        </ol>
        <p style={note}>
          Message rouge = champ obligatoire manquant (photo, prix, catégorie) ou lien sans
          https://. Corriger puis <code style={code}>Publish</code>.
        </p>
      </section>

      <section aria-labelledby="aide-f2" id="aide-f2" style={{...carte, ...FICHE}}>
        <h2 id="aide-f2-titre" style={titreFiche}>
          2. Modifier prix / photo / description
        </h2>
        <p style={quand}>Mes bijoux → clic sur le bijou</p>
        <ol style={liste}>
          <li>
            Modifier le champ. Mention <em>Edited</em> en haut du document = modification
            non publiée.
          </li>
          <li>
            Pour changer l&apos;image principale : glisser la photo voulue en 1re position.
          </li>
          <li>
            Cliquer <code style={code}>Publish</code>, attendre ~2 min, recharger la page
            du site.
          </li>
        </ol>
      </section>

      <section aria-labelledby="aide-f3" id="aide-f3" style={{...carte, ...FICHE}}>
        <h2 id="aide-f3-titre" style={titreFiche}>
          3. Coups de cœur
        </h2>
        <p style={quand}>4 max, affichés sur l&apos;accueil du site</p>
        <ol style={liste}>
          <li>
            Cocher <em>Coup de cœur</em> dans la fiche → <code style={code}>Publish</code>.
          </li>
          <li>
            Pour retirer : décocher → <code style={code}>Publish</code>.
          </li>
        </ol>
        <p style={note}>
          Un bijou à la fois archivé et en coup de cœur reste invisible. Voir fiche 4.
        </p>
      </section>

      <section aria-labelledby="aide-f4" id="aide-f4" style={{...carte, ...FICHE}}>
        <h2 id="aide-f4-titre" style={titreFiche}>
          4. Cacher un bijou : archiver ou annuler ?
        </h2>
        <table style={tableau}>
          <thead>
            <tr>
              <th scope="col" style={entete}>
                Situation
              </th>
              <th scope="col" style={entete}>
                Que faire
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellule}>Pause temporaire (rupture, remise en ligne prévue)</td>
              <td style={cellule}>
                Cocher <em>Archivé</em> → <code style={code}>Publish</code>. Masqué du
                site, fiche conservée.
              </td>
            </tr>
            <tr>
              <td style={cellule}>Erreur en cours de modification</td>
              <td style={cellule}>
                <code style={code}>Discard changes</code> : retour à la version en ligne.
              </td>
            </tr>
            <tr>
              <td style={cellule}>Suppression définitive</td>
              <td style={cellule}>
                Supprimer un document est irréversible. Avant de supprimer, vérifier
                qu&apos;il n&apos;est plus lié ni visité.
              </td>
            </tr>
          </tbody>
        </table>
        <p style={note}>
          Cas particulier : la modification d&apos;un bijou archivé reste invisible après{' '}
          <code style={code}>Publish</code>. Pour remise en ligne : décocher{' '}
          <em>Archivé</em>, puis <code style={code}>Publish</code>.
        </p>
      </section>

      <section aria-labelledby="aide-f5" id="aide-f5" style={{...carte, ...FICHE}}>
        <h2 id="aide-f5-titre" style={titreFiche}>
          5. Catégories et réglages
        </h2>
        <p style={quand}>Filtres du site + liens + textes</p>
        <ol style={liste}>
          <li>Renommer une catégorie renomme le filtre correspondant côté clientes.</li>
          <li>
            Pour créer une catégorie : Catégories → Create, donner un nom, cliquer{' '}
            <code style={code}>Publish</code>. Elle devient un filtre sur le site (vide
            tant qu&apos;aucun bijou ne l&apos;utilise).
          </li>
          <li>
            Réglages (nom, suffixe, liens, signature, À propos) : modifiables directement,
            effet en ligne après <code style={code}>Publish</code> (~2 min).
          </li>
        </ol>
      </section>

      <section aria-labelledby="aide-f6" id="aide-f6" style={{...carte, ...FICHE}}>
        <h2 id="aide-f6-titre" style={titreFiche}>
          6. Ça ne s&apos;affiche pas ?
        </h2>
        <table style={tableau}>
          <thead>
            <tr>
              <th scope="col" style={entete}>
                Symptôme
              </th>
              <th scope="col" style={entete}>
                À vérifier
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellule}>
                <em>Edited</em> en haut du doc
              </td>
              <td style={cellule}>
                Modification non publiée → <code style={code}>Publish</code>
              </td>
            </tr>
            <tr>
              <td style={cellule}>Invisible après Publish</td>
              <td style={cellule}>
                Attendre 2 min puis recharger (Ctrl+R). Vérifier <em>Archivé</em> décoché +
                catégorie remplie.
              </td>
            </tr>
            <tr>
              <td style={cellule}>Photo floue / mal cadrée</td>
              <td style={cellule}>
                Recharger une photo nette ; recadrer avec le point chaud dans la fiche.
              </td>
            </tr>
            <tr>
              <td style={cellule}>Blocage persistant</td>
              <td style={cellule}>
                Noter le nom du bijou + l&apos;heure, ne rien supprimer : rouvrir la fiche
                et annuler avec <code style={code}>Discard changes</code> ou restaurer une
                version depuis l&apos;historique.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}
