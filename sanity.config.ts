'use client';

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { media } from 'sanity-plugin-media';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from '@/sanity/env';
import { visionTool } from '@sanity/vision';
import { structure } from '@/sanity/structure';
import { schemaTypes } from '@/sanity/schemaTypes';
// import { Logo } from '@/sanity/components/Logo';

export default defineConfig({
  // icon: Logo,
  basePath: '/admin',
  projectId,
  title: 'Fairhaven CMS',
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema: { types: schemaTypes },
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    media()
  ]
});
