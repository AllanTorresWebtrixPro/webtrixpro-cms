'use client';

import { useState } from 'react';
import { useContactInfo, useContactForm } from '@/hooks/use-contact';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { EmptyState } from '@/components/shared/EmptyState';
import { Section } from '@/components/shared/Section';
import { Card } from '@/components/shared/Card';
import { Button } from '@/components/shared/Button';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormDataSchema } from '@/types/contact/contact.schemas';
import type { ContactFormData } from '@/types/contact/contact.types';

export default function ContactPage() {
  const { data, isLoading, error, isError } = useContactInfo();
  const { submit, isLoading: isSubmitting, isSuccess } = useContactForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormDataSchema),
  });

  const onSubmit = (formData: ContactFormData) => {
    submit(formData);
    if (isSuccess) {
      reset();
    }
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
      <EmptyState message={error?.message || 'Failed to load contact info'} />
    );
  }

  return (
    <div>
      <Section>
        <div className="max-w-4xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {data.title.split('.').map((part, index, array) => (
              <span key={index}>
                {part}
                {index < array.length - 1 && (
                  <span className="text-primary-600">.</span>
                )}
              </span>
            ))}
          </h1>
          <p className="text-xl text-secondary-600">
            {data.subtitle.split('hear from you').map((part, index) => (
              <span key={index}>
                {part}
                {index === 0 && (
                  <span className="text-accent-500">hear from you</span>
                )}
              </span>
            ))}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <h2 className="text-2xl font-bold mb-6">Form Placeholder</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  {...register('firstName')}
                  placeholder="First Name"
                  className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                {errors.firstName && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register('lastName')}
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                {errors.lastName && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  {...register('message')}
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
              {isSuccess && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
            </form>
          </Card>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
            <p className="text-secondary-600 mb-6">
              Find us, follow us, or drop a line – we're always open to connect.
            </p>
            <div className="space-y-4">
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-accent-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Find Us</h3>
                    <p className="text-secondary-600">{data.info.address}</p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-accent-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-secondary-600">
                      {data.info.phone} Toll Free: {data.info.tollFree}
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-accent-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-secondary-600">{data.info.email}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      {data.info.mapEmbedUrl && (
        <Section background="gray">
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              src={data.info.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Section>
      )}
    </div>
  );
}

