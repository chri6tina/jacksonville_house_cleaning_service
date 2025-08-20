import { MapPin, Star, Phone, Clock, Users, Shield, Building2, Home, Car, Wind, Sparkles, Truck, Hammer, PawPrint, Heart, PartyPopper, ShoppingBag, CheckCircle, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function SouthsideCommercialOfficeCleaningPage() {
  const commercialCleaningFeatures = [
    'Multi-floor cleaning coordination',
    'Common area maintenance',
    '24/7 availability options',
    'Corporate standards compliance',
    'High-traffic area focus',
    'Break room sanitization',
    'Conference room preparation',
    'Reception area upkeep'
  ];

  const southsideBenefits = [
    'Suburban business park expertise',
    'Growing area knowledge',
    'Traffic pattern understanding',
    'Local business relationships',
    'Flexible scheduling options',
    'Scalable service solutions',
    'Emergency response capability',
    'Cost-effective packages'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Business Assessment',
      description: 'Evaluate your office layout, traffic patterns, and corporate cleaning standards',
      icon: Briefcase
    },
    {
      step: 2,
      title: 'Service Planning',
      description: 'Design a cleaning schedule that works with your business operations',
      icon: Clock
    },
    {
      step: 3,
      title: 'Professional Execution',
      description: 'Implement cleaning protocols with attention to detail and quality',
      icon: Sparkles
    },
    {
      step: 4,
      title: 'Quality Assurance',
      description: 'Conduct thorough inspections to ensure corporate standards are met',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-600 to-gray-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Building2 className="w-16 h-16 text-slate-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Commercial Office Cleaning in Southside Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 mb-8 max-w-4xl mx-auto">
            Professional commercial office cleaning services designed specifically for Southside Jacksonville businesses. 
            From office parks to corporate headquarters, we maintain your professional environment to the highest standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=commercial-office-cleaning&location=southside"
              className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/locations/southside"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Southside Jacksonville</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Commercial Cleaning for Southside Jacksonville
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Southside Jacksonville&apos;s growing business district requires cleaning services that understand 
                  the unique needs of suburban office environments. From modern office parks to established 
                  corporate headquarters, we provide comprehensive cleaning solutions.
                </p>
                <p>
                  Our Southside Jacksonville commercial office cleaning services are designed to meet the 
                  highest corporate standards while working around your business schedule. We understand the 
                  importance of maintaining a professional appearance for your clients and employees.
                </p>
                <p>
                  Whether you need daily maintenance, weekly deep cleaning, or special event preparation, 
                  our local team is equipped to handle all your commercial cleaning needs in Southside Jacksonville.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h3>
              <div className="space-y-4">
                {commercialCleaningFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Southside-Specific Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Southside Jacksonville Commercial Cleaning Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local knowledge that makes a difference in Southside Jacksonville&apos;s growing business environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {southsideBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-slate-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Southside Jacksonville Commercial Cleaning Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to maintaining professional office environments in Southside Jacksonville
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-slate-600" />
                </div>
                <div className="bg-slate-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Park Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Southside Jacksonville Business Park Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized solutions for Southside Jacksonville&apos;s unique business environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Building2 className="w-12 h-12 text-slate-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Office Park Expertise</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Southside Jacksonville&apos;s office parks require specialized cleaning approaches. 
                We handle multi-building coordination, shared spaces, and corporate standards.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Multi-building coordination</li>
                <li>• Shared space maintenance</li>
                <li>• Corporate standards compliance</li>
                <li>• Flexible scheduling options</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="w-12 h-12 text-slate-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Growth-Ready Services</h3>
              </div>
              <div className="text-gray-600 mb-4">
                As Southside Jacksonville continues to grow, our services scale with your business. 
                We provide flexible solutions that adapt to your changing needs.
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Scalable cleaning packages</li>
                <li>• Flexible scheduling</li>
                <li>• Emergency response</li>
                <li>• Cost-effective solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-600 to-gray-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Southside Jacksonville Commercial Cleaning?
          </h2>
          <p className="text-xl text-slate-100 mb-8">
            Get a free quote for your Southside Jacksonville commercial office
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=commercial-office-cleaning&location=southside"
              className="bg-white text-slate-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span>Get Your Free Quote</span>
            </Link>
            <Link
              href="/locations/southside"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View Southside Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




