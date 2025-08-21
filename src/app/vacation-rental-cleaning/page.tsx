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
  Building2,
  AlertTriangle,
  Droplets,
  PawPrint,
  Sparkles,
  Accessibility,
  Clock4,
  Hotel
} from 'lucide-react';

export default function VacationRentalCleaningPage() {
  const services = [
    {
      title: 'Standard Turnover Cleaning',
      description: 'Complete cleaning between guest stays for vacation rentals',
      icon: Home,
      price: 'Starting at $150',
      duration: '2-3 hours',
      includes: ['Full home cleaning', 'Linen replacement', 'Bathroom sanitization', 'Kitchen deep clean']
    },
    {
      title: 'Express Turnover Cleaning',
      description: 'Quick cleaning for same-day turnovers and urgent bookings',
      icon: Clock4,
      price: 'Starting at $200',
      duration: '1-2 hours',
      includes: ['Priority scheduling', 'Rush service', 'Essential cleaning', 'Quick turnaround']
    },
    {
      title: 'Deep Turnover Cleaning',
      description: 'Comprehensive cleaning for extended stays and high-end properties',
      icon: Sparkles,
      price: 'Starting at $300',
      duration: '3-5 hours',
      includes: ['Deep sanitization', 'Appliance cleaning', 'Window cleaning', 'Detailed inspection']
    },
    {
      title: 'Property Management Cleaning',
      description: 'Ongoing cleaning services for property management companies',
      icon: Building2,
      price: 'Starting at $250',
      duration: '2-4 hours',
      includes: ['Regular maintenance', 'Quality assurance', 'Reporting system', 'Flexible scheduling']
    }
  ];

  const benefits = [
    'Meet hospitality industry standards for guest satisfaction',
    'Quick turnaround times to maximize rental income',
    'Professional cleaning that exceeds guest expectations',
    'Flexible scheduling to accommodate booking changes',
    'Consistent quality across all your properties',
    'Reduce negative reviews and improve ratings',
    'Compliance with health and safety regulations',
    'Peace of mind knowing your property is guest-ready'
  ];

  const process = [
    {
      step: 1,
      title: 'Arrival & Assessment',
      description: 'Arrive on time and assess the property\'s cleaning needs',
      icon: Calendar
    },
    {
      step: 2,
      title: 'Systematic Cleaning',
      description: 'Clean room by room using hospitality industry standards',
      icon: Shield
    },
    {
      step: 3,
      title: 'Quality Inspection',
      description: 'Thorough inspection to ensure all areas meet standards',
      icon: Check
    },
    {
      step: 4,
      title: 'Final Touches',
      description: 'Add finishing touches and prepare for next guest',
      icon: Sparkles
    },
    {
      step: 5,
      title: 'Guest Ready',
      description: 'Confirm property is ready for next guest arrival',
      icon: Hotel
    }
  ];

  const cleaningChecklist = [
    {
      area: 'Kitchen',
      items: ['Clean all appliances inside and out', 'Sanitize countertops and surfaces', 'Clean refrigerator and freezer', 'Wash dishes and utensils', 'Empty and clean trash bins', 'Clean microwave and oven', 'Sanitize sink and faucet'],
      icon: Home
    },
    {
      area: 'Bathrooms',
      items: ['Deep clean toilets and showers', 'Sanitize all surfaces', 'Replace toiletries and towels', 'Clean mirrors and fixtures', 'Sanitize handles and knobs', 'Clean grout and tiles', 'Restock essentials'],
      icon: Shield
    },
    {
      area: 'Bedrooms',
      items: ['Change all bedding and linens', 'Vacuum and dust thoroughly', 'Clean under furniture', 'Sanitize high-touch areas', 'Check for guest items', 'Clean windows and mirrors', 'Restock amenities'],
      icon: Sparkles
    },
    {
      area: 'Living Areas',
      items: ['Vacuum all floors and carpets', 'Dust all surfaces and furniture', 'Clean windows and mirrors', 'Sanitize remote controls', 'Clean electronics safely', 'Organize and straighten', 'Check for damage'],
      icon: Home // Changed from Heart to Home as Heart is not imported
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you complete a turnover cleaning?',
      answer: 'Our standard turnover cleaning takes 2-3 hours, but we offer express service for same-day turnovers that can be completed in 1-2 hours. We always prioritize quality while meeting your timeline needs.'
    },
    {
      question: 'Do you provide your own cleaning supplies?',
      answer: 'Yes, we bring all necessary cleaning supplies, equipment, and eco-friendly products. We use hospitality-grade cleaning products that meet industry standards and are safe for guests.'
    },
    {
      question: 'Can you handle last-minute booking changes?',
      answer: 'Absolutely! We understand that vacation rentals can have last-minute changes. We offer flexible scheduling and can often accommodate urgent cleaning requests with our express service option.'
    },
    {
      question: 'What if a guest leaves the property in poor condition?',
      answer: 'We\'re experienced handling properties in any condition. For heavily soiled properties, we may need additional time and may recommend our deep cleaning service. We\'ll always communicate any issues upfront.'
    },
    {
      question: 'Do you offer ongoing maintenance cleaning?',
      answer: 'Yes! We offer property management cleaning services for ongoing maintenance. This includes regular cleaning between guests and can help maintain your property\'s condition throughout the rental season.'
    },
    {
      question: 'How do you ensure consistent quality?',
      answer: 'We use detailed checklists and quality control processes to ensure every cleaning meets the same high standards. Our team is trained in hospitality cleaning standards and we conduct regular quality inspections.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-accent-coral" />
            <span className="text-accent-coral font-semibold">Phase 2 New Service</span>
            <Star className="w-6 h-6 text-accent-coral" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Vacation Rental <span className="text-blue-600">Turnover Cleaning</span>
          </h1>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Professional turnover cleaning services that meet hospitality industry standards, ensuring 
            your vacation rental is always guest-ready. Starting at just $120.
          </p>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=vacation-rental-cleaning"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
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
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our Vacation Rental Cleaning Services</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We offer comprehensive turnover cleaning services designed specifically for vacation rentals, 
              ensuring your property meets hospitality industry standards and exceeds guest expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-blue-600" />
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
                      href={`/contact?service=vacation-rental-cleaning&type=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
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

      {/* Cleaning Checklist */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Comprehensive Cleaning Checklist</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We follow a detailed checklist to ensure every area of your vacation rental meets 
              hospitality industry standards and is ready for your next guest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cleaningChecklist.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <area.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">{area.area}</h3>
                </div>
                
                <div>
                  <h4 className="font-semibold text-charcoal mb-3">Cleaning Tasks:</h4>
                  <ul className="space-y-2">
                    {area.items.map((item, itemIndex) => (
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
                Why Choose Vacation Rental Turnover Cleaning?
              </h2>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Vacation rental turnover cleaning requires a different approach than regular house cleaning. 
                Our service is designed specifically for the hospitality industry, ensuring your property 
                meets guest expectations and maintains high ratings.
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
            
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Service Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Starting Price:</span>
                  <span className="font-semibold text-accent-coral">$120 per turnover</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Duration:</span>
                  <span className="font-semibold text-charcoal">1-5 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Frequency:</span>
                  <span className="font-semibold text-charcoal">Per guest turnover</span>
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
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our 5-Step Turnover Process</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We follow a proven process designed specifically for vacation rental turnovers, ensuring 
              efficiency, quality, and guest satisfaction every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{step.step}</span>
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
              Get answers to common questions about our vacation rental turnover cleaning service.
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Keep Your Vacation Rental Guest-Ready!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free vacation rental turnover cleaning quote and ensure your property always exceeds guest expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=vacation-rental-cleaning"
              className="bg-accent-coral text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-coral/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Call (904) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}




