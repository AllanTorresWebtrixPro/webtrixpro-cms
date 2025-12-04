import { NextRequest, NextResponse } from 'next/server';
import { logger } from '@/lib/logger';
import { contactFormDataSchema, contactDataSchema } from '@/types/contact/contact.schemas';
import type { ContactData } from '@/types/contact/contact.types';

export async function GET(): Promise<NextResponse<ContactData>> {
  try {
    logger.debug('[API] GET /api/v1/contact');

    // Mock data - to be replaced with database query
    const data: ContactData = {
      title: 'Contact Us.',
      subtitle: 'We would love to hear from you.',
      info: {
        address: '450 N. Park Rd Suite 608 Hollywood, FL 33021',
        phone: '(305) 792-0680',
        tollFree: '877-726-5238',
        email: 'info@webtrixpro.com',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...',
      },
    };

    return NextResponse.json(data);
  } catch (error) {
    logger.error('[API] GET /api/v1/contact error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact info' } as unknown as ContactData,
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse<{ success: boolean; message: string }>> {
  try {
    logger.debug('[API] POST /api/v1/contact');

    const body = await request.json();
    const validatedData = contactFormDataSchema.parse(body);

    // In a real implementation, this would save to database or send email
    logger.info('[API] Contact form submission:', {
      email: validatedData.email,
      name: `${validatedData.firstName} ${validatedData.lastName}`,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you soon.',
      },
      { status: 201 }
    );
  } catch (error) {
    logger.error('[API] POST /api/v1/contact error:', error);
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error. Please check your input.',
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit contact form. Please try again later.',
      },
      { status: 500 }
    );
  }
}

