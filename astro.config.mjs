import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://rhys.kim",
  integrations: [icon({
    iconDir: "src/assets/icons"
  }), react(), markdoc(), ...(process.env.NODE_ENV == "development" ? [keystatic()] : [])],
});