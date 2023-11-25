import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
  draft: z.boolean(),
  title: z.string(),
  date: z.date().optional(),
  image: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  tags: z.array(z.string()),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: projectSchema,
});

export const collections = {
  projects: projectCollection,
}

