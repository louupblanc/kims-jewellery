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
3. Installer Node.js 18+ puis, dans le dossier du projet :
   `npm install` et `npx sanity login`.

## 1. Brancher le projet (2 min)

1. Copier `.env.example` vers `.env` (site) et renseigner :
   `PUBLIC_SANITY_PROJECT_ID=<Project ID>`, `PUBLIC_SANITY_DATASET=production`.
2. Dans `sanity/` : `cp .env.example ../.env` n’existe pas — créer
   `sanity/.env` avec :
   `SANITY_STUDIO_PROJECT_ID=<Project ID>` et `SANITY_STUDIO_DATASET=production`.

## 2. Importer le catalogue actuel (3 min)

Le dossier `sanity/seed/` contient les 15 bijoux confirmés + catégories +
réglages (photos incluses) :

```
npx sanity dataset import sanity/seed/produits.ndjson production --replace
```

Ensuite `npm run studio` → http://localhost:3333 : vérifier les 15 bijoux.

## 3. Déployer l’interface Kim (5 min)

```
cd sanity && npx sanity deploy
```

Choisir le nom proposé (`kims-jewellery`) → interface publique sur
`https://kims-jewellery.sanity.studio`. Inviter Kim depuis
https://www.sanity.io/manage → projet → Members → **Editor**.
Elle se connecte avec son e-mail, sans terminal.

Interface : « Mes bijoux » (ajouter/modifier/dépublier),
« Coups de cœur », « Catégories » (créer « Colliers » ou
« Boucles d’oreilles » quand Kim confirme, sans code),
« Réglages marque » (Instagram, TikTok, Vinted, textes).

## 4. Déployer le site (10 min)

1. Pousser ce dossier sur GitHub/GitLab.
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
