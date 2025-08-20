'use client';

import React from 'react';
import Link from 'next/link';
import { AlertTriangle, Clock, Phone, Shield, Sparkles, Home, Building2, Users, CheckCircle, Zap, Star, MapPin } from 'lucide-react';

export default function EmergencyCleaningPage() {
  const emergencyServices = [
    {
      name: 'Same-Day Cleaning',
      description: 'Urgent cleaning service within 4-6 hours',
      price: 'Starting at $300',
      response: 'Within 2 hours',
      includes: [
        'Immediate response team dispatch',
        'Emergency cleaning assessment',
        'Priority scheduling',
        'Rush service fee included',
        'Quality guarantee',
        'Follow-up inspection'
      ],
      icon: Zap,
      popular: true
    },
    {
      name: '2-Hour Response',
      description: 'Ultra-fast cleaning for critical situations',
      price: 'Starting at $400',
      response: 'Within 2 hours',
      includes: [
        'Emergency team on standby',
        'Immediate dispatch',
        'Priority over regular bookings',
        'Rush service included',
        'Quality guarantee',
        '24-hour support'
      ],
      icon: Clock
    },
    {
      name: 'Overnight Cleaning',
      description: 'Clean while you sleep - next morning ready',
      price: 'Starting at $250',
      response: 'Next morning',
      includes: [
        'After-hours cleaning',
        'Quiet operation',
        'Morning inspection',
        'Quality guarantee',
        'Flexible scheduling',
        'Cost-effective option'
      ],
      icon: Home
    }
  ];

  const emergencyScenarios = [
    {
      name: 'Property Showings',
      description: 'Real estate agent needs immediate cleaning',
      icon: Home,
      urgency: 'High'
    },
    {
      name: 'Guest Arrival',
      description: 'Unexpected visitors or family coming',
      icon: Users,
      urgency: 'High'
    },
    {
      name: 'Business Meetings',
      description: 'Important client meetings or presentations',
      icon: Building2,
      urgency: 'Critical'
    },
    {
      name: 'Health Emergencies',
      description: 'Allergies, illness, or contamination',
      icon: Shield,
      urgency: 'Critical'
    },
    {
      name: 'Property Damage',
      description: 'Water damage, fire, or construction cleanup',
      icon: AlertTriangle,
      urgency: 'Critical'
    },
    {
      name: 'Event Preparation',
      description: 'Last-minute party or event hosting',
      icon: Star,
      urgency: 'High'
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
            {/* Emergency Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-red-400 shadow-lg">
              <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              Jacksonville Emergency Cleaning - Same Day Service
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight text-white drop-shadow-lg">
              <span className="block">Emergency Cleaning</span>
              <span className="block text-red-300 sm:text-red-400">Same Day Service</span>
              <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mt-2 sm:mt-3 drop-shadow-md">
                When You Need Cleaning Fast in Jacksonville
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 drop-shadow-md">
              Urgent cleaning emergencies? We respond within 2-4 hours across Jacksonville. 
              Same-day service for property showings, guest arrivals, business meetings, and more.
            </p>

            {/* Emergency CTA */}
            <div className="bg-red-500/90 backdrop-blur-sm rounded-2xl p-6 mb-8 sm:mb-10 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center sm:text-left">
                  <h3 className="text-white font-bold text-lg mb-2">Need Cleaning NOW?</h3>
                  <p className="text-white/90 text-sm">Call for immediate response</p>
                </div>
                <a
                  href="tel:9044563851"
                  className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-bold text-lg transition-colors duration-200 flex items-center gap-3 whitespace-nowrap"
                >
                  <Phone className="w-5 h-5" />
                  (904) 456-3851
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mt-8 sm:mt-10 px-4">
              <div className="bg-white/20 sm:bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/30 sm:bg-red-500/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2 drop-shadow-sm">2-4 Hour Response</h3>
                <p className="text-white text-xs leading-relaxed drop-shadow-sm">Emergency speed</p>
              </div>

              <div className="bg-white/20 sm:bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-blue/30 sm:bg-primary-blue/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2 drop-shadow-sm">Licensed & Insured</h3>
                <p className="text-white text-xs leading-relaxed drop-shadow-sm">Jacksonville trusted</p>
              </div>

              <div className="bg-white/20 sm:bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/15 transition-all duration-300 text-center sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-green/30 sm:bg-accent-green/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2 drop-shadow-sm">Quality Guaranteed</h3>
                <p className="text-white text-xs leading-relaxed drop-shadow-sm">Satisfaction assured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
              Jacksonville Emergency Cleaning Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              When you need cleaning fast, our emergency response team is ready to help. 
              Available 7 days a week across all of Jacksonville.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {emergencyServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300 border-2 ${service.popular ? 'border-red-500' : 'border-transparent'} relative`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-2">{service.name}</h3>
                  <p className="text-charcoal/70 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-red-500 mb-2">{service.price}</div>
                  <div className="text-sm text-charcoal/60 mb-4">Response: {service.response}</div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-charcoal mb-3">What's Included:</h4>
                  {service.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-accent-green flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Book Emergency Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Scenarios */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
              Common Emergency Cleaning Scenarios
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              These are the most common situations where Jacksonville residents need emergency cleaning services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyScenarios.map((scenario, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-blue/20 rounded-xl flex items-center justify-center">
                    <scenario.icon className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">{scenario.name}</h3>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      scenario.urgency === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {scenario.urgency}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-charcoal/70 mb-4">{scenario.description}</p>
                <Link
                  href="/contact"
                  className="text-primary-blue hover:text-primary-blue/80 font-medium text-sm hover:underline"
                >
                  Get Emergency Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Emergencies */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Why Jacksonville Chooses Us for Emergency Cleaning
              </h2>
              <p className="text-lg text-charcoal/70 mb-6 leading-relaxed">
                When you need cleaning fast, you need a team you can trust. Our emergency response 
                service is designed for Jacksonville's urgent cleaning needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-charcoal/80">Local Jacksonville team - we know the area</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-charcoal/80">Licensed, insured, and background-checked staff</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-charcoal/80">Available 7 days a week, including holidays</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-charcoal/80">Quality guarantee - we stand by our work</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">Emergency Response</h3>
                <p className="text-charcoal/70 mb-4">We're here when you need us most</p>
                <div className="space-y-2 text-sm text-charcoal/70">
                  <p>• 2-4 Hour Response Time</p>
                  <p>• 7 Days a Week</p>
                  <p>• All Jacksonville Areas</p>
                  <p>• 24/7 Phone Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 sm:mb-6">
              Emergency Cleaning Service Areas
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              We provide emergency cleaning services across all of Jacksonville and surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Riverside', 'San Marco', 'Mandarin', 'Arlington',
              'Jacksonville Beach', 'Atlantic Beach', 'Neptune Beach',
              'Ponte Vedra Beach', 'Orange Park', 'Southside',
              'Downtown Jacksonville', 'Murray Hill', 'Avondale'
            ].map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="w-12 h-12 bg-primary-blue/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-primary-blue" />
                </div>
                <h3 className="font-semibold text-charcoal">{area}</h3>
                <p className="text-xs text-charcoal/70 mt-1">2-4 Hour Response</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Need Emergency Cleaning in Jacksonville?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Don't wait - call now for immediate response. Our emergency cleaning team 
            is ready to help you across all of Jacksonville.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9044563851"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-200 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call (904) 456-3851 NOW
            </a>
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-3 border-2 border-white"
            >
              <AlertTriangle className="w-5 h-5" />
              Emergency Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
