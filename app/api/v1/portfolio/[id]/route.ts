import { NextRequest, NextResponse } from 'next/server';
import { logger } from '@/lib/logger';
import type { ProjectDetail } from '@/types/portfolio/portfolio.types';

interface RouteParams {
  params: { id: string };
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
): Promise<NextResponse<ProjectDetail>> {
  try {
    logger.debug('[API] GET /api/v1/portfolio/[id]:', { id: params.id });

    // Mock data - to be replaced with database query
    const projects: Record<string, ProjectDetail> = {
      '1': {
        id: '1',
        title: 'Shallow Waters',
        client: 'Shallow Waters, LLC',
        description: 'Web Apps Development',
        type: 'web',
        image: '/images/portfolio/shallow-waters.jpg',
        logo: '/logos/shallow-waters.png',
        overview:
          'A comprehensive web application for Shallow Waters, LLC, featuring custom software, payment platforms, QR codes, and app development solutions.',
        challenge:
          'The client needed a unified platform to manage their business operations, integrate payment processing, and provide QR code functionality.',
        solution:
          'We developed a custom web application with integrated payment platforms, QR code generation and scanning capabilities, and a mobile app companion.',
        impact:
          'The solution streamlined operations, improved customer experience, and increased efficiency across all business processes.',
        techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'QR Code API'],
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        link: 'https://shallowwaters.com',
        testimonials: [
          {
            id: '1',
            author: 'Douglas Larsen',
            company: 'Shallow Waters, LLC',
            quote:
              'WebtrixPro has been our trusted partner for over 15 years. They have built our website, software, payment platforms, QR codes, and app. Their expertise and dedication are unmatched.',
          },
        ],
      },
      '5': {
        id: '5',
        title: 'Nervous Waters',
        client: 'Nervous Waters',
        description: 'Web Apps Development',
        type: 'web',
        image: '/images/portfolio/nervous-waters.jpg',
        logo: '/logos/nervous-waters.png',
        overview:
          'A custom web application for Nervous Waters that saves time and increases efficiency, leading to improved sales.',
        challenge:
          'The client needed a solution to automate manual processes and improve operational efficiency.',
        solution:
          'We developed a comprehensive web application that automates key business processes and provides real-time insights.',
        impact:
          'The application significantly reduced manual work, improved efficiency, and led to increased sales.',
        techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
        technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
        link: 'https://nervouswaters.com',
        testimonials: [
          {
            id: '2',
            author: 'Santiago Seeber',
            company: 'Nervous Waters',
            quote:
              'The application we developed with WebtrixPro has saved us significant time and increased our efficiency, leading to improved sales. Their team is professional and always responsive.',
            videoUrl: '/videos/testimonials/santiago-seeber.mp4',
          },
        ],
      },
    };

    const project = projects[params.id];

    if (!project) {
      // Return a default project structure if not found
      const defaultProject: ProjectDetail = {
        id: params.id,
        title: 'Project',
        client: 'Client',
        description: 'Project Description',
        type: 'web',
        overview: 'Project overview',
        challenge: 'Project challenge',
        solution: 'Project solution',
        impact: 'Project impact',
      };
      return NextResponse.json(defaultProject);
    }

    return NextResponse.json(project);
  } catch (error) {
    logger.error('[API] GET /api/v1/portfolio/[id] error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch project' } as unknown as ProjectDetail,
      { status: 500 }
    );
  }
}

