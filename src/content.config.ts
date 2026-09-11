import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const essays = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/essays" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    minutes: z.number(),
    tags: z.array(z.string()),
    featured: z.boolean().optional(),
    order: z.number(),
  }),
});

export const collections = { essays };
