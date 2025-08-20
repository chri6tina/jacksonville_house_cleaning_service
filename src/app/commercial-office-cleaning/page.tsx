import { 
  Building2, 
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
  AlertTriangle,
  Droplets,
  PawPrint,
  Sparkles,
  Accessibility,
  Clock4,
  Hotel,
  Briefcase,
  FileText,
  Monitor,
  Printer
} from 'lucide-react';

export default function CommercialOfficeCleaningPage() {
  const services = [
    {
      title: 'Daily Office Cleaning',
      description: 'Regular maintenance cleaning for high-traffic office environments',
      icon: Briefcase,
      price: 'Starting at $200',
      duration: '2-4 hours',
      includes: ['Trash removal', 'Surface sanitization', 'Restroom cleaning', 'Kitchen maintenance', 'Floor care']
    },
    {
      title: 'Deep Office Cleaning',
      description: 'Comprehensive cleaning for offices requiring thorough sanitization',
      icon: Sparkles,
      price: 'Starting at $350',
      duration: '4-8 hours',
      includes: ['Complete sanitization', 'Equipment cleaning', 'Window cleaning', 'Carpet deep cleaning', 'Air duct cleaning']
    },
    {
      title: 'After-Hours Cleaning',
      description: 'Cleaning services performed outside business hours for minimal disruption',
      icon: Clock4,
      price: 'Starting at $250',
      duration: '3-6 hours',
      includes: ['Uninterrupted service', 'Extended cleaning time', 'Security coordination', 'Quality assurance', 'Detailed reporting']
    },
    {
      title: 'Specialized Office Cleaning',
      description: 'Cleaning for specific areas like server rooms, labs, and executive offices',
      icon: Monitor,
      price: 'Starting at $300',
      duration: '2-5 hours',
      includes: ['Specialized equipment', 'Safety protocols', 'Confidentiality measures', 'Technical cleaning', 'Compliance standards']
    }
  ];

  const benefits = [
    'Maintain professional appearance that impresses clients and employees',
    'Improve workplace health and reduce sick days',
    'Comply with health and safety regulations',
    'Increase employee productivity and morale',
    'Protect expensive office equipment and furniture',
    'Reduce maintenance costs and extend asset lifespan',
    'Meet industry-specific cleaning standards',
    'Provide flexible scheduling to minimize business disruption'
  ];

  const process = [
    {
      step: 1,
      title: 'Site Assessment',
      description: 'Evaluate office layout, traffic patterns, and specific cleaning requirements',
      icon: Building2
    },
    {
      step: 2,
      title: 'Strategic Planning',
      description: 'Develop cleaning plan that minimizes disruption to daily operations',
      icon: FileText
    },
    {
      step: 3,
      title: 'Systematic Cleaning',
      description: 'Clean area by area using commercial-grade equipment and products',
      icon: Shield
    },
    {
      step: 4,
      title: 'Quality Control',
      description: 'Inspect all areas to ensure cleaning standards are met',
      icon: Check
    },
    {
      step: 5,
      title: 'Documentation',
      description: 'Provide detailed cleaning report and maintenance recommendations',
      icon: FileText
    }
  ];

  const officeAreas = [
    {
      area: 'Workstations & Desks',
      focus: ['Sanitize all surfaces', 'Clean computer equipment', 'Organize desk items', 'Remove dust and debris', 'Sanitize phones and keyboards'],
      icon: Monitor
    },
    {
      area: 'Conference Rooms',
      focus: ['Clean tables and chairs', 'Sanitize presentation equipment', 'Clean whiteboards and screens', 'Vacuum carpets', 'Restock supplies'],
      icon: Users
    },
    {
      area: 'Kitchen & Break Rooms',
      focus: ['Clean appliances thoroughly', 'Sanitize countertops', 'Clean refrigerators', 'Empty trash and recycling', 'Restock essentials'],
      icon: Home
    },
    {
      area: 'Restrooms',
      focus: ['Deep sanitization', 'Restock supplies', 'Clean fixtures and mirrors', 'Sanitize high-touch areas', 'Maintain air fresheners'],
      icon: Shield
    }
  ];

  const faqs = [
    {
      question: 'How do you minimize disruption to our daily operations?',
      answer: 'We offer flexible scheduling including early morning, evening, and weekend cleaning. We can also work around your schedule and use quiet equipment to minimize noise during business hours.'
    },
    {
      question: 'What cleaning products do you use in commercial offices?',
      answer: 'We use commercial-grade, eco-friendly cleaning products that are effective yet safe for office environments. All products meet industry standards and are safe for employees and equipment.'
    },
    {
      question: 'Can you handle specialized areas like server rooms or labs?',
      answer: 'Absolutely! We have experience cleaning specialized areas and can provide appropriate cleaning methods for sensitive environments. We follow all safety protocols and use specialized equipment when needed.'
    },
    {
      question: 'Do you provide cleaning supplies and equipment?',
      answer: 'Yes, we bring all necessary cleaning supplies, equipment, and safety gear. We use commercial-grade equipment that provides superior results compared to standard cleaning tools.'
    },
    {
      question: 'How do you ensure security during after-hours cleaning?',
      answer: 'We coordinate with your security team, use proper identification, and follow strict protocols. Our team is bonded and insured, and we can provide references from other commercial clients.'
    },
    {
      question: 'What if we need emergency cleaning services?',
      answer: 'We offer emergency cleaning services and can usually respond within 24 hours for urgent situations. We understand that unexpected events can happen and are prepared to help when needed.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-accent-coral" />
            <span className="text-accent-coral font-semibold">Phase 3 Premium Service</span>
            <Star className="w-6 h-6 text-accent-coral" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Commercial <span className="text-slate-600">Office Cleaning</span>
          </h1>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Professional office cleaning services that maintain your business&apos;s professional image, 
            improve workplace health, and boost employee productivity. Starting at just $200.
          </p>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=commercial-office-cleaning"
              className="bg-slate-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-slate-600 text-slate-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-600 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
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
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our Commercial Office Cleaning Services</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We offer comprehensive office cleaning solutions designed specifically for commercial environments, 
              ensuring your business maintains a professional appearance and healthy work environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-slate-200">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-slate-600" />
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
                      href={`/contact?service=commercial-office-cleaning&type=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full bg-slate-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-slate-700 transition-colors duration-200 flex items-center justify-center space-x-2"
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

      {/* Office Areas */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Comprehensive Office Area Cleaning</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We provide detailed cleaning for all areas of your office, ensuring every space 
              meets commercial cleaning standards and maintains a professional appearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {officeAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <area.icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">{area.area}</h3>
                </div>
                
                <div>
                  <h4 className="font-semibold text-charcoal mb-3">Our Focus:</h4>
                  <ul className="space-y-2">
                    {area.focus.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-charcoal/70">{item}</span>
                      </li>
                    ))}
                  </ul>
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
                Why Choose Commercial Office Cleaning?
              </h2>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Commercial office cleaning requires specialized knowledge, equipment, and processes 
                that differ significantly from residential cleaning. Our service is designed specifically 
                for business environments and professional standards.
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
            
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Service Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Starting Price:</span>
                  <span className="font-semibold text-accent-coral">$200 per visit</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Duration:</span>
                  <span className="font-semibold text-charcoal">2-8 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Frequency:</span>
                  <span className="font-semibold text-charcoal">Daily to monthly</span>
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
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our 5-Step Commercial Cleaning Process</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We follow a proven process designed specifically for commercial environments, ensuring 
              efficiency, quality, and minimal disruption to your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-600">{step.step}</span>
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
              Get answers to common questions about our commercial office cleaning service.
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
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Give Your Office the Professional Clean It Deserves!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free commercial office cleaning quote and maintain the professional image your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=commercial-office-cleaning"
              className="bg-accent-coral text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-coral/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors duration-200"
            >
              Call (904) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}




