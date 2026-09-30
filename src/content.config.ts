import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per project in src/content/projects/.
// Lower `order` shows first. `image` and `url` are optional: without an image the card
// shows a neutral browser frame with the project name.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number().default(100),
      kind: z.string().default('Website'),
      description: z.object({ he: z.string(), en: z.string() }),
      image: image().optional(),
      imageAlt: z.object({ he: z.string(), en: z.string() }).optional(),
      url: z.string().url().optional(),
    }),
});

export const collections = { projects };
