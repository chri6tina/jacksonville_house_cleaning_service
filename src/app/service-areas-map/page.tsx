'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, Shield, Star, Users, CheckCircle, Navigation, Home, Building2, Car, Wind, Sparkles } from 'lucide-react';

export default function ServiceAreasMapPage() {
  const serviceAreas = [
    {
      name: 'Riverside',
      description: 'Historic district with beautiful homes',
      services: ['Residential', 'Deep Cleaning', 'Move-In/Out'],
      icon: Home,
      coverage: 'Full Service',
      response: 'Same Day'
    },
    {
      name: 'San Marco',
      description: 'Upscale neighborhood near downtown',
      services: ['Residential', 'Commercial', 'Deep Cleaning'],
      icon: Building2,
      coverage: 'Full Service',
      response: 'Same Day'
    },
    {
      name: 'Mandarin',
      description: 'Family-friendly suburban area',
      services: ['Residential', 'Regular Cleaning', 'Deep Cleaning'],
      icon: Home,
      coverage: 'Full Service',
      response: 'Same Day'
    },
    {
      name: 'Arlington',
      description: 'Growing residential community',
      services: ['Residential', 'Move-In/Out', 'Regular Cleaning'],
      icon: Home,
      coverage: 'Full Service',
      response: 'Same Day'
    },
    {
      name: 'Jacksonville Beach',
      description: 'Coastal area with condos and homes',
      services: ['Residential', 'Vacation Rentals', 'Deep Cleaning'],
      icon: Home,
      coverage: 'Full Service',
      response: 'Same Day'
    },
    {
      name: 'Atlantic Beach',
      description: 'Beachfront community',
      services: ['Residential', 'Vacation Rentals', 'Regular Cleaning'],
      icon: Home,
      coverage: 'Full Service',
      response: 'Same Day'
    },
    {
      name: 'Neptune Beach',
      description: 'Quiet beach neighborhood',
      services: ['Residential', 'Deep Cleaning', 'Regular Cleaning'],
      icon: Home,
      coverage: 'Full Service',
      response: 'Same Day'
    },
    {
      name: 'Ponte Vedra Beach',
      description: 'Luxury homes and golf communities',
      services: ['Residential', 'Deep Cleaning', 'Regular Cleaning'],
      icon: Home,
      coverage: 'Full Service',
      response: 'Same Day'
    },
    {
      name: 'Orange Park',
      description: 'Suburban area with family homes',
      services: ['Residential', 'Move-In/Out', 'Regular Cleaning'],
      icon: Home,
      coverage: 'Full Service',
      response: 'Same Day'
    },
    {
      name: 'Southside',
      description: 'Business district and residential areas',
      services: ['Residential', 'Commercial', 'Office Cleaning'],
      icon: Building2,
      coverage: 'Full Service',
      response: 'Same Day'
    },
    {
      name: 'Downtown Jacksonville',
      description: 'Urban center with offices and condos',
      services: ['Commercial', 'Office Cleaning', 'Residential'],
      icon: Building2,
      coverage: 'Full Service',
      response: 'Same Day'
    },
    {
      name: 'Murray Hill',
      description: 'Historic neighborhood near downtown',
      services: ['Residential', 'Deep Cleaning', 'Regular Cleaning'],
      icon: Home,
      coverage: 'Full Service',
      response: 'Same Day'
    },
    {
      name: 'Avondale',
      description: 'Charming historic district',
      services: ['Residential', 'Deep Cleaning', 'Move-In/Out'],
      icon: Home,
      coverage: 'Full Service',
      response: 'Same Day'
    }
  ];

  const coverageZones = [
    {
      zone: 'Primary Coverage',
      areas: 'Jacksonville Metro Area',
      response: 'Same Day',
      services: 'All Services Available'
    },
    {
      zone: 'Extended Coverage',
      areas: 'St. Johns County',
      response: 'Next Day',
      services: 'Most Services Available'
    },
    {
      zone: 'Premium Coverage',
      areas: 'Clay County',
      response: 'Next Day',
      services: 'Most Services Available'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-8 sm:py-12 lg:py-16 overflow-hidden"
        style={{
          backgroundImage: 'url(/hero1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/75"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Local Business Badge */}
            <div className="inline-flex items-center gap-2 bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-white shadow-lg">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary-blue" />
              Serving All of Jacksonville Since 2015
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight text-white drop-shadow-lg">
              <span className="block">Jacksonville Service</span>
              <span className="block text-cyan-300 sm:text-cyan-400">Areas Map</span>
              <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mt-2 sm:mt-3 drop-shadow-md">
                Complete Coverage Across All Neighborhoods
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 drop-shadow-md">
              From Riverside to the Beaches, Mandarin to Arlington - we provide professional 
              cleaning services across all of Jacksonville and surrounding areas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 px-4">
              <Link
                href="/contact"
                className="bg-accent-coral hover:bg-accent-coral/90 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                Check Your Area
              </Link>
              <a
                href="tel:9044563851"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-gray-800 px-6 sm:px-8 py-3 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Call (904) 456-3851
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mt-8 sm:mt-10 px-4">
              <div className="bg-white/20 sm:bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-green/30 sm:bg-accent-green/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Navigation className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2 drop-shadow-sm">25+ Areas Covered</h3>
                <p className="text-white text-xs leading-relaxed drop-shadow-sm">Jacksonville wide</p>
              </div>

              <div className="bg-white/20 sm:bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-blue/30 sm:bg-primary-blue/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2 drop-shadow-sm">Same Day Service</h3>
                <p className="text-white text-xs leading-relaxed drop-shadow-sm">Most areas</p>
              </div>

              <div className="bg-white/20 sm:bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/15 transition-all duration-300 text-center sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-coral/30 sm:bg-accent-coral/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-accent-coral" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2 drop-shadow-sm">Local Team</h3>
                <p className="text-white text-xs leading-relaxed drop-shadow-sm">Jacksonville residents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Zones */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
              Jacksonville Coverage Zones
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              We've organized our service areas into coverage zones to ensure the best 
              possible service for every Jacksonville neighborhood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {coverageZones.map((zone, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    index === 0 ? 'bg-accent-coral/20' : index === 1 ? 'bg-primary-blue/20' : 'bg-accent-green/20'
                  }`}>
                    <MapPin className={`w-8 h-8 ${
                      index === 0 ? 'text-accent-coral' : index === 1 ? 'text-primary-blue' : 'text-accent-green'
                    }`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-2">{zone.zone}</h3>
                  <p className="text-charcoal/70 mb-4">{zone.areas}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-accent-green" />
                    <span className="text-sm text-charcoal/70">Response: {zone.response}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-accent-green" />
                    <span className="text-sm text-charcoal/70">{zone.services}</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200 ${
                    index === 0 ? 'bg-accent-coral hover:bg-accent-coral/90 text-white' : 
                    index === 1 ? 'bg-primary-blue hover:bg-primary-blue/90 text-white' : 
                    'bg-accent-green hover:bg-accent-green/90 text-white'
                  }`}
                >
                  Check Coverage
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Service Areas */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
              Jacksonville Neighborhoods We Serve
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              Click on any neighborhood to learn about our services in that area
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:bg-gray-100 transition-all duration-200 hover:shadow-md cursor-pointer group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary-blue/20 rounded-lg flex items-center justify-center">
                    <area.icon className="w-5 h-5 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal group-hover:text-primary-blue transition-colors">
                      {area.name}
                    </h3>
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-accent-green/20 text-accent-green">
                      {area.coverage}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-charcoal/70 mb-3">{area.description}</p>
                
                <div className="space-y-2 mb-4">
                  <h4 className="text-xs font-semibold text-charcoal/80 uppercase tracking-wide">Services:</h4>
                  <div className="flex flex-wrap gap-1">
                    {area.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="inline-block px-2 py-1 rounded text-xs bg-primary-blue/10 text-primary-blue">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-charcoal/60">
                  <span>Response: {area.response}</span>
                  <Link
                    href={`/locations/${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-primary-blue hover:text-primary-blue/80 font-medium hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Legend */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
              Service Area Legend
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              Understanding our coverage and service levels across Jacksonville
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <div className="w-4 h-4 bg-accent-coral rounded-full"></div>
                Primary Coverage
              </h3>
              <p className="text-charcoal/70 mb-4">
                Jacksonville metro area with same-day service availability and all cleaning services.
              </p>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>• Same-day service</li>
                <li>• All cleaning services</li>
                <li>• Regular scheduling</li>
                <li>• Emergency response</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <div className="w-4 h-4 bg-primary-blue rounded-full"></div>
                Extended Coverage
              </h3>
              <p className="text-charcoal/70 mb-4">
                St. Johns County areas with next-day service and most cleaning services available.
              </p>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>• Next-day service</li>
                <li>• Most cleaning services</li>
                <li>• Flexible scheduling</li>
                <li>• Emergency response</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <div className="w-4 h-4 bg-accent-green rounded-full"></div>
                Premium Coverage
              </h3>
              <p className="text-charcoal/70 mb-4">
                Clay County areas with next-day service and specialized cleaning services.
              </p>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>• Next-day service</li>
                <li>• Specialized services</li>
                <li>• Advanced scheduling</li>
                <li>• Premium support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Check Your Jacksonville Service Area?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Find out if we serve your neighborhood and get a free quote for professional 
            cleaning services in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-3"
            >
              <MapPin className="w-5 h-5" />
              Check Your Area
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





