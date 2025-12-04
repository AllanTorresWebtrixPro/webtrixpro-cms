'use client';

import { useHomepage } from '@/hooks/use-homepage';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { EmptyState } from '@/components/shared/EmptyState';
import { HeroSection } from '@/components/home/HeroSection';
import { WhatWeDoSection } from '@/components/home/WhatWeDoSection';
import { WhyUsSection } from '@/components/home/WhyUsSection';
import { Section } from '@/components/shared/Section';
import { Button } from '@/components/shared/Button';

export default function HomePage() {
  const { data, isLoading, error, isError } = useHomepage();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <EmptyState message={error?.message || 'Failed to load homepage data'} />
    );
  }

  return (
    <div>
      <HeroSection data={data.hero} />
      <WhatWeDoSection data={data.whatWeDo} />
      <WhyUsSection data={data.whyUs} />

      {/* Call to Action Section */}
      <Section background="green" className="text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {data.callToAction.title}
          </h2>
          <p className="text-lg mb-8 text-white/90">
            {data.callToAction.subtitle}
          </p>
          <Button
            href={data.callToAction.ctaLink}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary-600"
            showArrow
          >
            {data.callToAction.ctaText}
          </Button>
        </div>
      </Section>
    </div>
  );
}
