'use client';

import { useTestimonials } from '@/hooks/use-testimonials';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { EmptyState } from '@/components/shared/EmptyState';
import { Section } from '@/components/shared/Section';
import { Card } from '@/components/shared/Card';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';

export default function TestimonialsPage() {
  const { data, isLoading, error, isError } = useTestimonials();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <EmptyState message={error?.message || 'Failed to load testimonials'} />
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
          <p className="text-xl text-secondary-600">{data.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.testimonials.map((testimonial) => (
            <Card key={testimonial.id} hover>
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-secondary-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <ImageWithFallback
                    src={testimonial.logo}
                    alt={testimonial.company}
                    className="w-full h-full object-contain p-2"
                    fallbackText={testimonial.company.charAt(0)}
                    objectFit="contain"
                  />
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-lg">{testimonial.clientName}</p>
                  <p className="text-secondary-600">{testimonial.company}</p>
                  {testimonial.title && (
                    <p className="text-sm text-secondary-500">{testimonial.title}</p>
                  )}
                </div>
              </div>
              <p className="text-secondary-700 italic mb-4">"{testimonial.quote}"</p>
              {testimonial.rating && (
                <div className="flex items-center">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-accent-400">★</span>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

