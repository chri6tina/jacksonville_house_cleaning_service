import { Stethoscope, Sparkles, Clock, Users, Shield, Leaf, Check, Star, ArrowRight, Phone, MapPin, Award, Truck, Calendar, Zap } from 'lucide-react';
import Link from 'next/link';
import UniversalServiceHero from '@/components/UniversalServiceHero';


export default function MedicalFacilityCleaningPage() {
  const services = [
    {
      name: 'Exam Room Cleaning',
      price: 'From $150',
      description: 'Complete exam room sanitization',
      features: ['Surface disinfection', 'Equipment cleaning', 'Floor sanitization', 'Waste disposal', 'Biohazard protocols']
    },
    {
      name: 'Waiting Area Cleaning',
      price: 'From $120',
      description: 'Public area maintenance',
      features: ['Seating sanitization', 'Surface disinfection', 'Floor care', 'Air purification', 'Touchpoint cleaning']
    },
    {
      name: 'Surgical Suite Cleaning',
      price: 'From $300',
      description: 'Sterile environment preparation',
      features: ['Sterile protocols', 'Equipment sterilization', 'Surface disinfection', 'Air quality control', 'Compliance documentation']
    },
    {
      name: '24/7 Emergency Service',
      price: 'From $200',
      description: 'Emergency response cleaning',
      features: ['Immediate response', 'Biohazard cleanup', 'Emergency protocols', 'After-hours service', 'Priority scheduling']
    }
  ];

  const benefits = [
    {
      title: 'HIPAA Compliant',
      description: 'Full privacy protection',
      icon: Shield
    },
    {
      title: 'Medical Grade Products',
      description: 'Hospital-grade disinfectants',
      icon: Zap
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
    <div className="min-h-screen bg-white">
      <UniversalServiceHero 
        title="Medical Facility Cleaning Services"
        subtitle="Professional medical facility cleaning in Jacksonville with hospital-grade standards. We maintain sterile environments and ensure patient safety through rigorous cleaning protocols."
        Icon={Sparkles}
        primaryColor="blue"
        formServiceType="medical-facility-cleaning"
      />

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Jacksonville Medical Facility Cleaning Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the perfect medical cleaning package for your Jacksonville facility. 
              All packages include hospital-grade products and compliance documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-red-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <div className="text-3xl font-bold text-red-600 mb-2">{service.price}</div>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="block w-full text-center py-3 px-6 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
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
              Why Choose Our Jacksonville Medical Facility Cleaning?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're your local medical cleaning experts, providing reliable, professional service that 
              maintains the highest standards of cleanliness and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Maintain Medical Standards?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for medical facility cleaning services in Jacksonville. 
            Free estimates and same-day service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9044563851"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (904) 456-3851</span>
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




