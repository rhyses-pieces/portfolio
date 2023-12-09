import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystaticAstro from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: cloudflare({
    imageService: "passthrough",
    runtime: {
      mode: "local",
      type: "pages"
    }
  }),
  integrations: [react(), markdoc(), keystaticAstro()],
});