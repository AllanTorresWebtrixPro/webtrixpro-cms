<!-- 1d700f8a-cf50-48db-a356-aeebe0adb4f2 63d9f5d8-7b20-40d9-baa0-b01c2066007b -->
# Create Cursor Rules for WebTrixPro CMS

## Overview

Create a complete set of cursor rules for the webtrixpro-cms project based on the Project-Works documentation. The rules will establish coding standards, architecture patterns, and best practices for the development team.

## Files to Create

### 1. `.cursor/rules/project-wide-rules.mdc`

Main project-wide rules covering:

- TypeScript typing requirements (mandatory interfaces for all component props, no `any` types)
- Code reusability (DRY principle enforcement)
- Centralized logging (logger utility, no console.log/error/warn)
- Error handling patterns (useGlobalErrorHandler)
- Type centralization
- Responsive design requirements
- Testing guidelines
- Code quality standards

### 2. `.cursor/rules/frontend-rules.mdc`

Frontend-specific rules covering:

- React component patterns
- Next.js App Router conventions
- TanStack Query usage
- React Hook Form + Zod validation
- shadcn/ui component usage
- Tailwind CSS patterns
- Accessibility requirements
- Performance optimization (memoization, useCallback, useMemo)
- Image optimization (Next.js Image component)

### 3. `.cursor/rules/backend-rules.mdc`

Backend-specific rules covering:

- API route patterns (`/api/v1/[feature]/route.ts`)
- PostgreSQL raw SQL usage (no ORM)
- Service layer pattern (BaseService extension)
- Security requirements (input validation, SQL injection prevention, rate limiting)
- Auth0 integration
- Database connection pooling
- Error handling in API routes

### 4. `.cursor/rules/layered-architecture-implementation.mdc`

Architecture implementation guide covering:

- Layered architecture pattern: Screen → Component → Hook → Service → Endpoint → Data
- Service layer pattern (BaseService)
- Hook patterns (TanStack Query integration)
- Component organization
- File structure conventions
- Feature-based folder structure

## Key Requirements from Documentation

### Critical Patterns:

1. **Service Layer**: All services must extend BaseService, use centralized logger
2. **TypeScript**: Mandatory interfaces for all component props, no `any` types
3. **Error Handling**: All errors use useGlobalErrorHandler hook
4. **Logging**: All logging uses `logger` from `@/lib/logger` (no console.*)
5. **Architecture**: Strict layered architecture pattern
6. **DRY**: No code duplication across modules

### Tech Stack (from tech-stack.md):

- Next.js 15.5.4, React 19.1.1, TypeScript 5.9.2
- Tailwind CSS 4.1.13, shadcn/ui, Radix UI
- TanStack Query 5.90.2, Zustand 5.0.8
- React Hook Form 7.63.0, Zod 4.1.11
- PostgreSQL (raw SQL), Auth0
- Vitest, Playwright for testing

## Implementation Steps

1. Create `.cursor/rules/` directory structure
2. Create `project-wide-rules.mdc` with comprehensive project standards
3. Create `frontend-rules.mdc` with React/Next.js specific rules
4. Create `backend-rules.mdc` with API/database specific rules
5. Create `layered-architecture-implementation.mdc` with architecture patterns
6. Ensure all rules reference the code review requirements and tech stack documentation

### To-dos

- [ ] Create .cursor/rules/ directory structure
- [ ] Create project-wide-rules.mdc with TypeScript, logging, error handling, DRY principles, and code quality standards
- [ ] Create frontend-rules.mdc with React, Next.js, TanStack Query, forms, and UI component patterns
- [ ] Create backend-rules.mdc with API routes, PostgreSQL, service layer, and security patterns
- [ ] Create layered-architecture-implementation.mdc with layered architecture pattern and file structure conventions