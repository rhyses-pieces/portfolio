import { defineConfig } from 'astro/config';
import { imageService } from '@unpic/astro/service';
import node from "@astrojs/node";
import icon from "astro-icon";
import a11yEmoji from "@fec/remark-a11y-emoji";
import rehypeExternalLinks from "rehype-external-links";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    icon({
      iconDir: "src/assets/icons"
    }),
    react(),
    markdoc(),
    ...process.env.SKIP_KEYSTATIC ? [] : [keystatic()],
  ],
  image: {
    service: imageService({
      placeholder: "blurhash",
      layout: "constrained"
    })
  },
  markdown: {
    remarkPlugins: [a11yEmoji],
    rehypePlugins: [rehypeExternalLinks]
  },
  adapter: node({ mode: "standalone" }),
  server: { host: true },
  vite: {
    ssr: {
      noExternal: ["transition-style"]
    }
  }
});