import { 
  Calendar, 
  Check, 
  Clock, 
  Users, 
  Shield, 
  Leaf, 
  Star,
  ArrowRight,
  Phone,
  CalendarDays,
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
  Camera
} from 'lucide-react';

export default function EventVenueCleaningPage() {
  const services = [
    {
      title: 'Pre-Event Cleaning',
      description: 'Comprehensive cleaning to prepare your venue for upcoming events',
      icon: Calendar,
      price: 'Starting at $300',
      duration: '4-8 hours',
      includes: ['Deep sanitization', 'Floor preparation', 'Restroom readiness', 'Kitchen cleaning', 'Final inspection']
    },
    {
      title: 'Post-Event Cleanup',
      description: 'Complete cleanup after events to restore venue to pristine condition',
      icon: PartyPopper,
      price: 'Starting at $400',
      duration: '3-6 hours',
      includes: ['Debris removal', 'Surface cleaning', 'Trash disposal', 'Equipment cleaning', 'Quick turnaround']
    },
    {
      title: 'Emergency Event Cleaning',
      description: 'Rush cleaning services for last-minute venue preparation needs',
      icon: Clock4,
      price: 'Starting at $500',
      duration: '2-4 hours',
      includes: ['Priority scheduling', 'Rush service', 'Essential cleaning', '24/7 availability', 'Emergency response']
    },
    {
      title: 'Venue Maintenance Cleaning',
      description: 'Ongoing maintenance to keep your venue consistently event-ready',
      icon: Building2,
      price: 'Starting at $250',
      duration: '2-4 hours',
      includes: ['Regular maintenance', 'Quality assurance', 'Preventive cleaning', 'Scheduled visits', 'Detailed reporting']
    }
  ];

  const benefits = [
    'Ensure your venue always makes a great first impression on clients',
    'Maintain high standards required for premium event bookings',
    'Reduce wear and tear on venue infrastructure and equipment',
    'Comply with health and safety regulations for public gatherings',
    'Increase venue booking rates and client satisfaction',
    'Protect your venue\'s reputation and professional image',
    'Handle high-traffic events with confidence',
    'Provide peace of mind knowing your venue is always ready'
  ];

  const process = [
    {
      step: 1,
      title: 'Event Assessment',
      description: 'Review event details and determine specific cleaning requirements',
      icon: Calendar
    },
    {
      step: 2,
      title: 'Strategic Planning',
      description: 'Develop cleaning plan that works with your event schedule',
      icon: FileText
    },
    {
      step: 3,
      title: 'Comprehensive Cleaning',
      description: 'Execute cleaning plan using professional equipment and techniques',
      icon: Shield
    },
    {
      step: 4,
      title: 'Quality Verification',
      description: 'Inspect all areas to ensure venue meets event standards',
      icon: Check
    },
    {
      step: 5,
      title: 'Event Ready',
      description: 'Confirm venue is ready for your event and provide final report',
      icon: PartyPopper
    }
  ];

  const venueTypes = [
    {
      type: 'Wedding Venues',
      focus: ['Ceremony area preparation', 'Reception space cleaning', 'Bridal suite sanitization', 'Outdoor area maintenance', 'Restroom excellence'],
      icon: PartyPopper
    },
    {
      type: 'Conference Centers',
      focus: ['Presentation area cleaning', 'Meeting room preparation', 'Lobby and common areas', 'Audio-visual equipment', 'Catering kitchen'],
      icon: Users
    },
    {
      type: 'Restaurants & Bars',
      focus: ['Dining area preparation', 'Kitchen deep cleaning', 'Bar area sanitization', 'Restroom maintenance', 'Outdoor seating'],
      icon: Home
    },
    {
      type: 'Event Halls',
      focus: ['Main hall preparation', 'Stage area cleaning', 'Dressing room sanitization', 'Storage area organization', 'Entrance and exits'],
      icon: Building2
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you clean a venue after an event?',
      answer: 'Our post-event cleanup typically takes 3-6 hours depending on venue size and event type. We can often complete cleanup overnight so your venue is ready for the next day\'s events.'
    },
    {
      question: 'Do you work around our event schedule?',
      answer: 'Absolutely! We coordinate closely with your event schedule and can perform cleaning during off-hours, between events, or whenever works best for your venue. We\'re flexible to accommodate your needs.'
    },
    {
      question: 'Can you handle large-scale events and venues?',
      answer: 'Yes! We have experience with venues of all sizes and can scale our team and equipment accordingly. For large events, we can bring additional staff to ensure timely completion.'
    },
    {
      question: 'What if we need emergency cleaning before an event?',
      answer: 'We offer emergency cleaning services and can usually respond within 2-4 hours for urgent situations. We understand that last-minute changes can happen and are prepared to help when needed.'
    },
    {
      question: 'Do you provide cleaning supplies and equipment?',
      answer: 'Yes, we bring all necessary cleaning supplies, equipment, and safety gear. We use commercial-grade equipment that provides superior results and can handle the demands of event venues.'
    },
    {
      question: 'How do you ensure our venue meets health and safety standards?',
      answer: 'We follow industry best practices and use hospital-grade disinfectants where appropriate. Our team is trained in proper sanitization techniques and we can provide cleaning reports for compliance purposes.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-accent-coral" />
            <span className="text-accent-coral font-semibold">Phase 3 Premium Service</span>
            <Star className="w-6 h-6 text-accent-coral" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Event Venue <span className="text-violet-600">Cleaning</span>
          </h1>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Professional venue cleaning services that ensure your event space always makes a perfect 
            first impression and meets the highest standards. Starting at just $300.
          </p>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=event-venue-cleaning"
              className="bg-violet-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-violet-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-violet-600 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
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
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our Event Venue Cleaning Services</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We offer comprehensive venue cleaning solutions designed specifically for event spaces, 
              ensuring your venue always meets the highest standards and impresses your clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-violet-200">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-violet-600" />
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
                      href={`/contact?service=event-venue-cleaning&type=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full bg-violet-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-violet-700 transition-colors duration-200 flex items-center justify-center space-x-2"
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

      {/* Venue Types */}
      <section className="py-20 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Specialized Cleaning for Every Venue Type</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Different venue types have different cleaning requirements. We provide specialized 
              cleaning solutions tailored to your specific venue and event needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {venueTypes.map((venue, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center">
                    <venue.icon className="w-6 h-6 text-violet-600" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">{venue.type}</h3>
                </div>
                
                <div>
                  <h4 className="font-semibold text-charcoal mb-3">Our Focus:</h4>
                  <ul className="space-y-2">
                    {venue.focus.map((item, itemIndex) => (
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
                Why Choose Event Venue Cleaning?
              </h2>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Event venue cleaning requires specialized knowledge, timing, and attention to detail 
                that differs significantly from standard cleaning services. Our service is designed 
                specifically for event spaces and the unique challenges they present.
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
            
            <div className="bg-violet-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Service Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Starting Price:</span>
                  <span className="font-semibold text-accent-coral">$300 per service</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Duration:</span>
                  <span className="font-semibold text-charcoal">2-8 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Frequency:</span>
                  <span className="font-semibold text-charcoal">Per event or scheduled</span>
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
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our 5-Step Venue Cleaning Process</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We follow a proven process designed specifically for event venues, ensuring 
              efficiency, quality, and perfect timing for your events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-violet-600">{step.step}</span>
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
              Get answers to common questions about our event venue cleaning service.
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
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Keep Your Venue Event-Ready!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free event venue cleaning quote and ensure your space always makes the perfect impression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=event-venue-cleaning"
              className="bg-accent-coral text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-coral/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-violet-600 transition-colors duration-200"
            >
              Call (904) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}




