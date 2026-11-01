import {HomeIcon} from '@sanity/icons/Home';
import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {Accueil} from './accueil.jsx';
import {schemaTypes} from './schemas/index.js';
import {structure} from './deskStructure.js';
import {kimTheme} from './theme.js';

// Le projet (projectId) se crée sur https://www.sanity.io (gratuit, région EU).
// Renseigner SANITY_STUDIO_PROJECT_ID avant `sanity dev` / `sanity deploy`.
const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  name: 'kims-jewellery',
  title: "Kim'ys Jewellery — Administration",
  projectId,
  dataset,
  basePath: '/',
  theme: kimTheme,
  plugins: [structureTool({structure})],
  // « Accueil » en premier = page d'arrivée de Kim (premier outil = route
  // par défaut). Le reste (structure, releases…) suit inchangé.
  tools: (prev) => [
    {
      name: 'accueil',
      title: 'Accueil',
      icon: HomeIcon,
      component: Accueil,
      options: {
        // URL publique de la vitrine (lien « Voir le site »).
        // Paramètre : variable d'env SANITY_STUDIO_SITE_URL (sanity/.env),
        // à mettre à jour si le domaine change — jamais en dur ici.
        siteUrl: process.env.SANITY_STUDIO_SITE_URL,
      },
    },
    ...prev,
  ],
  schema: {types: schemaTypes},
});
