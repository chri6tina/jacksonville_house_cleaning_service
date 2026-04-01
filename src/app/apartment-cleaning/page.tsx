import { Building, Sparkles, Clock, Users, Shield, Leaf, Check, Star, ArrowRight, Phone, MapPin, Award, Truck, Calendar, Home } from 'lucide-react';
import Link from 'next/link';
import UniversalServiceHero from '@/components/UniversalServiceHero';


export default function ApartmentCleaningPage() {
  const services = [
    {
      name: 'Studio Apartment',
      price: 'From $100',
      description: 'Perfect for efficiency apartments',
      features: ['Complete cleaning', 'Kitchen deep clean', 'Bathroom sanitization', 'Floor care', 'Dust removal']
    },
    {
      name: '1 Bedroom',
      price: 'From $125',
      description: 'Ideal for singles and couples',
      features: ['All studio services', 'Bedroom cleaning', 'Closet organization', 'Extended time', 'Priority scheduling']
    },
    {
      name: '2 Bedroom',
      price: 'From $160',
      description: 'Great for roommates and families',
      features: ['All 1-bedroom services', 'Second bedroom', 'Living area focus', 'Kitchen deep clean', 'Bathroom care']
    },
    {
      name: '3+ Bedroom',
      price: 'From $200',
      description: 'Full apartment cleaning',
      features: ['All 2-bedroom services', 'Additional bedrooms', 'Bonus rooms', 'Extended service time', 'Bulk pricing']
    }
  ];

  const benefits = [
    {
      title: 'Flexible Scheduling',
      description: 'Work around your schedule',
      icon: Clock
    },
    {
      title: 'Eco-Friendly Products',
      description: 'Safe for your family and pets',
      icon: Leaf
    },
    {
      title: 'Same-Day Service',
      description: 'Available throughout Jacksonville',
      icon: Truck
    },
    {
      title: 'Jacksonville Local',
      description: 'Your neighbors since 2015',
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <UniversalServiceHero 
        title="Professional Apartment Cleaning"
        subtitle="Keep your Jacksonville apartment spotless with our professional cleaning services. From studios to multi-bedroom units, we deliver consistent quality every time."
        Icon={Sparkles}
        primaryColor="blue"
        formServiceType="apartment-cleaning"
      />

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What&apos;s Included in Apartment Cleaning?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our apartment cleaning services are designed specifically for smaller spaces, 
              ensuring every corner gets the attention it deserves.
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
                  <div className="text-3xl font-bold text-primary-blue mb-2">{service.price}</div>
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
              Why Choose Apartment Cleaning?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Apartment living requires specialized cleaning approaches that we&apos;ve perfected 
              through years of experience.
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
            Ready for a Cleaner Apartment?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for apartment cleaning services in Jacksonville. 
            Free estimates and flexible scheduling available.
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
    </div>
  );
}





