'use client';

import { useService } from '@/hooks/use-services';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { EmptyState } from '@/components/shared/EmptyState';
import { Section } from '@/components/shared/Section';
import { Card } from '@/components/shared/Card';
import { Button } from '@/components/shared/Button';

interface ServicePageProps {
  params: { slug: string };
}

export default function ServicePage({ params }: ServicePageProps) {
  const { data, isLoading, error, isError } = useService(params.slug);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <EmptyState message={error?.message || 'Failed to load service'} />
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <Section background="dark" className="text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl text-secondary-300 mb-6">{data.subtitle}</p>
          <p className="text-secondary-300">{data.description}</p>
        </div>
      </Section>

      {/* Core Components */}
      <Section>
        <h2 className="text-3xl font-bold mb-8 text-primary-600">
          Core Service Components.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.coreComponents.map((component, index) => (
            <Card key={index} hover>
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-accent-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{component.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {component.title}
                  </h3>
                  <p className="text-secondary-600">{component.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Key Benefits */}
      <Section background="green" className="text-white">
        <h2 className="text-3xl font-bold mb-8">Key Benefits.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.keyBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="h-12 w-12 bg-accent-400 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">{benefit.icon}</span>
              </div>
              <p className="text-lg">{benefit.title}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-600">
              {data.callToAction.question}
            </h3>
            <div>
              <p className="text-secondary-700 mb-4">
                {data.callToAction.description}
              </p>
              <Button
                href={data.callToAction.ctaLink}
                variant="primary"
                size="lg"
                showArrow
              >
                {data.callToAction.ctaText}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

