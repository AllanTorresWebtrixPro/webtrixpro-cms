'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { contactService } from '@/lib/services';
import { queryKeys } from '@/lib/query-keys';
import { useGlobalErrorHandler } from './use-global-error-handler';
import type { ContactData, ContactFormData } from '@/types/contact/contact.types';

export function useContactInfo() {
  const { handleFetchError } = useGlobalErrorHandler();

  const query = useQuery({
    queryKey: queryKeys.contact.all,
    queryFn: async () => {
      try {
        return await contactService.getContactInfo();
      } catch (error) {
        handleFetchError(error, 'contact info');
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

export function useContactForm() {
  const { handleFormError, handleCrudSuccess } = useGlobalErrorHandler();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      try {
        const result = await contactService.submitContactForm(data);
        handleCrudSuccess('create', 'contact form', `${data.firstName} ${data.lastName}`);
        return result;
      } catch (error) {
        handleFormError(error, 'contact');
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.contact.all });
    },
  });

  return {
    submit: mutation.mutate,
    submitAsync: mutation.mutateAsync,
    isLoading: mutation.isPending,
    error: mutation.error,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
  };
}

