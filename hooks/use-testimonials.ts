'use client';

import { useQuery } from '@tanstack/react-query';
import { testimonialService } from '@/lib/services';
import { queryKeys } from '@/lib/query-keys';
import { useGlobalErrorHandler } from './use-global-error-handler';
import type { TestimonialList } from '@/types/testimonial/testimonial.types';

export function useTestimonials() {
  const { handleFetchError } = useGlobalErrorHandler();

  const query = useQuery({
    queryKey: queryKeys.testimonials.list(),
    queryFn: async () => {
      try {
        return await testimonialService.getTestimonials();
      } catch (error) {
        handleFetchError(error, 'testimonials');
        throw error;
      }
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    error: query.error,
    isError: query.isError,
  };
}

