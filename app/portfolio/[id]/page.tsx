'use client';

import { useState } from 'react';
import { useProject } from '@/hooks/use-portfolio';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { EmptyState } from '@/components/shared/EmptyState';
import { Section } from '@/components/shared/Section';
import { Card } from '@/components/shared/Card';
import { Button } from '@/components/shared/Button';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectPageProps {
  params: { id: string };
}

interface AccordionItemProps {
  title: string;
  content: string | undefined;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  if (!content) return null;

  return (
    <div className="border-b border-secondary-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left hover:text-primary-600 transition-colors"
      >
        <span className="font-semibold">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-secondary-700">{content}</div>
      )}
    </div>
  );
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { data, isLoading, error, isError } = useProject(params.id);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    overview: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <EmptyState message={error?.message || 'Failed to load project'} />
    );
  }

  return (
    <div>
      {/* Project Header */}
      <Section>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About The Project.
          </h1>
        </div>
      </Section>

      <Section background="gray">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Accordion */}
          <div>
            <AccordionItem
              title="Project Overview"
              content={data.overview}
              isOpen={openSections.overview || false}
              onToggle={() => toggleSection('overview')}
            />
            <AccordionItem
              title="The Challenge"
              content={data.challenge}
              isOpen={openSections.challenge || false}
              onToggle={() => toggleSection('challenge')}
            />
            <AccordionItem
              title="The Solution"
              content={data.solution}
              isOpen={openSections.solution || false}
              onToggle={() => toggleSection('solution')}
            />
            <AccordionItem
              title="The Impact"
              content={data.impact}
              isOpen={openSections.impact || false}
              onToggle={() => toggleSection('impact')}
            />
            <AccordionItem
              title="Tech Stack & Integration"
              content={data.techStack?.join(', ')}
              isOpen={openSections.techStack || false}
              onToggle={() => toggleSection('techStack')}
            />

            <div className="mt-6 space-y-4">
              <Button variant="primary" size="md">
                Download Case Study
              </Button>
              {data.link && (
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary-600 hover:text-primary-700 font-medium"
                >
                  Go to Website →
                </a>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div>
            <div className="aspect-video bg-secondary-200 rounded-lg overflow-hidden">
              <ImageWithFallback
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
                fallbackText={data.title.charAt(0)}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      {data.testimonials && data.testimonials.length > 0 && (
        <Section>
          <h2 className="text-3xl font-bold mb-8">Testimonials.</h2>
          <div className="space-y-6">
            {data.testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <p className="text-secondary-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-secondary-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}

