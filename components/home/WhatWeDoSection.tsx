import { Section } from '@/components/shared/Section';
import { Card } from '@/components/shared/Card';
import { Button } from '@/components/shared/Button';
import Link from 'next/link';
import type { HomepageData } from '@/types/homepage/homepage.types';

interface WhatWeDoSectionProps {
  data: HomepageData['whatWeDo'];
}

export function WhatWeDoSection({ data }: WhatWeDoSectionProps) {
  return (
    <Section background="dark" className="text-white">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {data.title.split('.').map((part, index, array) => (
            <span key={index}>
              {part}
              {index < array.length - 1 && (
                <span className="text-primary-600">.</span>
              )}
            </span>
          ))}
        </h2>
        <p className="text-lg text-secondary-300">{data.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.services.map((service) => (
          <Card key={service.id} className="bg-secondary-800 border-secondary-700" hover>
            <div className="mb-4">
              <div className="h-12 w-12 bg-primary-600 rounded-lg mb-4 flex items-center justify-center">
                {/* Icon placeholder */}
                <span className="text-white text-xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-secondary-300 text-sm">{service.description}</p>
            </div>
            <Link
              href={service.link}
              className="text-primary-400 hover:text-primary-300 text-sm font-medium inline-flex items-center"
            >
              Learn More <span className="ml-1">→</span>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}

