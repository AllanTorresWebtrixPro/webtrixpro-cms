'use client';

import { useQuery } from '@tanstack/react-query';
import { aboutService } from '@/lib/services';
import { queryKeys } from '@/lib/query-keys';
import { useGlobalErrorHandler } from './use-global-error-handler';
import type { AboutData } from '@/types/about/about.types';

export function useAbout() {
  const { handleFetchError } = useGlobalErrorHandler();

  const query = useQuery({
    queryKey: queryKeys.about.detail(),
    queryFn: async () => {
      try {
        return await aboutService.getAbout();
      } catch (error) {
        handleFetchError(error, 'about');
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

