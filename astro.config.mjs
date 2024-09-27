import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [icon({
    iconDir: "src/assets/icons"
  }), react(), markdoc(), ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()])],
  image: {
    service: imageService({
      placeholder: "blurhash",
      layout: "constrained"
    })
  },
  vite: {
    ssr: {
      noExternal: ["transition-style"]
    }
  },
  adapter: netlify({
    edgeMiddleware: true,
  }),
});