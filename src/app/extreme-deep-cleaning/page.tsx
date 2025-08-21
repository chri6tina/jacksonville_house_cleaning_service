import { Sparkles, Clock, Users, Shield, Leaf, Check, Star, ArrowRight, Phone, MapPin, Award, Truck, Calendar, Zap, Home } from 'lucide-react';
import Link from 'next/link';

export default function ExtremeDeepCleaningPage() {
  const services = [
    {
      name: 'Standard Deep Clean',
      price: 'From $300',
      description: 'Comprehensive home deep cleaning',
      features: ['Baseboards & trim', 'Inside appliances', 'Light fixtures', 'Window tracks', 'Cabinet interiors']
    },
    {
      name: 'Extreme Deep Clean',
      price: 'From $500',
      description: 'Intensive cleaning for neglected homes',
      features: ['All standard services', 'Wall washing', 'Ceiling cleaning', 'Grout restoration', 'Odor elimination']
    },
    {
      name: 'Move-Out Deep Clean',
      price: 'From $400',
      description: 'Complete property restoration',
      features: ['Full home cleaning', 'Appliance deep clean', 'Carpet treatment', 'Final inspection', 'Guaranteed results']
    },
    {
      name: 'Hoarder Cleanup',
      price: 'From $800',
      description: 'Professional hoarding cleanup',
      features: ['Safe removal', 'Biohazard cleaning', 'Odor treatment', 'Disposal services', 'Follow-up support']
    }
  ];

  const benefits = [
    {
      title: 'Professional Equipment',
      description: 'Commercial-grade cleaning tools',
      icon: Zap
    },
    {
      title: 'Eco-Friendly Products',
      description: 'Safe for your family and pets',
      icon: Leaf
    },
    {
      title: 'Same-Day Service',
      description: 'Available throughout Jacksonville',
      icon: Clock
    },
    {
      title: 'Jacksonville Local',
      description: 'Your neighbors since 2015',
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Local Business Style */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Local Business Badge */}
          <div className="inline-flex items-center gap-2 bg-white/95 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/50 shadow-lg">
            <MapPin className="w-4 h-4 text-purple-600" />
            Jacksonville Extreme Deep Cleaning Experts
          </div>

          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-purple-200" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Extreme Deep Cleaning Services
          </h1>
          <p className="text-xl sm:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Transform your Jacksonville home with our extreme deep cleaning services. 
            We tackle the toughest cleaning challenges with professional expertise.
          </p>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-purple-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Award className="w-6 h-6 text-purple-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Licensed & Insured</h3>
              <p className="text-white/80 text-xs">Jacksonville business since 2015</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-purple-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Truck className="w-6 h-6 text-purple-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Same-Day Service</h3>
              <p className="text-white/80 text-xs">Available throughout Jacksonville</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-purple-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Star className="w-6 h-6 text-purple-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">100% Guarantee</h3>
              <p className="text-white/80 text-xs">Satisfaction guaranteed</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:9044563851"
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call for Quote
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Jacksonville Extreme Deep Cleaning Services
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Choose the perfect deep cleaning package for your Jacksonville home. 
              All packages include our professional service and satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">{service.name}</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{service.price}</div>
                  <p className="text-charcoal/70 text-sm">{service.description}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-charcoal/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="block w-full text-center py-3 px-6 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Why Choose Our Jacksonville Extreme Deep Cleaning?
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We're your local extreme deep cleaning experts, providing reliable, professional service that 
              transforms your Jacksonville home completely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">{benefit.title}</h3>
                <p className="text-charcoal/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for extreme deep cleaning services in Jacksonville. 
            Free estimates and same-day service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9044563851"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (904) 456-3851</span>
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}





