import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per project in src/content/projects/.
// Lower `order` shows first. Projects render as full-width rows that alternate sides.
// `video` is the preferred media (a looping capture of the live site); files live under
// public/ and are referenced by absolute path. `image` is a fallback; without either, a
// neutral browser frame shows the project name. `mobileVideo` overlaps the desktop frame.
const clip = z.object({
  mp4: z.string(),
  webm: z.string().optional(),
  poster: z.string(),
});
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number().default(100),
      kind: z.string().default('Website'),
      tags: z.array(z.string()).default([]),
      description: z.object({ he: z.string(), en: z.string() }),
      image: image().optional(),
      imageAlt: z.object({ he: z.string(), en: z.string() }).optional(),
      video: clip.optional(),
      mobileVideo: clip.optional(),
      url: z.string().url().optional(),
    }),
});

export const collections = { projects };
