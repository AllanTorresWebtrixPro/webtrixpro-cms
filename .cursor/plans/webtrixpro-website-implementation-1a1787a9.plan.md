<!-- 1a1787a9-6a10-4005-a21d-74835a7b3c83 0d1bad45-7833-46e0-9996-3dc714bd1af1 -->
# WebtrixPro Website Implementation Plan

## Overview

Build a complete Next.js 15 website for WebtrixPro with all pages dynamically rendered from API routes. The implementation will follow the layered architecture pattern (Screen → Component → Hook → Service → Endpoint → Data) and adhere to all cursor rules including TypeScript typing, error handling, logging, and responsive design.

## Project Setup

### 1. Initialize Next.js Project

- Set up Next.js 15.5.4 with TypeScript
- Configure Tailwind CSS 4.1.13
- Install dependencies: TanStack Query, React Hook Form, Zod, shadcn/ui
- Set up project structure following cursor rules

### 2. Design System Implementation

- Create color palette system (Green primary, Gray secondary, Yellow accent)
- Set up typography system (Display, Headings, Paragraphs)
- Create shared UI components (Button, Card, Section, etc.)
- Implement responsive breakpoints

## API Routes Structure

Create API routes in `/app/api/v1/` that return JSON data:

- `/api/v1/homepage` - Homepage content (hero, services, testimonials, stats)
- `/api/v1/about` - About page content (story, leadership team, vision/mission)
- `/api/v1/services` - List of all services
- `/api/v1/services/[slug]` - Individual service details
- `/api/v1/portfolio` - List of portfolio projects
- `/api/v1/portfolio/[id]` - Individual project details
- `/api/v1/testimonials` - All testimonials
- `/api/v1/contact` - Contact form submission endpoint

## Pages to Implement

### 1. Homepage (`/app/page.tsx`)

- Hero section with CTA
- What We Do section (4 services)
- Our Solution / How You Benefit section
- Recognized for Excellence (awards)
- Who We Are section
- Testimonials preview
- Why Us (stats)
- How We Do It (DEV IX Model)
- Call to Action section

### 2. About Page (`/app/about/page.tsx`)

- About WebtrixPro section
- Our Story section with video
- Leadership Team grid
- Vision & Mission cards

### 3. Services Pages

- `/app/services/page.tsx` - Services list page
- `/app/services/[slug]/page.tsx` - Individual service pages (ai-agents, mobile-apps, web-apps, technology-strategy)

### 4. Portfolio Pages

- `/app/portfolio/page.tsx` - Portfolio grid
- `/app/portfolio/[id]/page.tsx` - Project detail with accordion sections

### 5. Testimonials Page (`/app/testimonials/page.tsx`)

- Full testimonials grid
- Featured testimonials carousel

### 6. Contact Page (`/app/contact/page.tsx`)

- Contact form
- Contact information cards
- Embedded map

## Component Architecture

### Shared Components (`/components/shared/`)

- `Header.tsx` - Navigation header
- `Footer.tsx` - Footer with newsletter, links, Clutch widget
- `Button.tsx` - Reusable button component
- `Card.tsx` - Card component
- `Section.tsx` - Section wrapper
- `LoadingSpinner.tsx` - Loading states
- `EmptyState.tsx` - Empty states

### Feature Components

- `/components/home/` - Homepage-specific components
- `/components/about/` - About page components
- `/components/services/` - Service page components
- `/components/portfolio/` - Portfolio components
- `/components/testimonials/` - Testimonial components
- `/components/contact/` - Contact form components

## Service Layer

Create services in `/lib/services/`:

- `HomepageService.ts` - Homepage data
- `AboutService.ts` - About page data
- `ServiceService.ts` - Services data
- `PortfolioService.ts` - Portfolio data
- `TestimonialService.ts` - Testimonials data
- `ContactService.ts` - Contact form submission

All services must extend `BaseService` and use centralized logger.

## Hooks Layer

Create hooks in `/hooks/`:

- `use-homepage.ts` - Homepage data fetching
- `use-about.ts` - About page data
- `use-services.ts` - Services data
- `use-portfolio.ts` - Portfolio data
- `use-testimonials.ts` - Testimonials data
- `use-contact.ts` - Contact form submission

All hooks must use TanStack Query, service layer, and `useGlobalErrorHandler`.

## Type Definitions

Create types in `/types/`:

- `homepage.types.ts` - Homepage data types
- `about.types.ts` - About page types
- `service.types.ts` - Service types
- `portfolio.types.ts` - Portfolio types
- `testimonial.types.ts` - Testimonial types
- `contact.types.ts` - Contact form types

All types must have corresponding Zod schemas in `*.schemas.ts` files.

## Implementation Steps

1. **Project Setup**

- Initialize Next.js project
- Install dependencies
- Configure Tailwind CSS
- Set up shadcn/ui
- Create base utilities (logger, customFetch, query-keys)

2. **Design System**

- Create color system in Tailwind config
- Set up typography system
- Create base shared components (Button, Card, Section)
- Implement Header and Footer components

3. **API Routes**

- Create all API route handlers
- Return mock JSON data (to be replaced with real data)
- Implement proper error handling and logging

4. **Service Layer**

- Create BaseService
- Implement all feature services
- Register services in index.ts

5. **Types & Schemas**

- Create all TypeScript interfaces
- Create Zod validation schemas
- Ensure type safety throughout

6. **Hooks**

- Create all data fetching hooks
- Implement TanStack Query integration
- Add error handling with useGlobalErrorHandler

7. **Pages Implementation**

- Homepage with all sections
- About page
- Services pages (list + detail)
- Portfolio pages (list + detail)
- Testimonials page
- Contact page

8. **Components**

- Build all feature-specific components
- Ensure responsive design (mobile-first)
- Add loading/error/empty states

9. **Testing & Refinement**

- Test all pages
- Verify responsive design
- Check TypeScript compilation
- Run linter

## Key Files to Create

### Core Infrastructure

- `lib/services/base/BaseService.ts`
- `lib/services/index.ts`
- `lib/logger.ts`
- `lib/custom-fetch.ts`
- `lib/query-keys.ts`
- `hooks/use-global-error-handler.ts`

### API Routes

- `app/api/v1/homepage/route.ts`
- `app/api/v1/about/route.ts`
- `app/api/v1/services/route.ts`
- `app/api/v1/services/[slug]/route.ts`
- `app/api/v1/portfolio/route.ts`
- `app/api/v1/portfolio/[id]/route.ts`
- `app/api/v1/testimonials/route.ts`
- `app/api/v1/contact/route.ts`

### Pages

- `app/page.tsx` (Homepage)
- `app/about/page.tsx`
- `app/services/page.tsx`
- `app/services/[slug]/page.tsx`
- `app/portfolio/page.tsx`
- `app/portfolio/[id]/page.tsx`
- `app/testimonials/page.tsx`
- `app/contact/page.tsx`
- `app/layout.tsx` (Root layout with Header/Footer)

### Shared Components

- `components/shared/Header.tsx`
- `components/shared/Footer.tsx`
- `components/shared/Button.tsx`
- `components/shared/Card.tsx`
- `components/shared/Section.tsx`

## Compliance with Cursor Rules

- ✅ All components have explicit TypeScript interfaces for props
- ✅ No `any` types - all properly typed
- ✅ All services extend BaseService
- ✅ All hooks use service layer (not direct customFetch)
- ✅ All errors use useGlobalErrorHandler
- ✅ All logging uses centralized logger (no console.*)
- ✅ Mobile-first responsive design
- ✅ DRY principle - reusable components
- ✅ Type centralization in `/types/` directory
- ✅ Proper file naming conventions