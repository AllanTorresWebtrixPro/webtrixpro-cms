import { z } from 'zod';

export const heroSectionSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  ctaText: z.string(),
  ctaLink: z.string(),
});

export const servicePreviewSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  link: z.string(),
});

export const statisticSchema = z.object({
  value: z.string(),
  label: z.string(),
  color: z.enum(['green', 'blue', 'orange', 'gray']),
});

export const testimonialPreviewSchema = z.object({
  id: z.string(),
  clientName: z.string(),
  company: z.string(),
  quote: z.string(),
  avatar: z.string().optional(),
});

export const awardSchema = z.object({
  id: z.string(),
  title: z.string(),
  year: z.string(),
  badge: z.string().optional(),
});

export const homepageDataSchema = z.object({
  hero: heroSectionSchema,
  whatWeDo: z.object({
    title: z.string(),
    subtitle: z.string(),
    services: z.array(servicePreviewSchema),
  }),
  ourSolution: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
  howYouBenefit: z.object({
    title: z.string(),
    description: z.string(),
    benefits: z.array(
      z.object({
        icon: z.string(),
        title: z.string(),
      })
    ),
  }),
  awards: z.object({
    title: z.string(),
    description: z.string(),
    years: z.array(z.string()),
    awards: z.array(awardSchema),
  }),
  whoWeAre: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    videoThumbnail: z.string().optional(),
    videoUrl: z.string().optional(),
  }),
  testimonials: z.object({
    title: z.string(),
    testimonials: z.array(testimonialPreviewSchema),
  }),
  whyUs: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    statistics: z.array(statisticSchema),
  }),
  howWeDoIt: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    steps: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
      })
    ),
  }),
  callToAction: z.object({
    title: z.string(),
    subtitle: z.string(),
    ctaText: z.string(),
    ctaLink: z.string(),
  }),
});

