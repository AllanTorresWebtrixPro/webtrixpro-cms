'use client';

import { useCallback } from 'react';
import { logger } from '@/lib/logger';

type CrudOperation = 'create' | 'update' | 'delete' | 'fetch';
type EntityType = string;

interface ErrorHandler {
  handleCrudError: (
    error: unknown,
    operation: CrudOperation,
    entityType: EntityType,
    entityName?: string
  ) => void;
  handleCrudSuccess: (
    operation: CrudOperation,
    entityType: EntityType,
    entityName?: string
  ) => void;
  handleFetchError: (error: unknown, entityType: EntityType) => void;
  handleFormError: (error: unknown, formName: string) => void;
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'An unexpected error occurred';
}

export function useGlobalErrorHandler(): ErrorHandler {
  const handleCrudError = useCallback(
    (
      error: unknown,
      operation: CrudOperation,
      entityType: EntityType,
      entityName?: string
    ): void => {
      const message = getErrorMessage(error);
      logger.error(`[useGlobalErrorHandler] ${operation} ${entityType} error:`, {
        error,
        operation,
        entityType,
        entityName,
      });

      // In a real implementation, this would show a toast notification
      // For now, we'll just log it
      console.error(`Failed to ${operation} ${entityType}${entityName ? `: ${entityName}` : ''}. ${message}`);
    },
    []
  );

  const handleCrudSuccess = useCallback(
    (
      operation: CrudOperation,
      entityType: EntityType,
      entityName?: string
    ): void => {
      logger.info(`[useGlobalErrorHandler] ${operation} ${entityType} success:`, {
        operation,
        entityType,
        entityName,
      });

      // In a real implementation, this would show a success toast
      console.log(`Successfully ${operation}d ${entityType}${entityName ? `: ${entityName}` : ''}`);
    },
    []
  );

  const handleFetchError = useCallback((error: unknown, entityType: EntityType): void => {
    const message = getErrorMessage(error);
    logger.error(`[useGlobalErrorHandler] Fetch ${entityType} error:`, { error, entityType });

    // In a real implementation, this would show a toast notification
    console.error(`Failed to fetch ${entityType}. ${message}`);
  }, []);

  const handleFormError = useCallback((error: unknown, formName: string): void => {
    const message = getErrorMessage(error);
    logger.error(`[useGlobalErrorHandler] Form ${formName} error:`, { error, formName });

    // In a real implementation, this would show a toast notification
    console.error(`Form submission failed for ${formName}. ${message}`);
  }, []);

  return {
    handleCrudError,
    handleCrudSuccess,
    handleFetchError,
    handleFormError,
  };
}

