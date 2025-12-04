export const queryKeys = {
  homepage: {
    all: ['homepage'] as const,
    detail: () => [...queryKeys.homepage.all, 'detail'] as const,
  },
  about: {
    all: ['about'] as const,
    detail: () => [...queryKeys.about.all, 'detail'] as const,
  },
  services: {
    all: ['services'] as const,
    lists: () => [...queryKeys.services.all, 'list'] as const,
    list: () => [...queryKeys.services.lists()] as const,
    details: () => [...queryKeys.services.all, 'detail'] as const,
    detail: (slug: string) => [...queryKeys.services.details(), slug] as const,
  },
  portfolio: {
    all: ['portfolio'] as const,
    lists: () => [...queryKeys.portfolio.all, 'list'] as const,
    list: () => [...queryKeys.portfolio.lists()] as const,
    details: () => [...queryKeys.portfolio.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.portfolio.details(), id] as const,
  },
  testimonials: {
    all: ['testimonials'] as const,
    lists: () => [...queryKeys.testimonials.all, 'list'] as const,
    list: () => [...queryKeys.testimonials.lists()] as const,
  },
  contact: {
    all: ['contact'] as const,
  },
};

