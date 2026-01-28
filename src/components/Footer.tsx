'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Post-Construction Cleaning', href: '/post-construction-cleaning' },
      { name: 'Recurring Cleaning', href: '/recurring-cleaning' },
      { name: 'Standard Cleaning', href: '/standard-cleaning' },
      { name: 'Deep Cleaning', href: '/extreme-deep-cleaning' },
      { name: 'Move-In/Out Cleaning', href: '/move-in-move-out' },
      { name: 'Apartment Cleaning', href: '/apartment-cleaning' },
      { name: 'Office Cleaning', href: '/office-cleaning' },
      { name: 'Carpet Cleaning', href: '/carpet-cleaning' },
      { name: 'Window Cleaning', href: '/window-cleaning' },
      { name: 'Pressure Washing', href: '/pressure-washing' },
      { name: 'Air Duct Cleaning', href: '/air-duct-cleaning' },
      { name: 'Gutter Cleaning', href: '/gutter-cleaning' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Information', href: '/information' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Blog', href: '/blog' },
      { name: 'Service Areas', href: '/locations' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Service Areas', href: '/locations' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Free Pickup & Donation', href: '/free-pickup' },
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: SITE_CONFIG.social.facebook, color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: SITE_CONFIG.social.instagram, color: 'hover:text-pink-400' },
    { name: 'Twitter', icon: Twitter, href: SITE_CONFIG.social.twitter, color: 'hover:text-blue-300' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-lg sm:text-xl text-white">Jacksonville House Cleaning Service</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Professional cleaning services for homes and offices in Jacksonville, FL. 
              Eco-friendly products, experienced staff, and guaranteed satisfaction.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  href={`tel:${SITE_CONFIG.phone}`}
                >
                  (904) 456-3851
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  href={`mailto:${SITE_CONFIG.email}`}
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">Mon-Fri: 8AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Specialized</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/medical-facility-cleaning" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Medical Facility
                </Link>
              </li>
              <li>
                <Link href="/event-venue-cleaning" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Event Venue
                </Link>
              </li>
              <li>
                <Link href="/vacation-rental-cleaning" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Vacation Rental
                </Link>
              </li>
              <li>
                <Link href="/commercial-office-cleaning" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Commercial Office
                </Link>
              </li>
              <li>
                <Link href="/pet-friendly-cleaning" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Pet-Friendly
                </Link>
              </li>
              <li>
                <Link href="/senior-citizen-cleaning" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Senior Citizen
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Blog & Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/maintaining-clean-home" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Maintaining Clean Home
                </Link>
              </li>
              <li>
                <Link href="/blog/move-in-cleaning-essentials" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Move-In Cleaning Essentials
                </Link>
              </li>
              <li>
                <Link href="/blog/spring-cleaning-checklist" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Spring Cleaning Checklist
                </Link>
              </li>
              <li>
                <Link href="/blog/eco-friendly-cleaning-products" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Eco-Friendly Products
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-choose-the-right-cleaning-service" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Choosing Cleaning Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Support</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-blue-400">Newsletter</h4>
              <p className="text-gray-300 text-sm mb-3">
                Get cleaning tips and special offers!
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-gray-900 text-sm rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="bg-orange-500 px-4 py-2 text-white text-sm font-semibold rounded-r-lg hover:bg-orange-600 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              © {currentYear} Jacksonville House Cleaning Service. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-300 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
