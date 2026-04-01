'use client';

import React from 'react';
import Link from 'next/link';
import UniversalServiceHero from '@/components/UniversalServiceHero';

import { Calendar, Star, Phone, Clock, Users, Shield, Sparkles, Home, Trees, Gift, Snowflake, Sun, Leaf, CheckCircle } from 'lucide-react';

export default function HolidayCleaningPage() {
  const holidayPackages = [
    {
      name: 'Pre-Holiday Deep Clean',
      description: 'Get your home spotless before family and guests arrive',
      price: 'Starting at $280',
      duration: '6-8 hours',
      includes: [
        'Complete deep cleaning of all rooms',
        'Kitchen deep clean (appliances, cabinets)',
        'Bathroom sanitization',
        'Floor cleaning and polishing',
        'Dusting of all surfaces',
        'Window cleaning',
        'Final inspection and touch-ups'
      ],
      icon: Gift,
      popular: true
    },
    {
      name: 'Post-Holiday Cleanup',
      description: 'Restore your home to pristine condition after celebrations',
      price: 'Starting at $220',
      duration: '4-6 hours',
      includes: [
        'Post-party cleanup and sanitization',
        'Kitchen deep cleaning',
        'Bathroom refresh',
        'Floor maintenance',
        'Trash removal and recycling',
        'Surface disinfection',
        'Air freshening'
      ],
      icon: Snowflake
    },
    {
      name: 'Holiday Maintenance',
      description: 'Keep your home clean throughout the holiday season',
      price: 'Starting at $180',
      duration: '3-4 hours',
      includes: [
        'Regular maintenance cleaning',
        'High-traffic area focus',
        'Kitchen upkeep',
        'Bathroom maintenance',
        'Quick surface refresh',
        'Trash and recycling',
        'Light organizing'
      ],
      icon: Calendar
    }
  ];

  const seasonalServices = [
    {
      name: 'Thanksgiving Prep',
      description: 'Perfect for hosting Thanksgiving dinner',
      price: 'Starting at $250',
      icon: Home
    },
    {
      name: 'Christmas Cleanup',
      description: 'Post-Christmas tree and decoration cleanup',
      price: 'Starting at $200',
                    icon: Trees
    },
    {
      name: 'New Year Refresh',
      description: 'Start the new year with a clean home',
      price: 'Starting at $220',
      icon: Sun
    },
    {
      name: 'Spring Holiday Prep',
      description: 'Easter and spring celebration cleaning',
      price: 'Starting at $200',
      icon: Leaf
    }
  ];

  return (
    <div className="min-h-screen">
      <UniversalServiceHero 
        title="Holiday Cleaning Services Make Your Jacksonville Home Holiday-Ready"
        subtitle="Professional holiday cleaning services to prepare your home for celebrations, keep it clean during the season, and restore it to perfection afterward."
        Icon={Sparkles}
        primaryColor="blue"
        formServiceType="holiday-cleaning"
      />

      {/* Holiday Packages */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
              Jacksonville Holiday Cleaning Packages
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              Choose the perfect holiday cleaning package for your Jacksonville home. 
              From pre-holiday prep to post-celebration cleanup, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {holidayPackages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300 border-2 ${pkg.popular ? 'border-accent-coral' : 'border-transparent'} relative`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent-coral text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <pkg.icon className="w-8 h-8 text-primary-blue" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-2">{pkg.name}</h3>
                  <p className="text-charcoal/70 mb-4">{pkg.description}</p>
                  <div className="text-3xl font-bold text-primary-blue mb-2">{pkg.price}</div>
                  <div className="text-sm text-charcoal/60 mb-4">Duration: {pkg.duration}</div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-charcoal mb-3">What's Included:</h4>
                  {pkg.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-accent-green flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="w-full bg-accent-coral hover:bg-accent-coral/90 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
              Seasonal Holiday Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              Specialized cleaning services for every major holiday and season in Jacksonville
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="w-16 h-16 bg-primary-blue/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">{service.name}</h3>
                <p className="text-sm text-charcoal/70 mb-3">{service.description}</p>
                <div className="text-lg font-bold text-primary-blue mb-3">{service.price}</div>
                <Link
                  href="/contact"
                  className="text-primary-blue hover:text-primary-blue/80 font-medium text-sm hover:underline"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Holidays */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Why Jacksonville Families Choose Us for Holiday Cleaning
              </h2>
              <p className="text-lg text-charcoal/70 mb-6 leading-relaxed">
                The holidays are busy enough without worrying about cleaning. Our experienced team 
                takes care of everything so you can focus on what matters most - spending time with family.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-charcoal/80">Flexible scheduling around your holiday plans</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-charcoal/80">Eco-friendly cleaning products safe for family</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-charcoal/80">Same-day service available for urgent needs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-charcoal/80">Local Jacksonville team you can trust</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-blue/20 to-accent-aqua/20 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">Holiday Availability</h3>
                <p className="text-charcoal/70 mb-4">We work around your schedule</p>
                <div className="space-y-2 text-sm text-charcoal/70">
                  <p>• Thanksgiving Week</p>
                  <p>• Christmas & New Year</p>
                  <p>• Easter & Spring Holidays</p>
                  <p>• Flexible Scheduling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make Your Jacksonville Home Holiday-Ready?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Book your holiday cleaning service today and enjoy a stress-free, 
            spotless home for all your celebrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              Book Holiday Cleaning
            </Link>
            <a
              href="tel:9044563851"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call (904) 456-3851
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
