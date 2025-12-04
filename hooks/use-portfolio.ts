'use client';

import { useQuery } from '@tanstack/react-query';
import { portfolioService } from '@/lib/services';
import { queryKeys } from '@/lib/query-keys';
import { useGlobalErrorHandler } from './use-global-error-handler';
import type { PortfolioList, ProjectDetail } from '@/types/portfolio/portfolio.types';

export function usePortfolio() {
  const { handleFetchError } = useGlobalErrorHandler();

  const query = useQuery({
    queryKey: queryKeys.portfolio.list(),
    queryFn: async () => {
      try {
        return await portfolioService.getPortfolio();
      } catch (error) {
        handleFetchError(error, 'portfolio');
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

export function useProject(id: string) {
  const { handleFetchError } = useGlobalErrorHandler();

  const query = useQuery({
    queryKey: queryKeys.portfolio.detail(id),
    queryFn: async () => {
      try {
        return await portfolioService.getProject(id);
      } catch (error) {
        handleFetchError(error, 'project');
        throw error;
      }
    },
    enabled: !!id,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    error: query.error,
    isError: query.isError,
  };
}

