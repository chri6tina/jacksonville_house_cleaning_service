'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, Star, Home, Shield, Users, CheckCircle, Award, Leaf, Sparkles } from 'lucide-react';

export default function RiversideAvondalePage() {
  const localServices = [
    {
      name: 'Historic Home Cleaning',
      description: 'Specialized cleaning for Riverside & Avondale\'s historic homes',
      price: 'Starting at $180',
      features: ['Period-appropriate cleaning methods', 'Gentle on vintage materials', 'Attention to architectural details']
    },
    {
      name: 'Luxury Home Maintenance',
      description: 'Premium cleaning for upscale Riverside residences',
      price: 'Starting at $250',
      features: ['High-end finish care', 'Premium cleaning products', 'White-glove service']
    },
    {
      name: 'Garden District Care',
      description: 'Comprehensive cleaning including outdoor spaces',
      price: 'Starting at $220',
      features: ['Porch and patio cleaning', 'Window and screen care', 'Entryway maintenance']
    }
  ];

  const neighborhoodFeatures = [
    'Historic district with unique architectural styles',
    'Tree-lined streets and mature landscaping',
    'Proximity to downtown Jacksonville',
    'High-end residential properties',
    'Active community association',
    'Walking distance to shops and restaurants'
  ];

  const localLandmarks = [
    'Riverside Arts Market',
    'Memorial Park',
    'Cummer Museum of Art & Gardens',
    'Five Points District',
    'Riverside Park',
    'Avondale Historic District'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Local Business Style */}
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
        <div className="absolute inset-0 bg-black/60 sm:bg-black/75"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Local Business Badge */}
            <div className="inline-flex items-center gap-2 bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-white shadow-lg">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary-blue" />
              Serving Riverside & Avondale Since 2015
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight text-white drop-shadow-lg">
              <span className="block">Riverside & Avondale</span>
              <span className="block text-cyan-300 sm:text-cyan-400">House Cleaning Services</span>
              <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mt-2 sm:mt-3 drop-shadow-md">
                Historic District Cleaning Specialists
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 drop-shadow-md">
              Professional cleaning services tailored for Riverside & Avondale's historic homes and luxury residences. 
              Our Jacksonville team understands the unique needs of this prestigious neighborhood.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 px-4">
              <Link
                href="/contact?location=Riverside%20%26%20Avondale"
                className="bg-accent-coral hover:bg-accent-coral/90 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                Get Riverside Quote
              </Link>
              <a
                href="tel:9044563851"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-gray-800 px-6 sm:px-8 py-3 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:w-5" />
                Call (904) 456-3851
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mt-8 sm:mt-10 px-4">
              <div className="bg-white/20 sm:bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-green/30 sm:bg-accent-green/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2 drop-shadow-sm">Historic Home Experts</h3>
                <p className="text-white text-xs leading-relaxed drop-shadow-sm">Riverside specialists</p>
              </div>

              <div className="bg-white/20 sm:bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-blue/30 sm:bg-primary-blue/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2 drop-shadow-sm">Luxury Service</h3>
                <p className="text-white text-xs leading-relaxed drop-shadow-sm">Premium standards</p>
              </div>

              <div className="bg-white/20 sm:bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/15 transition-all duration-300 text-center sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-coral/30 sm:bg-accent-coral/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent-coral" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2 drop-shadow-sm">Local Team</h3>
                <p className="text-white text-xs leading-relaxed drop-shadow-sm">Jacksonville neighbors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Riverside & Avondale: Jacksonville's Historic Gem
              </h2>
              <p className="text-lg text-charcoal/70 mb-6 leading-relaxed">
                Riverside & Avondale represents the heart of Jacksonville's historic charm. This prestigious neighborhood 
                features stunning historic homes, tree-lined streets, and a vibrant community atmosphere that requires 
                specialized cleaning care.
              </p>
              <div className="space-y-4">
                {neighborhoodFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-green" />
                    <span className="text-charcoal/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-blue/20 to-accent-aqua/20 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">Local Landmarks</h3>
                <p className="text-charcoal/70 mb-4">Discover Riverside & Avondale</p>
                <div className="space-y-2 text-sm text-charcoal/70">
                  {localLandmarks.map((landmark, index) => (
                    <p key={index}>• {landmark}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
              Riverside & Avondale Specialized Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              Our Jacksonville team understands the unique needs of historic homes and luxury residences in this prestigious neighborhood
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {localServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-primary-blue" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-2">{service.name}</h3>
                  <p className="text-charcoal/70 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-primary-blue mb-2">{service.price}</div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-charcoal mb-3">What's Included:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-accent-green flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/contact?location=Riverside%20%26%20Avondale&service=${encodeURIComponent(service.name)}`}
                  className="w-full bg-accent-coral hover:bg-accent-coral/90 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Book This Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Riverside & Avondale */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
              Why Riverside & Avondale Homeowners Choose Us
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              Our Jacksonville team brings local expertise and specialized knowledge to every Riverside & Avondale home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Leaf,
                title: 'Historic Home Expertise',
                description: 'Specialized cleaning methods for vintage materials and architectural details'
              },
              {
                icon: Shield,
                title: 'Premium Standards',
                description: 'Luxury service quality that matches your home\'s prestige'
              },
              {
                icon: MapPin,
                title: 'Local Knowledge',
                description: 'Deep understanding of Riverside & Avondale\'s unique characteristics'
              },
              {
                icon: Clock,
                title: 'Flexible Scheduling',
                description: 'Work around your schedule and neighborhood events'
              },
              {
                icon: Star,
                title: '5-Star Service',
                description: 'Consistently exceeding Riverside & Avondale expectations'
              },
              {
                icon: Sparkles,
                title: 'Attention to Detail',
                description: 'Every corner, every surface, every historic feature cared for'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="w-16 h-16 bg-primary-blue/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">{feature.title}</h3>
                <p className="text-sm text-charcoal/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
              What Riverside & Avondale Residents Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: 'Sarah M.',
                location: 'Riverside Historic District',
                rating: 5,
                comment: 'They understand historic homes! Gentle on our vintage fixtures while delivering spotless results.'
              },
              {
                name: 'Michael R.',
                location: 'Avondale',
                rating: 5,
                comment: 'Professional service that matches our neighborhood\'s standards. Highly recommend!'
              },
              {
                name: 'Jennifer L.',
                location: 'Riverside',
                rating: 5,
                comment: 'Local team that knows Jacksonville. They\'ve been cleaning our home for years.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-charcoal/80 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-charcoal/60">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Riverside & Avondale's Premier Cleaning Service?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Join your neighbors who trust us with their historic homes. Get your free quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?location=Riverside%20%26%20Avondale"
              className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-3"
            >
              <Home className="w-5 h-5" />
              Get Free Quote
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
