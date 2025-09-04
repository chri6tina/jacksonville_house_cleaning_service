import Link from 'next/link';
import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, MapPinIcon, UsersIcon, BuildingIcon, CarIcon } from 'lucide-react';

export default function OrangeParkCommercialOfficeCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-20">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Commercial Office Cleaning Services in Orange Park
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 mb-8 max-w-4xl mx-auto">
            Professional commercial office cleaning tailored for Orange Park businesses and medical facilities. 
            Serving ZIP codes 32073 and 32065 with military family support and local expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact?service=commercial-office-cleaning&location=orange-park"
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

      {/* Orange Park Commercial Office Cleaning Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Commercial Office Cleaning Tailored for Orange Park Businesses
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Orange Park&apos;s unique suburban character, with its mix of military families from NAS Jacksonville, 
                  medical professionals from the Orange Park Medical Center, and growing businesses, requires commercial 
                  office cleaning services that understand local needs and schedules.
                </p>
                <p>
                  Our commercial office cleaning service in Orange Park is designed specifically for the area&apos;s diverse 
                  business community, from medical offices to military support businesses. We understand that medical 
                  facilities need specialized cleaning protocols, military support businesses require flexible scheduling, 
                  and all businesses need reliable, professional cleaning services.
                </p>
                <p>
                  With strong partnerships with local Orange Park businesses, schools, and community organizations, 
                  we provide commercial office cleaning that supports the area&apos;s growth and prosperity while maintaining 
                  the high standards Orange Park businesses expect.
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
                    <p className="text-gray-600">Medical facilities, military support, local businesses</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <BuildingIcon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Property Types</h3>
                    <p className="text-gray-600">Medical offices, commercial buildings, retail spaces</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Commercial Care</h3>
                    <p className="text-gray-600">Daily maintenance, specialized protocols, flexible scheduling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Park-Specific Commercial Office Cleaning Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Orange Park-Specific Commercial Office Cleaning Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding and addressing the unique commercial cleaning needs of Orange Park businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Medical Facility Expertise</h3>
              <p className="text-blue-800 mb-4">
                With the Orange Park Medical Center nearby, we understand the unique needs of medical 
                facilities that require specialized cleaning protocols and compliance standards.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Medical-grade sanitization protocols</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>HIPAA compliance standards</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Flexible medical facility scheduling</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Military Support Business Focus</h3>
              <p className="text-green-800 mb-4">
                Orange Park&apos;s proximity to NAS Jacksonville means we understand the unique needs of 
                military support businesses and their cleaning requirements.
              </p>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Military business compliance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Flexible scheduling for military operations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Security-conscious cleaning protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Office Cleaning Process for Orange Park */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Commercial Office Cleaning Process in Orange Park
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How we deliver exceptional commercial office cleaning results for Orange Park businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Assessment</h3>
              <p className="text-gray-600">
                We evaluate your Orange Park business&apos;s specific cleaning needs, considering 
                the area's business regulations and industry requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customized Plan</h3>
              <p className="text-gray-600">
                Develop a commercial cleaning plan tailored to your Orange Park business&apos;s layout, 
                schedule, and specific industry needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Service</h3>
              <p className="text-gray-600">
                Our local Orange Park team delivers exceptional, thorough commercial cleaning 
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
              How our commercial office cleaning service supports the Orange Park business community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Local Business Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Medical Facility Support</h4>
                    <p className="text-gray-600">Specialized cleaning for Orange Park Medical Center and medical offices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Partnership</h4>
                    <p className="text-gray-600">Strong relationships with Orange Park businesses and organizations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Emergency Response</h4>
                    <p className="text-gray-600">Quick response times for urgent cleaning needs in Orange Park</p>
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
            Ready for Professional Commercial Office Cleaning in Orange Park?
          </h2>
          <p className="text-xl text-blue-800 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied Orange Park businesses who trust us with their commercial cleaning needs. 
            Get your free quote today and experience local expertise that understands Orange Park!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=commercial-office-cleaning&location=orange-park"
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






