/**
 * Écran d'accueil du Studio (« Bienvenue Kim »).
 *
 * Première page vue par Kim : un bonjour, trois actions larges et un
 * mode d'emploi en trois étapes. Aucune logique métier ici — juste des
 * liens vers les bons endroits (création via « intent », guide en page,
 * vitrine via l'URL passée en options de l'outil).
 *
 * Volontaire : AUCUNE dépendance à @sanity/ui (ni à son système de
 * spacing/props, qui a déjà bougé entre les majeures sans casser le
 * build — `space` est devenu `never` en v4 : le code compilait mais la
 * mise en page s'effondrait). HTML brut + styles inline uniquement :
 * ça rend pareil sur toutes les versions du Studio.
 * Seules dépendances : react, @sanity/icons (sous-chemins), sanity.
 */
import {useEffect, useRef, useState} from 'react'
import {AddIcon} from '@sanity/icons/Add'
import {EyeOpenIcon} from '@sanity/icons/EyeOpen'
import {TagIcon} from '@sanity/icons/Tag'
import {useClient} from 'sanity'
import {IntentLink} from 'sanity/router'

const TERRE = '#A68A68'
const ENCRE = '#3A2C22'
const DOUX = '#8A7A68'
const CARTE = '#FFFDF9'
const BORD = '#E7DAC4'
const SERIF = 'Georgia, "Times New Roman", serif'

const carte = {
  background: CARTE,
  border: '1px solid ' + BORD,
  borderRadius: 10,
  padding: 24,
  color: ENCRE,
}
const titreCarte = {fontFamily: SERIF, fontSize: 17, margin: '14px 0 0'}
const texteCarte = {fontSize: 13, lineHeight: 1.6, margin: '8px 0 0', color: ENCRE}
const lienAction = {fontSize: 13, fontWeight: 600, margin: '12px 0 0'}
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
        '{produits: count(*[_type == "product" && status == "publie"]), categories: count(*[_type == "collection" && published == true])}'
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

function IconeCarte({icone}) {
  return <div style={{color: TERRE, lineHeight: 0}}>{icone}</div>
}

export function Accueil(props) {
  // Paramètre : option `siteUrl` du tool (sanity.config.js) ou variable
  // d'env SANITY_STUDIO_SITE_URL — jamais en dur (le domaine changera).
  const siteUrl = props.tool?.options?.siteUrl || process.env.SANITY_STUDIO_SITE_URL || null
  const stats = useCatalogueStats()
  const guideRef = useRef(null)

  function allerAuGuide() {
    if (guideRef.current) guideRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  return (
    <div style={{maxWidth: 960, margin: '0 auto', padding: '32px 20px 48px'}}>
      <section aria-labelledby="accueil-titre" style={{...carte, textAlign: 'center'}}>
        <h1 id="accueil-titre" style={{fontFamily: SERIF, fontSize: 30, margin: 0, color: ENCRE}}>
          Bonjour Kim
        </h1>
        <p style={{fontSize: 14, margin: '10px 0 0', color: DOUX}}>Que veux-tu faire aujourd&rsquo;hui ?</p>
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
            <IconeCarte icone={<AddIcon width={28} height={28} />} />
            <h3 style={titreCarte}>Ajouter un bijou</h3>
            <p style={texteCarte}>Photo, nom, prix, catégorie : 2 minutes.</p>
            <p style={lienAction}>
              <IntentLink intent="create" params={{type: 'product'}}>
                Commencer
              </IntentLink>
            </p>
          </div>

          <div style={{...carte, flex: '1 1 220px'}}>
            <IconeCarte icone={<TagIcon width={28} height={28} />} />
            <h3 style={titreCarte}>Changer un prix</h3>
            <p style={texteCarte}>
              Clique sur le bijou dans « Mes bijoux », modifie le prix, Publier.
            </p>
            <p style={lienAction}>
              <button
                type="button"
                onClick={allerAuGuide}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  color: 'inherit',
                  font: 'inherit',
                  textDecoration: 'underline',
                }}
              >
                Voir le mode d&rsquo;emploi
              </button>
            </p>
          </div>

          <div style={{...carte, flex: '1 1 220px'}}>
            <IconeCarte icone={<EyeOpenIcon width={28} height={28} />} />
            <h3 style={titreCarte}>Voir le site</h3>
            <p style={texteCarte}>Ouvre la boutique comme tes clientes.</p>
            {siteUrl && (
              <p style={lienAction}>
                <a href={siteUrl} target="_blank" rel="noreferrer">
                  Ouvrir dans un nouvel onglet
                </a>
              </p>
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="guide-titre" ref={guideRef} style={{...carte, marginTop: 20}}>
        <h2 id="guide-titre" style={{fontFamily: SERIF, fontSize: 22, margin: 0}}>
          Mode d&rsquo;emploi en 3 étapes
        </h2>
        <ol style={{fontSize: 14, lineHeight: 1.7, margin: '12px 0 0', paddingLeft: 22}}>
          <li>
            <strong>Mes bijoux</strong> (menu de gauche) → clique sur le bijou à modifier, ou crée-en un
            nouveau avec « Ajouter un bijou ».
          </li>
          <li>
            Change ce que tu veux : <strong>la 1<sup>re</sup> photo = celle affichée sur le site</strong>.
          </li>
          <li>
            Appuie sur <strong>Publier</strong> en bas → le site se met à jour tout seul en ~2 minutes.
          </li>
        </ol>
      </section>
    </div>
  )
}
