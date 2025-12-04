import { z } from 'zod';

export const testimonialSchema = z.object({
  id: z.string(),
  clientName: z.string(),
  company: z.string(),
  title: z.string().optional(),
  quote: z.string(),
  avatar: z.string().optional(),
  logo: z.string().optional(),
  rating: z.number().optional(),
  videoUrl: z.string().optional(),
});

export const testimonialListSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  testimonials: z.array(testimonialSchema),
});

