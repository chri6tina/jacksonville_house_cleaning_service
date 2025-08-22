import { 
  PawPrint, 
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
  Heart,
  Sparkles
} from 'lucide-react';

export default function PetFriendlyCleaningPage() {
  const services = [
    {
      title: 'Pet Odor Removal',
      description: 'Eliminate stubborn pet odors from carpets, furniture, and air',
      icon: PawPrint,
      price: 'Starting at $180',
      duration: '2-4 hours',
      includes: ['Odor neutralization', 'Deep carpet cleaning', 'Air purification', 'Furniture treatment']
    },
    {
      title: 'Allergen Reduction',
      description: 'Remove pet dander and allergens for allergy sufferers',
      icon: Leaf,
      price: 'Starting at $200',
      duration: '3-5 hours',
      includes: ['HEPA filtration', 'Surface sanitization', 'Air duct cleaning', 'Allergen testing']
    },
    {
      title: 'Pet-Safe Deep Cleaning',
      description: 'Comprehensive cleaning using pet-safe products and methods',
      icon: Shield,
      price: 'Starting at $220',
      duration: '4-6 hours',
      includes: ['Pet-safe products', 'Complete home cleaning', 'Safety protocols', 'Pet area focus']
    },
    {
      title: 'Post-Pet Move Cleaning',
      description: 'Deep cleaning after pets move out for new tenants or buyers',
      icon: Home,
      price: 'Starting at $250',
      duration: '5-8 hours',
      includes: ['Complete sanitization', 'Odor elimination', 'Damage assessment', 'Move-in ready']
    }
  ];

  const benefits = [
    'Eliminate stubborn pet odors that regular cleaning can\'t remove',
    'Reduce allergens and improve air quality for allergy sufferers',
    'Use pet-safe cleaning products that won\'t harm your furry friends',
    'Extend the life of carpets and furniture by removing pet damage',
    'Create a healthier living environment for both pets and humans',
    'Remove pet stains and marks that affect property value',
    'Professional equipment reaches deep into fibers and surfaces',
    'Specialized techniques for different types of pet messes'
  ];

  const process = [
    {
      step: 1,
      title: 'Pet Area Assessment',
      description: 'Identify all areas affected by pets and assess cleaning needs',
      icon: PawPrint
    },
    {
      step: 2,
      title: 'Pet-Safe Preparation',
      description: 'Use pet-safe cleaning products and secure pets in safe areas',
      icon: Shield
    },
    {
      step: 3,
      title: 'Deep Odor Removal',
      description: 'Apply specialized treatments to eliminate pet odors at the source',
      icon: Sparkles
    },
    {
      step: 4,
      title: 'Allergen Elimination',
      description: 'Remove pet dander and allergens using HEPA filtration',
      icon: Leaf
    },
    {
      step: 5,
      title: 'Final Sanitization',
      description: 'Complete sanitization and air purification for fresh results',
      icon: Check
    }
  ];

  const petTypes = [
    {
      type: 'Dogs',
      challenges: ['Muddy paw prints', 'Hair shedding', 'Accident odors', 'Dirt from walks'],
      solutions: ['Paw print removal', 'Deep hair extraction', 'Odor neutralization', 'Surface protection']
    },
    {
      type: 'Cats',
      challenges: ['Litter box odors', 'Hair on furniture', 'Scratch marks', 'Urine stains'],
      solutions: ['Litter odor removal', 'Furniture deep cleaning', 'Scratch repair', 'Enzyme treatment']
    },
    {
      type: 'Birds',
      challenges: ['Feather dust', 'Seed debris', 'Cage odors', 'Air quality issues'],
      solutions: ['Air purification', 'Surface cleaning', 'Cage sanitization', 'HEPA filtration']
    },
    {
      type: 'Small Pets',
      challenges: ['Bedding odors', 'Food debris', 'Cage messes', 'Limited access areas'],
      solutions: ['Bedding sanitization', 'Food stain removal', 'Cage deep cleaning', 'Accessible cleaning']
    }
  ];

  const faqs = [
    {
      question: 'Are your cleaning products safe for pets?',
      answer: 'Absolutely! We use only pet-safe, non-toxic cleaning products that are certified safe for animals. We also use natural enzymes and eco-friendly solutions.'
    },
    {
      question: 'How long should I keep my pets away during cleaning?',
      answer: 'We recommend keeping pets in a separate room or outside for 2-4 hours during cleaning, and 1-2 hours after to allow surfaces to dry completely.'
    },
    {
      question: 'Can you remove old pet stains and odors?',
      answer: 'Yes! Our specialized equipment and products can remove even old, set-in pet stains and odors. We use enzyme treatments that break down organic matter at the molecular level.'
    },
    {
      question: 'How often should I schedule pet-friendly cleaning?',
      answer: 'For homes with pets, we recommend deep cleaning every 3-6 months, depending on the number of pets and their habits. Regular maintenance cleaning can be done monthly.'
    },
    {
      question: 'Do you offer emergency pet mess cleanup?',
      answer: 'Yes, we offer emergency cleanup services for accidents and unexpected pet messes. We can usually respond within 24 hours for urgent situations.'
    },
    {
      question: 'Will cleaning help with my pet allergies?',
      answer: 'Definitely! Our deep cleaning removes pet dander, hair, and allergens that cause allergy symptoms. Many customers report significant allergy improvement after our service.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-purple-600" />
            <span className="text-purple-600 font-semibold">Phase 2 New Service</span>
            <Star className="w-6 h-6 text-purple-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Pet-Friendly <span className="text-purple-600">Deep Cleaning</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Keep your furry friends safe while eliminating pet odors, allergens, and messes with our 
            specialized pet-friendly cleaning service. Starting at just $180.
          </p>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=pet-friendly-cleaning"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Pet-Friendly Cleaning Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We offer specialized cleaning solutions designed specifically for homes with pets, 
              using pet-safe products and techniques that protect your furry family members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{service.price}</div>
                  <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                  <div className="text-sm text-gray-600 mb-4">Duration: {service.duration}</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact?service=pet-friendly-cleaning"
                  className="block w-full text-center py-3 px-6 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Pet-Friendly Cleaning?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our specialized approach ensures your pets stay safe while we eliminate the messes they create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-purple-600" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Pet-Friendly Cleaning Process</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We follow a comprehensive 5-step process designed to keep your pets safe while thoroughly cleaning your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pet Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Solutions for Every Pet Type</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Different pets create different messes. We have specialized solutions for each type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {petTypes.map((petType, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{petType.type}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Common Challenges:</h4>
                  <ul className="space-y-2">
                    {petType.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Our Solutions:</h4>
                  <ul className="space-y-2">
                    {petType.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              Get answers to common questions about our pet-friendly cleaning services.
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
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for a Pet-Friendly Clean Home?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact us today to schedule your pet-friendly cleaning service. 
            Your pets will thank you, and so will your nose!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=pet-friendly-cleaning"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200 flex items-center justify-center space-x-2"
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




