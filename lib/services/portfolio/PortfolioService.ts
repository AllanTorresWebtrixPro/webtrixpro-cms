import { BaseService } from '../base/BaseService';
import type {
  PortfolioProject,
  ProjectDetail,
  PortfolioList,
} from '@/types/portfolio/portfolio.types';

export class PortfolioService extends BaseService<
  PortfolioProject,
  never,
  never
> {
  protected getBasePath(): string {
    return '/api/v1/portfolio';
  }

  async getPortfolio(): Promise<PortfolioList> {
    return await this.customFetch<PortfolioList>(this.getBasePath());
  }

  async getProject(id: string): Promise<ProjectDetail> {
    return await this.customFetch<ProjectDetail>(`${this.getBasePath()}/${id}`);
  }
}

export const portfolioService = new PortfolioService();

