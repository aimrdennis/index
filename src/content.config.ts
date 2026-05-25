import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),

    // 👇 TAMBAHKAN INI
    popular: z.boolean().optional(),
  }),
});


const tools = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  blog,
  tools,
};
