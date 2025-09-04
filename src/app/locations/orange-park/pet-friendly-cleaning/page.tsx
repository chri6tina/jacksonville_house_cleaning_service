import Link from 'next/link';
import { Phone, MapPin, Star, Clock, Shield, CheckCircle, Sparkles, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, MapPinIcon, UsersIcon, BuildingIcon, CarIcon } from 'lucide-react';

export default function OrangeParkPetFriendlyCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-20">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Pet-Friendly Cleaning Services in Orange Park
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 mb-8 max-w-4xl mx-auto">
            Safe cleaning services tailored for Orange Park homes with pets. 
            Serving ZIP codes 32073 and 32065 with military family support and local expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact?service=pet-friendly-cleaning&location=orange-park"
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

      {/* Orange Park Pet-Friendly Cleaning Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pet-Friendly Cleaning Tailored for Orange Park Pet Families
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Orange Park&apos;s unique suburban character, with its mix of military families from NAS Jacksonville, 
                  medical professionals from the Orange Park Medical Center, and growing families, requires pet-friendly 
                  cleaning services that understand local needs and pet safety.
                </p>
                <p>
                  Our pet-friendly cleaning service in Orange Park is designed specifically for the area&apos;s diverse 
                  pet families, from military families to medical professionals. We understand that pet families need 
                  safe cleaning products, pet odor elimination, and reliable, pet-conscious cleaning services.
                </p>
                <p>
                  With strong partnerships with local Orange Park businesses, schools, and community organizations, 
                  we provide pet-friendly cleaning that supports the area&apos;s family growth while maintaining 
                  the highest standards Orange Park pet families expect.
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
                    <p className="text-gray-600">Pet families, military families, safe cleaning protocols</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <BuildingIcon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Property Types</h3>
                    <p className="text-gray-600">Pet homes, family residences, military family housing</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Pet Care</h3>
                    <p className="text-gray-600">Safe products, odor elimination, pet-conscious cleaning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Park-Specific Pet-Friendly Cleaning Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Orange Park-Specific Pet-Friendly Cleaning Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding and addressing the unique pet-friendly cleaning needs of Orange Park families
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Military Family Pet Support</h3>
              <p className="text-blue-800 mb-4">
                With NAS Jacksonville nearby, we understand the unique needs of military families 
                with pets who require safe cleaning services and flexible scheduling.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Military family pet care expertise</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Flexible scheduling for military families</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Special rates for service member families</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Pet-Safe Cleaning Expertise</h3>
              <p className="text-green-800 mb-4">
                Orange Park&apos;s pet community requires cleaning services that understand the unique 
                needs of pet families and safe cleaning protocols.
              </p>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Pet-safe cleaning products</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Pet odor elimination expertise</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Pet-conscious cleaning methods</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pet-Friendly Cleaning Process for Orange Park */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Pet-Friendly Cleaning Process in Orange Park
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How we deliver exceptional pet-friendly cleaning results for Orange Park families
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pet-Safe Assessment</h3>
              <p className="text-gray-600">
                We evaluate your Orange Park pet family&apos;s specific cleaning needs, considering 
                the area's family requirements and pet safety standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pet-Conscious Plan</h3>
              <p className="text-gray-600">
                Develop a pet-friendly cleaning plan tailored to your Orange Park family&apos;s layout, 
                schedule, and specific pet care needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe Service</h3>
              <p className="text-gray-600">
                Our local Orange Park team delivers exceptional, pet-safe cleaning 
                with attention to detail and pet-conscious expertise.
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
              How our pet-friendly cleaning service supports the Orange Park community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Local Pet Family Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Military Family Support</h4>
                    <p className="text-gray-600">Specialized cleaning for military families with pets in Orange Park</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Partnership</h4>
                    <p className="text-gray-600">Strong relationships with Orange Park pet families and organizations</p>
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
            Ready for Safe Pet-Friendly Cleaning in Orange Park?
          </h2>
          <p className="text-xl text-blue-800 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied Orange Park pet families who trust us with their cleaning needs. 
            Get your free quote today and experience local expertise that understands Orange Park!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=pet-friendly-cleaning&location=orange-park"
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






