import 'server-only';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID || '6vc0fdxe',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION || '2025-01-01',
  useCdn: true,
  token: process.env.SANITY_PREVIEW_TOKEN,
});

const builder = imageUrlBuilder({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET || 'production',
});

export function urlFor(source: any) {
  return builder.image(source);
}
