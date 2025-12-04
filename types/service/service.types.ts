export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  coreComponents: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  keyBenefits: Array<{
    icon: string;
    title: string;
  }>;
  callToAction: {
    question: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  };
}

export interface ServiceList {
  title: string;
  subtitle: string;
  description: string;
  services: Array<{
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    image?: string;
  }>;
}

