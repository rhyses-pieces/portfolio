import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.mdoc', base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    draft: z.boolean().default(true),
    title: z.string(),
    date: z.coerce.date(),
    image: z.object({
      source: image(),
      alt: z.string(),
      caption: z.string().optional(),
    }),
    projectUrl: z.string().url(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectCollection,
}

