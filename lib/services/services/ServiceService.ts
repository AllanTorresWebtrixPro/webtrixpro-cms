import { BaseService } from '../base/BaseService';
import type { Service, ServiceList } from '@/types/service/service.types';

export class ServiceService extends BaseService<Service, never, never> {
  protected getBasePath(): string {
    return '/api/v1/services';
  }

  async getServices(): Promise<ServiceList> {
    return await this.customFetch<ServiceList>(this.getBasePath());
  }

  async getServiceBySlug(slug: string): Promise<Service> {
    return await this.customFetch<Service>(`${this.getBasePath()}/${slug}`);
  }
}

export const serviceService = new ServiceService();

