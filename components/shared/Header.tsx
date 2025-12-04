'use client';

import Link from 'next/link';
import { Button } from './Button';
import { Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-secondary-200 bg-white">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">
              WebtrixPro.
            </span>
            <span className="text-sm text-secondary-500">
              Smart Software. AI-Powered
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/services"
              className="text-secondary-700 hover:text-primary-600 transition-colors"
            >
              Services.
            </Link>
            <Link
              href="/portfolio"
              className="text-secondary-700 hover:text-primary-600 transition-colors"
            >
              Portfolio.
            </Link>
            <Link
              href="/testimonials"
              className="text-secondary-700 hover:text-primary-600 transition-colors"
            >
              Testimonials.
            </Link>
            <Link
              href="/about"
              className="text-secondary-700 hover:text-primary-600 transition-colors"
            >
              About.
            </Link>
            <Link
              href="/contact"
              className="text-secondary-700 hover:text-primary-600 transition-colors"
            >
              Contact.
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-primary-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">877-726-5238</span>
            </div>
            <Button href="/contact" variant="primary" size="sm">
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

