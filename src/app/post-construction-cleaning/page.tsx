import React from 'react';
import { Hammer, Clock, Shield, Check, Star, Phone, Calendar, Sparkles } from 'lucide-react';

export default function PostConstructionCleaningPage() {
  const services = [
    'Construction debris removal and disposal',
    'Fine dust elimination from all surfaces',
    'Wall and ceiling cleaning and spot treatment',
    'Floor deep cleaning and polishing',
    'Window cleaning (interior and exterior)',
    'Cabinet and countertop cleaning',
    'Appliance cleaning and sanitization',
    'Light fixture and electrical outlet cleaning',
    'Air vent and duct cleaning',
    'Final touch-up and quality inspection'
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Complete protection for your newly renovated space'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'We work around your construction timeline'
    },
    {
      icon: Check,
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction or we\'ll make it right'
    },
    {
      icon: Star,
      title: 'Experienced Team',
      description: 'Specialized in post-construction cleaning'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Post-Construction Cleaning Services
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Professional post-construction cleaning to transform your newly renovated space into a 
              spotless, move-in ready home. We handle the mess so you can enjoy your beautiful new space.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:9044563851"
                className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call for Quote
              </a>
              <a 
                href="/contact-us"
                className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                Professional Post-Construction Cleaning
              </h2>
              <p className="text-xl text-charcoal/70 mb-8 leading-relaxed">
                After construction or renovation, your space needs specialized cleaning to remove construction 
                debris, dust, and residue. Our post-construction cleaning service ensures your newly renovated 
                space is spotless and ready for you to enjoy.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Hammer className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-charcoal font-medium">Construction debris removal</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-charcoal font-medium">Licensed, bonded & insured</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-primary-blue mr-3" />
                  <span className="text-charcoal font-medium">Specialized equipment and techniques</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Service Pricing</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Small Renovation</span>
                  <span className="text-primary-blue font-bold">From $200</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Medium Renovation</span>
                  <span className="text-primary-blue font-bold">From $350</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Large Renovation</span>
                  <span className="text-primary-blue font-bold">From $500</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Full Home Construction</span>
                  <span className="text-primary-blue font-bold">From $800</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary-blue/10 rounded-xl">
                <p className="text-charcoal text-sm">
                  <strong>Note:</strong> Pricing depends on project size, complexity, and level of construction debris. 
                  Contact us for a detailed assessment and quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              What&apos;s Included in Post-Construction Cleaning
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Our comprehensive post-construction cleaning service removes all traces of construction 
              and leaves your space spotless and ready for occupancy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Debris Removal</h3>
              <ul className="space-y-3">
                {services.slice(0, 5).map((service, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal/70">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Deep Cleaning</h3>
              <ul className="space-y-3">
                {services.slice(5).map((service, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal/70">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Why Choose Our Post-Construction Cleaning?
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We specialize in post-construction cleaning and understand the unique challenges 
              of cleaning after renovation projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              We Clean After All Types of Construction Projects
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              From small renovations to major construction projects, we have the expertise 
              to handle any post-construction cleaning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-8 h-8 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Kitchen Renovations</h3>
              <p className="text-charcoal/70">
                Complete cleaning after kitchen remodeling, including cabinet installation and appliance setup.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-aqua/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-8 h-8 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Bathroom Remodeling</h3>
              <p className="text-charcoal/70">
                Thorough cleaning after bathroom renovations, including tile work and fixture installation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-8 h-8 text-accent-coral" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Room Additions</h3>
              <p className="text-charcoal/70">
                Complete cleaning for new room additions, including drywall, painting, and flooring.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Flooring Installation</h3>
              <p className="text-charcoal/70">
                Post-installation cleaning for hardwood, tile, carpet, and other flooring materials.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-8 h-8 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Painting Projects</h3>
              <p className="text-charcoal/70">
                Cleanup after interior and exterior painting, including overspray removal and touch-ups.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-accent-aqua/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-8 h-8 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">New Construction</h3>
              <p className="text-charcoal/70">
                Comprehensive cleaning for newly built homes, ensuring they&apos;re move-in ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
            Ready to Transform Your Construction Site?
          </h2>
          <p className="text-xl text-charcoal/70 mb-8 max-w-3xl mx-auto">
            Contact us today for a free quote and to schedule your professional post-construction cleaning service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:9044563851"
              className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (904) 456-3851
            </a>
            <a 
              href="/contact-us"
              className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}





