import { BaseService } from '../base/BaseService';
import type { Testimonial, TestimonialList } from '@/types/testimonial/testimonial.types';

export class TestimonialService extends BaseService<
  Testimonial,
  never,
  never
> {
  protected getBasePath(): string {
    return '/api/v1/testimonials';
  }

  async getTestimonials(): Promise<TestimonialList> {
    return await this.customFetch<TestimonialList>(this.getBasePath());
  }
}

export const testimonialService = new TestimonialService();

