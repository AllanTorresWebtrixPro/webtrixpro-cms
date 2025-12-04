'use client';

import { useQuery } from '@tanstack/react-query';
import { serviceService } from '@/lib/services';
import { queryKeys } from '@/lib/query-keys';
import { useGlobalErrorHandler } from './use-global-error-handler';
import type { Service, ServiceList } from '@/types/service/service.types';

export function useServices() {
  const { handleFetchError } = useGlobalErrorHandler();

  const query = useQuery({
    queryKey: queryKeys.services.list(),
    queryFn: async () => {
      try {
        return await serviceService.getServices();
      } catch (error) {
        handleFetchError(error, 'services');
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

export function useService(slug: string) {
  const { handleFetchError } = useGlobalErrorHandler();

  const query = useQuery({
    queryKey: queryKeys.services.detail(slug),
    queryFn: async () => {
      try {
        return await serviceService.getServiceBySlug(slug);
      } catch (error) {
        handleFetchError(error, 'service');
        throw error;
      }
    },
    enabled: !!slug,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    error: query.error,
    isError: query.isError,
  };
}

