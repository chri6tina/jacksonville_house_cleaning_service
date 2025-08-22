import { Wind, Sparkles, Clock, Users, Shield, Leaf, Check, Star, ArrowRight, Phone, MapPin, Award, Truck, Calendar, Home } from 'lucide-react';
import Link from 'next/link';

export default function GutterCleaningPage() {
  const services = [
    {
      name: 'Residential Gutters',
      price: 'From $120',
      description: 'Complete home gutter cleaning',
      features: ['Downspout cleaning', 'Debris removal', 'Flow testing', 'Minor repairs', 'Safety inspection']
    },
    {
      name: 'Commercial Gutters',
      price: 'From $200',
      description: 'Business and retail cleaning',
      features: ['Multi-story access', 'After-hours service', 'Bulk pricing', 'Regular maintenance', 'Emergency service']
    },
    {
      name: 'Gutter Guards',
      price: 'From $300',
      description: 'Installation and maintenance',
      features: ['Guard installation', 'Custom fitting', 'Warranty coverage', 'Maintenance plans', 'Long-term protection']
    },
    {
      name: 'Emergency Service',
      price: 'From $150',
      description: '24/7 emergency response',
      features: ['Same-day service', 'Storm damage', 'Flooding prevention', 'Priority scheduling', 'Emergency rates']
    }
  ];

  const benefits = [
    {
      title: 'Prevent Water Damage',
      description: 'Protect your home foundation',
      icon: Shield
    },
    {
      title: 'Professional Equipment',
      description: 'Commercial-grade tools',
      icon: Wind
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
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Local Business Badge */}
          <div className="inline-flex items-center gap-2 bg-white/95 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/50 shadow-lg">
            <MapPin className="w-4 h-4 text-orange-600" />
            Jacksonville Gutter Cleaning Experts
          </div>

          <div className="flex justify-center mb-6">
            <Wind className="w-16 h-16 text-orange-200" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Professional Gutter Cleaning
          </h1>
          <p className="text-xl sm:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Protect your Jacksonville home from water damage with our professional gutter cleaning services. 
            Clean gutters prevent foundation issues and protect your investment.
          </p>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-orange-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Award className="w-6 h-6 text-orange-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Licensed & Insured</h3>
              <p className="text-orange-100 text-xs">Jacksonville business since 2015</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-orange-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Truck className="w-6 h-6 text-orange-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Same-Day Service</h3>
              <p className="text-orange-100 text-xs">Available throughout Jacksonville</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-orange-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Star className="w-6 h-6 text-orange-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">100% Guarantee</h3>
              <p className="text-orange-100 text-xs">Satisfaction guaranteed</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Jacksonville Gutter Cleaning?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're your local gutter cleaning experts, serving Jacksonville homes and businesses with 
              professional equipment and comprehensive protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prevent Water Damage</h3>
              <p className="text-gray-700">Protect your home foundation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Equipment</h3>
              <p className="text-gray-700">Commercial-grade tools</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
              <p className="text-gray-700">Available throughout Jacksonville</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jacksonville Local</h3>
              <p className="text-gray-700">Your neighbors since 2015</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Gutter Cleaning Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We follow a proven 4-step process to ensure your gutters are thoroughly cleaned and protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inspection</h3>
              <p className="text-gray-700">Assess gutter condition and identify issues</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Debris Removal</h3>
              <p className="text-gray-700">Clear all leaves, dirt, and blockages</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Cleaning</h3>
              <p className="text-gray-700">Professional cleaning with specialized tools</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flow Testing</h3>
              <p className="text-gray-700">Ensure proper drainage and function</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Jacksonville Gutter Cleaning Pricing
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the perfect gutter cleaning package for your Jacksonville home. 
              All packages include our professional service and satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wind className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{service.price}</div>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="block w-full text-center py-3 px-6 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready for Cleaner Gutters?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Contact us today for gutter cleaning services in Jacksonville. 
            Free estimates and same-day service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9044563851"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (904) 456-3851</span>
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




