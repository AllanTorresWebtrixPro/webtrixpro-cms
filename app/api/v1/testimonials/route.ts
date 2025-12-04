import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';
import type { TestimonialList } from '@/types/testimonial/testimonial.types';

export async function GET(): Promise<NextResponse<TestimonialList>> {
  try {
    logger.debug('[API] GET /api/v1/testimonials');

    // Mock data - to be replaced with database query
    const data: TestimonialList = {
      title: 'What Our Client Say.',
      subtitle: 'Trusted by smart businesses that expect results.',
      testimonials: [
        {
          id: '1',
          clientName: 'Douglas Larsen',
          company: 'Shallow Waters, LLC',
          title: 'Managing Member',
          quote:
            'WebtrixPro has been our trusted partner for over 15 years. They have built our website, software, payment platforms, QR codes, and app. Their expertise and dedication are unmatched.',
          logo: '/logos/shallow-waters.png',
          rating: 5,
        },
        {
          id: '2',
          clientName: 'Lior Barhai',
          company: 'Envonics',
          quote:
            'WebtrixPro developed a cloud portal for us within budget and time. Their clear communication using Basecamp made the entire process smooth and transparent.',
          logo: '/logos/envonics.png',
          rating: 5,
        },
        {
          id: '3',
          clientName: 'Santiago Seeber',
          company: 'Nervous Waters',
          quote:
            'The application we developed with WebtrixPro has saved us significant time and increased our efficiency, leading to improved sales.',
          logo: '/logos/nervous-waters.png',
          rating: 5,
        },
        {
          id: '4',
          clientName: 'Michael Wendrew',
          company: 'Prime Time Business Network',
          quote:
            'WebtrixPro demonstrates exceptional professionalism, quality of work, and customer service. They are a true partner in our success.',
          logo: '/logos/prime-time.png',
          rating: 5,
        },
        {
          id: '5',
          clientName: 'Jeniffer Viscarra',
          company: 'Viscarra Law',
          quote:
            'I am extremely satisfied with WebtrixPro\'s service. They provide prompt feedback and I always feel supported throughout the process.',
          logo: '/logos/viscarra-law.png',
          rating: 5,
        },
        {
          id: '6',
          clientName: 'Dr. Elise Kramer Rouimi',
          company: 'Miami Contact Lens',
          quote:
            'After reviewing other companies, we chose WebtrixPro for their professionalism and responsibility. They have exceeded our expectations.',
          logo: '/logos/miami-contact-lens.png',
          rating: 5,
        },
        {
          id: '7',
          clientName: 'Lee Ferry',
          company: 'WifWiz',
          quote:
            'WebtrixPro is the best software development company we have worked with. Their guidance, budget adherence, and communication are outstanding.',
          logo: '/logos/wifwiz.png',
          rating: 5,
        },
        {
          id: '8',
          clientName: 'Barton Taylor',
          company: 'Hollywood Collision Center',
          quote:
            'Our custom software "Playbook" has been a game-changer. WebtrixPro\'s detailed wireframes and functional prototype made the development process seamless.',
          logo: '/logos/hollywood-collision.png',
          rating: 5,
        },
        {
          id: '9',
          clientName: 'Lauren McCulloch',
          company: 'GroupXConnect',
          title: 'Founder',
          quote:
            'WebtrixPro has been an effective partner with outstanding project management and a communicative approach. They truly understand our vision.',
          logo: '/logos/groupxconnect.png',
          rating: 5,
        },
        {
          id: '10',
          clientName: 'Dr. Graham Mouw',
          company: 'Motion Spine Institute',
          quote:
            'As a long-time customer, WebtrixPro has consistently demonstrated professionalism, promptness, and efficiency in setting up our websites and mobile apps.',
          logo: '/logos/motion-spine.png',
          rating: 5,
        },
        {
          id: '11',
          clientName: 'Russell Feder',
          company: 'Stepping Stone Capital',
          quote:
            'WebtrixPro\'s attention to small details made our web platform and app possible. The team\'s attentiveness is remarkable.',
          logo: '/logos/stepping-stone.png',
          rating: 5,
        },
        {
          id: '12',
          clientName: 'Leigh Seidner',
          company: 'Our Community App/ Meeting Place 1',
          quote:
            'I rate WebtrixPro highly for their work ethic and product outcome. They helped us fashion ideas for two apps that have been incredibly successful.',
          logo: '/logos/community-app.png',
          rating: 5,
        },
        {
          id: '13',
          clientName: 'Anne Mortomore',
          company: 'Miami City Ballet',
          quote: 'The Webtrix Team is always on deck to help out. Their support and responsiveness are exceptional.',
          logo: '/logos/miami-city-ballet.png',
          rating: 5,
        },
        {
          id: '14',
          clientName: 'Dan Abraham',
          company: 'Sarfati Law',
          quote:
            'Assaf Shani and his team have done spectacular work. Their effectiveness, responsiveness, reliability, and dependability are unmatched.',
          logo: '/logos/sarfati-law.png',
          rating: 5,
        },
        {
          id: '15',
          clientName: 'Olga Smith',
          company: 'Hollywood Pictures',
          quote:
            'WebtrixPro is professional and highly motivated. We are glad to have found them for our website and e-commerce platform design.',
          logo: '/logos/hollywood-pictures.png',
          rating: 5,
        },
      ],
    };

    return NextResponse.json(data);
  } catch (error) {
    logger.error('[API] GET /api/v1/testimonials error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' } as unknown as TestimonialList,
      { status: 500 }
    );
  }
}

