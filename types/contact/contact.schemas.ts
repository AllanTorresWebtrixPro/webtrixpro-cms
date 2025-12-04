import { z } from 'zod';

export const contactFormDataSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const contactInfoSchema = z.object({
  address: z.string(),
  phone: z.string(),
  tollFree: z.string(),
  email: z.string().email(),
  mapEmbedUrl: z.string().optional(),
});

export const contactDataSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  info: contactInfoSchema,
});

