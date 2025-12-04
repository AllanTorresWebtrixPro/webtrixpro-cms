import { customFetch } from '@/lib/custom-fetch';
import { logger } from '@/lib/logger';

export abstract class BaseService<T, CreateInput, UpdateInput> {
  protected abstract getBasePath(): string;

  async list(): Promise<T[]> {
    logger.debug(`[${this.constructor.name}] List called`);
    try {
      return await customFetch<T[]>(`${this.getBasePath()}`);
    } catch (error) {
      logger.error(`[${this.constructor.name}] List error:`, error);
      throw error;
    }
  }

  async get(id: string): Promise<T> {
    logger.debug(`[${this.constructor.name}] Get called:`, { id });
    try {
      return await customFetch<T>(`${this.getBasePath()}/${id}`);
    } catch (error) {
      logger.error(`[${this.constructor.name}] Get error:`, error);
      throw error;
    }
  }

  async create(data: CreateInput): Promise<T> {
    logger.debug(`[${this.constructor.name}] Create called`);
    try {
      return await customFetch<T>(`${this.getBasePath()}`, {
        method: 'POST',
        body: JSON.stringify(data),
      });
    } catch (error) {
      logger.error(`[${this.constructor.name}] Create error:`, error);
      throw error;
    }
  }

  async update(id: string, data: UpdateInput): Promise<T> {
    logger.debug(`[${this.constructor.name}] Update called:`, { id });
    try {
      return await customFetch<T>(`${this.getBasePath()}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
      });
    } catch (error) {
      logger.error(`[${this.constructor.name}] Update error:`, error);
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    logger.debug(`[${this.constructor.name}] Delete called:`, { id });
    try {
      await customFetch<void>(`${this.getBasePath()}/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      logger.error(`[${this.constructor.name}] Delete error:`, error);
      throw error;
    }
  }

  protected async customFetch<ResponseType>(
    path: string,
    options?: RequestInit
  ): Promise<ResponseType> {
    logger.debug(`[${this.constructor.name}] Custom fetch:`, { path });
    try {
      return await customFetch<ResponseType>(path, options);
    } catch (error) {
      logger.error(`[${this.constructor.name}] Custom fetch error:`, error);
      throw error;
    }
  }
}

