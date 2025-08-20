import { Building2, Sparkles, Clock, Users, Shield, Leaf, Check, Star, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

export default function OfficeCleaningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-600 to-gray-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Building2 className="w-16 h-16 text-slate-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Office Cleaning
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Maintain a professional, healthy work environment with our comprehensive office cleaning services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors duration-200 flex items-center justify-center space-x-2"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Office Cleaning?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional cleaning that enhances productivity and employee satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Standards</h3>
              <p className="text-gray-600">Consistent, high-quality cleaning that meets business standards</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Health & Safety</h3>
              <p className="text-gray-600">Sanitized workspaces that promote employee wellness</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">After-hours cleaning to minimize workplace disruption</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Our Service
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive office cleaning that covers all your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Check className="w-6 h-6 text-slate-600 mr-3" />
                Daily Cleaning Tasks
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-slate-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Empty trash bins and replace liners</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-slate-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Clean and sanitize restrooms</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-slate-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Vacuum and mop all floors</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-slate-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Dust desks and work surfaces</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-slate-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Clean break room and kitchen areas</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Check className="w-6 h-6 text-gray-600 mr-3" />
                Weekly Deep Cleaning
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Clean inside windows and glass doors</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Dust light fixtures and ceiling fans</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Sanitize high-touch surfaces</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Clean baseboards and trim</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Vacuum upholstered furniture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Office Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized Office Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We clean all areas of your office with specialized attention
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Workstations</h3>
              <p className="text-sm text-gray-600">Desks, chairs, and personal spaces</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Conference Rooms</h3>
              <p className="text-sm text-gray-600">Meeting spaces and presentation areas</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Restrooms</h3>
              <p className="text-sm text-gray-600">Sanitized and hygienic facilities</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Break Rooms</h3>
              <p className="text-sm text-gray-600">Kitchen and dining areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 5-Step Office Cleaning Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Efficient, thorough cleaning that maintains your business standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">Evaluate office layout and cleaning needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Preparation</h3>
              <p className="text-gray-600 text-sm">Gather supplies and plan cleaning route</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cleaning</h3>
              <p className="text-gray-600 text-sm">Systematic cleaning of all areas</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sanitization</h3>
              <p className="text-gray-600 text-sm">Disinfect high-touch surfaces</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Check</h3>
              <p className="text-gray-600 text-sm">Final inspection and customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What cleaning schedule do you recommend for offices?
              </h3>
              <p className="text-gray-600">
                We recommend daily cleaning for high-traffic offices, with deep cleaning weekly or bi-weekly depending on your needs.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you clean after business hours?
              </h3>
              <p className="text-gray-600">
                Yes, we offer after-hours cleaning to minimize disruption to your daily operations and employees.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What cleaning products do you use?
              </h3>
              <p className="text-gray-600">
                We use professional-grade, eco-friendly cleaning products that are safe for all office environments and surfaces.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can you handle special cleaning requests?
              </h3>
              <p className="text-gray-600">
                Absolutely! We can accommodate special requests, emergency cleanings, and customized cleaning schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-600 to-gray-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for a Cleaner Office?
          </h2>
          <p className="text-xl text-slate-100 mb-8">
            Get a free quote and see how professional cleaning can improve your workplace
          </p>
          <Link
            href="/contact"
            className="bg-white text-slate-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-6 h-6" />
            <span>Get Your Free Quote</span>
          </Link>
        </div>
      </section>
    </div>
  );
}




