/**
 * Textes juridiques v0.1 du 20/10/2026 — travail préparatoire, non validé par un avocat.
 * Données structurées (aucun HTML construit ici). Marqueurs [À CONFIRMER] volontaires :
 * ne pas publier tant qu'ils subsistent. Rendu : renderLegalPage().
 * Modèle de présentation inspiré des bonnes pratiques (articles numérotés, sommaire,
 * tableaux, encadré « L'essentiel »), adapté à une vitrine sans vente directe.
 * @module content/legal
 */

export const LEGAL_VERSION = 'v0.1';
export const LEGAL_DATE = '20/10/2026';

const NOTICE_PREPA = "Travail préparatoire — non validé par un avocat. Ne pas considérer comme publiable tant que les mentions [À CONFIRMER] subsistent.";

export const LEGAL_PAGES = {
  'mentions-legales': {
    title: 'Mentions légales',
    notice: NOTICE_PREPA,
    chapeau: "Identification de l'éditrice du site, de l'hébergement et des contenus, conformément à l'article 6-III de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).",
    essentiel: [
      "Kim's Jewellery est un <strong>site vitrine</strong> : présentation des bijoux, prix indicatifs, histoire de la marque. Aucune vente n'est conclue sur le site.",
      "Les achats éventuels se font <strong>exclusivement sur Vinted</strong>, selon ses conditions.",
      "Les rubriques Éditeur, Publication et Contact sont <strong>à compléter</strong> avant toute publication (voir Livrable 2)."
    ],
    articles: [
      {
        num: '1', heading: "Éditrice du site",
        paragraphs: ['<strong class="a-confirmer">[INFORMATION À CONFIRMER AVANT PUBLICATION : nom civil complet ou dénomination sociale, forme juridique, adresse professionnelle complète, e-mail et téléphone de contact, n° SIREN + RCS/RM et TVA si applicables.]</strong>']
      },
      {
        num: '2', heading: 'Direction de la publication',
        paragraphs: ['<strong class="a-confirmer">[INFORMATION À CONFIRMER : nom de la directrice de la publication, en principe Kim sauf désignation contraire.]</strong>']
      },
      {
        num: '3', heading: 'Objet du site',
        paragraphs: [
          "Le site Kim's Jewellery est un site vitrine de présentation de la marque : bijoux, photographies, prix indicatifs et histoire de la marque.",
          "Le site ne propose ni panier, ni paiement, ni commande, ni compte client. Les achats éventuels sont conclus exclusivement sur la plateforme Vinted, selon ses conditions, via les liens fournis à titre indicatif."
        ]
      },
      {
        num: '4', heading: 'Hébergement et contenus',
        paragraphs: [
          "Prototype : Perchance. Cible : Cloudflare Pages — Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis. <strong class=\"a-confirmer\">[À CONFIRMER : projet Pages exact, DPA et journaux du jour.]</strong>",
          "Images : fichiers locaux (prototype) ; CDN Sanity en cible — Sanity AS, <strong class=\"a-confirmer\">[À CONFIRMER : adresse, région EU du dataset, DPA du jour.]</strong>"
        ]
      },
      {
        num: '5', heading: 'Propriété intellectuelle',
        paragraphs: [
          "Photographies, logo, textes et design : droits réservés. Toute reproduction ou représentation sans autorisation est interdite, dans les limites du Code de la propriété intellectuelle.",
          "« Kim's Jewellery » est un nom d'usage. <strong class=\"a-confirmer\">[Marque enregistrée ou non — ne pas apposer ® tant que non vérifié à l'INPI.]</strong> Le détail figure à l'article 6 des CGU."
        ]
      },
      {
        num: '6', heading: 'Signalement des contenus',
        paragraphs: [
          "Pour toute demande relative à un contenu (erreur, droit revendiqué, demande de retrait), écrire à <strong class=\"a-confirmer\">[INFORMATION À CONFIRMER : e-mail juridique]</strong> en précisant l'URL concernée, la description de la demande et, pour un droit revendiqué, la preuve de titularité."
        ]
      },
      {
        num: '7', heading: 'Version du document',
        paragraphs: ["Mentions légales — version v0.1 du 20/10/2026. L'historique des versions sera tenu après publication (date, nature de la modification)."]
      }
    ]
  },

  confidentialite: {
    title: 'Confidentialité',
    notice: NOTICE_PREPA,
    chapeau: "Information sur les traitements de données et les traceurs du site vitrine, conformément au Règlement (UE) 2016/679 (RGPD) et à l'article 82 de la loi n° 78-17 du 6 janvier 1978. Vérifié dans le code au 20/10/2026 : aucun formulaire, compte, commande, mesure d'audience ni publicité.",
    essentiel: [
      "Le site ne collecte <strong>aucune donnée d'identité</strong> : pas de formulaire, pas de compte, pas de commande.",
      "Seules des données <strong>techniques strictement nécessaires</strong> transitent (acheminement, sécurité, images).",
      "<strong>Aucun bandeau de consentement requis</strong> en l'état : aucun traceur soumis au consentement n'est déposé.",
      "Vos droits (accès, rectification, effacement, opposition…) : voir article 7."
    ],
    articles: [
      {
        num: '1', heading: 'Responsable et contact',
        paragraphs: [
          "Exploitante : <strong class=\"a-confirmer\">[INFORMATION À CONFIRMER : identité identique aux mentions légales.]</strong>",
          "Contact pour l'exercice des droits : <strong class=\"a-confirmer\">[INFORMATION À CONFIRMER : e-mail dédié, relevé régulièrement.]</strong> Délégué à la protection des données : non désigné (non requis en l'état — structure de petite taille, aucun traitement à grande échelle ni données sensibles).",
          "Réclamation : Commission Nationale de l'Informatique et des Libertés (CNIL) — https://www.cnil.fr/fr/plaintes, 3 place de Fontenoy, 75334 Paris."
        ]
      },
      {
        num: '2', heading: 'Données traitées lors de votre visite',
        paragraphs: ["Votre navigation entraîne uniquement les flux techniques suivants, nécessaires à l'affichage et à la sécurité :"],
        table: {
          head: ['Catégorie', 'Exemples', 'Origine'],
          rows: [
            ['Journaux et cache de l\u2019hébergeur', 'Adresse IP, identifiant navigateur, horodatage, page demandée', 'Cloudflare Pages'],
            ['Distribution des images', 'Adresse IP, URL de l\u2019image, journaux de cache', 'CDN Sanity (cible) / fichiers locaux (prototype)'],
            ['Polices de caractères (écart à corriger)', 'Adresse IP transmise à Google à chaque page', 'Google Fonts distant — <strong>à supprimer par auto-hébergement avant publication</strong>'],
            ['Données d\u2019identité', 'Aucune : aucun formulaire, compte ou commande', '—']
          ]
        },
        paragraphsAfter: ["L'exploitante ne crée aucun profil, ne revend aucune donnée et ne réalise aucune prospection."]
      },
      {
        num: '3', heading: 'Finalités et bases légales',
        table: {
          head: ['Finalité', 'Base légale (RGPD)', 'Précision'],
          rows: [
            ['Fournir et sécuriser la vitrine', 'Intérêt légitime — art. 6(1)(f)', 'Acheminement, sécurité, prévention des abus'],
            ['Présenter prix et liens loyaux', 'Obligation légale — art. 6(1)(c)', 'Information précontractuelle, publicité non trompeuse'],
            ['Répondre aux demandes reçues par e-mail', 'Obligation légale — art. 12 à 23', 'Exercice des droits, signalements']
          ]
        },
        paragraphsAfter: ["Aucun profilage, aucune décision automatisée, aucune prospection."]
      },
      {
        num: '4', heading: 'Cookies et autres traceurs',
        paragraphs: [
          "Aucun cookie publicitaire, statistique ou de partage n'est déposé par le site (vérifié : aucun cookie applicatif, aucun stockage local, aucun kit tiers).",
          "Les témoins strictement nécessaires à la sécurité et à l'acheminement (par exemple témoins anti-abus de l'hébergeur, de courte durée) sont exemptés de consentement préalable, conformément à l'article 82 de la loi Informatique et Libertés (transposant la directive 2002/58/CE « ePrivacy »). Vous pouvez les bloquer dans votre navigateur, au risque de dégrader la sécurité ou l'affichage.",
          "Le chargement distant des polices (Google Fonts, état actuel) ne dépose pas de cookie mais transmet votre adresse IP à Google : il sera supprimé par auto-hébergement avant publication (voir Livrable 5).",
          "Si des outils soumis au consentement sont ajoutés ultérieurement (mesure d'audience non exemptée, vidéo, pixel, module social), un bandeau de consentement préalable sera mis en place avant leur activation — refus aussi simple que l'acceptation, retrait possible à tout moment, conservation du choix 6 mois maximum (recommandation CNIL) — et la présente politique sera mise à jour."
        ]
      },
      {
        num: '5', heading: 'Destinataires et transferts',
        paragraphs: [
          "Destinataires techniques : Cloudflare (hébergement, sécurité) et Sanity (CDN des images, administration du catalogue) — <strong class=\"a-confirmer\">[DPA et région d'hébergement du jour à joindre.]</strong> Google (polices distantes) uniquement jusqu'à correction.",
          "Vinted, Instagram et TikTok sont des responsables distincts dès que vous cliquez sur leurs liens : leurs propres politiques s'appliquent (voir CGU, article 5). Aucune cession commerciale de données.",
          "Transferts hors Espace économique européen : <strong class=\"a-confirmer\">[À CONFIRMER : pays d'hébergement effectifs et mécanismes du jour (clauses contractuelles types, décision d'adéquation…) — ne rien affirmer sans DPA.]</strong>"
        ]
      },
      {
        num: '6', heading: 'Durées de conservation',
        paragraphs: [
          "Journaux techniques : selon la politique de l'hébergeur (Cloudflare) et le paramétrage retenu — <strong class=\"a-confirmer\">[durées exactes du jour à recopier de la documentation, jamais inventées.]</strong>",
          "E-mails (contact, exercice des droits) : durée de traitement de la demande, puis archivage probatoire — <strong class=\"a-confirmer\">[durée à fixer avec l'avocat.]</strong>",
          "Contenus du catalogue (Sanity) : jusqu'à dépublication ou suppression par l'exploitante, plus sauvegardes et exports documentés.",
          "Choix de consentement (si un bandeau devient nécessaire) : 6 mois maximum, conformément à la recommandation de la CNIL."
        ]
      },
      {
        num: '7', heading: "Vos droits et comment les exercer",
        paragraphs: ["Droits d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité (lorsqu'elle s'applique). Pour les exercer :"],
        steps: [
          "Écrivez à <strong class=\"a-confirmer\">[e-mail droits À CONFIRMER]</strong> en précisant l'objet, la page concernée et, en cas de doute sur votre identité, un justificatif.",
          "Réponse apportée dans un délai d'un mois (article 12(3) du RGPD), sauf complexité dûment notifiée.",
          "En cas de réponse insatisfaisante, vous pouvez adresser une réclamation à la CNIL (coordonnées à l'article 1)."
        ],
        paragraphsAfter: ["Mineurs : pour les moins de 15 ans, les droits sont exercés par le titulaire de l'autorité parentale (article 45 de la loi n° 78-17), en associant le mineur selon son discernement."]
      },
      {
        num: '8', heading: 'Sécurité et administration',
        paragraphs: [
          "HTTPS imposé, dépendances verrouillées, aucun secret exposé côté client (identifiants publics de lecture Sanity uniquement ; jeton d'aperçu serveur, jamais exposé), adresses externes validées (https uniquement), contenus du catalogue échappés à l'affichage, erreurs sans fuite d'informations internes.",
          "Administration : comptes nominatifs, double authentification et révocation des accès — <strong class=\"a-confirmer\">[liste des administrateurs et procédure à documenter.]</strong> Sauvegarde et export du catalogue documentés (sanity dataset export)."
        ]
      },
      {
        num: '9', heading: 'Évolutions de cette politique',
        paragraphs: [
          "Toute création de traitement (formulaire, compte, boutique, mesure d'audience) donnera lieu à une mise à jour préalable de la présente politique, à la tenue d'un registre le cas échéant et, si requis, au recueil du consentement.",
          "Politique de confidentialité — version v0.1 du 20/10/2026. L'historique des versions sera tenu après publication."
        ]
      }
    ]
  },

  cgu: {
    title: "Conditions générales d'utilisation",
    notice: NOTICE_PREPA,
    chapeau: "Conditions d'accès et d'usage du site vitrine Kim's Jewellery. L'utilisation du site vaut acceptation sans réserve ; en cas de désaccord, cessez son utilisation. Aucune vente n'est conclue sur le site (voir article 5).",
    essentiel: [
      "Site <strong>vitrine</strong> : présentation des bijoux, prix <strong>indicatifs</strong>, histoire de la marque.",
      "Seul le prix de <strong>l'annonce Vinted</strong> fait foi ; la vente a lieu <strong>exclusivement sur Vinted</strong>.",
      "Disponibilité <strong>non garantie</strong> : les annonces évoluent indépendamment du site."
    ],
    articles: [
      {
        num: '1', heading: "Objet et champ d'application",
        sub: [
          { subnum: '1.1', text: "Les présentes CGU définissent les conditions d'accès et d'usage du site vitrine Kim's Jewellery (ci-après « le Site ») : présentation des bijoux, de leurs prix indicatifs, de l'histoire de la marque et liens vers les plateformes tierces." },
          { subnum: '1.2', text: "L'accès et l'usage du Site impliquent l'acceptation pleine et entière des présentes CGU. Le Site ne concluant aucune vente et ne fournissant aucun service transactionnel, cette acceptation résulte de l'utilisation elle-même." },
          { subnum: '1.3', text: "L'exploitante peut modifier les présentes CGU à tout moment. Les modifications prennent effet dès leur mise en ligne ; la version applicable est identifiée par son numéro et sa date en tête et en fin de page. La poursuite de l'utilisation du Site après modification vaut acceptation." }
        ]
      },
      {
        num: '2', heading: 'Définitions',
        paragraphs: [
          "« Site » : le site vitrine Kim's Jewellery (accueil, collection, fiches produits, à propos, pages juridiques). « Vitrine » : présentation sans vente en ligne. « Plateformes tierces » : Vinted, Instagram et TikTok, exploitées par des sociétés tierces responsables de leurs services. « Contenu » : textes, photographies, logo, design et agencement du Site."
        ]
      },
      {
        num: '3', heading: 'Accès et disponibilité',
        paragraphs: [
          "Accès gratuit, sans compte, sous réserve d'une connexion et d'un équipement compatibles. Le Site peut être suspendu ou adapté sans préavis (maintenance, reconstruction du site statique, mise à jour), sans garantie de continuité absolue, dans les limites de la loi.",
          "Les contenus dépubliés ou archivés sont retirés du Site sans préavis."
        ]
      },
      {
        num: '4', heading: 'Catalogue, prix et caractère non contractuel',
        sub: [
          { subnum: '4.1', text: "Photographies : visuels des pièces ; les couleurs et dimensions perçues peuvent varier selon l'écran. Les descriptions se limitent aux traits visibles confirmés ; aucune caractéristique non vérifiée (matériau, résistance, hypoallergénicité) n'est affichée." },
          { subnum: '4.2', text: "Prix affichés en euros <strong class=\"a-confirmer\">[TTC À CONFIRMER]</strong>, à titre indicatif de vitrine. Seul le prix de l'annonce Vinted au jour de la commande fait foi pour la vente." },
          { subnum: '4.3', text: "Disponibilité non garantie : les annonces et les ventes évoluent sur Vinted indépendamment du Site. Un produit affiché peut être indisponible ; un bouton sans lien valide affiche « Lien Vinted bientôt disponible » et reste inactif. Aucune réservation n'est possible sur le Site." }
        ]
      },
      {
        num: '5', heading: 'Liens vers les plateformes externes',
        paragraphs: [
          "Les boutons et liens « Voir sur Vinted », Instagram et TikTok sont des liens hypertextes simples vers des plateformes tierces, responsables de leurs services, contenus et données. Cliquer sur ces liens quitte le Site.",
          "La vente éventuelle est conclue exclusivement avec la vendeuse sur Vinted, selon ses conditions générales et sa politique, et selon les droits du consommateur applicables sur la plateforme. Le Site ne perçoit aucun paiement et n'est partie à aucun contrat de vente.",
          "L'exploitante vérifie périodiquement ces liens mais ne garantit ni la plateforme ni son contenu, sans s'exonérer de ses propres obligations légales."
        ]
      },
      {
        num: '6', heading: 'Propriété intellectuelle',
        paragraphs: [
          "Textes, photographies, logo, design et agencement : protégés dans les conditions du Code de la propriété intellectuelle (articles L.111-1 et suivants) et réservés à l'exploitante ou à leurs titulaires <strong class=\"a-confirmer\">[noms et cessions à confirmer]</strong>.",
          "Toute reproduction, représentation ou adaptation sans autorisation préalable est interdite, sauf exceptions légales (courte citation avec source, usage privé). « Kim's Jewellery » est un nom d'usage : aucune mention ® tant que l'enregistrement n'est pas vérifié. Polices : licences SIL Open Font License <strong class=\"a-confirmer\">[à joindre après auto-hébergement]</strong>.",
          "Demande d'autorisation ou de retrait : <strong class=\"a-confirmer\">[INFORMATION À CONFIRMER : e-mail de contact]</strong> (voir aussi Mentions légales, article 6)."
        ]
      },
      {
        num: '7', heading: 'Comportements interdits',
        paragraphs: [
          "Sont notamment interdits : l'extraction massive ou automatisée du catalogue, le contournement des mesures de sécurité, l'usurpation d'identité, le dépôt de contenus illicites via les canaux de contact, toute atteinte aux droits des tiers et toute entrave au fonctionnement du Site. Tout abus peut entraîner signalement et poursuites, dans les limites de la loi."
        ]
      },
      {
        num: '8', heading: 'Responsabilités',
        paragraphs: [
          "L'exploitante met en œuvre des moyens raisonnables (exactitude des informations, sécurité, vérification des liens) sans garantir l'absence d'erreur, d'interruption ou d'indisponibilité d'un lien tiers.",
          "Sa responsabilité ne peut être engagée qu'en cas de faute prouvée et de préjudice direct, dans les limites impératives de la loi. Sont exclues : toute exonération générale de responsabilité, toute limitation forfaitaire occulte et toute renonciation à un droit impératif. L'utilisateur reste responsable de son équipement, de sa connexion et de l'usage des plateformes tierces."
        ]
      },
      {
        num: '9', heading: 'Contact',
        paragraphs: ["<strong class=\"a-confirmer\">[INFORMATION À CONFIRMER : e-mail et téléphone de contact général]</strong>, distinct si besoin de l'e-mail d'exercice des droits. Réponse dans des délais raisonnables ; pour les données personnelles, voir Confidentialité, article 7."]
      },
      {
        num: '10', heading: 'Droit applicable, langue et dispositions générales',
        sub: [
          { subnum: '10.1', text: "<strong class=\"a-confirmer\">[À CONFIRMER avec l'avocat : droit français applicable. Aucun médiateur de la consommation requis sur cette vitrine sans vente ; les litiges relatifs à une vente relèvent des conditions Vinted et des juridictions compétentes, les consommateurs conservant leurs juridictions protectrices.]</strong>" },
          { subnum: '10.2', text: "Les présentes CGU sont rédigées en langue française, seule faisant foi." },
          { subnum: '10.3', text: "Si une stipulation est tenue pour non valide, les autres conservent toute leur force et leur portée." },
          { subnum: '10.4', text: "Le fait de ne pas se prévaloir d'un manquement ne vaut pas renonciation à s'en prévaloir ultérieurement." }
        ],
        paragraphsAfter: ["CGU — version v0.1 du 20/10/2026. L'historique des versions sera tenu après publication."]
      }
    ]
  }
};
