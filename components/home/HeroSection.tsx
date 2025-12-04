import { Button } from '@/components/shared/Button';
import type { HeroSection as HeroSectionType } from '@/types/homepage/homepage.types';

interface HeroSectionProps {
  data: HeroSectionType;
}

export function HeroSection({ data }: HeroSectionProps) {
  const titleParts = data.title.split(data.subtitle);
  
  return (
    <section className="bg-secondary-900 text-white py-20 md:py-32">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {titleParts[0]}
            <span className="text-accent-400 underline">{data.subtitle}</span>
            {titleParts[1]}
          </h1>
          <p className="text-lg md:text-xl text-secondary-300 mb-8">
            {data.description}
          </p>
          <Button href={data.ctaLink} variant="primary" size="lg" showArrow>
            {data.ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}

