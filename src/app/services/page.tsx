import { Metadata } from 'next';
import Link from 'next/link';
import { Home, Building2, Sparkles, Star, MapPin, CheckCircle, ArrowRight, Shield, Users, Leaf, Clock } from 'lucide-react';
import { localSeoPages } from '@/data/localSeoPages';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services in Jacksonville | House Cleaning Services',
  description: 'Comprehensive cleaning services in Jacksonville including residential, commercial, post-construction, and specialized cleaning. Professional, reliable, and eco-friendly solutions.',
  keywords: 'Jacksonville cleaning services, house cleaning, commercial cleaning, post construction cleaning, deep cleaning, move in cleaning, apartment cleaning',
};

const services = [
  {
    title: 'Residential Cleaning',
    description: 'Regular house cleaning services to keep your home spotless',
    icon: Home,
    href: '/recurring-cleaning',
    features: ['Weekly/Bi-weekly cleaning', 'Deep cleaning', 'Move-in/move-out', 'One-time cleaning']
  },
  {
    title: 'Commercial Cleaning',
    description: 'Professional office and business cleaning solutions',
    icon: Building2,
    href: '/commercial-office-cleaning',
    features: ['Office cleaning', 'Medical facilities', 'Event venues', 'Retail spaces']
  },
  {
    title: 'Post-Construction Cleaning',
    description: 'Specialized cleanup after construction or renovation',
    icon: Sparkles,
    href: '/post-construction-cleaning',
    features: ['Construction debris removal', 'Dust and particle cleanup', 'Final cleaning', 'Safety inspections']
  },
  {
    title: 'Deep Cleaning',
    description: 'Intensive cleaning for homes that need extra attention',
    icon: Star,
    href: '/deep-cleaning',
    features: ['Baseboards and trim', 'Inside appliances', 'Light fixtures', 'Detailed scrubbing']
  }
];

const additionalServices = [
  { name: 'Apartment Cleaning', href: '/apartment-cleaning' },
  { name: 'Pet-Friendly Cleaning', href: '/pet-friendly-cleaning' },
  { name: 'Senior Citizen Cleaning', href: '/senior-citizen-cleaning' },
  { name: 'Vacation Rental Cleaning', href: '/vacation-rental-cleaning' },
  { name: 'Emergency Cleaning', href: '/emergency-cleaning' },
  { name: 'Holiday Cleaning', href: '/holiday-cleaning' },
  { name: 'Carpet Cleaning', href: '/carpet-cleaning' },
  { name: 'Window Cleaning', href: '/window-cleaning' },
  { name: 'Pressure Washing', href: '/pressure-washing' },
  { name: 'Air Duct Cleaning', href: '/air-duct-cleaning' }
];

const localSeoLinks = localSeoPages.map((page) => ({
  name: page.title,
  href: `/${page.slug}`,
}));

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comprehensive cleaning solutions for Jacksonville homes and businesses
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

      {/* Main Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From regular house cleaning to specialized commercial services, we provide comprehensive cleaning solutions tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Specialized cleaning services for every need
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {additionalServices.map((service, index) => (
              <Link 
                key={index}
                href={service.href}
                className="bg-gray-50 hover:bg-blue-50 p-4 rounded-lg text-center transition-colors group"
              >
                <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Jacksonville Cleaning Guides */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jacksonville Cleaning Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Local resources and service guides to help you choose the right cleaning solution in Jacksonville.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {localSeoLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white border border-gray-200 rounded-lg p-4 text-gray-800 hover:border-blue-200 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Professional Cleaning?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get your free quote today and see why Jacksonville trusts us with their cleaning needs
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