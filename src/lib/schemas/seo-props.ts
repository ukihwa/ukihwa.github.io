import { z } from 'astro/zod';

export const SEOPropsSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
});

export type SEOProps = z.infer<typeof SEOPropsSchema>;
