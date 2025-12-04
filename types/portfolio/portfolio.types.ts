export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  description: string;
  type: 'web' | 'mobile' | 'both';
  image?: string;
  logo?: string;
  technologies?: string[];
  link?: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  client: string;
  description: string;
  type: 'web' | 'mobile' | 'both';
  image?: string;
  logo?: string;
  technologies?: string[];
  link?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  techStack?: string[];
  testimonials?: Array<{
    id: string;
    author: string;
    company: string;
    quote: string;
    videoUrl?: string;
  }>;
}

export interface PortfolioList {
  title: string;
  subtitle: string;
  projects: PortfolioProject[];
}

