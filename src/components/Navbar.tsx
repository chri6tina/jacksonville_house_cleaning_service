'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, Sparkles, Building2, Droplets, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Helper function to determine if a link is active
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-40 h-40 transform transition-transform group-hover:scale-105 duration-300">
                <Image
                  src="/JHCSlogo.png"
                  alt="JHCS Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-gray-900 font-extrabold text-lg sm:text-xl hidden xs:block tracking-tight text-primary-blue">
                Jacksonville Cleaning
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-bold transition-colors duration-200 ${isActive('/') ? 'text-primary-blue' : 'text-gray-700 hover:text-primary-blue'}`}
            >
              Home
            </Link>
            
            {/* Services CSS-Driven Mega Menu Hover (Fixes Jitter) */}
            <div className="group relative">
              <button
                className={`flex items-center space-x-1 text-sm font-bold transition-colors duration-200 py-8 ${pathname.includes('/services') ? 'text-primary-blue' : 'text-gray-700 hover:text-primary-blue'}`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
              </button>
              
              {/* Invisible absolute bridge to prevent hover jitter when crossing gap */}
              <div className="absolute top-full left-0 w-full h-4 invisible group-hover:visible" />

              {/* Mega Menu Dropdown */}
              <div className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 overflow-hidden">
                <div className="grid grid-cols-2">
                  
                  {/* Column 1: Core Residential */}
                  <div className="p-6 bg-gray-50 border-r border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-primary-blue" />
                      <span className="font-extrabold text-gray-900 uppercase tracking-wider text-xs">Core Residential</span>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/standard-cleaning" className="block text-sm font-semibold text-gray-700 hover:text-primary-blue transition-colors">Standard Cleaning</Link>
                      </li>
                      <li>
                        <Link href="/deep-cleaning" className="block text-sm font-semibold text-gray-700 hover:text-primary-blue transition-colors">Deep Cleaning</Link>
                      </li>
                      <li>
                        <Link href="/recurring-cleaning" className="block text-sm font-semibold text-gray-700 hover:text-primary-blue transition-colors">Recurring Cleaning</Link>
                      </li>
                      <li>
                        <Link href="/move-in-move-out" className="block text-sm font-semibold text-gray-700 hover:text-primary-blue transition-colors">Move-In / Move-Out</Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2: Specialized & Commercial */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Building2 className="w-5 h-5 text-primary-blue" />
                      <span className="font-extrabold text-gray-900 uppercase tracking-wider text-xs">Specialized Services</span>
                    </div>
                    <ul className="space-y-3">
                       <li>
                        <Link href="/post-construction-cleaning" className="block text-sm font-semibold text-gray-700 hover:text-primary-blue transition-colors">Post-Construction</Link>
                      </li>
                      <li>
                        <Link href="/carpet-cleaning" className="block text-sm font-semibold text-gray-700 hover:text-primary-blue transition-colors">Carpet Cleaning</Link>
                      </li>
                      <li>
                        <Link href="/commercial-office-cleaning" className="block text-sm font-semibold text-gray-700 hover:text-primary-blue transition-colors">Commercial Office</Link>
                      </li>
                      <li>
                        <Link href="/window-cleaning" className="block text-sm font-semibold text-gray-700 hover:text-primary-blue transition-colors">Window Washing</Link>
                      </li>
                    </ul>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <Link href="/services" className="inline-flex items-center text-sm font-bold text-primary-blue hover:text-blue-800 transition-colors group/link">
                        View All 15+ Services
                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
            <Link 
              href="/pricing" 
              className={`text-sm font-bold transition-colors duration-200 ${isActive('/pricing') ? 'text-primary-blue' : 'text-gray-700 hover:text-primary-blue'}`}
            >
              Pricing
            </Link>
            
            <Link 
              href="/locations" 
              className={`text-sm font-bold transition-colors duration-200 ${isActive('/locations') ? 'text-primary-blue' : 'text-gray-700 hover:text-primary-blue'}`}
            >
              Service Areas
            </Link>

            <Link 
              href="/about" 
              className={`text-sm font-bold transition-colors duration-200 ${isActive('/about') ? 'text-primary-blue' : 'text-gray-700 hover:text-primary-blue'}`}
            >
              About Us
            </Link>
            
            <Link 
              href="/faq" 
              className={`text-sm font-bold transition-colors duration-200 ${isActive('/faq') ? 'text-primary-blue' : 'text-gray-700 hover:text-primary-blue'}`}
            >
              FAQ
            </Link>
          </div>

          {/* Call to Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:9044563851"
              className="inline-flex items-center px-4 py-2.5 text-sm font-bold rounded-lg text-gray-700 hover:bg-gray-50 border border-gray-200 transition-colors duration-200 shadow-sm"
            >
              <Phone className="w-4 h-4 mr-2 text-primary-blue" />
              (904) 456-3851
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 text-sm font-bold rounded-lg text-white bg-primary-blue hover:bg-blue-700 transition-colors duration-200 shadow-sm"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Link
              href="/contact"
              className="mr-4 inline-flex items-center px-4 py-2 text-xs font-bold rounded-lg text-white bg-primary-blue hover:bg-blue-700 transition-colors duration-200 shadow-sm"
            >
              Free Quote
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-900 hover:text-primary-blue p-2 rounded-md transition-colors duration-200 bg-gray-50 border border-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="text-gray-900 hover:text-primary-blue block px-3 py-3 rounded-md text-base font-bold bg-gray-50/50"
            >
              Home
            </Link>
            
            <div className="py-2 px-3">
              <span className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-2 block">Our Services</span>
              <div className="grid grid-cols-1 gap-2 pl-2 border-l-2 border-gray-100">
                <Link href="/standard-cleaning" onClick={closeMobileMenu} className="text-gray-700 hover:text-primary-blue text-sm font-semibold py-1.5 border-b border-gray-50">Standard Cleaning</Link>
                <Link href="/deep-cleaning" onClick={closeMobileMenu} className="text-gray-700 hover:text-primary-blue text-sm font-semibold py-1.5 border-b border-gray-50">Deep Cleaning</Link>
                <Link href="/move-in-move-out" onClick={closeMobileMenu} className="text-gray-700 hover:text-primary-blue text-sm font-semibold py-1.5 border-b border-gray-50">Move-In / Move-Out</Link>
                <Link href="/post-construction-cleaning" onClick={closeMobileMenu} className="text-gray-700 hover:text-primary-blue text-sm font-semibold py-1.5 border-b border-gray-50">Post-Construction</Link>
                <Link href="/services" onClick={closeMobileMenu} className="text-primary-blue font-bold text-sm py-1.5 inline-flex items-center hover:underline">View All Services <ArrowRight className="w-3 h-3 ml-1" /></Link>
              </div>
            </div>

            <Link
              href="/pricing"
              onClick={closeMobileMenu}
              className="text-gray-900 hover:text-primary-blue block px-3 py-3 rounded-md text-base font-bold bg-gray-50/50"
            >
              Pricing
            </Link>
            
            <Link
              href="/locations"
              onClick={closeMobileMenu}
              className="text-gray-900 hover:text-primary-blue block px-3 py-3 rounded-md text-base font-bold bg-gray-50/50"
            >
              Service Areas
            </Link>

            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="text-gray-900 hover:text-primary-blue block px-3 py-3 rounded-md text-base font-bold bg-gray-50/50"
            >
              About Us
            </Link>
            
            <Link
              href="/faq"
              onClick={closeMobileMenu}
              className="text-gray-900 hover:text-primary-blue block px-3 py-3 rounded-md text-base font-bold bg-gray-50/50"
            >
              FAQ
            </Link>
            
            {/* Mobile CTAs */}
            <div className="pt-6 pb-2 grid grid-cols-1 gap-3">
              <a
                href="tel:9044563851"
                className="w-full justify-center inline-flex items-center px-4 py-3 text-sm font-bold rounded-lg text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm"
              >
                <Phone className="w-4 h-4 mr-2 text-primary-blue" />
                Call (904) 456-3851
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
