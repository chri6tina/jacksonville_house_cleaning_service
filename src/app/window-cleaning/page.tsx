import { Wind, Sparkles, Clock, Users, Shield, Leaf, Check, Star, ArrowRight, Phone, MapPin, Award, Truck } from 'lucide-react';
import Link from 'next/link';

export default function WindowCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Local Business Style */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Local Business Badge */}
          <div className="inline-flex items-center gap-2 bg-white/95 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/50 shadow-lg">
            <MapPin className="w-4 h-4 text-sky-600" />
            Jacksonville Window Cleaning Experts
          </div>

                      <div className="flex justify-center mb-6">
              <Wind className="w-16 h-16 text-sky-200" />
            </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Professional Window Cleaning
          </h1>
          <p className="text-xl sm:text-2xl text-sky-100 mb-8 max-w-3xl mx-auto">
            Crystal clear windows for your Jacksonville home with our professional window cleaning services
          </p>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-sky-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Award className="w-6 h-6 text-sky-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Licensed & Insured</h3>
              <p className="text-sky-100 text-xs">Jacksonville business since 2015</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-sky-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Truck className="w-6 h-6 text-sky-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Same-Day Service</h3>
              <p className="text-sky-100 text-xs">Available throughout Jacksonville</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-sky-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Star className="w-6 h-6 text-sky-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">100% Guarantee</h3>
              <p className="text-sky-100 text-xs">Satisfaction guaranteed</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors duration-200 flex items-center justify-center space-x-2"
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
              Why Choose Our Jacksonville Window Cleaning?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're your local window cleaning experts, serving Jacksonville homes and businesses with 
              professional equipment and streak-free results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Streak-Free Results</h3>
              <p className="text-gray-700">Professional techniques for crystal clear windows</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Products</h3>
              <p className="text-gray-700">Safe for your family and pets</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
              <p className="text-gray-700">Available throughout Jacksonville</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-sky-600" />
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
              Our Window Cleaning Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We follow a proven 4-step process to ensure your windows are spotless and streak-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-700">Evaluate window condition and identify problem areas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Cleaning</h3>
              <p className="text-gray-700">Remove debris and prepare surfaces for cleaning</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Cleaning</h3>
              <p className="text-gray-700">Professional cleaning with streak-free techniques</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-600">4</span>
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
              Jacksonville Window Cleaning Pricing
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the perfect window cleaning package for your Jacksonville home. 
              All packages include our professional service and satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-sky-200 p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wind className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Windows</h3>
                <div className="text-3xl font-bold text-sky-600 mb-2">From $40</div>
                <p className="text-gray-700 text-sm">Perfect for individual windows</p>
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Streak-free cleaning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Frame cleaning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Screen cleaning</span>
                </li>
              </ul>

              <Link
                href="/contact"
                className="block w-full text-center py-3 px-6 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-200"
              >
                Get Quote
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border-2 border-sky-200 p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wind className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Whole House</h3>
                <div className="text-3xl font-bold text-sky-600 mb-2">From $120</div>
                <p className="text-gray-700 text-sm">Complete home window cleaning</p>
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">All windows included</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Bulk pricing discount</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Priority scheduling</span>
                </li>
              </ul>

              <Link
                href="/contact"
                className="block w-full text-center py-3 px-6 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-200"
              >
                Get Quote
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border-2 border-sky-200 p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wind className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Commercial</h3>
                <div className="text-3xl font-bold text-sky-600 mb-2">From $200</div>
                <p className="text-gray-700 text-sm">Business and office cleaning</p>
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">After-hours service</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Minimal disruption</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Regular maintenance plans</span>
                </li>
              </ul>

              <Link
                href="/contact"
                className="block w-full text-center py-3 px-6 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-200"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready for Crystal Clear Windows?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Contact us today for window cleaning services in Jacksonville. 
            Free estimates and same-day service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9044563851"
              className="bg-white text-sky-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (904) 456-3851</span>
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




