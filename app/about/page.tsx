'use client';

import { useAbout } from '@/hooks/use-about';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { EmptyState } from '@/components/shared/EmptyState';
import { Section } from '@/components/shared/Section';
import { Card } from '@/components/shared/Card';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';

export default function AboutPage() {
  const { data, isLoading, error, isError } = useAbout();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <EmptyState message={error?.message || 'Failed to load about data'} />
    );
  }

  return (
    <div>
      {/* About Section */}
      <Section>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {data.about.title.split('.').map((part, index, array) => (
              <span key={index}>
                {part}
                {index < array.length - 1 && (
                  <span className="text-primary-600">.</span>
                )}
              </span>
            ))}
          </h1>
          <p className="text-xl text-secondary-600 mb-4">
            {data.about.subtitle.split('.').map((part, index, array) => (
              <span key={index}>
                {part}
                {index < array.length - 1 && (
                  <span className="text-primary-600">.</span>
                )}
              </span>
            ))}
          </p>
          <p className="text-secondary-700 mb-8">{data.about.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.about.statistics.map((stat, index) => {
              const colorClasses = {
                green: 'bg-primary-600',
                blue: 'bg-blue-600',
                orange: 'bg-orange-600',
                gray: 'bg-secondary-600',
              };
              return (
                <div
                  key={index}
                  className={`${colorClasses[stat.color]} text-white p-6 rounded-lg text-center`}
                >
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Story Section */}
      <Section background="gray">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">{data.story.title}</h2>
            <p className="text-secondary-700">{data.story.description}</p>
          </div>
          <div className="bg-secondary-200 aspect-video rounded-lg relative overflow-hidden">
            <ImageWithFallback
              src={data.story.videoThumbnail}
              alt="Our Story"
              className="w-full h-full object-cover rounded-lg"
              fallbackText="Video"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-600 rounded-full p-4 cursor-pointer hover:bg-red-700">
                <svg
                  className="w-12 h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {data.team.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.team.members.map((member) => (
            <Card key={member.id} hover>
              <div className="text-center">
                <div className="w-32 h-32 bg-secondary-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                    fallbackText={member.name.charAt(0)}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-secondary-600">{member.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section background="gray">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-primary-600 text-white">
            <h3 className="text-2xl font-bold mb-4">{data.visionMission.vision.title}</h3>
            <p className="text-white/90">{data.visionMission.vision.description}</p>
          </Card>
          <Card className="bg-primary-600 text-white">
            <h3 className="text-2xl font-bold mb-4">{data.visionMission.mission.title}</h3>
            <p className="text-white/90">{data.visionMission.mission.description}</p>
          </Card>
        </div>
      </Section>
    </div>
  );
}

