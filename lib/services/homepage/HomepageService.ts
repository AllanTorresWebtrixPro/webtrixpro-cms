import { BaseService } from '../base/BaseService';
import type { HomepageData } from '@/types/homepage/homepage.types';

export class HomepageService extends BaseService<
  HomepageData,
  never,
  never
> {
  protected getBasePath(): string {
    return '/api/v1/homepage';
  }

  async getHomepage(): Promise<HomepageData> {
    return await this.customFetch<HomepageData>(this.getBasePath());
  }
}

export const homepageService = new HomepageService();

