import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';
import type { HomepageData } from '@/types/homepage/homepage.types';

export async function GET(): Promise<NextResponse<HomepageData>> {
  try {
    logger.debug('[API] GET /api/v1/homepage');

    // Mock data - to be replaced with database query
    const data: HomepageData = {
      hero: {
        title: 'Empowering businesses to work smarter, not harder.',
        subtitle: 'work smarter, not harder',
        description:
          'We help businesses work smarter through AI-powered automation, innovation, and custom technology, enabling them to grow faster, operate leaner, and achieve more with less.',
        ctaText: 'Get Started Now',
        ctaLink: '/contact',
      },
      whatWeDo: {
        title: 'What We Do.',
        subtitle: 'Turning Business Challenges into Smart Automated Solutions',
        services: [
          {
            id: '1',
            title: 'Technology Strategy Consulting',
            description:
              'Helping businesses align technology with their goals by identifying inefficiencies, uncovering automation opportunities, and creating a clear roadmap for scalable growth.',
            icon: 'strategy',
            link: '/services/technology-strategy',
          },
          {
            id: '2',
            title: 'AI-Agents Development',
            description:
              'Integrating intelligent systems that automate tasks, optimize decisions, and enhance productivity.',
            icon: 'ai',
            link: '/services/ai-agents',
          },
          {
            id: '3',
            title: 'Mobile Apps Development',
            description:
              'Designing and developing fast, intuitive mobile experiences that drive real engagement.',
            icon: 'mobile',
            link: '/services/mobile-apps',
          },
          {
            id: '4',
            title: 'Web Apps Development',
            description:
              'Empowering businesses to modernize workflows and scale efficiency with data-driven insights.',
            icon: 'web',
            link: '/services/web-apps',
          },
        ],
      },
      ourSolution: {
        title: 'Our Solution.',
        description: 'We build intelligent systems that simplify work and amplify growth.',
        image: '/images/our-solution.jpg',
      },
      howYouBenefit: {
        title: 'How You Benefit.',
        description: 'Driving growth by automating inefficiencies and accelerating performance.',
        benefits: [
          { icon: 'arrow-up', title: 'Seamless Scalability' },
          { icon: 'gear', title: 'Higher Productivity' },
          { icon: 'dollar', title: 'Cost Reduction' },
          { icon: 'clock', title: 'Time Savings' },
        ],
      },
      awards: {
        title: 'Recognized for Excellence,',
        description:
          'Honored by clients and industry leaders for innovation, performance, and impact. Helping businesses grow smarter every day.',
        years: ['2023', '2024', '2025'],
        awards: [
          { id: '1', title: 'Top B2B Company', year: '2024' },
          { id: '2', title: 'Top AI Company', year: '2024' },
        ],
      },
      whoWeAre: {
        title: 'Who We Are.',
        subtitle: 'Simplifying technology. Amplifying business.',
        description:
          "We're a boutique AI-powered software and consulting agency passionate about helping businesses work smarter. By combining strategy, innovation, and automation, we simplify complexity, unlock growth, and help our clients focus on what truly matters.",
        videoThumbnail: '/images/our-story.jpg',
        videoUrl: '/videos/our-story.mp4',
      },
      testimonials: {
        title: 'What Our Client Say.',
        testimonials: [
          {
            id: '1',
            clientName: 'Douglas Larsen',
            company: 'Shallow Waters, LLC',
            quote: 'WebtrixPro has been our trusted partner for over 15 years...',
            avatar: '/avatars/douglas.jpg',
          },
        ],
      },
      whyUs: {
        title: 'Why Us.',
        subtitle: 'Where experience meets intelligent innovation.',
        description:
          'With over 20 years of experience, we combine strategic consulting and AI-powered technology to deliver measurable results. Trusted for our creativity, reliability, and results-driven mindset, we help businesses grow smarter and operate stronger.',
        statistics: [
          { value: '20+', label: 'Years of Experience', color: 'green' },
          { value: '200+', label: 'Clients Worldwide', color: 'orange' },
          { value: '100%', label: 'Customer Satisfaction', color: 'blue' },
          { value: '50+', label: 'Expert Developers', color: 'gray' },
        ],
      },
      howWeDoIt: {
        title: 'How We Do It.',
        subtitle: 'Powered by Strategy. Perfected by Process.',
        description:
          'The DEV IX Model is our proven 9-step framework that transforms strategy into intelligent, scalable technology solutions built for smarter business growth.',
        steps: [
          { id: '1', name: 'Discovering' },
          { id: '2', name: 'Defining' },
          { id: '3', name: 'Designing' },
          { id: '4', name: 'Developing' },
          { id: '5', name: 'Deploying' },
          { id: '6', name: 'Testing' },
          { id: '7', name: 'Analyzing' },
          { id: '8', name: 'Monitoring' },
          { id: '9', name: 'Maintaining' },
        ],
      },
      callToAction: {
        title: 'Ready to Turn Your Vision into Reality?',
        subtitle:
          "Let's start mapping your next digital product with clarity, speed, and measurable impact.",
        ctaText: 'Start Your Project Now',
        ctaLink: '/contact',
      },
    };

    return NextResponse.json(data);
  } catch (error) {
    logger.error('[API] GET /api/v1/homepage error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch homepage data' } as unknown as HomepageData,
      { status: 500 }
    );
  }
}

