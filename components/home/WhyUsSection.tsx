import { Section } from '@/components/shared/Section';
import type { HomepageData } from '@/types/homepage/homepage.types';

interface WhyUsSectionProps {
  data: HomepageData['whyUs'];
}

export function WhyUsSection({ data }: WhyUsSectionProps) {
  const colorClasses = {
    green: 'bg-primary-600',
    blue: 'bg-blue-600',
    orange: 'bg-orange-600',
    gray: 'bg-secondary-600',
  };

  return (
    <Section background="gray">
      <div className="mb-12 text-center">
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
        <p className="text-lg text-secondary-600 mb-2">
          {data.subtitle.split('.').map((part, index, array) => (
            <span key={index}>
              {part}
              {index < array.length - 1 && (
                <span className="text-primary-600">.</span>
              )}
            </span>
          ))}
        </p>
        <p className="text-secondary-600">{data.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.statistics.map((stat, index) => (
          <div
            key={index}
            className={`${colorClasses[stat.color]} text-white p-8 rounded-lg text-center`}
          >
            <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
            <div className="text-sm md:text-base">{stat.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

