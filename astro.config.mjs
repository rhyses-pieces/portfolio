import { defineConfig, passthroughImageService } from 'astro/config';
import { imageService } from '@unpic/astro/service';
import icon from "astro-icon";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [icon({
    iconDir: "src/assets/icons"
  }), react(), markdoc(), ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()])],
  image: {
    service: passthroughImageService(),
  },
  adapter: vercel({
    imageService: true,
    devImageService: imageService({
      placeholder: "blurhash",
      layout: "constrained"
    }),
  }),
  vite: {
    ssr: {
      noExternal: ["transition-style"]
    }
  }
});