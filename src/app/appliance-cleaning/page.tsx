import { Metadata } from 'next';
import { 
  Refrigerator, 
  Microwave, 
  Stove, 
  Dishwasher, 
  WashingMachine, 
  CheckCircle, 
  Shield, 
  Star, 
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
  Users
} from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Appliance Deep Cleaning Jacksonville FL | Professional Appliance Cleaning Service',
  description: 'Professional appliance deep cleaning in Jacksonville FL. Refrigerator cleaning, oven cleaning, dishwasher cleaning, and all major appliances. Sanitized and spotless.',
  keywords: 'Jacksonville appliance cleaning, refrigerator cleaning, oven cleaning, dishwasher cleaning, washing machine cleaning, professional appliance service',
  openGraph: {
    title: 'Appliance Deep Cleaning Jacksonville FL | Professional Appliance Cleaning Service',
    description: 'Professional appliance deep cleaning in Jacksonville FL. Refrigerator cleaning, oven cleaning, dishwasher cleaning, and all major appliances. Sanitized and spotless.',
    url: 'https://www.jacksonvillehousecleaningservice.com/appliance-cleaning',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/appliance-cleaning',
  },
};

export default function ApplianceCleaningPage() {
  const services = [
    {
      title: 'Refrigerator Deep Cleaning',
      description: 'Complete interior and exterior cleaning of your refrigerator',
      price: '$75-125',
      features: ['Interior sanitization', 'Seal cleaning', 'Coil cleaning', 'Odor elimination'],
      icon: Refrigerator
    },
    {
      title: 'Oven & Stove Cleaning',
      description: 'Deep cleaning of oven interior, stovetop, and burners',
      price: '$75-125',
      features: ['Baked-on grease removal', 'Burner cleaning', 'Interior sanitization', 'Exterior polishing'],
      icon: Stove
    },
    {
      title: 'Dishwasher Cleaning',
      description: 'Complete cleaning and maintenance of your dishwasher',
      price: '$50-100',
      features: ['Filter cleaning', 'Interior sanitization', 'Seal maintenance', 'Odor removal'],
      icon: Dishwasher
    },
    {
      title: 'Washing Machine Cleaning',
      description: 'Deep cleaning of washing machine drum and components',
      price: '$50-100',
      features: ['Drum sanitization', 'Filter cleaning', 'Gasket cleaning', 'Odor elimination'],
      icon: WashingMachine
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Food Safe Cleaning',
      description: 'FDA-approved sanitizers safe for food contact surfaces'
    },
    {
      icon: Star,
      title: 'Professional Equipment',
      description: 'Industrial-grade cleaning tools and specialized products'
    },
    {
      icon: Heart,
      title: 'Health Benefits',
      description: 'Eliminates bacteria, mold, and allergens from appliances'
    },
    {
      icon: Target,
      title: 'Extended Appliance Life',
      description: 'Regular cleaning extends the life and efficiency of appliances'
    }
  ];

  const appliances = [
    {
      name: 'Refrigerator & Freezer',
      description: 'Complete interior cleaning, seal maintenance, and coil cleaning'
    },
    {
      name: 'Oven & Stovetop',
      description: 'Deep grease removal, burner cleaning, and interior sanitization'
    },
    {
      name: 'Dishwasher',
      description: 'Filter cleaning, interior sanitization, and maintenance'
    },
    {
      name: 'Washing Machine',
      description: 'Drum cleaning, filter maintenance, and odor elimination'
    },
    {
      name: 'Microwave',
      description: 'Interior cleaning, turntable sanitization, and odor removal'
    },
    {
      name: 'Garbage Disposal',
      description: 'Deep cleaning and sanitization of disposal unit'
    }
  ];

  const pricing = [
    {
      service: 'Refrigerator Cleaning',
      price: '$75-125',
      description: 'Standard to large refrigerator with freezer'
    },
    {
      service: 'Oven & Stove Cleaning',
      price: '$75-125',
      description: 'Single oven to double oven with stovetop'
    },
    {
      service: 'Dishwasher Cleaning',
      price: '$50-100',
      description: 'Standard to commercial-grade dishwasher'
    },
    {
      service: 'Washing Machine Cleaning',
      price: '$50-100',
      description: 'Top-loading or front-loading washing machine'
    },
    {
      service: 'Microwave Cleaning',
      price: '$30-50',
      description: 'Countertop or built-in microwave cleaning'
    },
    {
      service: 'Complete Kitchen Package',
      price: '$200-350',
      description: 'All kitchen appliances cleaned together'
    }
  ];

  return (
    <div className="min-h-screen">
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Appliance Cleaning', href: '/appliance-cleaning' }
        ]}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-blue/10 to-accent-aqua/10 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-accent-aqua/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional Appliance Deep Cleaning
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Complete cleaning and sanitization of all major appliances. Safe, effective, and food-safe cleaning.
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
              Our Appliance Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional deep cleaning for all major household appliances
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

      {/* Appliances Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Clean All Major Appliances
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning for every appliance in your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appliances.map((appliance, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex items-start">
                  <div className="bg-accent-aqua/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-accent-aqua" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{appliance.name}</h3>
                    <p className="text-gray-600">{appliance.description}</p>
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
              Why Choose Our Appliance Cleaning?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional expertise with safe, effective cleaning methods
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
              Competitive rates for professional appliance cleaning services
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
            Ready to Clean Your Appliances?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your appliance cleaning today and enjoy spotless, sanitized appliances
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-primary-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Cleaning
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
