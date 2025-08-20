import { 
  Droplets, 
  Check, 
  Clock, 
  Users, 
  Shield, 
  Leaf, 
  Star,
  ArrowRight,
  Phone,
  Calendar,
  Calculator,
  MapPin,
  Zap,
  Wind,
  Thermometer,
  Home,
  Car,
  Building2
} from 'lucide-react';

export default function PressureWashingPage() {
  const services = [
    {
      title: 'Driveway & Sidewalk Cleaning',
      description: 'Remove oil stains, dirt, and grime from concrete and asphalt surfaces',
      icon: Car,
      price: 'Starting at $100',
      duration: '1-2 hours'
    },
    {
      title: 'Patio & Deck Restoration',
      description: 'Restore outdoor living spaces to their original beauty',
      icon: Home,
      price: 'Starting at $150',
      duration: '1-3 hours'
    },
    {
      title: 'Building Exterior Cleaning',
      description: 'Clean siding, brick, and stucco surfaces safely and effectively',
      icon: Building2,
      price: 'Starting at $200',
      duration: '2-4 hours'
    },
    {
      title: 'Fence & Gate Cleaning',
      description: 'Remove mold, mildew, and dirt from all types of fencing',
      icon: Shield,
      price: 'Starting at $80',
      duration: '1-2 hours'
    },
    {
      title: 'Roof & Gutter Cleaning',
      description: 'Remove algae, moss, and debris from roof surfaces and gutters',
      icon: Wind,
      price: 'Starting at $250',
      duration: '2-4 hours'
    },
    {
      title: 'Commercial Property Cleaning',
      description: 'Professional cleaning for retail, office, and industrial buildings',
      icon: Building2,
      price: 'Starting at $300',
      duration: '3-6 hours'
    }
  ];

  const benefits = [
    'Dramatically improve your property\'s curb appeal',
    'Increase property value and marketability',
    'Prevent surface damage and deterioration',
    'Remove harmful mold, mildew, and algae',
    'Create a safer, more welcoming environment',
    'Extend the life of your exterior surfaces',
    'Professional results that last longer',
    'Eco-friendly cleaning solutions used'
  ];

  const process = [
    {
      step: 1,
      title: 'Site Assessment',
      description: 'Evaluate surfaces, identify stains, and determine optimal pressure settings',
      icon: Shield
    },
    {
      step: 2,
      title: 'Surface Preparation',
      description: 'Remove loose debris and apply pre-treatment solutions if needed',
      icon: Droplets
    },
    {
      step: 3,
      title: 'Pressure Washing',
      description: 'Use appropriate pressure and techniques for each surface type',
      icon: Zap
    },
    {
      step: 4,
      title: 'Stain Treatment',
      description: 'Apply specialized treatments for stubborn stains and marks',
      icon: Check
    },
    {
      step: 5,
      title: 'Final Inspection',
      description: 'Ensure all areas are thoroughly cleaned and surfaces are protected',
      icon: Shield
    }
  ];

  const faqs = [
    {
      question: 'What surfaces can you pressure wash?',
      answer: 'We can clean concrete, asphalt, brick, stucco, vinyl siding, wood, and most other exterior surfaces. We adjust pressure settings to avoid damage to delicate materials.'
    },
    {
      question: 'How often should I pressure wash my property?',
      answer: 'Most properties benefit from pressure washing every 1-2 years. High-traffic areas like driveways may need more frequent cleaning, while siding can go 2-3 years between cleanings.'
    },
    {
      question: 'Will pressure washing damage my surfaces?',
      answer: 'No, we use professional equipment and adjust pressure settings for each surface type. Our technicians are trained to clean effectively without causing damage.'
    },
    {
      question: 'How long does the process take?',
      answer: 'Most residential pressure washing jobs take 1-3 hours depending on the size of the area and type of surfaces being cleaned.'
    },
    {
      question: 'Do you use eco-friendly cleaning solutions?',
      answer: 'Yes, we use environmentally safe cleaning products that are effective yet gentle on your property and the environment.'
    },
    {
      question: 'What\'s included in your pressure washing service?',
      answer: 'Our service includes surface preparation, pressure washing, stain treatment if needed, and cleanup. We also provide a satisfaction guarantee on all our work.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-accent-coral" />
            <span className="text-accent-coral font-semibold">Phase 1 New Service</span>
            <Star className="w-6 h-6 text-accent-coral" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Professional <span className="text-emerald-600">Pressure Washing</span>
          </h1>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Transform your property's appearance with our professional pressure washing services. 
            From driveways to building exteriors, we restore surfaces to like-new condition. Starting at just $100.
          </p>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=pressure-washing"
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our Pressure Washing Services</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We offer comprehensive pressure washing solutions for all types of exterior surfaces 
              and properties, from residential driveways to commercial buildings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal">{service.title}</h3>
                      <p className="text-sm text-charcoal/60">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-charcoal/60">Price:</span>
                      <span className="text-sm font-medium text-accent-coral">{service.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-charcoal/60">Duration:</span>
                      <span className="text-sm font-medium text-charcoal">{service.duration}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href={`/contact?service=pressure-washing&type=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose This Service */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                Why Choose Professional Pressure Washing?
              </h2>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Professional pressure washing goes far beyond what a home pressure washer can achieve. 
                Our commercial-grade equipment, specialized techniques, and trained technicians deliver 
                results that last longer and look better than DIY attempts.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-accent-green mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Service Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Starting Price:</span>
                  <span className="font-semibold text-accent-coral">$100 per area</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Duration:</span>
                  <span className="font-semibold text-charcoal">1-3 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Frequency:</span>
                  <span className="font-semibold text-charcoal">Seasonal or as needed</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Warranty:</span>
                  <span className="font-semibold text-charcoal">100% satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our 5-Step Pressure Washing Process</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your property is cleaned safely and effectively, 
              with results that exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{step.title}</h3>
                <p className="text-charcoal/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-charcoal/70">
              Get answers to common questions about our pressure washing services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-charcoal mb-3">{faq.question}</h3>
                <p className="text-charcoal/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free pressure washing quote and restore your property's curb appeal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=pressure-washing"
              className="bg-accent-coral text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-coral/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200"
            >
              Call (904) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}




