import React from 'react';
import { MapPin, Star, Shield, Check, Phone, Calendar, Users, Award, Clock, TrendingUp, Home, Building, Car } from 'lucide-react';
import Image from 'next/image';

export default function BaymeadowsPage() {
  const services = [
    'Standard House Cleaning',
    'Deep Cleaning Services',
    'Move-in/Move-out Cleaning',
    'Post-Construction Cleanup',
    'Carpet & Upholstery Cleaning',
    'Window & Gutter Cleaning',
    'Pressure Washing',
    'Recurring Cleaning Plans'
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Complete peace of mind with full coverage'
    },
    {
      icon: Star,
      title: '5-Star Rated',
      description: 'Trusted by Baymeadows families'
    },
    {
      icon: Clock,
      title: 'Reliable Scheduling',
      description: 'On-time service, every time'
    },
    {
      icon: Users,
      title: 'Local Team',
      description: 'Jacksonville-based cleaning professionals'
    }
  ];

  const communityFeatures = [
    'Family-friendly neighborhood',
    'Excellent schools nearby',
    'Shopping centers & restaurants',
    'Parks & recreational areas',
    'Easy access to I-95 & 295',
    'Professional community'
  ];

  const landmarks = [
    'Baymeadows Shopping Center',
    'Baymeadows Golf Course',
    'Baymeadows Park',
    'Baymeadows Library',
    'Baymeadows Medical Center',
    'Baymeadows Executive Center'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 via-primary-blue/85 to-accent-aqua/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white text-primary-blue px-4 py-2 rounded-full text-sm font-medium mb-6 border-2 border-white shadow-lg">
              <MapPin className="w-4 h-4" />
              <span>Jacksonville Neighborhood</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Baymeadows
              <span className="block text-white mt-2 drop-shadow-lg">Cleaning Services</span>
            </h1>
            
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Professional cleaning services for Baymeadows homes and businesses. 
              Serving this vibrant Jacksonville neighborhood with reliable, quality cleaning solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:9044563851"
                className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 border-2 border-accent-coral"
              >
                <Phone className="w-5 h-5" />
                Call for Quote
              </a>
              <a 
                href="/contact-us"
                className="bg-white text-primary-blue hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 border-2 border-white"
              >
                <Calendar className="w-5 h-5" />
                Schedule Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Baymeadows Cleaning Services
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Our Baymeadows cleaning team provides comprehensive cleaning services tailored to this 
                family-friendly Jacksonville neighborhood. From regular maintenance to deep cleaning, 
                we keep Baymeadows homes spotless and comfortable.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-gray-900 font-medium">Licensed, bonded & insured</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-gray-900 font-medium">Local Baymeadows team</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-gray-900 font-medium">Flexible scheduling options</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-blue/5 to-accent-aqua/5 rounded-2xl p-8 border border-primary-blue/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us for Baymeadows?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-primary-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Expertise</h4>
                    <p className="text-gray-600 text-sm">We know Baymeadows homes and families</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent-aqua/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-accent-aqua" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Reliable Service</h4>
                    <p className="text-gray-600 text-sm">Consistent quality, on-time delivery</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-accent-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Family Focused</h4>
                    <p className="text-gray-600 text-sm">Safe cleaning for homes with children</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Complete Cleaning Services for Baymeadows
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From routine maintenance to specialized cleaning, we cover all your Baymeadows cleaning needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 text-center">
                <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Home className="w-6 h-6 text-primary-blue" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">Professional service for Baymeadows homes</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Baymeadows Families Choose Us
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Baymeadows is known for its family-friendly atmosphere and professional community. 
                We understand the unique needs of this neighborhood and provide cleaning services 
                that match the high standards Baymeadows residents expect.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {communityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary-blue" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent-aqua/5 to-primary-blue/5 rounded-2xl p-8 border border-accent-aqua/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Baymeadows Community Highlights</h3>
              <div className="space-y-4">
                {landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent-aqua" />
                    <span className="text-gray-700">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Baymeadows Cleaning Pricing
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Competitive rates for quality cleaning services in the Baymeadows area
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Standard Cleaning</h3>
              <p className="text-gray-700 mb-4">Regular maintenance cleaning for Baymeadows homes</p>
              <div className="text-primary-blue font-bold text-lg">Starting at $120</div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-blue text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Cleaning</h3>
              <p className="text-gray-700 mb-4">Comprehensive cleaning for Baymeadows residences</p>
              <div className="text-primary-blue font-bold text-lg">Starting at $200</div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-accent-aqua/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Move-in/Out</h3>
              <p className="text-gray-700 mb-4">Complete cleaning for Baymeadows transitions</p>
              <div className="text-primary-blue font-bold text-lg">Starting at $250</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Baymeadows Residents Trust Us
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We've built our reputation in Baymeadows through consistent quality and reliable service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready for Professional Cleaning in Baymeadows?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact us today for a free Baymeadows cleaning quote and experience the difference 
            of working with a local cleaning team that understands your neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:9044563851"
              className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (904) 456-3851
            </a>
            <a 
              href="/contact-us"
              className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
