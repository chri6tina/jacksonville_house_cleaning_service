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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-accent-coral" />
            <span className="text-accent-coral font-semibold">Phase 2 New Service</span>
            <Star className="w-6 h-6 text-accent-coral" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Pet-Friendly <span className="text-purple-600">Deep Cleaning</span>
          </h1>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-8">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our Pet-Friendly Cleaning Services</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We offer specialized cleaning solutions designed specifically for homes with pets, 
              using safe products and proven techniques to eliminate pet-related messes and odors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-purple-600" />
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
                      href={`/contact?service=pet-friendly-cleaning&type=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center space-x-2"
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

      {/* Pet-Specific Solutions */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Solutions for Every Pet Type</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Different pets create different challenges. We have specialized solutions for every type 
              of furry, feathered, or scaly family member.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {petTypes.map((pet, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <PawPrint className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">{pet.type}</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-charcoal mb-2 text-sm">Common Challenges:</h4>
                  <ul className="space-y-1">
                    {pet.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-charcoal/70">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-charcoal mb-2 text-sm">Our Solutions:</h4>
                  <ul className="space-y-1">
                    {pet.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-charcoal/70">{solution}</span>
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
                Why Choose Pet-Friendly Deep Cleaning?
              </h2>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Regular cleaning services often miss the specific challenges that pets create. Our 
                pet-friendly cleaning service uses specialized equipment, pet-safe products, and proven 
                techniques to eliminate pet odors, allergens, and messes that standard cleaning can&apos;t handle.
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
            
            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Service Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Starting Price:</span>
                  <span className="font-semibold text-accent-coral">$180 per visit</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Duration:</span>
                  <span className="font-semibold text-charcoal">2-6 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal/60">Frequency:</span>
                  <span className="font-semibold text-charcoal">Every 3-6 months</span>
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
            <h2 className="text-4xl font-bold text-charcoal mb-6">Our 5-Step Pet-Friendly Cleaning Process</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We follow a specialized process designed specifically for homes with pets, ensuring 
              both your home and your furry friends are safe throughout the cleaning process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">{step.step}</span>
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
              Get answers to common questions about our pet-friendly cleaning service.
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Give Your Pets a Cleaner Home!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free pet-friendly cleaning quote and eliminate pet odors and allergens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=pet-friendly-cleaning"
              className="bg-accent-coral text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-coral/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:+19045551234"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
            >
              Call (904) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}




