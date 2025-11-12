import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import product from './schemas/product';

export default defineConfig({
  name: 'prolinsa',
  title: 'prolinsa',
  projectId: process.env.SANITY_PROJECT_ID || '6vc0fdxe',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION || '2025-01-01',
  plugins: [deskTool()],
  schema: {
    types: [product],
  },
});
