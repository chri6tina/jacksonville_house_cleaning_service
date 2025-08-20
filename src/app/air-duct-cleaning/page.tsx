import { 
  Fan, 
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
  Droplets,
  Wind,
  Thermometer
} from 'lucide-react';

export default function AirDuctCleaningPage() {
  const features = [
    'Complete duct system inspection and assessment',
    'Remove accumulated dust, debris, and allergens',
    'Clean supply and return air vents thoroughly',
    'Sanitize duct surfaces to eliminate bacteria',
    'Clean air handler components and coils',
    'Remove mold, mildew, and harmful contaminants',
    'Improve airflow efficiency and system performance',
    'Reduce energy costs and extend HVAC lifespan'
  ];

  const benefits = [
    'Significantly improve indoor air quality',
    'Reduce allergy symptoms and respiratory issues',
    'Increase HVAC system efficiency by 15-25%',
    'Lower monthly energy bills',
    'Extend the life of your HVAC equipment',
    'Create a healthier living environment',
    'Remove unpleasant odors from ductwork',
    'Prevent costly HVAC repairs and replacements'
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Inspection',
      description: 'Thorough assessment of your duct system using specialized cameras and tools',
      icon: Shield
    },
    {
      step: 2,
      title: 'Protection Setup',
      description: 'Protect your home with drop cloths and seal off work areas',
      icon: Shield
    },
    {
      step: 3,
      title: 'Debris Removal',
      description: 'Use powerful vacuums and specialized tools to remove all debris',
      icon: Droplets
    },
    {
      step: 4,
      title: 'Deep Cleaning',
      description: 'Clean and sanitize all duct surfaces and components',
      icon: Wind
    },
    {
      step: 5,
      title: 'Final Inspection',
      description: 'Verify cleaning quality and test system performance',
      icon: Check
    }
  ];

  const faqs = [
    {
      question: 'How often should I have my air ducts cleaned?',
      answer: 'The National Air Duct Cleaners Association (NADCA) recommends cleaning every 3-5 years, or more frequently if you have pets, allergies, or recent renovations.'
    },
    {
      question: 'How long does the cleaning process take?',
      answer: 'Most residential duct cleaning takes 2-4 hours depending on the size of your home and complexity of your duct system.'
    },
    {
      question: 'Will duct cleaning improve my allergies?',
      answer: 'Yes! Removing dust, pet dander, and other allergens from your ducts can significantly reduce allergy symptoms and improve indoor air quality.'
    },
    {
      question: 'Is duct cleaning messy?',
      answer: 'No, we use professional equipment and take extensive precautions to keep your home clean during the process.'
    },
    {
      question: 'How much does air duct cleaning cost?',
      answer: 'Our pricing starts at $150 per system and varies based on the size of your home and complexity of your ductwork. Contact us for a free quote!'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-accent-coral" />
            <span className="text-accent-coral font-semibold">Phase 1 New Service</span>
            <Star className="w-6 h-6 text-accent-coral" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Air Duct & <span className="text-indigo-600">Vent Cleaning</span>
          </h1>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Breathe easier with professional air duct cleaning that removes allergens, improves air quality, 
            and boosts your HVAC system&apos;s efficiency. Starting at just $150 per system.
          </p>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=air-duct"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose This Service */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                Why Choose Professional Air Duct Cleaning?
              </h2>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Over time, your air ducts accumulate dust, pet dander, mold spores, and other contaminants 
                that circulate through your home every time your HVAC system runs. Professional cleaning 
                removes these pollutants, creating a healthier environment for your family.
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
            
            <div className="bg-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Service Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Starting Price:</span>
                  <span className="font-semibold text-accent-coral">$150 per system</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Duration:</span>
                  <span className="font-semibold text-charcoal">2-4 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Frequency:</span>
                  <span className="font-semibold text-charcoal">Every 3-5 years</span>
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

      {/* What&apos;s Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">What&apos;s Included in Our Service</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Our comprehensive air duct cleaning service covers every aspect of your HVAC system 
              to ensure maximum cleanliness and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">{feature}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our 5-Step Cleaning Process</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We follow a proven, systematic approach to ensure your air ducts are thoroughly cleaned 
              and your home is protected throughout the process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">{step.step}</span>
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
              Get answers to common questions about our air duct cleaning service.
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Breathe Easier?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free air duct cleaning quote and improve your home&apos;s air quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=air-duct"
              className="bg-accent-coral text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-coral/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
            >
              Call (904) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}




