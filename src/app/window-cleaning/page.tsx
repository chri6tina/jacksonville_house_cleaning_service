import { Wind, Sparkles, Clock, Users, Shield, Leaf, Check, Star, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

export default function WindowCleaningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Wind className="w-16 h-16 text-sky-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Window Cleaning
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 mb-8 max-w-3xl mx-auto">
            Crystal clear views with our streak-free window cleaning service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Window Cleaning?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional techniques and eco-friendly solutions for spotless results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Streak-Free Results</h3>
              <p className="text-gray-600">Professional techniques ensure no streaks or water spots</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">Trained professionals with proper safety equipment</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Safe, non-toxic cleaning solutions for your family</p>
            </div>
          </div>
        </div>
      </section>

      {/* What&apos;s Included */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What&apos;s Included in Our Service
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive window cleaning that covers all your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Check className="w-6 h-6 text-sky-600 mr-3" />
                Interior Windows
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Clean glass surfaces and frames</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Remove fingerprints and smudges</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Clean window sills and tracks</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Dust blinds and curtains</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Polish metal frames</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Check className="w-6 h-6 text-blue-600 mr-3" />
                Exterior Windows
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Remove dirt, pollen, and debris</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Clean hard water deposits</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Remove bird droppings and stains</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Clean screens and frames</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Gutter and downspout cleaning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 6-Step Window Cleaning Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional results through our proven cleaning methodology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inspection</h3>
              <p className="text-gray-600 text-sm">Assess window condition and identify problem areas</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Preparation</h3>
              <p className="text-gray-600 text-sm">Protect surrounding areas and remove obstacles</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pre-Treatment</h3>
              <p className="text-gray-600 text-sm">Apply specialized solutions to loosen dirt</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cleaning</h3>
              <p className="text-gray-600 text-sm">Professional squeegee technique for streak-free results</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Drying</h3>
              <p className="text-gray-600 text-sm">Ensure complete drying to prevent streaks</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                6
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Final Inspection</h3>
              <p className="text-gray-600 text-sm">Quality check and customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How often should I have my windows cleaned?
              </h3>
              <p className="text-gray-600">
                We recommend professional cleaning every 3-6 months for most homes, or more frequently for high-traffic areas or homes with pets.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can you clean windows in bad weather?
              </h3>
              <p className="text-gray-600">
                We can clean windows in most weather conditions, but heavy rain or extreme temperatures may affect results. We&apos;ll reschedule if necessary.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you clean second-story windows?
              </h3>
              <p className="text-gray-600">
                Yes, we have the equipment and training to safely clean windows at all heights, including second-story and higher windows.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What about window screens?
              </h3>
              <p className="text-gray-600">
                Yes, we clean window screens as part of our service. We remove them, clean thoroughly, and reinstall them properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Crystal Clear Views?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Get a free quote and see the difference professional window cleaning makes
          </p>
          <Link
            href="/contact"
            className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-6 h-6" />
            <span>Get Your Free Quote</span>
          </Link>
        </div>
      </section>
    </div>
  );
}




