import { Metadata } from 'next';
import { 
  Leaf, 
  Shield, 
  Heart, 
  CheckCircle, 
  Users, 
  Clock, 
  Sparkles, 
  Home,
  Phone,
  MapPin,
  DollarSign,
  Award,
  Target,
  Zap,
  Droplets
} from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Green Cleaning Services Jacksonville FL | Eco-Friendly House Cleaning',
  description: 'Eco-friendly green cleaning services in Jacksonville FL. Non-toxic, biodegradable products, safe for families, pets, and the environment. Professional green cleaning.',
  keywords: 'Jacksonville green cleaning, eco-friendly cleaning, non-toxic cleaning, biodegradable cleaning, safe cleaning products, environmentally friendly cleaning',
  openGraph: {
    title: 'Green Cleaning Services Jacksonville FL | Eco-Friendly House Cleaning',
    description: 'Eco-friendly green cleaning services in Jacksonville FL. Non-toxic, biodegradable products, safe for families, pets, and the environment. Professional green cleaning.',
    url: 'https://www.jacksonvillehousecleaningservice.com/green-cleaning',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/green-cleaning',
  },
};

export default function GreenCleaningPage() {
  const services = [
    {
      title: 'Eco-Friendly Regular Cleaning',
      description: 'Weekly or bi-weekly cleaning with green products',
      price: '$120-200',
      features: ['Non-toxic products', 'Biodegradable cleaners', 'Safe for pets', 'Allergy-friendly'],
      icon: Leaf
    },
    {
      title: 'Green Deep Cleaning',
      description: 'Comprehensive cleaning using only eco-friendly products',
      price: '$200-400',
      features: ['Natural disinfectants', 'Plant-based cleaners', 'No harsh chemicals', 'Safe for children'],
      icon: Shield
    },
    {
      title: 'Pet-Safe Cleaning',
      description: 'Specialized cleaning safe for pets and their families',
      price: '$150-300',
      features: ['Pet-safe products', 'Odor neutralization', 'Flea-safe treatments', 'Non-toxic deodorizers'],
      icon: Heart
    },
    {
      title: 'Allergy-Friendly Cleaning',
      description: 'Hypoallergenic cleaning for sensitive individuals',
      price: '$130-250',
      features: ['Fragrance-free products', 'Dust mite elimination', 'Mold prevention', 'Air quality improvement'],
      icon: Users
    }
  ];

  const benefits = [
    {
      icon: Leaf,
      title: '100% Eco-Friendly',
      description: 'All products are biodegradable and environmentally safe'
    },
    {
      icon: Shield,
      title: 'Family Safe',
      description: 'Non-toxic products safe for children, pets, and sensitive individuals'
    },
    {
      icon: Heart,
      title: 'Health Benefits',
      description: 'Reduces exposure to harmful chemicals and improves indoor air quality'
    },
    {
      icon: Target,
      title: 'Effective Cleaning',
      description: 'Green products that clean as effectively as traditional cleaners'
    }
  ];

  const products = [
    {
      name: 'Plant-Based All-Purpose Cleaner',
      description: 'Made from natural plant extracts, safe for all surfaces'
    },
    {
      name: 'Baking Soda & Vinegar Solutions',
      description: 'Natural disinfectants and deodorizers'
    },
    {
      name: 'Essential Oil Sanitizers',
      description: 'Antimicrobial properties from natural essential oils'
    },
    {
      name: 'Microfiber Cloths',
      description: 'Reusable, chemical-free cleaning cloths'
    },
    {
      name: 'HEPA Vacuum Filters',
      description: 'Captures allergens and improves air quality'
    },
    {
      name: 'Biodegradable Disinfectants',
      description: 'Natural disinfectants that break down safely'
    }
  ];

  const pricing = [
    {
      service: 'Eco-Friendly Regular Cleaning',
      price: '$120-200',
      description: 'Weekly or bi-weekly cleaning with green products'
    },
    {
      service: 'Green Deep Cleaning',
      price: '$200-400',
      description: 'Comprehensive cleaning using only eco-friendly products'
    },
    {
      service: 'Pet-Safe Cleaning',
      price: '$150-300',
      description: 'Specialized cleaning safe for pets and families'
    },
    {
      service: 'Allergy-Friendly Cleaning',
      price: '$130-250',
      description: 'Hypoallergenic cleaning for sensitive individuals'
    },
    {
      service: 'Green Move-In/Out',
      price: '$300-600',
      description: 'Complete eco-friendly cleaning for moves'
    },
    {
      service: 'Green Commercial Cleaning',
      price: '$150-300',
      description: 'Eco-friendly office and commercial cleaning'
    }
  ];

  return (
    <div className="min-h-screen">
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Green Cleaning', href: '/green-cleaning' }
        ]}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-50 to-green-100 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-green-200/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Green Cleaning Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Eco-friendly, non-toxic cleaning that's safe for your family, pets, and the environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
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
              Our Green Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning with 100% eco-friendly, non-toxic products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-green-600 mb-4">{service.price}</div>
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

      {/* Benefits Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Green Cleaning?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Healthier for your family, safer for the environment, and just as effective
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Green Cleaning Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Safe, effective, and environmentally responsible cleaning solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex items-start">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Droplets className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Green Cleaning Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive rates for eco-friendly cleaning services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-600 text-white">
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
                        <td className="px-6 py-4 text-green-600 font-bold">{item.price}</td>
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
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Go Green?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Make the switch to eco-friendly cleaning and protect your family and the environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Green Cleaning
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
