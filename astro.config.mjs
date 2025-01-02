// @ts-check
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ukihwa.github.io',
  // base: '/ukihwa.github.io',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
