import { 
  Gauge, 
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
  Building2,
  AlertTriangle,
  Droplets
} from 'lucide-react';

export default function GutterCleaningPage() {
  const services = [
    {
      title: 'Residential Gutter Cleaning',
      description: 'Complete gutter and downspout cleaning for single-family homes',
      icon: Home,
      price: 'Starting at $80',
      duration: '1-2 hours',
      includes: ['Remove all debris', 'Clean downspouts', 'Test water flow', 'Inspect for damage']
    },
    {
      title: 'Multi-Story Home Cleaning',
      description: 'Professional gutter cleaning for two-story and taller homes',
      icon: Building2,
      price: 'Starting at $120',
      duration: '2-3 hours',
      includes: ['Safety equipment', 'Extended ladders', 'Complete inspection', 'Damage report']
    },
    {
      title: 'Commercial Property Cleaning',
      description: 'Gutter maintenance for office buildings and retail properties',
      icon: Building2,
      price: 'Starting at $200',
      duration: '2-4 hours',
      includes: ['After-hours service', 'Safety compliance', 'Detailed reporting', 'Maintenance schedule']
    },
    {
      title: 'Gutter Guard Installation',
      description: 'Install protective guards to reduce future maintenance needs',
      icon: Shield,
      price: 'Starting at $300',
      duration: '3-5 hours',
      includes: ['Professional installation', 'Quality materials', 'Warranty coverage', 'Maintenance tips']
    }
  ];

  const benefits = [
    'Prevent costly water damage to your home\'s foundation',
    'Extend the lifespan of your gutters and roof',
    'Protect your landscaping from erosion and flooding',
    'Maintain proper water drainage away from your property',
    'Prevent basement flooding and moisture issues',
    'Avoid expensive structural repairs caused by water damage',
    'Improve your home\'s overall appearance and value',
    'Ensure your gutters function properly year-round'
  ];

  const process = [
    {
      step: 1,
      title: 'Safety Assessment',
      description: 'Evaluate roof access, ladder placement, and safety requirements',
      icon: Shield
    },
    {
      step: 2,
      title: 'Debris Removal',
      description: 'Remove leaves, twigs, and other debris from gutters and downspouts',
      icon: Leaf
    },
    {
      step: 3,
      title: 'Deep Cleaning',
      description: 'Thoroughly clean all gutter surfaces and remove stubborn buildup',
      icon: Droplets
    },
    {
      step: 4,
      title: 'Downspout Testing',
      description: 'Test water flow through all downspouts to ensure proper drainage',
      icon: Wind
    },
    {
      step: 5,
      title: 'Inspection & Report',
      description: 'Inspect for damage and provide detailed cleaning report',
      icon: Check
    }
  ];

  const warningSigns = [
    {
      sign: 'Water pooling around foundation',
      description: 'Indicates gutters are clogged and not draining properly',
      icon: AlertTriangle
    },
    {
      sign: 'Gutters overflowing during rain',
      description: 'Clear sign that debris is blocking water flow',
      icon: Droplets
    },
    {
      sign: 'Visible debris in gutters',
      description: 'Leaves, twigs, or other materials visible from ground level',
      icon: Leaf
    },
    {
      sign: 'Water damage on siding',
      description: 'Stains or damage caused by overflowing gutters',
      icon: Home
    },
    {
      sign: 'Sagging or pulling gutters',
      description: 'Weight of debris can cause gutters to pull away from house',
      icon: AlertTriangle
    },
    {
      sign: 'Basement moisture issues',
      description: 'Poor drainage can lead to foundation and basement problems',
      icon: AlertTriangle
    }
  ];

  const faqs = [
    {
      question: 'How often should I clean my gutters?',
      answer: 'We recommend cleaning gutters twice yearly - in spring after pollen season and in fall after leaves have fallen. Homes with many trees may need more frequent cleaning.'
    },
    {
      question: 'What happens if I don\'t clean my gutters?',
      answer: 'Clogged gutters can cause water damage to your roof, siding, foundation, and landscaping. This can lead to expensive repairs costing thousands of dollars.'
    },
    {
      question: 'Do you clean downspouts too?',
      answer: 'Yes, we clean both gutters and downspouts to ensure proper water flow. Downspouts are often overlooked but are crucial for proper drainage.'
    },
    {
      question: 'How long does gutter cleaning take?',
      answer: 'Most residential gutter cleaning takes 1-2 hours depending on the size of your home and amount of debris. We\'ll give you a more accurate estimate during our assessment.'
    },
    {
      question: 'Do you offer gutter repair services?',
      answer: 'Yes, we can identify and repair common gutter issues like leaks, loose brackets, and damaged sections. We\'ll provide a detailed report of any problems found.'
    },
    {
      question: 'Is gutter cleaning safe?',
      answer: 'Absolutely. Our technicians are trained in ladder safety and use proper safety equipment. We have insurance coverage for your protection and peace of mind.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-accent-coral" />
            <span className="text-accent-coral font-semibold">Phase 1 New Service</span>
            <Star className="w-6 h-6 text-accent-coral" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Professional <span className="text-amber-600">Gutter Cleaning</span>
          </h1>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Protect your home from water damage with our professional gutter cleaning service. 
            We ensure proper drainage and prevent costly foundation issues. Starting at just $80.
          </p>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=gutter-cleaning"
              className="bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
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
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our Gutter Cleaning Services</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We offer comprehensive gutter cleaning solutions for all types of properties, 
              from single-family homes to commercial buildings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-amber-200">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-amber-600" />
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

                  <div className="mb-6">
                    <h4 className="font-semibold text-charcoal mb-3">What&apos;s Included:</h4>
                    <ul className="space-y-2">
                      {service.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-charcoal/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href={`/contact?service=gutter-cleaning&type=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full bg-amber-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center space-x-2"
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

      {/* Warning Signs */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Warning Signs You Need Gutter Cleaning</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Don&apos;t wait until it's too late! These signs indicate your gutters need immediate attention 
              to prevent costly water damage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {warningSigns.map((warning, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <warning.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">{warning.sign}</h3>
                    <p className="text-charcoal/70 text-sm">{warning.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose This Service */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                Why Choose Professional Gutter Cleaning?
              </h2>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Professional gutter cleaning is essential for protecting your home&apos;s foundation and 
                preventing expensive water damage. Our trained technicians use proper safety equipment 
                and techniques to ensure your gutters function properly year-round.
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
            
            <div className="bg-amber-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Service Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Starting Price:</span>
                  <span className="font-semibold text-accent-coral">$80 per home</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Duration:</span>
                  <span className="font-semibold text-charcoal">1-2 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Frequency:</span>
                  <span className="font-semibold text-charcoal">Twice yearly (spring/fall)</span>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our 5-Step Gutter Cleaning Process</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We follow a proven, systematic approach to ensure your gutters are thoroughly cleaned 
              and functioning properly to protect your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{step.title}</h3>
                <p className="text-charcoal/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-charcoal/70">
              Get answers to common questions about our gutter cleaning service.
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
      <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Protect Your Home Today!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free gutter cleaning quote and prevent costly water damage to your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=gutter-cleaning"
              className="bg-accent-coral text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-coral/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-200"
            >
              Call (904) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}




