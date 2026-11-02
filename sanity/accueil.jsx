/**
 * Écran d'accueil du Studio (« Bienvenue Kim »).
 *
 * Première page vue par Kim : un bonjour, trois actions larges et un rappel
 * vers l'onglet « Aide » (le guide pas-à-pas vit dans son propre outil
 * `aide.jsx`, pas ici — l'accueil reste léger).
 * Aucune logique métier ici — juste des liens vers les bons endroits
 * (création via « intent », guide en page, vitrine via paramètre).
 *
 * Volontaire : AUCUNE dépendance à @sanity/ui (ni à son système de
 * spacing/props, qui a déjà bougé entre les majeures sans casser le
 * build — `space` est devenu `never` en v4 : le code compilait mais la
 * mise en page s'effondrait). HTML brut + styles inline uniquement :
 * ça rend pareil sur toutes les versions du Studio.
 * Les couleurs suivent le thème clair/sombre du Studio (hook natif
 * `useColorScheme`) : pas de blanc qui jure sur fond sombre.
 * Seules dépendances : react, @sanity/icons (sous-chemins), sanity.
 */
import {useEffect, useState} from 'react'
import {AddIcon} from '@sanity/icons/Add'
import {EyeOpenIcon} from '@sanity/icons/EyeOpen'
import {TagIcon} from '@sanity/icons/Tag'
import {useClient, useColorScheme} from 'sanity'
import {IntentLink} from 'sanity/router'

const SERIF = 'Georgia, "Times New Roman", serif'

// Palettes clair/sombre : mêmes rôles, mêmes contrastes. Le sombre reprend
// les tons du Studio (fond bleuté profond, texte écru) au lieu d'imposer
// le crème de la marque, qui jure sur fond noir.
const THEMES = {
  light: {
    carte: '#FFFDF9',
    bord: '#E7DAC4',
    encre: '#3A2C22',
    doux: '#8A7A68',
    accent: '#A68A68',
  },
  dark: {
    carte: '#23262F',
    bord: '#3A3F4D',
    encre: '#F2EDE3',
    doux: '#B3AC9E',
    accent: '#C7A37E',
  },
}

const srOnly = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
  border: 0,
}

/**
 * Compteurs affichés sous le titre (ex. « 15 bijoux en ligne »).
 * Info de confort : en cas d'erreur réseau on n'affiche rien plutôt
 * qu'une erreur — l'accueil reste utilisable.
 */
function useCatalogueStats() {
  const client = useClient({apiVersion: '2024-01-01'})
  const [stats, setStats] = useState(null)

  useEffect(() => {
    let actif = true
    client
      .fetch(
        '{produits: count(*[_type == "product" && !(_id in path("drafts.**")) && archived != true]), categories: count(*[_type == "collection" && !(_id in path("drafts.**"))])}'
      )
      .then((res) => {
        if (actif) setStats(res)
      })
      .catch(() => {
        if (actif) setStats(null)
      })
    return () => {
      actif = false
    }
  }, [client])

  return stats
}

function IconeCarte({icone, couleur}) {
  return <div style={{color: couleur, lineHeight: 0}}>{icone}</div>
}

export function Accueil(props) {
  // Paramètre : option `siteUrl` du tool (sanity.config.js) ou variable
  // d'env SANITY_STUDIO_SITE_URL — jamais en dur (le domaine changera).
  const siteUrl = props.tool?.options?.siteUrl || process.env.SANITY_STUDIO_SITE_URL || null
  const stats = useCatalogueStats()
  // Couleurs du Studio (clair/sombre, réglable par Kim via l'icône
  // soleil/lune). Lecture défensive : objet {scheme} ou chaîne nue.
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
  const titreCarte = {fontFamily: SERIF, fontSize: 17, margin: '14px 0 0', color: T.encre}
  const texteCarte = {fontSize: 13, lineHeight: 1.6, margin: '8px 0 0', color: T.encre}
  const lienAction = {fontSize: 13, fontWeight: 600, margin: '12px 0 0', color: T.accent}
  // Couleur posée sur chaque lien : la feuille de style du navigateur impose
  // sinon son bleu par défaut aux <a> (l'héritage seul ne suffit pas).
  const lien = {color: T.accent}

  return (
    <div style={{maxWidth: 960, margin: '0 auto', padding: '32px 20px 48px'}}>
      <section aria-labelledby="accueil-titre" style={{...carte, textAlign: 'center'}}>
        <h1 id="accueil-titre" style={{fontFamily: SERIF, fontSize: 30, margin: 0, color: T.encre}}>
          Bonjour Kim
        </h1>
        <p style={{fontSize: 14, margin: '10px 0 0', color: T.doux}}>
          Que veux-tu faire aujourd&rsquo;hui ?
        </p>
        {stats && (
          <p style={{margin: '14px 0 0'}}>
            <span
              style={{
                display: 'inline-block',
                background: '#EFF8ED',
                border: '1px solid #C9E6C5',
                color: '#2F7A33',
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
                padding: '4px 14px',
                marginRight: 8,
              }}
            >
              {stats.produits} bijoux en ligne
            </span>
            <span
              style={{
                display: 'inline-block',
                background: '#EFF8ED',
                border: '1px solid #C9E6C5',
                color: '#2F7A33',
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
                padding: '4px 14px',
              }}
            >
              Site à jour
            </span>
          </p>
        )}
      </section>

      <section aria-labelledby="actions-titre" style={{marginTop: 20}}>
        <h2 id="actions-titre" style={srOnly}>
          Actions rapides
        </h2>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 16}}>
          <div style={{...carte, flex: '1 1 220px'}}>
            <IconeCarte icone={<AddIcon width={28} height={28} />} couleur={T.accent} />
            <h3 style={titreCarte}>Ajouter un bijou</h3>
            <p style={texteCarte}>Photo, nom, prix, catégorie : 2 minutes.</p>
            <p style={lienAction}>
              <IntentLink intent="create" params={{type: 'product'}} style={lien}>
                Commencer
              </IntentLink>
            </p>
          </div>

          <div style={{...carte, flex: '1 1 220px'}}>
            <IconeCarte icone={<TagIcon width={28} height={28} />} couleur={T.accent} />
            <h3 style={titreCarte}>Changer un prix</h3>
            <p style={texteCarte}>
              Cliquer sur le bijou dans « Mes bijoux », modifier le prix, Publier. Voir la
              fiche n°2 de l&apos;onglet Aide.
            </p>
          </div>

          <div style={{...carte, flex: '1 1 220px'}}>
            <IconeCarte icone={<EyeOpenIcon width={28} height={28} />} couleur={T.accent} />
            <h3 style={titreCarte}>Voir le site</h3>
            <p style={texteCarte}>Ouvrir la boutique publique pour vérifier.</p>
            {siteUrl && (
              <p style={lienAction}>
                <a href={siteUrl} target="_blank" rel="noreferrer" style={lien}>
                  Ouvrir dans un nouvel onglet
                </a>
              </p>
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="guide-titre" style={{...carte, marginTop: 20}}>
        <h2 id="guide-titre" style={{fontFamily: SERIF, fontSize: 22, margin: 0, color: T.encre}}>
          Un doute ?
        </h2>
        <p style={{fontSize: 14, lineHeight: 1.7, margin: '12px 0 0'}}>
          Procédures détaillées dans l&apos;onglet Aide (en haut, à côté d&apos;Accueil).
        </p>
      </section>
    </div>
  )
}
