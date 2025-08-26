import Link from 'next/link';
import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, MapPinIcon, UsersIcon, BuildingIcon, CarIcon } from 'lucide-react';

export default function OrangeParkRecurringCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-20">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Recurring Cleaning Services in Orange Park
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 mb-8 max-w-4xl mx-auto">
            Consistent cleaning schedules tailored for Orange Park homes and families. 
            Serving ZIP codes 32073 and 32065 with military family support and local expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact?service=recurring-cleaning&location=orange-park"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/locations/orange-park#services"
              className="bg-white/80 hover:bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 border-2 border-blue-600"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Orange Park Recurring Cleaning Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Recurring Cleaning Tailored for Orange Park Homes
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Orange Park&apos;s unique suburban character, with its mix of military families from NAS Jacksonville, 
                  medical professionals from the Orange Park Medical Center, and growing families, requires recurring 
                  cleaning services that understand local needs and schedules.
                </p>
                <p>
                  Our recurring cleaning service in Orange Park is designed specifically for the area&apos;s larger 
                  suburban homes, multiple bathroom layouts, and family-focused living spaces. We understand 
                  that military families need flexible scheduling, medical professionals require reliable service, 
                  and busy families need consistent maintenance.
                </p>
                <p>
                  With strong partnerships with local Orange Park businesses, schools, and community organizations, 
                  we provide recurring cleaning that supports the area&apos;s growth and prosperity while maintaining 
                  the high standards Orange Park residents expect.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">Orange Park, FL (32073, 32065)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <UsersIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Local Expertise</h3>
                    <p className="text-gray-600">Military families, medical professionals, suburban homes</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <BuildingIcon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Property Types</h3>
                    <p className="text-gray-600">Suburban homes, townhouses, apartments</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Scheduling</h3>
                    <p className="text-gray-600">Weekly, bi-weekly, monthly options</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Park-Specific Recurring Cleaning Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Orange Park-Specific Recurring Cleaning Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding and addressing the unique recurring cleaning needs of Orange Park properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Military Family Support</h3>
              <p className="text-blue-800 mb-4">
                With NAS Jacksonville nearby, we understand the unique needs of military families 
                who require flexible scheduling, emergency services, and reliable recurring cleaning.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Flexible scheduling for deployment changes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Emergency recurring cleaning when needed</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Special rates for service members</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Suburban Home Expertise</h3>
              <p className="text-green-800 mb-4">
                Orange Park&apos;s suburban setting means larger homes with more square footage, 
                multiple bathrooms, and family-focused living spaces that require consistent recurring cleaning.
              </p>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Consistent cleaning for larger spaces</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Family-friendly cleaning products</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Multiple bathroom maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recurring Cleaning Process for Orange Park */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Recurring Cleaning Process in Orange Park
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How we deliver exceptional recurring cleaning results for Orange Park residents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Assessment</h3>
              <p className="text-gray-600">
                We evaluate your Orange Park property&apos;s specific recurring cleaning needs, considering 
                the area's suburban layout and family-focused design.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customized Schedule</h3>
              <p className="text-gray-600">
                Develop a recurring cleaning schedule tailored to your Orange Park home&apos;s layout, 
                schedule, and specific family needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consistent Service</h3>
              <p className="text-gray-600">
                Our local Orange Park team delivers consistent, reliable recurring cleaning 
                with attention to detail and local expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Benefits & Community Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Orange Park-Specific Benefits & Community Support
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How our recurring cleaning service supports the Orange Park community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Local Service Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Military Family Support</h4>
                    <p className="text-gray-600">Special scheduling flexibility and rates for NAS Jacksonville families</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Partnership</h4>
                    <p className="text-gray-600">Strong relationships with Orange Park schools, businesses, and organizations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Emergency Response</h4>
                    <p className="text-gray-600">Quick response times for urgent recurring cleaning needs in Orange Park</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Involvement</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Business Partnerships</h4>
                    <p className="text-gray-600">Supporting Orange Park businesses and economic development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">School Support</h4>
                    <p className="text-gray-600">Partnerships with Orange Park schools and educational programs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Events</h4>
                    <p className="text-gray-600">Active participation in Orange Park community activities and festivals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Ready for Professional Recurring Cleaning in Orange Park?
          </h2>
          <p className="text-xl text-blue-800 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied Orange Park residents who trust us with their recurring cleaning needs. 
            Get your free quote today and experience local expertise that understands Orange Park!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=recurring-cleaning&location=orange-park"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="tel:+19045551234"
              className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 border-2 border-blue-600"
            >
              <span>Call Now</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



