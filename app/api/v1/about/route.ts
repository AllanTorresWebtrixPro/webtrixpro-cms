import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';
import type { AboutData } from '@/types/about/about.types';

export async function GET(): Promise<NextResponse<AboutData>> {
  try {
    logger.debug('[API] GET /api/v1/about');

    // Mock data - to be replaced with database query
    const data: AboutData = {
      about: {
        title: 'About WebtrixPro.',
        subtitle: 'Simplifying technology. Amplifying business.',
        description:
          "We're a boutique AI-powered software development and technology consulting agency passionate about helping businesses work smarter. With two decades of experience, we focus on eliminating inefficiencies, modernizing systems, and building intelligent digital solutions for measurable growth. By combining strategy, innovation, and automation, we simplify complexity, unlock growth, and help our clients focus on what truly matters.",
        statistics: [
          { value: '20+', label: 'Years of Experience', color: 'green' },
          { value: '200+', label: 'Numbers of Customer', color: 'green' },
          { value: '100%', label: 'Customer Satisfaction', color: 'blue' },
          { value: '50+', label: 'Expert Developers', color: 'blue' },
        ],
      },
      story: {
        title: 'Our Story.',
        description:
          'Founded in 2004, WebtrixPro has been at the forefront of AI-powered automation, custom software development, and strategic technology consultation. Our mission is to help businesses work smarter by eliminating inefficiencies and creating scalable digital solutions. With two decades of experience combined with intelligent innovation, we continue to redefine how businesses operate in a digital-first world.',
        videoThumbnail: '/images/our-story.jpg',
        videoUrl: '/videos/our-story.mp4',
      },
      team: {
        title: 'The Leadership Team.',
        members: [
          {
            id: '1',
            name: 'Assaf Shami',
            title: 'Founder & CEO',
            image: '/team/assaf-shami.jpg',
          },
          {
            id: '2',
            name: 'Joe Kaire',
            title: 'CTO',
            image: '/team/joe-kaire.jpg',
          },
          {
            id: '3',
            name: 'Allan Torress',
            title: 'Full-Stack Lead Engineer',
            image: '/team/allan-torress.jpg',
          },
          {
            id: '4',
            name: 'Yochai Kariv',
            title: 'Business Development Executive',
            image: '/team/yochai-kariv.jpg',
          },
          {
            id: '5',
            name: 'Michael Gokhler',
            title: 'Head Of Digital Transformation',
            image: '/team/michael-gokhler.jpg',
          },
          {
            id: '6',
            name: 'Eugene Pogrensky',
            title: 'Project Manager',
            image: '/team/eugene-pogrensky.jpg',
          },
        ],
      },
      visionMission: {
        vision: {
          title: 'Our Vision',
          description:
            'To redefine business operations through intelligent automation and AI innovation, empowering organizations to scale efficiently and lead confidently in a digital-first world.',
          icon: 'eye',
        },
        mission: {
          title: 'Our Mission',
          description:
            'To help businesses save time, reduce inefficiencies, and drive growth through AI-powered automation, custom software, and strategic consulting.',
          icon: 'target',
        },
      },
    };

    return NextResponse.json(data);
  } catch (error) {
    logger.error('[API] GET /api/v1/about error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch about data' } as unknown as AboutData,
      { status: 500 }
    );
  }
}

