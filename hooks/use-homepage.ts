'use client';

import { useQuery } from '@tanstack/react-query';
import { homepageService } from '@/lib/services';
import { queryKeys } from '@/lib/query-keys';
import { useGlobalErrorHandler } from './use-global-error-handler';
import type { HomepageData } from '@/types/homepage/homepage.types';

export function useHomepage() {
  const { handleFetchError } = useGlobalErrorHandler();

  const query = useQuery({
    queryKey: queryKeys.homepage.detail(),
    queryFn: async () => {
      try {
        return await homepageService.getHomepage();
      } catch (error) {
        handleFetchError(error, 'homepage');
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

