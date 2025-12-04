'use client';

import { useServices } from '@/hooks/use-services';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { EmptyState } from '@/components/shared/EmptyState';
import { Section } from '@/components/shared/Section';
import { Card } from '@/components/shared/Card';
import { Button } from '@/components/shared/Button';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import Link from 'next/link';

export default function ServicesPage() {
  const { data, isLoading, error, isError } = useServices();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <EmptyState message={error?.message || 'Failed to load services'} />
    );
  }

  return (
    <div>
      <Section>
        <div className="max-w-4xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {data.title.split('.').map((part, index, array) => (
              <span key={index}>
                {part}
                {index < array.length - 1 && (
                  <span className="text-primary-600">.</span>
                )}
              </span>
            ))}
          </h1>
          <p className="text-xl text-secondary-600 mb-4">{data.subtitle}</p>
          <p className="text-secondary-700">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.services.map((service) => (
            <Card key={service.id} hover className="flex flex-col">
              <div className="aspect-video bg-secondary-200 rounded-lg mb-4 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  fallbackText={service.title.charAt(0)}
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-secondary-600 mb-2">{service.subtitle}</p>
              <p className="text-secondary-700 mb-4 flex-grow">
                {service.description}
              </p>
              <Button href={`/services/${service.slug}`} variant="primary">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

