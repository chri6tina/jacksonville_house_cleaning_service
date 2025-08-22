import { Building, Sparkles, Clock, Users, Shield, Leaf, Check, Star, ArrowRight, Phone, MapPin, Award, Truck, Calendar, Home } from 'lucide-react';
import Link from 'next/link';

export default function ApartmentCleaningPage() {
  const services = [
    {
      name: 'Studio Apartment',
      price: 'From $100',
      description: 'Perfect for efficiency apartments',
      features: ['Complete cleaning', 'Kitchen deep clean', 'Bathroom sanitization', 'Floor care', 'Dust removal']
    },
    {
      name: '1 Bedroom',
      price: 'From $125',
      description: 'Ideal for singles and couples',
      features: ['All studio services', 'Bedroom cleaning', 'Closet organization', 'Extended time', 'Priority scheduling']
    },
    {
      name: '2 Bedroom',
      price: 'From $160',
      description: 'Great for roommates and families',
      features: ['All 1-bedroom services', 'Second bedroom', 'Living area focus', 'Kitchen deep clean', 'Bathroom care']
    },
    {
      name: '3+ Bedroom',
      price: 'From $200',
      description: 'Full apartment cleaning',
      features: ['All 2-bedroom services', 'Additional bedrooms', 'Bonus rooms', 'Extended service time', 'Bulk pricing']
    }
  ];

  const benefits = [
    {
      title: 'Flexible Scheduling',
      description: 'Work around your schedule',
      icon: Clock
    },
    {
      title: 'Eco-Friendly Products',
      description: 'Safe for your family and pets',
      icon: Leaf
    },
    {
      title: 'Same-Day Service',
      description: 'Available throughout Jacksonville',
      icon: Truck
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
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Local Business Badge */}
          <div className="inline-flex items-center gap-2 bg-white/95 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/50 shadow-lg">
            <MapPin className="w-4 h-4 text-indigo-600" />
            Jacksonville Apartment Cleaning Experts
          </div>

          <div className="flex justify-center mb-6">
            <Building className="w-16 h-16 text-indigo-200" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Professional Apartment Cleaning
          </h1>
          <p className="text-xl sm:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Keep your Jacksonville apartment spotless with our professional cleaning services. 
            From studios to multi-bedroom units, we deliver consistent quality every time.
          </p>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-indigo-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Award className="w-6 h-6 text-indigo-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Licensed & Insured</h3>
              <p className="text-white/80 text-xs">Jacksonville business since 2015</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-indigo-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Truck className="w-6 h-6 text-indigo-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Same-Day Service</h3>
              <p className="text-white/80 text-xs">Available throughout Jacksonville</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-indigo-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Star className="w-6 h-6 text-indigo-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">100% Guarantee</h3>
              <p className="text-white/80 text-xs">Satisfaction guaranteed</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:9044563851"
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call for Quote
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What&apos;s Included in Apartment Cleaning?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our apartment cleaning services are designed specifically for smaller spaces, 
              ensuring every corner gets the attention it deserves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-indigo-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <div className="text-sm text-gray-700 mb-4">{service.description}</div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{service.price}</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="block w-full text-center py-3 px-6 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Apartment Cleaning?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Apartment living requires specialized cleaning approaches that we&apos;ve perfected 
              through years of experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready for a Cleaner Apartment?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for apartment cleaning services in Jacksonville. 
            Free estimates and flexible scheduling available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9044563851"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (904) 456-3851</span>
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}





