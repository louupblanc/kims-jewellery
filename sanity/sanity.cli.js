import {defineCliConfig} from 'sanity/cli';

// Nom public du Studio une fois déployé : https://kims-jewellery.sanity.studio
// (modifiable ; vérifier la disponibilité au premier `sanity deploy`).
export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  studioHost: 'kims-jewellery',
  deployment: {autoUpdates: true},
});
