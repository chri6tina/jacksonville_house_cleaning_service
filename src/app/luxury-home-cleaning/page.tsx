import { Metadata } from 'next';
import Link from 'next/link';
import { Home, Shield, Star, Clock, CheckCircle, ArrowRight, MapPin, Users, Leaf, Award, Crown, Gem } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Luxury Home Cleaning Services in Jacksonville | High-End Cleaning',
  description: 'Premium luxury home cleaning services in Jacksonville. Professional cleaning for high-end homes, estates, and luxury properties. White-glove service with attention to detail.',
  keywords: 'luxury home cleaning Jacksonville, high end cleaning, estate cleaning, premium cleaning services, white glove cleaning, luxury property cleaning',
  openGraph: {
    title: 'Luxury Home Cleaning Services in Jacksonville | High-End Cleaning',
    description: 'Premium luxury home cleaning services in Jacksonville. Professional cleaning for high-end homes, estates, and luxury properties. White-glove service with attention to detail.',
    type: 'website',
  },
};

const features = [
  {
    icon: Crown,
    title: 'White-Glove Service',
    description: 'Meticulous attention to detail with premium cleaning standards'
  },
  {
    icon: Gem,
    title: 'Luxury Standards',
    description: 'Specialized cleaning for high-end materials and finishes'
  },
  {
    icon: Shield,
    title: 'Discrete & Professional',
    description: 'Respectful service that maintains your privacy and security'
  },
  {
    icon: Award,
    title: 'Concierge Service',
    description: 'Personalized cleaning plans tailored to your lifestyle'
  }
];

const services = [
  'Marble and granite surface care',
  'Crystal and fine china cleaning',
  'Artwork and collectible dusting',
  'Antique furniture care',
  'High-end appliance cleaning',
  'Luxury bathroom sanitization',
  'Premium hardwood floor care',
  'Oriental rug cleaning',
  'Chandelier and light fixture cleaning',
  'Wine cellar maintenance',
  'Home theater cleaning',
  'Outdoor living space detailing'
];

const luxuryAreas = [
  'Ponte Vedra Beach',
  'Sawgrass Country Club',
  'Marsh Landing',
  'Plantation at Ponte Vedra',
  'Ponte Vedra Inn & Club',
  'Sawgrass Marriott',
  'The Plantation',
  'Deerwood',
  'Baymeadows',
  'San Marco'
];

export default function LuxuryHomeCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Luxury Home Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Premium cleaning services for Jacksonville's most discerning residents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Luxury Cleaning Services?
            </h2>
            <p className="text-xl text-gray-600">
              We understand the unique needs of luxury homeowners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Premium Cleaning Services
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our luxury cleaning services are designed for high-end homes and estates. We use only the finest cleaning products and techniques to preserve and enhance your valuable investments.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Luxury Service Areas</h3>
              <div className="grid grid-cols-1 gap-3">
                {luxuryAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin className="h-4 w-4 text-purple-600 mr-2" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Luxury cleaning services at competitive rates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Condo</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">$250-400</div>
              <p className="text-gray-600 mb-6">Perfect for luxury condos and penthouses</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-sm text-gray-600">3-4 hours cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-sm text-gray-600">Premium products</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-sm text-gray-600">Weekly service available</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-600">
              <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Home</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">$450-650</div>
              <p className="text-gray-600 mb-6">Ideal for luxury single-family homes</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-sm text-gray-600">4-5 hours cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-sm text-gray-600">Team cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-sm text-gray-600">Outdoor areas included</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Estate</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">$750-1200</div>
              <p className="text-gray-600 mb-6">Large estates and luxury properties</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-sm text-gray-600">6-8 hours cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-sm text-gray-600">Multiple team members</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-sm text-gray-600">Concierge service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Ultimate in Luxury Cleaning
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join the elite homeowners who trust us with their most valuable assets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/pricing-calculator" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Calculate Price
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
