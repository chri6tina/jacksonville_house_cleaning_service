import { Metadata } from 'next';
import { 
  Shirt, 
  Iron, 
  Clock, 
  Shield, 
  Star, 
  CheckCircle, 
  Truck, 
  Home, 
  Sparkles, 
  Heart,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Award
} from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Laundry & Ironing Services Jacksonville FL | Professional Laundry Service',
  description: 'Professional laundry and ironing services in Jacksonville FL. Pickup, wash, fold, iron, and delivery. Eco-friendly detergents, same-day service available.',
  keywords: 'Jacksonville laundry service, laundry pickup delivery, ironing service Jacksonville, professional laundry, eco-friendly laundry, same-day laundry',
  openGraph: {
    title: 'Laundry & Ironing Services Jacksonville FL | Professional Laundry Service',
    description: 'Professional laundry and ironing services in Jacksonville FL. Pickup, wash, fold, iron, and delivery. Eco-friendly detergents, same-day service available.',
    url: 'https://www.jacksonvillehousecleaningservice.com/laundry-services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.jacksonvillehousecleaningservice.com/laundry-services',
  },
};

export default function LaundryServicesPage() {
  const services = [
    {
      title: 'Wash & Fold Service',
      description: 'Professional washing, drying, and folding of your clothes',
      price: '$2.50/lb',
      features: ['Eco-friendly detergents', 'Separate loads by color', 'Gentle cycle for delicates', 'Professional folding'],
      icon: Shirt
    },
    {
      title: 'Ironing Service',
      description: 'Expert ironing and pressing for crisp, professional results',
      price: '$3.50/item',
      features: ['Professional pressing', 'Steam ironing', 'Hanger-ready clothes', 'Delicate fabric care'],
      icon: Iron
    },
    {
      title: 'Dry Cleaning',
      description: 'Professional dry cleaning for delicate and formal wear',
      price: '$8-15/item',
      features: ['Delicate fabric care', 'Stain removal', 'Professional pressing', 'Protective bags'],
      icon: Shield
    },
    {
      title: 'Same-Day Service',
      description: 'Quick turnaround for urgent laundry needs',
      price: '+$10 fee',
      features: ['4-hour turnaround', 'Emergency service', 'Priority handling', 'Express delivery'],
      icon: Clock
    }
  ];

  const benefits = [
    {
      icon: Truck,
      title: 'Pickup & Delivery',
      description: 'Convenient pickup and delivery service throughout Jacksonville'
    },
    {
      icon: Shield,
      title: 'Eco-Friendly',
      description: 'Biodegradable detergents and energy-efficient processes'
    },
    {
      icon: Star,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all laundry services'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Schedule pickup and delivery at your convenience'
    }
  ];

  const pricing = [
    {
      service: 'Wash & Fold',
      price: '$2.50/lb',
      description: 'Minimum 10 lbs, includes washing, drying, and folding'
    },
    {
      service: 'Ironing',
      price: '$3.50/item',
      description: 'Shirts, pants, dresses, and other garments'
    },
    {
      service: 'Dry Cleaning',
      price: '$8-15/item',
      description: 'Suits, dresses, coats, and delicate fabrics'
    },
    {
      service: 'Bulk Laundry',
      price: '$2.00/lb',
      description: '50+ lbs, perfect for families and businesses'
    },
    {
      service: 'Same-Day Service',
      price: '+$10 fee',
      description: '4-hour turnaround for urgent needs'
    }
  ];

  return (
    <div className="min-h-screen">
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Laundry Services', href: '/laundry-services' }
        ]}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-blue/10 to-accent-aqua/10 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-accent-aqua/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional Laundry & Ironing Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Convenient pickup, professional washing, expert ironing, and reliable delivery throughout Jacksonville
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
              Our Laundry Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional laundry care with eco-friendly products and convenient pickup/delivery
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Laundry Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional care, convenience, and quality you can trust
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees, no surprises - just honest, competitive pricing
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
            Ready to Simplify Your Laundry?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your first pickup today and experience the convenience of professional laundry service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-primary-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Pickup
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
