'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, MapPin, Star } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <span className="text-gray-900 font-bold text-lg sm:text-xl hidden xs:block">
                Jacksonville House Cleaning
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 hover:text-primary-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleServicesDropdown}
                className="text-gray-900 hover:text-primary-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <Link href="/post-construction-cleaning" className="block px-4 py-2 text-sm text-gray-900 hover:bg-primary-blue hover:text-white transition-colors duration-200">
                    Post-Construction Cleaning
                  </Link>
                  <Link href="/services" className="block px-4 py-2 text-sm text-gray-900 hover:bg-primary-blue hover:text-white transition-colors duration-200">
                    All Services
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/about" className="text-gray-900 hover:text-primary-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              About
            </Link>
            <Link href="/pricing" className="text-gray-900 hover:text-primary-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-primary-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:9044563851"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-accent-coral hover:bg-accent-coral/90 transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              (904) 456-3851
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-900 hover:text-primary-blue p-2 rounded-md transition-colors duration-200"
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

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="text-gray-900 hover:text-primary-blue block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={closeMobileMenu}
              className="text-gray-900 hover:text-primary-blue block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="text-gray-900 hover:text-primary-blue block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/pricing"
              onClick={closeMobileMenu}
              className="text-gray-900 hover:text-primary-blue block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="text-gray-900 hover:text-primary-blue block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Contact
            </Link>
            
            {/* Mobile CTA */}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <a
                href="tel:9044563851"
                className="block w-full text-center px-4 py-3 bg-accent-coral text-white rounded-md font-medium hover:bg-accent-coral/90 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 inline mr-2" />
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

