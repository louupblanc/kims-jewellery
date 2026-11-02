# Mise en ligne : CMS Sanity + site Cloudflare Pages

Objectif : Kim gère bijoux, photos, prix, catégories et liens **sans code**,
depuis une interface en français. Le site se reconstruit **tout seul** à
chaque publication.

> Ce que l’agent a déjà fait : schémas FR, menu simplifié, import initial
> des 15 bijoux (`sanity/seed/`), site Astro qui lit Sanity avec repli local.
> Ce qui reste **à faire par un humain** (compte + clics, ~30 min) : ci-dessous.

## 0. Prérequis (une fois, 5 min)

1. Créer un compte sur https://www.sanity.io (offre gratuite).
2. Créer un **projet** : nom `kims-jewellery`, région **EU** (données en Europe),
   dataset `production`. Noter le **Project ID**.
3. Installer Node.js 22+ (requis : Astro 7 et Sanity 6 exigent Node ≥ 22 ;
   prendre la LTS sur https://nodejs.org) puis, dans le dossier du projet :
   `npm install` et `npx sanity login`.

## 1. Brancher le projet (2 min)

1. Copier `.env.example` vers `.env` (sur ta machine uniquement — **ne jamais
   le commiter**, voir `.gitignore`) et renseigner :
   `PUBLIC_SANITY_PROJECT_ID=<Project ID>`, `PUBLIC_SANITY_DATASET=production`.
2. Dans `sanity/` : `cp .env.example ../.env` n’existe pas — créer
   `sanity/.env` avec :
   `SANITY_STUDIO_PROJECT_ID=<Project ID>`, `SANITY_STUDIO_DATASET=production`
   et `SANITY_STUDIO_SITE_URL=https://<ton-domaine>` (lien « Voir le site »
   dans l’accueil du Studio).

## 2. Importer le catalogue actuel (3 min)

Le dossier `sanity/seed/` contient les 15 bijoux confirmés + catégories +
réglages (photos incluses) :

```
npx sanity dataset import sanity/seed/produits.ndjson --dataset production --replace
```

(Ancienne forme avec `production` en positionnel = dépréciée : warning
« Use the --dataset flag instead ».)

Ensuite `npm run studio` → http://localhost:3333 : vérifier les 15 bijoux.

> Si la CLI réclame `styled-components` non installé : depuis la **racine**,
> `npm ls styled-components` doit afficher une 6.x (dépendance transitive de
> `sanity`, remontée par hoisting). Sinon, toujours depuis la racine :
> `npm install styled-components@^6.1.15` (ne jamais faire `npm install`
> dans `sanity/` : cela dupliquerait react/sanity dans un `node_modules`
> imbriqué pour rien — les dépendances du Studio sont déclarées dans
> `sanity/package.json` mais installées une seule fois, à la racine).

## 3. Déployer l’interface Kim (5 min)

```
cd sanity && npx sanity deploy
```

Choisir le nom proposé (`kims-jewellery`) → interface publique sur
`https://kims-jewellery.sanity.studio`. Inviter Kim depuis
https://www.sanity.io/manage → projet → Members → **Editor**.
Elle se connecte avec son e-mail, sans terminal.

Interface : « Accueil » (page d’arrivée : 3 actions + guide, teinte terre cuite via `sanity/theme.js`),
« Mes bijoux » (ajouter/modifier/dépublier),
« Coups de cœur », « Catégories » (créer « Colliers » ou
« Boucles d’oreilles » quand Kim confirme, sans code),
« Réglages marque » (Instagram, TikTok, Vinted, textes).
Français : le pack `@sanity/locale-fr-fr` est installé — chacun choisit
« Français » dans le menu utilisateur (avatar en haut à droite) ; les
boutons système restent en anglais tant que ce n’est pas fait.

## 4. Déployer le site (10 min)

1. Sur ta machine : `npm install` (génère `package-lock.json` = dépendances
   verrouillées, exigence du cahier), `npm run build` (vérifie que tout
   compile avec les dernières versions), `npm run check`, `npm audit`
   (attendu : 0 faille). Puis pousser ce dossier sur GitHub/GitLab **avec**
   le `package-lock.json`.
2. Cloudflare Pages → Create → connecter le dépôt :
   - Build command : `npm run build`
   - Output : `dist`
   - Variables : `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET=production`,
     `PUBLIC_SITE_URL=https://<ton-domaine>`
3. Premier déploiement → vérifier les 15 bijoux en ligne.

## 5. Rebuild automatique à chaque publication (5 min, essentiel)

Sans ça, le bouton « Publier » de Kim **ne met pas le site à jour**.
Pages → site → Settings → Builds → **Deploy hooks** → Create
(nom : `sanity-publish`) → copier l’URL.
Puis https://www.sanity.io/manage → projet → API → **Webhooks** →
Create : déclencheur `publish`, URL = celle du Deploy Hook.
Test : modifier un prix dans le Studio → le site se reconstruit seul (~2 min).

## 6. Domaine + finitions (plus tard)

DNS du domaine vers Cloudflare, `PUBLIC_SITE_URL` finale, re-déployer.
Journaux techniques, DPA Sanity/Cloudflare et mentions légales :
voir cahier des charges (livrable 2, avocat).

## Réponses aux 3 points de vigilance

1. **Interface en français, menus réduits ?** Champs, listes, erreurs et menu
   100 % français (voir `sanity/`). Seuls les boutons système du Studio
   (Publish, Discard…) restent en anglais — inévitable, sans impact sur Kim.
2. **Photos : plusieurs, réordonner, principale ?** Oui, natif : glisser-déposer,
   flèches pour réordonner, recadrage (hotspot). La 1re photo = image du site.
3. **Publication → site à jour sans technique ?** Oui **si** l’étape 5 est faite.
   Sans webhook, il faut cliquer « Retry deployment » dans Cloudflare.

## 7. Sécurité et maintenance (exigences cahier § OWASP)

- **Mises à jour** : versions fixées par `package-lock.json` (commité).
  GitHub → Settings → Code security → **Dependabot alerts : Enable**
  (alerte si une faille est publiée plus tard). Avant chaque ajout de
  dépendance : `npm audit`.
- **Sanity** : https://www.sanity.io/manage → projet → API → **CORS origins** :
  ne garder que `https://kims-jewellery.sanity.studio` et le domaine du site.
  Kim invitée en rôle **Editor** (pas Admin) ; révocation = Manage → Members.
- **Déjà en place dans le code** : en-têtes + CSP stricte (`public/_headers`,
  aucun `unsafe-inline`), contenu CMS échappé (`escapeHtml`), URLs externes
  limitées au https (`safeUrl`), aucun secret côté client, repli local si
  Sanity est en panne.
- **Note versions** : tout est aux dernières stables sauf TypeScript bloqué en
  v6 (l’outil `astro check` refuse TS7 — dev uniquement, sans impact prod ;
  réévaluer quand `@astrojs/check` supportera TS7).
