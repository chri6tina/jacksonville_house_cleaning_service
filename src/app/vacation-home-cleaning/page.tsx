import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Users, Shield, Star, Clock, CheckCircle, ArrowRight, Home, MapPin, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vacation Home Cleaning Services in Jacksonville | Turnover Cleaning',
  description: 'Professional vacation home cleaning and turnover services in Jacksonville. Reliable cleaning for Airbnb, VRBO, and rental properties. Same-day service available.',
  keywords: 'vacation home cleaning Jacksonville, Airbnb cleaning, VRBO cleaning, rental property cleaning, turnover cleaning, short term rental cleaning',
  openGraph: {
    title: 'Vacation Home Cleaning Services in Jacksonville | Turnover Cleaning',
    description: 'Professional vacation home cleaning and turnover services in Jacksonville. Reliable cleaning for Airbnb, VRBO, and rental properties. Same-day service available.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/vacation-home-cleaning',
  },
};

const features = [
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Available 7 days a week to accommodate guest check-ins and check-outs'
  },
  {
    icon: Clock,
    title: 'Quick Turnover',
    description: 'Fast, efficient cleaning to minimize downtime between guests'
  },
  {
    icon: Shield,
    title: 'Insured & Bonded',
    description: 'Fully insured and bonded for your peace of mind'
  },
  {
    icon: Star,
    title: '5-Star Quality',
    description: 'Consistent, high-quality cleaning that keeps guests happy'
  }
];

const services = [
  'Complete bathroom sanitization',
  'Kitchen deep cleaning and appliance cleaning',
  'All bedroom cleaning and linen changes',
  'Living area and common space cleaning',
  'Floor vacuuming and mopping',
  'Window and mirror cleaning',
  'Trash removal and replacement',
  'Restocking of basic amenities',
  'Outdoor area cleaning (patios, decks)',
  'Laundry service (if requested)',
  'Inventory check and reporting',
  'Key management and security checks'
];

const locations = [
  'Jacksonville Beach',
  'Ponte Vedra Beach',
  'Atlantic Beach',
  'Neptune Beach',
  'St. Augustine',
  'Fleming Island',
  'Green Cove Springs',
  'Orange Park'
];

export default function VacationHomeCleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Vacation Home Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional turnover cleaning for Airbnb, VRBO, and rental properties in Jacksonville
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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
              Why Choose Our Vacation Home Cleaning?
            </h2>
            <p className="text-xl text-gray-600">
              We understand the unique needs of vacation rental properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                Complete Turnover Cleaning Services
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our comprehensive cleaning service ensures your vacation rental is spotless and ready for the next guests. We handle everything from basic cleaning to deep sanitization.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
              <div className="grid grid-cols-2 gap-3">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-gray-700">{location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              No hidden fees. Clear, upfront pricing for all our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Studio/1 Bedroom</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$120-150</div>
              <p className="text-gray-600 mb-6">Perfect for small vacation rentals and condos</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">1-2 hours cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Same-day service</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Linen changes included</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-600">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2-3 Bedroom</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$180-250</div>
              <p className="text-gray-600 mb-6">Ideal for most vacation rental properties</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">2-3 hours cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Priority scheduling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Deep sanitization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4+ Bedroom</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$300-450</div>
              <p className="text-gray-600 mb-6">Large vacation homes and luxury properties</p>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of successful vacation rental owners who trust us with their properties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/pricing-calculator" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Calculate Price
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
