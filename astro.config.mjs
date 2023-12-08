import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: cloudflare({
    imageService: "passthrough",
    runtime: {
      mode: "local",
      type: "pages",
    }
  }),
});