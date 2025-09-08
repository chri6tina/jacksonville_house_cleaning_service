import { Metadata } from 'next';
import Link from 'next/link';
import { Home, Shield, Star, Clock, CheckCircle, ArrowRight, MapPin, Phone, Mail, Users, Leaf, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Golf Community Cleaning Services in Jacksonville | Luxury Home Cleaning',
  description: 'Professional cleaning services for golf communities in Jacksonville including Ponte Vedra, TPC Sawgrass, and Sawgrass Country Club. Luxury home cleaning for discerning residents.',
  keywords: 'golf community cleaning Jacksonville, Ponte Vedra cleaning, TPC Sawgrass cleaning, luxury home cleaning, country club cleaning, Sawgrass cleaning',
  openGraph: {
    title: 'Golf Community Cleaning Services in Jacksonville | Luxury Home Cleaning',
    description: 'Professional cleaning services for golf communities in Jacksonville including Ponte Vedra, TPC Sawgrass, and Sawgrass Country Club. Luxury home cleaning for discerning residents.',
    type: 'website',
  },
};

const features = [
  {
    icon: Shield,
    title: 'Discrete Service',
    description: 'Respectful, professional service that maintains your privacy'
  },
  {
    icon: Star,
    title: 'Luxury Standards',
    description: 'High-end cleaning tailored to luxury homes and communities'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Available when you need us, including weekends and holidays'
  },
  {
    icon: Users,
    title: 'Trusted Team',
    description: 'Background-checked, experienced cleaning professionals'
  }
];

const services = [
  'Luxury home deep cleaning',
  'High-end surface care and polishing',
  'Crystal and fine china cleaning',
  'Artwork and collectible dusting',
  'Marble and granite care',
  'Hardwood floor refinishing',
  'Carpet and rug deep cleaning',
  'Window and glass cleaning',
  'Outdoor living space cleaning',
  'Pool area maintenance',
  'Garage and storage organization',
  'Pantry and wine cellar cleaning'
];

const communities = [
  'Ponte Vedra Beach',
  'TPC Sawgrass',
  'Sawgrass Country Club',
  'Marsh Landing',
  'Plantation at Ponte Vedra',
  'Ponte Vedra Inn & Club',
  'Sawgrass Marriott',
  'The Plantation'
];

export default function GolfCommunityCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Golf Community Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Luxury cleaning services for Jacksonville's premier golf communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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
              Why Choose Our Golf Community Services?
            </h2>
            <p className="text-xl text-gray-600">
              We understand the unique needs of luxury golf community residents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                Luxury Home Cleaning Services
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our specialized cleaning services are designed for luxury homes in golf communities. We provide meticulous attention to detail and use premium cleaning products safe for high-end surfaces.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Serving Golf Communities</h3>
              <div className="grid grid-cols-1 gap-3">
                {communities.map((community, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-gray-700">{community}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-green-50">
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
              <div className="text-3xl font-bold text-green-600 mb-4">$200-300</div>
              <p className="text-gray-600 mb-6">Perfect for luxury condos and townhomes</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">2-3 hours cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Premium products</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Weekly service available</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-600">
              <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Home</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">$350-500</div>
              <p className="text-gray-600 mb-6">Ideal for large luxury homes</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">3-4 hours cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Team cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Outdoor areas included</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Estate Cleaning</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">$500-750</div>
              <p className="text-gray-600 mb-6">Large estates and luxury properties</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">4-6 hours cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Multiple team members</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Concierge service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Luxury Cleaning
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join the discerning residents who trust us with their luxury homes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/pricing-calculator" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Calculate Price
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
