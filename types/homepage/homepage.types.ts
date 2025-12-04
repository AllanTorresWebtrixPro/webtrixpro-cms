export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface ServicePreview {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface Statistic {
  value: string;
  label: string;
  color: 'green' | 'blue' | 'orange' | 'gray';
}

export interface TestimonialPreview {
  id: string;
  clientName: string;
  company: string;
  quote: string;
  avatar?: string;
}

export interface Award {
  id: string;
  title: string;
  year: string;
  badge?: string;
}

export interface HomepageData {
  hero: HeroSection;
  whatWeDo: {
    title: string;
    subtitle: string;
    services: ServicePreview[];
  };
  ourSolution: {
    title: string;
    description: string;
    image?: string;
  };
  howYouBenefit: {
    title: string;
    description: string;
    benefits: Array<{
      icon: string;
      title: string;
    }>;
  };
  awards: {
    title: string;
    description: string;
    years: string[];
    awards: Award[];
  };
  whoWeAre: {
    title: string;
    subtitle: string;
    description: string;
    videoThumbnail?: string;
    videoUrl?: string;
  };
  testimonials: {
    title: string;
    testimonials: TestimonialPreview[];
  };
  whyUs: {
    title: string;
    subtitle: string;
    description: string;
    statistics: Statistic[];
  };
  howWeDoIt: {
    title: string;
    subtitle: string;
    description: string;
    steps: Array<{
      id: string;
      name: string;
    }>;
  };
  callToAction: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
}

