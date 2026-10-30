import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {schemaTypes} from './schemas/index.js';
import {structure} from './deskStructure.js';

// Le projet (projectId) se crée sur https://www.sanity.io (gratuit, région EU).
// Renseigner SANITY_STUDIO_PROJECT_ID avant `sanity dev` / `sanity deploy`.
const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  name: 'kims-jewellery',
  title: "Kim's Jewellery — Administration",
  projectId,
  dataset,
  basePath: '/',
  plugins: [structureTool({structure})],
  schema: {types: schemaTypes},
});
