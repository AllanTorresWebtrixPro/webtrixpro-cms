import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';
import type { PortfolioList } from '@/types/portfolio/portfolio.types';

export async function GET(): Promise<NextResponse<PortfolioList>> {
  try {
    logger.debug('[API] GET /api/v1/portfolio');

    // Mock data - to be replaced with database query
    const data: PortfolioList = {
      title: 'Portfolio.',
      subtitle: 'High-quality digital solutions trusted by companies worldwide.',
      projects: [
        {
          id: '1',
          title: 'Shallow Waters',
          client: 'Shallow Waters, LLC',
          description: 'Web Apps Development',
          type: 'web',
          image: '/images/portfolio/shallow-waters.jpg',
          logo: '/logos/shallow-waters.png',
        },
        {
          id: '2',
          title: 'Hollywood Collision Center',
          client: 'Hollywood Collision Center',
          description: 'Mobile Apps Development',
          type: 'mobile',
          image: '/images/portfolio/hollywood-collision.jpg',
          logo: '/logos/hollywood-collision.png',
        },
        {
          id: '3',
          title: 'Our Community App',
          client: 'Meeting Place 1',
          description: 'Mobile Apps Development',
          type: 'mobile',
          image: '/images/portfolio/community-app.jpg',
          logo: '/logos/community-app.png',
        },
        {
          id: '4',
          title: 'Prime Time Business Network',
          client: 'Prime Time Business Network',
          description: 'Web Apps Development',
          type: 'web',
          image: '/images/portfolio/prime-time.jpg',
          logo: '/logos/prime-time.png',
        },
        {
          id: '5',
          title: 'Nervous Waters',
          client: 'Nervous Waters',
          description: 'Web Apps Development',
          type: 'web',
          image: '/images/portfolio/nervous-waters.jpg',
          logo: '/logos/nervous-waters.png',
        },
        {
          id: '6',
          title: 'Envonics',
          client: 'Envonics',
          description: 'Web Apps Development',
          type: 'web',
          image: '/images/portfolio/envonics.jpg',
          logo: '/logos/envonics.png',
        },
        {
          id: '7',
          title: 'Stepping Stone Capital',
          client: 'Stepping Stone Capital',
          description: 'Web Apps Development',
          type: 'web',
          image: '/images/portfolio/stepping-stone.jpg',
          logo: '/logos/stepping-stone.png',
        },
        {
          id: '8',
          title: 'GroupXConnect',
          client: 'GroupXConnect',
          description: 'Mobile Apps Development',
          type: 'mobile',
          image: '/images/portfolio/groupxconnect.jpg',
          logo: '/logos/groupxconnect.png',
        },
        {
          id: '9',
          title: '770 Rent A Car',
          client: '770 Rent A Car',
          description: 'Web Apps Development',
          type: 'web',
          image: '/images/portfolio/770-rent.jpg',
          logo: '/logos/770-rent.png',
        },
      ],
    };

    return NextResponse.json(data);
  } catch (error) {
    logger.error('[API] GET /api/v1/portfolio error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolio' } as unknown as PortfolioList,
      { status: 500 }
    );
  }
}

