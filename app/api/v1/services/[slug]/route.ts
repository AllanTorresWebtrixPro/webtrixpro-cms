import { NextRequest, NextResponse } from 'next/server';
import { logger } from '@/lib/logger';
import type { Service } from '@/types/service/service.types';

interface RouteParams {
  params: { slug: string };
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
): Promise<NextResponse<Service>> {
  try {
    logger.debug('[API] GET /api/v1/services/[slug]:', { slug: params.slug });

    // Mock data - to be replaced with database query
    const services: Record<string, Service> = {
      'ai-agents': {
        id: '1',
        slug: 'ai-agents',
        title: 'AI-Agents Development.',
        subtitle: 'Intelligent Agents That Automate Your Business and Scale Your Operations',
        description:
          'Integrating intelligent systems that automate tasks, optimize decisions, and enhance productivity.',
        image: '/images/services/ai-agents.jpg',
        coreComponents: [
          {
            icon: 'robot',
            title: 'Intelligent Workflow Automation',
            description:
              'Automate complex business processes with AI-powered workflows.',
          },
          {
            icon: 'brain',
            title: 'Decision-Making Agents',
            description: 'AI agents that make intelligent decisions based on data.',
          },
          {
            icon: 'network',
            title: 'System & Platform Integrations',
            description: 'Seamlessly integrate with your existing systems.',
          },
          {
            icon: 'gear',
            title: 'AI-Powered Task Execution',
            description: 'Automate repetitive tasks with intelligent agents.',
          },
        ],
        keyBenefits: [
          { icon: 'arrow-up', title: 'Increased efficiency and productivity' },
          { icon: 'chart', title: 'Improved decision-making capabilities' },
          { icon: 'target', title: 'Enhanced customer experience' },
          { icon: 'lightbulb', title: 'Reduced operational costs' },
          { icon: 'shield', title: 'Scalability and flexibility' },
          { icon: 'clock', title: 'Faster time-to-market' },
        ],
        callToAction: {
          question: 'Ready to deploy AI agents in your business?',
          description:
            "Let's explore how intelligent agents can automate your operations, eliminate inefficiencies, and accelerate growth.",
          ctaText: 'Learn More',
          ctaLink: '/contact',
        },
      },
      'mobile-apps': {
        id: '2',
        slug: 'mobile-apps',
        title: 'Mobile Apps Development.',
        subtitle: 'Seamless Mobile Experiences for Your Business',
        description:
          'Designing and developing fast, intuitive mobile experiences that drive real engagement.',
        image: '/images/services/mobile-apps.jpg',
        coreComponents: [
          {
            icon: 'smartphone',
            title: 'iOS & Android App Development',
            description: 'Native and cross-platform mobile app development.',
          },
          {
            icon: 'tablet',
            title: 'User Interface (UI) & User Experience (UX) Design',
            description: 'Beautiful, intuitive mobile interfaces.',
          },
          {
            icon: 'code',
            title: 'System & API Integrations',
            description: 'Connect your app with backend systems.',
          },
          {
            icon: 'chart',
            title: 'Performance & Scalability Optimization',
            description: 'Optimize for speed and scale.',
          },
        ],
        keyBenefits: [
          { icon: 'arrow-up', title: 'Increased customer engagement' },
          { icon: 'chart', title: 'Enhanced brand visibility' },
          { icon: 'target', title: 'Improved operational efficiency' },
          { icon: 'lightbulb', title: 'New revenue streams' },
          { icon: 'shield', title: 'Competitive advantage' },
          { icon: 'clock', title: 'Data-driven insights' },
        ],
        callToAction: {
          question: 'Ready to transform your mobile experience?',
          description:
            "Let's build a fast, intuitive, business-driven mobile app for your organization.",
          ctaText: 'Learn More',
          ctaLink: '/contact',
        },
      },
      'web-apps': {
        id: '3',
        slug: 'web-apps',
        title: 'Web Apps Development.',
        subtitle: 'Scalable, Responsive Web Applications for Modern Businesses',
        description:
          'Empowering businesses to modernize workflows and scale efficiency with data-driven insights.',
        image: '/images/services/web-apps.jpg',
        coreComponents: [
          {
            icon: 'browser',
            title: 'Custom Web Application Development',
            description: 'Tailored web applications for your business needs.',
          },
          {
            icon: 'lock',
            title: 'Secure & Scalable Architecture',
            description: 'Built for security and scalability.',
          },
          {
            icon: 'code',
            title: 'Integrations & API Connectivity',
            description: 'Connect with third-party services.',
          },
          {
            icon: 'workflow',
            title: 'Workflow Modernization & Automation',
            description: 'Modernize and automate business workflows.',
          },
        ],
        keyBenefits: [
          { icon: 'arrow-up', title: 'Streamlined business processes' },
          { icon: 'chart', title: 'Improved data management' },
          { icon: 'target', title: 'Enhanced user experience' },
          { icon: 'lightbulb', title: 'Increased operational efficiency' },
          { icon: 'shield', title: 'Scalability and flexibility' },
          { icon: 'clock', title: 'Reduced maintenance costs' },
        ],
        callToAction: {
          question: 'Ready to modernize your web operations?',
          description:
            "Let's build a scalable, intelligent web application that transforms your operations and accelerates growth.",
          ctaText: 'Learn More',
          ctaLink: '/contact',
        },
      },
      'technology-strategy': {
        id: '4',
        slug: 'technology-strategy',
        title: 'Technology Strategy Consulting.',
        subtitle: 'Strategic Technology Guidance That Drives Business Growth',
        description:
          'Helping businesses align technology with their goals by identifying inefficiencies, uncovering automation opportunities, and creating a clear roadmap for scalable growth.',
        image: '/images/services/technology-strategy.jpg',
        coreComponents: [
          {
            icon: 'roadmap',
            title: 'Technology Roadmap Development',
            description: 'Create a clear technology roadmap for your business.',
          },
          {
            icon: 'chart',
            title: 'Automation & Efficiency Analysis',
            description: 'Identify opportunities for automation.',
          },
          {
            icon: 'network',
            title: 'System Architecture & Integration Planning',
            description: 'Plan system architecture and integrations.',
          },
          {
            icon: 'transformation',
            title: 'Digital Transformation Strategy',
            description: 'Strategic guidance for digital transformation.',
          },
        ],
        keyBenefits: [
          { icon: 'arrow-up', title: 'Clear strategic direction' },
          { icon: 'chart', title: 'Optimized technology investments' },
          { icon: 'target', title: 'Improved operational efficiency' },
          { icon: 'lightbulb', title: 'Enhanced innovation capabilities' },
          { icon: 'shield', title: 'Reduced business risks' },
          { icon: 'clock', title: 'Accelerated digital transformation' },
        ],
        callToAction: {
          question: 'Ready to build a smarter technology strategy?',
          description:
            "Let's create a clear, strategic roadmap that guides your automation, modernization, and digital transformation efforts.",
          ctaText: 'Get a Call',
          ctaLink: '/contact',
        },
      },
    };

    const service = services[params.slug];

    if (!service) {
      return NextResponse.json(
        { error: 'Service not found' } as unknown as Service,
        { status: 404 }
      );
    }

    return NextResponse.json(service);
  } catch (error) {
    logger.error('[API] GET /api/v1/services/[slug] error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch service' } as unknown as Service,
      { status: 500 }
    );
  }
}

