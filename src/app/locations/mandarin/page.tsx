'use client';

import { useState } from 'react';
import { MapPin, Phone, Clock, Star, Check, Users, Shield, Truck, Home, Building2, Sparkles, Car, Wind, Scissors, Hammer, Droplets, Shield as ShieldIcon } from 'lucide-react';
import Link from 'next/link';

export default function MandarinPage() {
  const [selectedService, setSelectedService] = useState('residential');

  const services = {
    residential: [
      {
        name: 'Regular House Cleaning',
        description: 'Weekly, bi-weekly, or monthly cleaning for Mandarin homes',
        price: 'Starting at $140',
        duration: '2-3 hours',
        includes: ['Dust all surfaces', 'Vacuum and mop floors', 'Clean bathrooms', 'Kitchen cleaning', 'Make beds', 'Empty trash']
      },
      {
        name: 'Deep Cleaning',
        description: 'Comprehensive cleaning for Mandarin homes needing extra attention',
        price: 'Starting at $230',
        duration: '4-6 hours',
        includes: ['All regular cleaning', 'Inside appliances', 'Baseboards', 'Light fixtures', 'Window tracks', 'Detailed attention']
      },
      {
        name: 'Move-In/Move-Out Cleaning',
        description: 'Thorough cleaning for Mandarin property transitions',
        price: 'Starting at $290',
        duration: '6-8 hours',
        includes: ['Deep cleaning', 'Cabinet interiors', 'Appliance cleaning', 'Final inspection', 'Move-out guarantee']
      }
    ],
    commercial: [
      {
        name: 'Office Cleaning',
        description: 'Professional cleaning for Mandarin businesses and offices',
        price: 'Starting at $190',
        duration: '3-4 hours',
        includes: ['Workstation cleaning', 'Common areas', 'Restrooms', 'Kitchen areas', 'Floor maintenance']
      },
      {
        name: 'Retail Space Cleaning',
        description: 'Storefront and retail space cleaning in Mandarin',
        price: 'Starting at $210',
        duration: '4-5 hours',
        includes: ['Display areas', 'Customer spaces', 'Storage areas', 'Restrooms', 'Entrance areas']
      }
    ]
  };

  const specialServices = [
    {
      name: 'Carpet & Upholstery Cleaning',
      description: 'Professional deep cleaning for Mandarin homes with carpets',
      price: 'Starting at $160',
      icon: Car
    },
    {
      name: 'Window Cleaning',
      description: 'Interior and exterior window cleaning for Mandarin homes',
      price: 'Starting at $130',
      icon: Wind
    },
    {
      name: 'Post-Construction Cleaning',
      description: 'Cleanup after renovations in Mandarin homes',
      price: 'Starting at $260',
      icon: Hammer
    },
    {
      name: 'Kitchen Deep Cleaning',
      description: 'Intensive kitchen cleaning for Mandarin homes',
      price: 'Starting at $190',
      icon: Droplets
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Mandarin Specific */}
      <section 
        className="relative py-20 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(/hero1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Local Business Badge */}
            <div className="inline-flex items-center gap-2 bg-white/95 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/50 shadow-lg">
              <MapPin className="w-4 h-4 text-primary-blue" />
              Serving Mandarin, Jacksonville Since 2015
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              <span className="block">Professional Cleaning</span>
              <span className="block text-cyan-400">in Mandarin</span>
              <span className="block text-lg sm:text-xl lg:text-2xl font-medium text-white/90 mt-3">
                Your Local Cleaning Team in Family-Friendly Mandarin
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed">
              We&apos;re proud to serve the beautiful Mandarin neighborhood of Jacksonville. From spacious family 
              homes to cozy condos, we provide reliable cleaning services that keep Mandarin beautiful and 
              family-friendly. As your neighbors, we understand the unique needs of this growing community.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:9044563851"
                className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call (904) 456-3851
              </a>
              <a
                href="/contact"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                Get Mandarin Quote
                <MapPin className="w-5 h-5" />
              </a>
            </div>

            {/* Local Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Users className="w-6 h-6 text-accent-green" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">120+ Mandarin Families</h3>
                <p className="text-white/80 text-xs leading-relaxed">Trust us with their homes</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-primary-blue/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Shield className="w-6 h-6 text-primary-blue" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">Local Mandarin Team</h3>
                <p className="text-white/80 text-xs leading-relaxed">Jacksonville residents</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-accent-coral/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Star className="w-6 h-6 text-accent-coral" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">5-Star Mandarin Reviews</h3>
                <p className="text-white/80 text-xs leading-relaxed">Local neighborhood ratings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mandarin Neighborhood Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                Why Mandarin Chooses Our Cleaning Services
              </h2>
              <p className="text-lg text-charcoal/70 mb-6 leading-relaxed">
                Mandarin is one of Jacksonville&apos;s most family-friendly neighborhoods, known for its excellent 
                schools, beautiful parks, and spacious homes. We understand the unique cleaning needs of 
                families and provide services that keep homes safe and healthy for children.
              </p>
              <p className="text-lg text-charcoal/70 mb-6 leading-relaxed">
                Our team is familiar with Mandarin&apos;s suburban layout, family-oriented businesses, and the 
                specific challenges that come with maintaining family homes. We provide reliable, consistent 
                cleaning that fits busy family schedules.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent-green" />
                  <span className="text-charcoal/80">Family home expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent-green" />
                  <span className="text-charcoal/80">Child-safe cleaning products</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent-green" />
                  <span className="text-charcoal/80">Flexible family scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent-green" />
                  <span className="text-charcoal/80">Pet-friendly cleaning</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-blue/20 to-accent-aqua/20 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">Mandarin Service Area</h3>
                <p className="text-charcoal/70 mb-4">Covering all of Mandarin and surrounding areas</p>
                <div className="space-y-2 text-sm text-charcoal/70">
                  <p>• Mandarin Road</p>
                  <p>• San Jose Boulevard</p>
                  <p>• Loretto Road</p>
                  <p>• Julington Creek</p>
                  <p>• Fruit Cove</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Mandarin Cleaning Services & Pricing
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Family-friendly cleaning solutions tailored specifically for Mandarin homes and businesses. 
              Competitive pricing with no hidden fees.
            </p>
          </div>

          {/* Service Type Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xl p-2 shadow-lg">
              <button
                onClick={() => setSelectedService('residential')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedService === 'residential'
                    ? 'bg-primary-blue text-white shadow-md'
                    : 'text-charcoal hover:text-primary-blue'
                }`}
              >
                <Home className="w-5 h-5 inline mr-2" />
                Residential
              </button>
              <button
                onClick={() => setSelectedService('commercial')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedService === 'commercial'
                    ? 'bg-primary-blue text-white shadow-md'
                    : 'text-charcoal hover:text-primary-blue'
                }`}
              >
                <Building2 className="w-5 h-5 inline mr-2" />
                Commercial
              </button>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[selectedService as keyof typeof services].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-charcoal mb-3">{service.name}</h3>
                  <p className="text-charcoal/70 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-primary-blue mb-2">{service.price}</div>
                  <div className="text-sm text-charcoal/60 mb-4">Duration: {service.duration}</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-charcoal mb-3">What&apos;s Included:</h4>
                  {service.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-accent-green flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="w-full bg-accent-coral hover:bg-accent-coral/90 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Get Mandarin Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Specialized Cleaning Services in Mandarin
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Additional services to keep your Mandarin home or business in perfect condition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="w-16 h-16 bg-primary-blue/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">{service.name}</h3>
                <p className="text-sm text-charcoal/70 mb-3">{service.description}</p>
                <div className="text-lg font-bold text-primary-blue mb-3">{service.price}</div>
                <a
                  href="/contact"
                  className="text-primary-blue hover:text-primary-blue/80 font-medium text-sm hover:underline"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandarin CTA */}
      <section className="py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Experience Mandarin&apos;s Trusted Cleaning Service?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join over 120 Mandarin families who trust us with their homes. 
            Get your free quote today and see why we&apos;re the neighborhood's choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9044563851"
              className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call (904) 456-3851
            </a>
            <a
              href="/contact"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-3"
            >
              Get Free Quote
              <MapPin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Back to Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            href="/locations"
            className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-blue/80 font-semibold text-lg transition-colors duration-200"
          >
            <MapPin className="w-5 h-5" />
            View All Jacksonville Service Areas
          </Link>
        </div>
      </section>
    </div>
  );
}



