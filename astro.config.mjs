import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import node from "@astrojs/node";
import a11yEmoji from "@fec/remark-a11y-emoji";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [icon({ iconDir: "src/assets/icons", })],
  markdown: {
    remarkPlugins: [a11yEmoji],
    rehypePlugins: [rehypeExternalLinks],
  },
  adapter: node({
    mode: "standalone"
  }),
  server: {
    host: true,
  },
  vite: {
    ssr: {
      noExternal: ["transition-style"],
    },
  },
});