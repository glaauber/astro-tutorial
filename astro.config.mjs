// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://admirable-licorice-da9627.netlify.app/",
  integrations: [preact()]
});