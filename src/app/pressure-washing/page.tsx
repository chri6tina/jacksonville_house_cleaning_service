import { Droplets, Sparkles, Clock, Users, Shield, Leaf, Check, Star, ArrowRight, Phone, MapPin, Award, Truck, Calendar, Zap } from 'lucide-react';
import Link from 'next/link';

export default function PressureWashingPage() {
  const services = [
    {
      name: 'House Washing',
      price: 'From $200',
      description: 'Complete exterior house cleaning',
      features: ['Siding cleaning', 'Gutters included', 'Walkways', 'Driveway', 'Eco-friendly solutions']
    },
    {
      name: 'Driveway & Walkways',
      price: 'From $150',
      description: 'Remove oil stains and grime',
      features: ['Oil stain removal', 'Concrete cleaning', 'Paver restoration', 'Sealant application', 'Quick drying']
    },
    {
      name: 'Deck & Patio',
      price: 'From $180',
      description: 'Restore outdoor living spaces',
      features: ['Wood restoration', 'Mold removal', 'Stain preparation', 'Sealant application', 'Long-lasting results']
    },
    {
      name: 'Commercial Washing',
      price: 'From $300',
      description: 'Business and retail cleaning',
      features: ['Storefront cleaning', 'Parking lots', 'Loading docks', 'After-hours service', 'Bulk pricing']
    }
  ];

  const benefits = [
    {
      title: 'Professional Equipment',
      description: 'Commercial-grade pressure washers',
      icon: Zap
    },
    {
      title: 'Eco-Friendly Solutions',
      description: 'Safe for plants and pets',
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
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Local Business Badge */}
          <div className="inline-flex items-center gap-2 bg-white/95 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/50 shadow-lg">
            <MapPin className="w-4 h-4 text-cyan-600" />
            Jacksonville Pressure Washing Experts
          </div>

          <div className="flex justify-center mb-6">
            <Droplets className="w-16 h-16 text-cyan-200" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Professional Pressure Washing
          </h1>
          <p className="text-xl sm:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Restore your Jacksonville property's curb appeal with our professional pressure washing services. 
            From houses to driveways, we bring the shine back.
          </p>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-cyan-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Award className="w-6 h-6 text-cyan-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Licensed & Insured</h3>
              <p className="text-cyan-100 text-xs">Jacksonville business since 2015</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-cyan-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Truck className="w-6 h-6 text-cyan-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Same-Day Service</h3>
              <p className="text-cyan-100 text-xs">Available throughout Jacksonville</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-cyan-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Star className="w-6 h-6 text-cyan-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">100% Guarantee</h3>
              <p className="text-cyan-100 text-xs">Satisfaction guaranteed</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors duration-200 flex items-center justify-center space-x-2"
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
              Why Choose Our Jacksonville Pressure Washing?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're your local pressure washing experts, serving Jacksonville homes and businesses with 
              professional equipment and eco-friendly solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Equipment</h3>
              <p className="text-gray-700">Commercial-grade pressure washers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Solutions</h3>
              <p className="text-gray-700">Safe for plants and pets</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
              <p className="text-gray-700">Available throughout Jacksonville</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-cyan-600" />
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
              Our Pressure Washing Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We follow a proven 4-step process to ensure your property is thoroughly cleaned and restored.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-700">Evaluate surface condition and identify problem areas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Treatment</h3>
              <p className="text-gray-700">Apply eco-friendly solutions to break down grime</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pressure Washing</h3>
              <p className="text-gray-700">Professional cleaning with appropriate pressure settings</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Final Inspection</h3>
              <p className="text-gray-700">Ensure quality and customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Jacksonville Pressure Washing Pricing
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the perfect pressure washing package for your Jacksonville property. 
              All packages include our professional service and satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-cyan-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">{service.price}</div>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="block w-full text-center py-3 px-6 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready for a Cleaner Property?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Contact us today for pressure washing services in Jacksonville. 
            Free estimates and same-day service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9044563851"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (904) 456-3851</span>
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




