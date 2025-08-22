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
      price: 'Starting at $400',
      duration: '4-8 hours',
      includes: ['Deep sanitization', 'Floor preparation', 'Restroom readiness', 'Kitchen cleaning', 'Final inspection']
    },
    {
      title: 'Post-Event Cleanup',
      description: 'Complete cleanup after events to restore venue to pristine condition',
      icon: PartyPopper,
      price: 'Starting at $500',
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-violet-600" />
            <span className="text-violet-600 font-semibold">Phase 3 Premium Service</span>
            <Star className="w-6 h-6 text-violet-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Event Venue <span className="text-violet-600">Cleaning</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Event Venue Cleaning Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We offer comprehensive cleaning solutions designed specifically for event venues, 
              ensuring your space always meets the highest standards for client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-violet-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-violet-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <div className="text-3xl font-bold text-violet-600 mb-2">{service.price}</div>
                  <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                  <div className="text-sm text-gray-600 mb-4">Duration: {service.duration}</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact?service=event-venue-cleaning"
                  className="block w-full text-center py-3 px-6 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700 transition-colors duration-200"
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Event Venue Cleaning?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our specialized approach ensures your venue always makes the perfect first impression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-violet-600" />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Event Venue Cleaning Process</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We follow a comprehensive 5-step process designed to ensure your venue is always event-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-violet-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Solutions for Every Venue Type</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Different venues have different cleaning needs. We have specialized solutions for each type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {venueTypes.map((venueType, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <venueType.icon className="w-8 h-8 text-violet-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{venueType.type}</h3>
                </div>

                <ul className="space-y-2">
                  {venueType.focus.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-700">
              Get answers to common questions about our event venue cleaning services.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-violet-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Event-Ready Venues?</h2>
          <p className="text-xl text-violet-100 mb-8">
            Contact us today to schedule your event venue cleaning service. 
            We ensure your venue always makes the perfect first impression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=event-venue-cleaning"
              className="bg-white text-violet-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-violet-600 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}




