# WebtrixPro CMS Test

A modern, type-safe Content Management System built with Next.js 15, TypeScript, and React Query. This CMS provides a robust foundation for managing content across multiple pages including homepage, about, services, portfolio, testimonials, and contact.

## 🚀 Features

- **Next.js 15** with App Router for optimal performance and SEO
- **TypeScript** for type safety and better developer experience
- **React Query** for efficient data fetching and caching
- **Zod** schemas for runtime type validation
- **Tailwind CSS** for modern, responsive styling
- **Service Layer Architecture** for clean separation of concerns
- **Custom Hooks** for reusable data fetching logic
- **API Routes** for server-side data handling
- **Error Handling** with global error handler
- **Form Management** with React Hook Form
- **State Management** with Zustand

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **Git** for version control

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AllanTorresWebtrixPro/webtrixpro-cms.git
   cd webtrixpro-cms
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
webtrixpro-cms/
├── app/                      # Next.js App Router pages
│   ├── api/                  # API routes
│   │   └── v1/              # API version 1
│   │       ├── about/       # About page API
│   │       ├── contact/     # Contact form API
│   │       ├── homepage/    # Homepage API
│   │       ├── portfolio/   # Portfolio API
│   │       ├── services/    # Services API
│   │       └── testimonials/ # Testimonials API
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── portfolio/           # Portfolio pages
│   ├── services/            # Services pages
│   ├── testimonials/        # Testimonials page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── providers.tsx        # React Query provider
│
├── components/              # React components
│   ├── home/               # Homepage-specific components
│   │   ├── HeroSection.tsx
│   │   ├── WhatWeDoSection.tsx
│   │   └── WhyUsSection.tsx
│   └── shared/             # Reusable components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── EmptyState.tsx
│       ├── Footer.tsx
│       ├── Header.tsx
│       ├── ImageWithFallback.tsx
│       ├── LoadingSpinner.tsx
│       └── Section.tsx
│
├── hooks/                   # Custom React hooks
│   ├── use-about.ts
│   ├── use-contact.ts
│   ├── use-global-error-handler.ts
│   ├── use-homepage.ts
│   ├── use-portfolio.ts
│   ├── use-services.ts
│   └── use-testimonials.ts
│
├── lib/                     # Utility libraries
│   ├── services/           # Service layer
│   │   ├── base/           # BaseService abstract class
│   │   ├── about/          # AboutService
│   │   ├── contact/        # ContactService
│   │   ├── homepage/       # HomepageService
│   │   ├── portfolio/      # PortfolioService
│   │   ├── services/       # ServiceService
│   │   └── testimonials/   # TestimonialService
│   ├── custom-fetch.ts     # Custom fetch wrapper
│   ├── logger.ts           # Logging utility
│   ├── query-keys.ts       # React Query keys
│   └── utils.ts            # General utilities
│
└── types/                   # TypeScript type definitions
    ├── about/              # About types and schemas
    ├── contact/            # Contact types and schemas
    ├── homepage/           # Homepage types and schemas
    ├── portfolio/          # Portfolio types and schemas
    ├── service/            # Service types and schemas
    └── testimonial/        # Testimonial types and schemas
```

## 🏗️ Architecture

### Service Layer Pattern

The project follows a service layer architecture where each entity (About, Contact, Homepage, etc.) has its own service class that extends `BaseService`. This provides:

- **Consistency**: All services follow the same CRUD pattern
- **Reusability**: Common operations are abstracted in `BaseService`
- **Type Safety**: Generic types ensure type safety across services
- **Error Handling**: Centralized error handling and logging

### Data Flow

1. **Component** → Calls custom hook (e.g., `useHomepage()`)
2. **Hook** → Uses React Query to fetch data via service
3. **Service** → Makes API call using `customFetch`
4. **API Route** → Handles request and returns data
5. **Response** → Flows back through the chain with proper typing

### Example Usage

```typescript
// In a component
import { useHomepage } from '@/hooks/use-homepage';

export default function HomePage() {
  const { data, isLoading, error } = useHomepage();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <Error message="Failed to load homepage" />;

  return <div>{/* Render homepage data */}</div>;
}
```

## 📝 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run type-check` - Run TypeScript type checking without emitting files

## 🔌 API Endpoints

All API endpoints are prefixed with `/api/v1/`:

### Homepage
- `GET /api/v1/homepage` - Get homepage data

### About
- `GET /api/v1/about` - Get about page data

### Services
- `GET /api/v1/services` - Get all services
- `GET /api/v1/services/[slug]` - Get service by slug

### Portfolio
- `GET /api/v1/portfolio` - Get all portfolio items
- `GET /api/v1/portfolio/[id]` - Get portfolio item by ID

### Testimonials
- `GET /api/v1/testimonials` - Get all testimonials

### Contact
- `POST /api/v1/contact` - Submit contact form

## 🎨 Styling

The project uses **Tailwind CSS** for styling. Configuration can be found in `tailwind.config.ts`. The design system includes:

- Custom color palette
- Responsive breakpoints
- Utility classes for common patterns
- Component variants using `class-variance-authority`

## 🔒 Type Safety

The project uses **Zod** for runtime validation and **TypeScript** for compile-time type checking:

- All API responses are validated with Zod schemas
- Type definitions are separated from schemas for flexibility
- Type inference from schemas ensures consistency

## 🧪 Development Guidelines

### Adding a New Entity

1. **Create types** in `types/[entity]/`
   - `[entity].types.ts` - TypeScript interfaces
   - `[entity].schemas.ts` - Zod schemas

2. **Create service** in `lib/services/[entity]/`
   - Extend `BaseService` with appropriate types
   - Implement entity-specific methods if needed

3. **Create API route** in `app/api/v1/[entity]/`
   - Implement GET, POST, PATCH, DELETE as needed
   - Use Zod schemas for validation

4. **Create hook** in `hooks/`
   - Use React Query for data fetching
   - Include error handling

5. **Create page** in `app/[entity]/`
   - Use the custom hook to fetch data
   - Implement UI components

### Code Style

- Use TypeScript strict mode
- Follow ESLint rules (Next.js config)
- Use functional components with hooks
- Prefer named exports over default exports
- Use async/await for asynchronous operations

## 🐛 Error Handling

The project includes a global error handler (`use-global-error-handler.ts`) that:

- Logs errors consistently
- Provides user-friendly error messages
- Handles network errors gracefully
- Integrates with React Query error states

## 📦 Dependencies

### Core
- **Next.js 15.5.4** - React framework
- **React 19.1.1** - UI library
- **TypeScript 5.9.2** - Type safety

### Data Fetching
- **@tanstack/react-query 5.90.2** - Server state management

### Validation
- **Zod 4.1.11** - Schema validation
- **@hookform/resolvers 3.9.1** - Form validation

### Styling
- **Tailwind CSS 3.4.18** - Utility-first CSS
- **class-variance-authority 0.7.1** - Component variants
- **tailwind-merge 2.5.5** - Merge Tailwind classes

### Forms
- **react-hook-form 7.63.0** - Form management

### State Management
- **zustand 5.0.8** - Client state management

### Icons
- **lucide-react 0.468.0** - Icon library

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Add your environment variables here
# Example:
# NEXT_PUBLIC_API_URL=https://api.example.com
```

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run type checking: `npm run type-check`
4. Run linting: `npm run lint`
5. Test your changes locally
6. Submit a pull request

## 📄 License

This project is private and proprietary.

## 👥 Team

- **Assaf Shami** - Founder & CEO
- **Joe Kaire** - CTO
- **Allan Torress** - Full-Stack Lead Engineer
- **Yochai Kariv** - Business Development Executive
- **Michael Gokhler** - Head Of Digital Transformation
- **Eugene Pogrensky** - Project Manager

## 📞 Support

For questions or support, please contact the development team.

---

**Built with ❤️ by WebtrixPro**

