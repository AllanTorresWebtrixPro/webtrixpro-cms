import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';
import type { ServiceList } from '@/types/service/service.types';

export async function GET(): Promise<NextResponse<ServiceList>> {
  try {
    logger.debug('[API] GET /api/v1/services');

    // Mock data - to be replaced with database query
    const data: ServiceList = {
      title: 'Our Services.',
      subtitle: 'Smart Solutions for Smarter Businesses',
      description:
        'We offer comprehensive technology solutions designed to help your business work smarter, not harder.',
      services: [
        {
          id: '1',
          slug: 'ai-agents',
          title: 'AI-Agents Development',
          subtitle: 'Intelligent Agents That Automate Your Business and Scale Your Operations',
          description:
            'Integrating intelligent systems that automate tasks, optimize decisions, and enhance productivity.',
          image: '/images/services/ai-agents.jpg',
        },
        {
          id: '2',
          slug: 'mobile-apps',
          title: 'Mobile Apps Development',
          subtitle: 'Seamless Mobile Experiences for Your Business',
          description:
            'Designing and developing fast, intuitive mobile experiences that drive real engagement.',
          image: '/images/services/mobile-apps.jpg',
        },
        {
          id: '3',
          slug: 'web-apps',
          title: 'Web Apps Development',
          subtitle: 'Scalable, Responsive Web Applications for Modern Businesses',
          description:
            'Empowering businesses to modernize workflows and scale efficiency with data-driven insights.',
          image: '/images/services/web-apps.jpg',
        },
        {
          id: '4',
          slug: 'technology-strategy',
          title: 'Technology Strategy Consulting',
          subtitle: 'Strategic Technology Guidance That Drives Business Growth',
          description:
            'Helping businesses align technology with their goals by identifying inefficiencies, uncovering automation opportunities, and creating a clear roadmap for scalable growth.',
          image: '/images/services/technology-strategy.jpg',
        },
      ],
    };

    return NextResponse.json(data);
  } catch (error) {
    logger.error('[API] GET /api/v1/services error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' } as unknown as ServiceList,
      { status: 500 }
    );
  }
}

