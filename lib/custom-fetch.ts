import { logger } from './logger';

interface CustomFetchOptions extends RequestInit {
  timeout?: number;
}

export async function customFetch<T>(
  url: string,
  options: CustomFetchOptions = {}
): Promise<T> {
  const { timeout = 30000, ...fetchOptions } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    logger.debug('[customFetch] Request:', { url, method: fetchOptions.method || 'GET' });

    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
      logger.error('[customFetch] Error response:', {
        url,
        status: response.status,
        error: errorData,
      });
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    logger.debug('[customFetch] Success:', { url, status: response.status });
    return data as T;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      logger.error('[customFetch] Request timeout:', { url });
      throw new Error('Request timeout');
    }
    logger.error('[customFetch] Request failed:', { url, error });
    throw error;
  }
}

