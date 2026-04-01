import { Sparkles, Clock, Users, Shield, Leaf, Check, Star, ArrowRight, Phone, MapPin, Award, Truck, Calendar, Zap, Home } from 'lucide-react';
import Link from 'next/link';
import UniversalServiceHero from '@/components/UniversalServiceHero';


export default function ExtremeDeepCleaningPage() {
  const services = [
    {
      name: 'Standard Deep Clean',
      price: 'From $300',
      description: 'Comprehensive home deep cleaning',
      features: ['Baseboards & trim', 'Inside appliances', 'Light fixtures', 'Window tracks', 'Cabinet interiors']
    },
    {
      name: 'Extreme Deep Clean',
      price: 'From $500',
      description: 'Intensive cleaning for neglected homes',
      features: ['All standard services', 'Wall washing', 'Ceiling cleaning', 'Grout restoration', 'Odor elimination']
    },
    {
      name: 'Move-Out Deep Clean',
      price: 'From $400',
      description: 'Complete property restoration',
      features: ['Full home cleaning', 'Appliance deep clean', 'Carpet treatment', 'Final inspection', 'Guaranteed results']
    },
    {
      name: 'Hoarder Cleanup',
      price: 'From $800',
      description: 'Professional hoarding cleanup',
      features: ['Safe removal', 'Biohazard cleaning', 'Odor treatment', 'Disposal services', 'Follow-up support']
    }
  ];

  const benefits = [
    {
      title: 'Professional Equipment',
      description: 'Commercial-grade cleaning tools',
      icon: Zap
    },
    {
      title: 'Eco-Friendly Products',
      description: 'Safe for your family and pets',
      icon: Leaf
    },
    {
      title: 'Same-Day Service',
      description: 'Available throughout Jacksonville',
      icon: Clock
    },
    {
      title: 'Jacksonville Local',
      description: 'Your neighbors since 2015',
      icon: MapPin
    }
  ];

  return (
    <>
      <UniversalServiceHero 
        title="Extreme Deep Cleaning Services"
        subtitle="Transform your Jacksonville home with our extreme deep cleaning services. We tackle the toughest cleaning challenges with professional expertise."
        Icon={Sparkles}
        primaryColor="blue"
        formServiceType="extreme-deep-cleaning"
      />

        {/* Service Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Jacksonville Extreme Deep Cleaning Services
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our extreme deep cleaning goes far beyond regular cleaning to tackle years of built-up grime, 
                stains, and neglected areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-8 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Home className="w-8 h-8 text-primary-blue" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <div className="text-sm text-gray-700 mb-4">{service.description}</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="block w-full text-center py-3 px-6 bg-primary-blue text-white rounded-lg font-semibold hover:bg-primary-blue transition-colors duration-200"
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
                Why Choose Extreme Deep Cleaning?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                When regular cleaning isn&apos;t enough, extreme deep cleaning provides the thorough 
                restoration your home needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-blue">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for extreme deep cleaning services in Jacksonville. 
              Free estimates and same-day service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9044563851"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (904) 456-3851</span>
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-blue transition-colors duration-200"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>
      </>
  );
}
