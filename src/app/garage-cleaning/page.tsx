import { Metadata } from 'next';
import { 
  Car, 
  Wrench, 
  Shield, 
  Star, 
  CheckCircle, 
  Home, 
  Sparkles, 
  Heart,
  Phone,
  MapPin,
  DollarSign,
  Award,
  Target,
  Zap,
  Droplets,
  Clock,
  Users,
  Box,
  Trash2
} from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Garage Cleaning & Organization Jacksonville FL | Professional Garage Service',
  description: 'Professional garage cleaning and organization in Jacksonville FL. Deep cleaning, decluttering, storage solutions, and complete garage makeover services.',
  keywords: 'Jacksonville garage cleaning, garage organization, garage decluttering, storage solutions, garage makeover, professional garage service',
  openGraph: {
    title: 'Garage Cleaning & Organization Jacksonville FL | Professional Garage Service',
    description: 'Professional garage cleaning and organization in Jacksonville FL. Deep cleaning, decluttering, storage solutions, and complete garage makeover services.',
    url: 'https://www.jacksonvillehousecleaningservice.com/garage-cleaning',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/garage-cleaning',
  },
};

export default function GarageCleaningPage() {
  const services = [
    {
      title: 'Complete Garage Cleaning',
      description: 'Deep cleaning of entire garage including floors, walls, and ceiling',
      price: '$200-400',
      features: ['Floor scrubbing', 'Wall cleaning', 'Ceiling dusting', 'Cobweb removal'],
      icon: Car
    },
    {
      title: 'Garage Organization',
      description: 'Complete organization and storage system installation',
      price: '$300-600',
      features: ['Storage solutions', 'Tool organization', 'Labeling system', 'Space optimization'],
      icon: Box
    },
    {
      title: 'Garage Decluttering',
      description: 'Sorting, organizing, and removing unwanted items',
      price: '$150-300',
      features: ['Item sorting', 'Donation coordination', 'Trash removal', 'Space clearing'],
      icon: Trash2
    },
    {
      title: 'Garage Floor Cleaning',
      description: 'Professional cleaning and sealing of garage floors',
      price: '$100-200',
      features: ['Oil stain removal', 'Concrete cleaning', 'Floor sealing', 'Protection coating'],
      icon: Shield
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Proper handling of tools, chemicals, and hazardous materials'
    },
    {
      icon: Star,
      title: 'Professional Organization',
      description: 'Custom storage solutions tailored to your needs'
    },
    {
      icon: Heart,
      title: 'Family Safe',
      description: 'Safe storage solutions for families with children'
    },
    {
      icon: Target,
      title: 'Maximize Space',
      description: 'Optimize your garage space for maximum functionality'
    }
  ];

  const features = [
    {
      name: 'Floor Cleaning & Sealing',
      description: 'Deep cleaning and protection of concrete floors'
    },
    {
      name: 'Tool Organization',
      description: 'Systematic organization of tools and equipment'
    },
    {
      name: 'Storage Solutions',
      description: 'Custom shelving and storage system installation'
    },
    {
      name: 'Decluttering Service',
      description: 'Sorting and removing unwanted items'
    },
    {
      name: 'Wall & Ceiling Cleaning',
      description: 'Complete cleaning of all surfaces'
    },
    {
      name: 'Safety Improvements',
      description: 'Organization for safety and accessibility'
    }
  ];

  const pricing = [
    {
      service: 'Basic Garage Cleaning',
      price: '$200-300',
      description: 'Single car garage cleaning and basic organization'
    },
    {
      service: 'Complete Garage Makeover',
      price: '$400-600',
      description: 'Two car garage with full cleaning and organization'
    },
    {
      service: 'Garage Organization Only',
      price: '$300-500',
      description: 'Organization and storage solutions without deep cleaning'
    },
    {
      service: 'Floor Cleaning & Sealing',
      price: '$100-200',
      description: 'Professional floor cleaning and protection coating'
    },
    {
      service: 'Decluttering Service',
      price: '$150-300',
      description: 'Sorting, organizing, and removing unwanted items'
    },
    {
      service: 'Maintenance Cleaning',
      price: '$100-150',
      description: 'Regular maintenance cleaning for organized garages'
    }
  ];

  return (
    <div className="min-h-screen">
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Garage Cleaning', href: '/garage-cleaning' }
        ]}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-blue/10 to-accent-aqua/10 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-accent-aqua/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional Garage Cleaning & Organization
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Transform your garage into a clean, organized, and functional space. Complete cleaning and storage solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-primary-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-blue/90 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              href="tel:9045550123" 
              className="bg-accent-aqua text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-aqua/90 transition-colors"
            >
              Call (904) 555-0123
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Garage Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete garage cleaning and organization solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="bg-primary-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-primary-blue mb-4">{service.price}</div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Include
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive garage cleaning and organization services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex items-start">
                  <div className="bg-accent-aqua/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-accent-aqua" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Garage Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional expertise with safe, effective cleaning and organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive rates for professional garage cleaning and organization
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-blue text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Service</th>
                      <th className="px-6 py-4 text-left">Price</th>
                      <th className="px-6 py-4 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricing.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-semibold text-gray-900">{item.service}</td>
                        <td className="px-6 py-4 text-primary-blue font-bold">{item.price}</td>
                        <td className="px-6 py-4 text-gray-600">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Garage?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your garage cleaning and organization today and reclaim your space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-primary-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Service
            </Link>
            <Link 
              href="tel:9045550123" 
              className="bg-accent-aqua text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-aqua/90 transition-colors"
            >
              Call (904) 555-0123
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
