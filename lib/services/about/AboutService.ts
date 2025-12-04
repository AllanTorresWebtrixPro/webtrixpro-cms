import { BaseService } from '../base/BaseService';
import type { AboutData } from '@/types/about/about.types';

export class AboutService extends BaseService<AboutData, never, never> {
  protected getBasePath(): string {
    return '/api/v1/about';
  }

  async getAbout(): Promise<AboutData> {
    return await this.customFetch<AboutData>(this.getBasePath());
  }
}

export const aboutService = new AboutService();

