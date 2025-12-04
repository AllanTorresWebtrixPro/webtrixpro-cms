import { z } from 'zod';

export const aboutSectionSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  statistics: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
      color: z.enum(['green', 'blue', 'orange', 'gray']),
    })
  ),
});

export const storySectionSchema = z.object({
  title: z.string(),
  description: z.string(),
  videoThumbnail: z.string().optional(),
  videoUrl: z.string().optional(),
});

export const teamMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  title: z.string(),
  image: z.string().optional(),
  bio: z.string().optional(),
});

export const visionMissionSchema = z.object({
  vision: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
  }),
  mission: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
  }),
});

export const aboutDataSchema = z.object({
  about: aboutSectionSchema,
  story: storySectionSchema,
  team: z.object({
    title: z.string(),
    members: z.array(teamMemberSchema),
  }),
  visionMission: visionMissionSchema,
});

