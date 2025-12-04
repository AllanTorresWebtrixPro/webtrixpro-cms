import { z } from 'zod';

export const portfolioProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  client: z.string(),
  description: z.string(),
  type: z.enum(['web', 'mobile', 'both']),
  image: z.string().optional(),
  logo: z.string().optional(),
  technologies: z.array(z.string()).optional(),
  link: z.string().optional(),
});

export const projectDetailSchema = z.object({
  id: z.string(),
  title: z.string(),
  client: z.string(),
  description: z.string(),
  type: z.enum(['web', 'mobile', 'both']),
  image: z.string().optional(),
  logo: z.string().optional(),
  technologies: z.array(z.string()).optional(),
  link: z.string().optional(),
  overview: z.string().optional(),
  challenge: z.string().optional(),
  solution: z.string().optional(),
  impact: z.string().optional(),
  techStack: z.array(z.string()).optional(),
  testimonials: z
    .array(
      z.object({
        id: z.string(),
        author: z.string(),
        company: z.string(),
        quote: z.string(),
        videoUrl: z.string().optional(),
      })
    )
    .optional(),
});

export const portfolioListSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  projects: z.array(portfolioProjectSchema),
});

