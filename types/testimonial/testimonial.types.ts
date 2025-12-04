export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  title?: string;
  quote: string;
  avatar?: string;
  logo?: string;
  rating?: number;
  videoUrl?: string;
}

export interface TestimonialList {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

