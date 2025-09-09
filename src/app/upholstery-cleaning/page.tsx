import { Metadata } from 'next';
import { 
  Sofa, 
  Shield, 
  Star, 
  CheckCircle, 
  Truck, 
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
  title: 'Upholstery & Furniture Cleaning Jacksonville FL | Professional Furniture Cleaning',
  description: 'Professional upholstery and furniture cleaning in Jacksonville FL. Sofa cleaning, chair cleaning, mattress cleaning, and fabric protection. Safe for all fabric types.',
  keywords: 'Jacksonville upholstery cleaning, furniture cleaning, sofa cleaning, chair cleaning, mattress cleaning, fabric cleaning, professional upholstery service',
  openGraph: {
    title: 'Upholstery & Furniture Cleaning Jacksonville FL | Professional Furniture Cleaning',
    description: 'Professional upholstery and furniture cleaning in Jacksonville FL. Sofa cleaning, chair cleaning, mattress cleaning, and fabric protection. Safe for all fabric types.',
    url: 'https://www.jacksonvillehousecleaningservice.com/upholstery-cleaning',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/upholstery-cleaning',
  },
};

export default function UpholsteryCleaningPage() {
  const services = [
    {
      title: 'Sofa & Couch Cleaning',
      description: 'Professional deep cleaning for all types of sofas and couches',
      price: '$150-300',
      features: ['Stain removal', 'Fabric protection', 'Odor elimination', 'All fabric types'],
      icon: Sofa
    },
    {
      title: 'Chair & Recliner Cleaning',
      description: 'Thorough cleaning of dining chairs, office chairs, and recliners',
      price: '$75-150',
      features: ['Deep cleaning', 'Fabric sanitization', 'Stain treatment', 'Protection coating'],
      icon: Home
    },
    {
      title: 'Mattress Cleaning',
      description: 'Deep cleaning and sanitization of mattresses and box springs',
      price: '$100-200',
      features: ['Allergen removal', 'Stain treatment', 'Sanitization', 'Odor elimination'],
      icon: Shield
    },
    {
      title: 'Carpet & Rug Cleaning',
      description: 'Professional cleaning for area rugs and wall-to-wall carpeting',
      price: '$100-250',
      features: ['Deep extraction', 'Stain removal', 'Deodorizing', 'Protection treatment'],
      icon: Sparkles
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Safe for All Fabrics',
      description: 'Gentle yet effective cleaning for delicate and sensitive fabrics'
    },
    {
      icon: Star,
      title: 'Professional Equipment',
      description: 'Industrial-grade cleaning equipment for superior results'
    },
    {
      icon: Heart,
      title: 'Pet & Family Safe',
      description: 'Non-toxic cleaning solutions safe for pets and children'
    },
    {
      icon: Target,
      title: 'Stain Removal Expert',
      description: 'Advanced techniques for removing tough stains and odors'
    }
  ];

  const fabricTypes = [
    {
      name: 'Cotton & Linen',
      description: 'Gentle cleaning for natural fiber upholstery'
    },
    {
      name: 'Leather',
      description: 'Specialized leather cleaning and conditioning'
    },
    {
      name: 'Microfiber',
      description: 'Deep cleaning for microfiber and synthetic fabrics'
    },
    {
      name: 'Silk & Velvet',
      description: 'Delicate cleaning for luxury and delicate fabrics'
    },
    {
      name: 'Suede',
      description: 'Specialized suede cleaning and protection'
    },
    {
      name: 'Vinyl & Faux Leather',
      description: 'Cleaning and conditioning for synthetic leather'
    }
  ];

  const pricing = [
    {
      service: 'Sofa Cleaning',
      price: '$150-300',
      description: '2-3 seat sofa to large sectional (size dependent)'
    },
    {
      service: 'Chair Cleaning',
      price: '$75-150',
      description: 'Dining chair to large recliner'
    },
    {
      service: 'Mattress Cleaning',
      price: '$100-200',
      description: 'Twin to King size mattress and box spring'
    },
    {
      service: 'Area Rug Cleaning',
      price: '$100-250',
      description: 'Small rug to large area rug (size dependent)'
    },
    {
      service: 'Carpet Cleaning',
      price: '$0.25/sq ft',
      description: 'Wall-to-wall carpet cleaning per square foot'
    },
    {
      service: 'Fabric Protection',
      price: '$50-100',
      description: 'Stain-resistant treatment for upholstery'
    }
  ];

  return (
    <div className="min-h-screen">
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Upholstery Cleaning', href: '/upholstery-cleaning' }
        ]}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-blue/10 to-accent-aqua/10 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-accent-aqua/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional Upholstery & Furniture Cleaning
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Expert cleaning for sofas, chairs, mattresses, and rugs. Safe for all fabric types with professional results.
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
              Our Upholstery Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning for all types of furniture and upholstery
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

      {/* Fabric Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Clean All Fabric Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning for every type of upholstery and fabric
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fabricTypes.map((fabric, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex items-start">
                  <div className="bg-accent-aqua/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Droplets className="w-6 h-6 text-accent-aqua" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{fabric.name}</h3>
                    <p className="text-gray-600">{fabric.description}</p>
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
              Why Choose Our Upholstery Cleaning?
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
              Competitive rates for professional upholstery cleaning services
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
            Ready to Refresh Your Furniture?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your upholstery cleaning today and restore your furniture to like-new condition
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
