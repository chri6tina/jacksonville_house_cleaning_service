import { Car, Sparkles, Clock, Users, Shield, Leaf, Check, Star, ArrowRight, Phone, MapPin, Award, Truck } from 'lucide-react';
import Link from 'next/link';

export default function CarpetCleaningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Hero Section - Local Business Style */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Local Business Badge */}
          <div className="inline-flex items-center gap-2 bg-white/95 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/50 shadow-lg">
            <MapPin className="w-4 h-4 text-emerald-600" />
            Jacksonville Carpet Cleaning Experts
          </div>

          <div className="flex justify-center mb-6">
            <Car className="w-16 h-16 text-emerald-200" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Professional Carpet Cleaning
          </h1>
          <p className="text-xl sm:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Restore your Jacksonville carpets to their original beauty with our advanced cleaning technology
          </p>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-emerald-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Award className="w-6 h-6 text-emerald-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Licensed & Insured</h3>
              <p className="text-white/80 text-xs">Jacksonville business since 2015</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-emerald-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Truck className="w-6 h-6 text-emerald-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Same-Day Service</h3>
              <p className="text-white/80 text-xs">Available throughout Jacksonville</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="w-12 h-12 bg-emerald-200/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <Star className="w-6 h-6 text-emerald-200" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">100% Guarantee</h3>
              <p className="text-white/80 text-xs">Satisfaction guaranteed</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200 flex items-center justify-center space-x-2"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Why Choose Our Jacksonville Carpet Cleaning?
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We're your local carpet cleaning experts, serving Jacksonville homes and businesses with 
              professional equipment and eco-friendly solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Advanced Technology</h3>
              <p className="text-charcoal/70">Professional-grade equipment for deep cleaning</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Eco-Friendly</h3>
              <p className="text-charcoal/70">Safe for your family and pets</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Quick Drying</h3>
              <p className="text-charcoal/70">Fast-drying technology for convenience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Stain Protection</h3>
              <p className="text-charcoal/70">Long-lasting stain resistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Our Jacksonville Carpet Cleaning Process
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Professional carpet cleaning that removes deep dirt, stains, and allergens from your Jacksonville home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Assessment</h3>
              <p className="text-charcoal/70 text-sm">
                Evaluate carpet condition and identify problem areas
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Pre-Treatment</h3>
              <p className="text-charcoal/70 text-sm">
                Apply specialized solutions for stains and heavy soil
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Deep Cleaning</h3>
              <p className="text-charcoal/70 text-sm">
                Hot water extraction removes embedded dirt and allergens
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Protection</h3>
              <p className="text-charcoal/70 text-sm">
                Apply stain guard for long-lasting protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Jacksonville Carpet Cleaning Pricing
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Transparent pricing for professional carpet cleaning in Jacksonville. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Room Cleaning</h3>
              <div className="text-4xl font-bold text-emerald-600 mb-4">$50</div>
              <p className="text-charcoal/70 mb-6">Per room, includes deep cleaning and stain treatment</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-sm">Deep cleaning</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-sm">Stain treatment</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-sm">Deodorizing</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Get Quote
              </Link>
            </div>

            <div className="bg-emerald-600 p-8 rounded-2xl text-center text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-coral text-white px-6 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Whole House</h3>
              <div className="text-4xl font-bold mb-4">$180</div>
              <p className="mb-6 opacity-90">Complete home carpet cleaning package</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-2" />
                  <span className="text-sm">All rooms included</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-2" />
                  <span className="text-sm">Stain protection</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-2" />
                  <span className="text-sm">Priority scheduling</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-white text-emerald-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Quote
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Commercial</h3>
              <div className="text-4xl font-bold text-emerald-600 mb-4">$250</div>
              <p className="text-charcoal/70 mb-6">Office and commercial space cleaning</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-sm">After-hours service</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-sm">Quick turnaround</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-sm">Business hours available</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready for Fresh, Clean Carpets?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for professional carpet cleaning in Jacksonville. 
            Free estimates and same-day service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9044563851"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (904) 456-3851</span>
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




