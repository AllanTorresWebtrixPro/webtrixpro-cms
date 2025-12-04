import { z } from 'zod';

export const serviceSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  image: z.string().optional(),
  coreComponents: z.array(
    z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })
  ),
  keyBenefits: z.array(
    z.object({
      icon: z.string(),
      title: z.string(),
    })
  ),
  callToAction: z.object({
    question: z.string(),
    description: z.string(),
    ctaText: z.string(),
    ctaLink: z.string(),
  }),
});

export const serviceListSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  services: z.array(
    z.object({
      id: z.string(),
      slug: z.string(),
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      image: z.string().optional(),
    })
  ),
});

