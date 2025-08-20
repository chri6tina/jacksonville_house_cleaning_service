import { 
  Heart, 
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
  Droplets,
  PawPrint,
  Sparkles,
  Accessibility
} from 'lucide-react';

export default function SeniorCitizenCleaningPage() {
  const services = [
    {
      title: 'Gentle Regular Cleaning',
      description: 'Weekly or bi-weekly cleaning with gentle products and careful attention',
      icon: Heart,
      price: 'Starting at $100',
      duration: '2-3 hours',
      includes: ['Gentle cleaning products', 'Careful furniture handling', 'Accessibility focus', 'Regular schedule']
    },
    {
      title: 'Mobility-Friendly Cleaning',
      description: 'Cleaning adapted for homes with mobility challenges and accessibility needs',
      icon: Accessibility,
      price: 'Starting at $120',
      duration: '2-4 hours',
      includes: ['Accessibility assessment', 'Adapted cleaning methods', 'Safety protocols', 'Equipment accommodation']
    },
    {
      title: 'Health-Focused Cleaning',
      description: 'Allergen reduction and health-conscious cleaning for sensitive individuals',
      icon: Leaf,
      price: 'Starting at $140',
      duration: '3-4 hours',
      includes: ['Allergen reduction', 'HEPA filtration', 'Non-toxic products', 'Health monitoring']
    },
    {
      title: 'Companion Cleaning',
      description: 'Cleaning with companionship and conversation for social interaction',
      icon: Users,
      price: 'Starting at $160',
      duration: '3-5 hours',
      includes: ['Friendly conversation', 'Companionship', 'Extended cleaning', 'Social interaction']
    }
  ];

  const benefits = [
    'Gentle cleaning that won\'t aggravate health conditions or allergies',
    'Accessibility-focused cleaning for homes with mobility challenges',
    'Companionship and social interaction during cleaning visits',
    'Flexible scheduling to accommodate medical appointments and routines',
    'Trained staff who understand senior-specific cleaning needs',
    'Health-conscious cleaning products that are safe for sensitive individuals',
    'Regular maintenance to prevent falls and maintain home safety',
    'Peace of mind for family members knowing their loved ones are cared for'
  ];

  const process = [
    {
      step: 1,
      title: 'Accessibility Assessment',
      description: 'Evaluate home layout and identify any mobility or accessibility challenges',
      icon: Accessibility
    },
    {
      step: 2,
      title: 'Gentle Preparation',
      description: 'Use gentle, non-toxic cleaning products and prepare work areas carefully',
      icon: Heart
    },
    {
      step: 3,
      title: 'Adapted Cleaning',
      description: 'Clean using methods adapted for accessibility and mobility needs',
      icon: Shield
    },
    {
      step: 4,
      title: 'Safety Check',
      description: 'Ensure all areas are clean and safe, with no tripping hazards',
      icon: Check
    },
    {
      step: 5,
      title: 'Companionship & Review',
      description: 'Provide companionship and review cleaning results with the client',
      icon: Users
    }
  ];

  const specialConsiderations = [
    {
      area: 'Kitchen Safety',
      focus: ['Remove grease buildup', 'Clean under appliances safely', 'Maintain clear pathways', 'Sanitize food prep areas'],
      icon: Home
    },
    {
      area: 'Bathroom Safety',
      focus: ['Prevent slip hazards', 'Clean grab bars and rails', 'Maintain accessibility', 'Remove mold and mildew'],
      icon: Shield
    },
    {
      area: 'Living Areas',
      focus: ['Clear walking paths', 'Gentle furniture cleaning', 'Allergen reduction', 'Maintain comfort'],
      icon: Heart
    },
    {
      area: 'Bedroom Care',
      focus: ['Clean bedding thoroughly', 'Maintain air quality', 'Safe furniture movement', 'Comfort-focused cleaning'],
      icon: Sparkles
    }
  ];

  const faqs = [
    {
      question: 'Are your cleaning products safe for seniors with health conditions?',
      answer: 'Absolutely! We use only gentle, non-toxic cleaning products that are safe for individuals with health conditions, allergies, or sensitivities. We can also accommodate specific product requests.'
    },
    {
      question: 'Do you provide companionship during cleaning?',
      answer: 'Yes! Our companion cleaning service includes friendly conversation and social interaction during the cleaning process. Many of our senior clients look forward to our visits as much for the company as the cleaning.'
    },
    {
      question: 'How do you handle homes with mobility challenges?',
      answer: 'We assess each home\'s accessibility needs and adapt our cleaning methods accordingly. We\'re trained to work around mobility equipment and ensure all areas remain accessible and safe.'
    },
    {
      question: 'Can you work around medical equipment or oxygen tanks?',
      answer: 'Yes, we\'re experienced working around medical equipment and can clean safely without disturbing or damaging any medical devices. We\'ll coordinate with you to ensure everything remains in place.'
    },
    {
      question: 'Do you offer flexible scheduling for medical appointments?',
      answer: 'Absolutely! We understand that medical appointments and routines are important. We offer flexible scheduling and can adjust our visits to accommodate your medical schedule.'
    },
    {
      question: 'How often should seniors schedule cleaning services?',
      answer: 'We recommend weekly or bi-weekly cleaning for most senior households to maintain cleanliness and safety. However, we can customize the schedule based on your specific needs and preferences.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-accent-coral" />
            <span className="text-accent-coral font-semibold">Phase 2 New Service</span>
            <Star className="w-6 h-6 text-accent-coral" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Senior Citizen <span className="text-pink-600">Cleaning Service</span>
          </h1>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Gentle, accessible cleaning services designed specifically for seniors, with companionship 
            and care that goes beyond just cleaning. Starting at just $100.
          </p>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=senior-citizen-cleaning"
              className="bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-600 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
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
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our Senior Citizen Cleaning Services</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We offer specialized cleaning services designed specifically for seniors, with a focus on 
              accessibility, safety, and companionship that makes a real difference in daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-pink-200">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-pink-600" />
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
                    <h4 className="font-semibold text-charcoal mb-3">What's Included:</h4>
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
                      href={`/contact?service=senior-citizen-cleaning&type=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full bg-pink-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center space-x-2"
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

      {/* Special Considerations */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Special Considerations for Senior Homes</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We understand the unique challenges and needs of senior households and adapt our cleaning 
              approach to ensure safety, accessibility, and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialConsiderations.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <area.icon className="w-6 h-6 text-pink-600" />
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
                Why Choose Senior Citizen Cleaning?
              </h2>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Our senior citizen cleaning service goes beyond basic cleaning to provide care, 
                companionship, and accessibility that makes a real difference in the lives of seniors 
                and their families. We understand the unique needs and challenges of aging in place.
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
            
            <div className="bg-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Service Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Starting Price:</span>
                  <span className="font-semibold text-accent-coral">$100 per visit</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Duration:</span>
                  <span className="font-semibold text-charcoal">2-5 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Frequency:</span>
                  <span className="font-semibold text-charcoal">Weekly to monthly</span>
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
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our 5-Step Senior Cleaning Process</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We follow a specialized process designed specifically for senior households, ensuring 
              safety, accessibility, and companionship throughout the cleaning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">{step.step}</span>
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
              Get answers to common questions about our senior citizen cleaning service.
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
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Give Your Loved Ones the Care They Deserve!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free senior citizen cleaning quote and provide the care and companionship your loved ones need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=senior-citizen-cleaning"
              className="bg-accent-coral text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-coral/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors duration-200"
            >
              Call (904) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}




