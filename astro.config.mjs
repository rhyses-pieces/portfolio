import { defineConfig } from 'astro/config';
import { imageService } from '@unpic/astro/service';
import icon from "astro-icon";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [icon({
    iconDir: "src/assets/icons"
  }), react(), markdoc(), ...(process.env.NODE_ENV === "production" ? [] : [keystatic()])],
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
  adapter: node({ mode: "standalone" }),
  server: { host: true },
});