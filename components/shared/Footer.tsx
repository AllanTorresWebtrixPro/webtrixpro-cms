import Link from 'next/link';
import { Button } from './Button';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-primary-600">
                WebtrixPro.
              </span>
            </Link>
            <p className="text-sm text-secondary-400 mb-4">
              Smart Software. AI-Powered
            </p>
            <div className="space-y-2 text-sm text-secondary-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Hollywood Office: 450 N. Park Rd Suite 606 Hollywood, FL 33021</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(305) 792-0680 Toll Free: 877-726-5238</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contact@webtrixpro.com</span>
              </div>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-semibold mb-4">ABOUT</h3>
            <ul className="space-y-2 text-sm text-secondary-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-2 text-sm text-secondary-300">
              <li>
                <Link href="/services/ai-agents" className="hover:text-white transition-colors">
                  AI-Agents
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-apps" className="hover:text-white transition-colors">
                  Web App Development
                </Link>
              </li>
              <li>
                <Link href="/services/technology-strategy" className="hover:text-white transition-colors">
                  Technology Strategy Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">NEWSLETTER</h3>
            <p className="text-sm text-secondary-400 mb-4">
              Subscribe to our newsletter and stay updated!
            </p>
            <form className="space-y-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 rounded bg-secondary-800 border border-secondary-700 text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 rounded bg-secondary-800 border border-secondary-700 text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded bg-secondary-800 border border-secondary-700 text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Button type="submit" variant="primary" size="sm" className="w-full">
                Send
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-secondary-400">
            2004-2025 WebtrixPro. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social media icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}

