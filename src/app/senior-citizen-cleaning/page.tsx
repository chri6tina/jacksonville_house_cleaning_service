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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-pink-600" />
            <span className="text-pink-600 font-semibold">Phase 2 New Service</span>
            <Star className="w-6 h-6 text-pink-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Senior Citizen <span className="text-pink-600">Cleaning Service</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Senior Citizen Cleaning Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We offer specialized cleaning services designed specifically for seniors, with gentle products, 
              accessibility focus, and companionship that makes a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <div className="text-3xl font-bold text-pink-600 mb-2">{service.price}</div>
                  <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                  <div className="text-sm text-gray-600 mb-4">Duration: {service.duration}</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact?service=senior-citizen-cleaning"
                  className="block w-full text-center py-3 px-6 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors duration-200"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Senior Citizen Cleaning?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our specialized approach ensures seniors receive gentle, accessible cleaning with companionship and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-pink-600" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Senior Citizen Cleaning Process</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We follow a comprehensive 5-step process designed to ensure safety, accessibility, and companionship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Considerations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Special Considerations for Senior Homes</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We pay special attention to areas that are critical for senior safety and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialConsiderations.map((consideration, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <consideration.icon className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{consideration.area}</h3>
                </div>

                <ul className="space-y-2">
                  {consideration.focus.map((item, itemIndex) => (
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
              Get answers to common questions about our senior citizen cleaning services.
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
      <section className="py-20 bg-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Gentle, Caring Cleaning?</h2>
          <p className="text-xl text-pink-100 mb-8">
            Contact us today to schedule your senior citizen cleaning service. 
            We provide the care and companionship your loved ones deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=senior-citizen-cleaning"
              className="bg-white text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors duration-200 flex items-center justify-center space-x-2"
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




