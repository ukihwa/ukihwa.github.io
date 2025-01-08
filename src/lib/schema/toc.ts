import { z } from 'astro/zod';

export const TOCSubSectionSchema = z.object({
  slug: z.string(),
  text: z.string(),
});

export const TOCSectionSchema = z.object({
  slug: z.string(),
  text: z.string(),
  subSections: z.array(TOCSubSectionSchema),
});

export type TOCSubSection = z.infer<typeof TOCSubSectionSchema>;
export type TOCSection = z.infer<typeof TOCSectionSchema>;
