import { 
  Shield, 
  Check, 
  Clock, 
  Users, 
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
  Building2,
  Briefcase,
  FileText,
  Monitor,
  Printer,
  PartyPopper,
  Music,
  Camera,
  Stethoscope,
  Cross,
  Microscope
} from 'lucide-react';

export default function MedicalFacilityCleaningPage() {
  const services = [
    {
      title: 'Daily Medical Cleaning',
      description: 'Regular sanitization for medical facilities maintaining health standards',
      icon: Shield,
      price: 'Starting at $400',
      duration: '4-8 hours',
      includes: ['Surface sanitization', 'High-touch area cleaning', 'Restroom sanitization', 'Waiting area maintenance', 'Compliance documentation']
    },
    {
      title: 'Deep Medical Sanitization',
      description: 'Comprehensive cleaning for medical facilities requiring thorough disinfection',
      icon: Cross,
      price: 'Starting at $600',
      duration: '6-12 hours',
      includes: ['Complete disinfection', 'Equipment sanitization', 'Air quality improvement', 'Pathogen elimination', 'Safety protocol compliance']
    },
    {
      title: 'Emergency Medical Cleaning',
      description: 'Urgent cleaning services for medical facilities with immediate needs',
      icon: Clock4,
      price: 'Starting at $800',
      duration: '2-6 hours',
      includes: ['24/7 availability', 'Emergency response', 'Priority scheduling', 'Rapid sanitization', 'Immediate documentation']
    },
    {
      title: 'Specialized Medical Cleaning',
      description: 'Cleaning for specific areas like operating rooms, labs, and isolation units',
      icon: Microscope,
      price: 'Starting at $500',
      duration: '3-8 hours',
      includes: ['Specialized protocols', 'Safety compliance', 'Equipment handling', 'Contamination control', 'Regulatory standards']
    }
  ];

  const benefits = [
    'Maintain compliance with health department and regulatory requirements',
    'Reduce healthcare-associated infections (HAIs) and improve patient safety',
    'Protect medical staff and patients from cross-contamination',
    'Extend the lifespan of expensive medical equipment',
    'Improve facility reputation and patient confidence',
    'Meet Joint Commission and CDC cleaning standards',
    'Reduce liability and insurance costs',
    'Provide peace of mind knowing your facility meets health standards'
  ];

  const process = [
    {
      step: 1,
      title: 'Risk Assessment',
      description: 'Evaluate facility areas and determine contamination risk levels',
      icon: Shield
    },
    {
      step: 2,
      title: 'Protocol Selection',
      description: 'Choose appropriate cleaning protocols for each area type',
      icon: FileText
    },
    {
      step: 3,
      title: 'Systematic Sanitization',
      description: 'Clean and disinfect using medical-grade products and techniques',
      icon: Cross
    },
    {
      step: 4,
      title: 'Quality Verification',
      description: 'Verify cleaning effectiveness and document compliance',
      icon: Check
    },
    {
      step: 5,
      title: 'Documentation',
      description: 'Provide detailed cleaning reports for regulatory compliance',
      icon: FileText
    }
  ];

  const facilityAreas = [
    {
      area: 'Patient Rooms',
      focus: ['Bed and furniture sanitization', 'Medical equipment cleaning', 'Surface disinfection', 'Air quality maintenance', 'Contamination control'],
      icon: Home
    },
    {
      area: 'Operating Rooms',
      focus: ['Surgical equipment cleaning', 'Surface sterilization', 'Air filtration maintenance', 'Contamination prevention', 'Regulatory compliance'],
      icon: Cross
    },
    {
      area: 'Waiting Areas',
      focus: ['High-touch surface cleaning', 'Seating area sanitization', 'Air quality improvement', 'Regular maintenance', 'Patient safety'],
      icon: Users
    },
    {
      area: 'Laboratories',
      focus: ['Equipment sanitization', 'Surface disinfection', 'Contamination control', 'Safety protocol compliance', 'Regulatory standards'],
      icon: Microscope
    }
  ];

  const faqs = [
    {
      question: 'Are your cleaning products safe for medical facilities?',
      answer: 'Absolutely! We use only medical-grade, EPA-registered disinfectants that are safe for medical environments. All products meet CDC and Joint Commission standards for healthcare facilities.'
    },
    {
      question: 'How do you ensure compliance with medical cleaning regulations?',
      answer: 'Our team is trained in healthcare cleaning protocols and we follow CDC, Joint Commission, and OSHA guidelines. We provide detailed documentation for all cleaning services to ensure regulatory compliance.'
    },
    {
      question: 'Can you handle specialized areas like operating rooms?',
      answer: 'Yes! We have experience cleaning all types of medical areas including operating rooms, isolation units, and laboratories. We follow specialized protocols for each area type.'
    },
    {
      question: 'What if we need emergency cleaning services?',
      answer: 'We offer 24/7 emergency cleaning services and can usually respond within 2-4 hours for urgent situations. We understand that medical facilities can have unexpected cleaning needs.'
    },
    {
      question: 'Do you provide cleaning supplies and equipment?',
      answer: 'Yes, we bring all necessary medical-grade cleaning supplies, equipment, and safety gear. We use hospital-grade equipment that provides superior results and meets medical facility standards.'
    },
    {
      question: 'How do you prevent cross-contamination during cleaning?',
      answer: 'We use color-coded cleaning materials, follow strict protocols, and use proper PPE. Our team is trained in infection control and we maintain strict separation between different facility areas.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-accent-coral" />
            <span className="text-accent-coral font-semibold">Phase 3 Premium Service</span>
            <Star className="w-6 h-6 text-accent-coral" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Medical Facility <span className="text-red-600">Cleaning</span>
          </h1>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Professional medical facility cleaning services that meet healthcare standards, 
            ensure patient safety, and maintain regulatory compliance. Starting at just $400.
          </p>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=medical-facility-cleaning"
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
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
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our Medical Facility Cleaning Services</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We offer comprehensive medical cleaning solutions designed specifically for healthcare environments, 
              ensuring your facility meets the highest standards for patient safety and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-red-200">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-red-600" />
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
                      href={`/contact?service=medical-facility-cleaning&type=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
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

      {/* Facility Areas */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Comprehensive Medical Area Cleaning</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We provide specialized cleaning for all areas of your medical facility, ensuring every space 
              meets healthcare standards and maintains the highest level of patient safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilityAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <area.icon className="w-6 h-6 text-red-600" />
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
                Why Choose Medical Facility Cleaning?
              </h2>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Medical facility cleaning requires specialized knowledge, protocols, and attention to detail 
                that differs significantly from standard cleaning services. Our service is designed specifically 
                for healthcare environments and regulatory compliance.
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
            
            <div className="bg-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Service Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Starting Price:</span>
                  <span className="font-semibold text-accent-coral">$400 per service</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Duration:</span>
                  <span className="font-semibold text-charcoal">2-12 hours</span>
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
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our 5-Step Medical Cleaning Process</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We follow a proven process designed specifically for medical facilities, ensuring 
              safety, compliance, and the highest standards of cleanliness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">{step.step}</span>
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
              Get answers to common questions about our medical facility cleaning service.
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
      <section className="py-20 bg-gradient-to-r from-red-600 to-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Keep Your Medical Facility Safe and Compliant!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free medical facility cleaning quote and ensure your facility meets the highest healthcare standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=medical-facility-cleaning"
              className="bg-accent-coral text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-coral/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
            >
              Call (904) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}




