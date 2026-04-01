import { Home, Sparkles, Clock, Users, Shield, Leaf, Check, Star, ArrowRight, Phone, MapPin, Award, Truck, Calendar } from 'lucide-react';
import Link from 'next/link';
import UniversalServiceHero from '@/components/UniversalServiceHero';

export default function StandardCleaningPage() {
  const services = [
    {
      name: 'Studio/1 Bedroom',
      price: 'From $100',
      description: 'Perfect for small spaces and efficiency apartments',
      features: ['Dust all surfaces', 'Vacuum and mop floors', 'Clean bathroom', 'Kitchen surfaces', 'Empty trash', 'Make bed']
    },
    {
      name: '2 Bedroom',
      price: 'From $150',
      description: 'Ideal for couples and small families',
      features: ['All 1-bedroom services', 'Additional bedroom cleaning', 'Extended time allowance', 'Priority scheduling available']
    },
    {
      name: '3 Bedroom',
      price: 'From $200',
      description: 'Comprehensive cleaning for growing families',
      features: ['All 2-bedroom services', 'Third bedroom cleaning', 'Living areas focus', 'Kitchen deep clean']
    },
    {
      name: '4+ Bedroom',
      price: 'From $300',
      description: 'Full-service cleaning for large homes',
      features: ['All 3-bedroom services', 'Additional bedrooms', 'Bonus rooms included', 'Extended service time']
    }
  ];

  const benefits = [
    {
      title: 'Consistent Quality',
      description: 'Same high standard every time',
      icon: Shield
    },
    {
      title: 'Flexible Scheduling',
      description: 'Weekly, bi-weekly, or monthly',
      icon: Calendar
    },
    {
      title: 'Eco-Friendly Products',
      description: 'Safe for your family and pets',
      icon: Leaf
    },
    {
      title: 'Trained Professionals',
      description: 'Background-checked, trained professionals',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <UniversalServiceHero 
        title="Standard House Cleaning Services"
        subtitle="Professional standard house cleaning services in Jacksonville. Keep your home consistently clean and comfortable with our reliable, thorough cleaning service."
        Icon={Home}
        primaryColor="blue"
        formServiceType="standard-cleaning"
      />

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Jacksonville Standard Cleaning Packages
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the perfect cleaning package for your Jacksonville home. All packages include 
              our eco-friendly products and satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}</div>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="block w-full text-center py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Jacksonville Standard Cleaning?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're your local cleaning experts, providing reliable, consistent service that keeps 
              your Jacksonville home clean and comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready for Consistent, Professional Cleaning?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for standard cleaning services in Jacksonville. 
            Free estimates and flexible scheduling available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9044563851"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (904) 456-3851</span>
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}





