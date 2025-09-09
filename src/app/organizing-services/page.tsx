import { Metadata } from 'next';
import { 
  Box, 
  Home, 
  Calendar, 
  Shield, 
  Star, 
  CheckCircle, 
  Users, 
  Clock, 
  Sparkles, 
  Heart,
  Phone,
  MapPin,
  DollarSign,
  Award,
  Target,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Home Organizing Services Jacksonville FL | Professional Organizing & Decluttering',
  description: 'Professional home organizing and decluttering services in Jacksonville FL. Closet organization, pantry organization, home office setup, and complete home organization.',
  keywords: 'Jacksonville organizing service, home organization, decluttering service, closet organization, pantry organization, home office organization',
  openGraph: {
    title: 'Home Organizing Services Jacksonville FL | Professional Organizing & Decluttering',
    description: 'Professional home organizing and decluttering services in Jacksonville FL. Closet organization, pantry organization, home office setup, and complete home organization.',
    url: 'https://www.jacksonvillehousecleaningservice.com/organizing-services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/organizing-services',
  },
};

export default function OrganizingServicesPage() {
  const services = [
    {
      title: 'Closet Organization',
      description: 'Transform your closet into an organized, functional space',
      price: '$150-300',
      features: ['Clothing categorization', 'Seasonal rotation', 'Shoe organization', 'Accessory storage'],
      icon: Box
    },
    {
      title: 'Pantry Organization',
      description: 'Create a well-organized, efficient kitchen pantry',
      price: '$100-200',
      features: ['Food categorization', 'Expiration date tracking', 'Storage solutions', 'Labeling system'],
      icon: Home
    },
    {
      title: 'Home Office Setup',
      description: 'Organize your workspace for maximum productivity',
      price: '$200-400',
      features: ['Desk organization', 'File systems', 'Cable management', 'Supply organization'],
      icon: Calendar
    },
    {
      title: 'Complete Home Organization',
      description: 'Full-house organization and decluttering service',
      price: '$500-1000',
      features: ['Room-by-room organization', 'Decluttering consultation', 'Storage solutions', 'Maintenance plan'],
      icon: Sparkles
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Customized Solutions',
      description: 'Personalized organization systems that fit your lifestyle'
    },
    {
      icon: Shield,
      title: 'Professional Expertise',
      description: 'Trained organizers with proven methods and techniques'
    },
    {
      icon: Star,
      title: 'Long-term Results',
      description: 'Systems designed to maintain organization over time'
    },
    {
      icon: Clock,
      title: 'Time-Saving',
      description: 'Get organized quickly with efficient, professional service'
    }
  ];

  const pricing = [
    {
      service: 'Closet Organization',
      price: '$150-300',
      description: 'Small closet (5-10 ft) to large walk-in closet (20+ ft)'
    },
    {
      service: 'Pantry Organization',
      price: '$100-200',
      description: 'Standard pantry to large walk-in pantry'
    },
    {
      service: 'Home Office',
      price: '$200-400',
      description: 'Desk setup to complete office organization'
    },
    {
      service: 'Garage Organization',
      price: '$300-600',
      description: 'Tool organization, storage solutions, and cleanup'
    },
    {
      service: 'Complete Home',
      price: '$500-1000',
      description: 'Full-house organization and decluttering'
    },
    {
      service: 'Maintenance Visits',
      price: '$75-150',
      description: 'Monthly or quarterly organization maintenance'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Consultation',
      description: 'Free in-home assessment to understand your needs and goals'
    },
    {
      step: '2',
      title: 'Planning',
      description: 'Custom organization plan tailored to your space and lifestyle'
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'Professional organization with high-quality storage solutions'
    },
    {
      step: '4',
      title: 'Maintenance',
      description: 'Ongoing support to keep your space organized long-term'
    }
  ];

  return (
    <div className="min-h-screen">
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Organizing Services', href: '/organizing-services' }
        ]}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-blue/10 to-accent-aqua/10 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-accent-aqua/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional Home Organizing Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Transform your space with expert organization and decluttering services throughout Jacksonville
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-primary-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-blue/90 transition-colors"
            >
              Get Free Consultation
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
              Our Organizing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional organization solutions for every area of your home
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Organization Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 4-step process to transform your space
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
              Why Choose Our Organizing Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional expertise with personalized solutions for lasting results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-accent-aqua w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
              Professional organization services at competitive rates
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
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and discover the power of professional organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-primary-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
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
