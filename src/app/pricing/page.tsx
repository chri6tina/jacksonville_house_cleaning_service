import { Check, Star, Clock, Users, Home, Building2, Calculator, Phone } from 'lucide-react';

export default function PricingPage() {
  const pricingPackages = [
    {
      name: 'Standard Clean',
      price: 'From $120',
      description: 'Perfect for regular maintenance and keeping your home clean and comfortable.',
      icon: Home,
      features: [
        'Dust all surfaces and furniture',
        'Vacuum and mop floors',
        'Clean bathrooms (sink, toilet, shower)',
        'Wipe down kitchen surfaces',
        'Empty trash bins',
        'Make beds and straighten rooms',
        'Up to 2 hours of cleaning'
      ],
      popular: false,
      color: 'primary-blue'
    },
    {
      name: 'Deep Clean',
      price: 'From $200',
      description: 'Comprehensive cleaning service for thorough sanitization and deep dirt removal.',
      icon: Star,
      features: [
        'Everything in Standard Clean',
        'Deep clean inside appliances',
        'Clean inside cabinets and drawers',
        'Detailed bathroom sanitization',
        'Clean baseboards and trim',
        'Dust blinds and light fixtures',
        'Clean inside windows',
        'Up to 4 hours of cleaning'
      ],
      popular: true,
      color: 'accent-coral'
    },
    {
      name: 'Eco-Friendly Clean',
      price: 'From $180',
      description: 'Premium cleaning service using only certified eco-friendly and non-toxic products.',
      icon: Users,
      features: [
        'Everything in Standard Clean',
        '100% eco-friendly cleaning products',
        'Safe for children and pets',
        'Allergen-reducing cleaning methods',
        'Natural deodorizing',
        'Chemical-free sanitization',
        'Up to 3 hours of cleaning'
      ],
      popular: false,
      color: 'accent-green'
    }
  ];

  const commercialServices = [
    {
      name: 'Office Cleaning',
      price: 'From $150',
      description: 'Professional cleaning for commercial spaces and workplaces.',
      icon: Building2,
      features: [
        'Daily, weekly, or monthly schedules',
        'After-hours cleaning available',
        'High-traffic area focus',
        'Professional appearance maintenance',
        'Customized cleaning plans'
      ]
    },
    {
      name: 'Post-Construction',
      price: 'From $300',
      description: 'Comprehensive cleaning after construction or renovation projects.',
      icon: Clock,
      features: [
        'Construction debris removal',
        'Fine dust elimination',
        'Detailed surface cleaning',
        'Final touch-up cleaning',
        'Move-in ready results'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'primary-blue': 'border-primary-blue bg-primary-blue/5',
      'accent-coral': 'border-accent-coral bg-accent-coral/5',
      'accent-green': 'border-accent-green bg-accent-green/5'
    };
    return colorMap[color] || 'border-gray-300 bg-gray-50';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Local Business Style */}
      <section 
        className="relative py-20 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(/hero1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Local Business Badge */}
            <div className="inline-flex items-center gap-2 bg-white/95 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/50 shadow-lg">
              <Calculator className="w-4 h-4 text-primary-blue" />
              Transparent Jacksonville Pricing
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              <span className="block">Honest, Transparent</span>
              <span className="block text-cyan-400">Pricing</span>
              <span className="block text-lg sm:text-xl lg:text-2xl font-medium text-white/90 mt-3">
                No Hidden Fees, Just Quality Service
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed">
              As your Jacksonville neighbors, we believe in honest pricing with no surprises. 
              Our rates are competitive, transparent, and designed to fit your budget while 
              delivering the quality cleaning your home deserves.
            </p>

            {/* Local Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Check className="w-6 h-6 text-accent-green" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">No Hidden Fees</h3>
                <p className="text-white/80 text-xs leading-relaxed">What you see is what you pay</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-primary-blue/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Star className="w-6 h-6 text-primary-blue" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">Local Value</h3>
                <p className="text-white/80 text-xs leading-relaxed">Jacksonville competitive rates</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-accent-coral/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Phone className="w-6 h-6 text-accent-coral" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">Free Estimates</h3>
                <p className="text-white/80 text-xs leading-relaxed">Call (904) 456-3851</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Jacksonville Cleaning Packages
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Choose the perfect cleaning package for your Jacksonville home. All packages include 
              our eco-friendly products and satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {pricingPackages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl shadow-lg border-2 ${getColorClasses(pkg.color)} p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-coral text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 ${pkg.color === 'primary-blue' ? 'bg-primary-blue/20' : pkg.color === 'accent-coral' ? 'bg-accent-coral/20' : 'bg-accent-green/20'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <pkg.icon className={`w-8 h-8 ${pkg.color === 'primary-blue' ? 'text-primary-blue' : pkg.color === 'accent-coral' ? 'text-accent-coral' : 'text-accent-green'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-charcoal mb-2">{pkg.price}</div>
                  <p className="text-charcoal/70">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span className="text-charcoal/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    pkg.popular 
                      ? 'bg-accent-coral text-white hover:bg-accent-coral/90' 
                      : 'bg-primary-blue text-white hover:bg-primary-blue/90'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          {/* Commercial Services */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">Commercial Cleaning Services</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Professional cleaning solutions for businesses, offices, and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {commercialServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-accent-aqua/20 p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-accent-aqua/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-accent-aqua" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">{service.name}</h3>
                  <div className="text-3xl font-bold text-charcoal mb-2">{service.price}</div>
                  <p className="text-charcoal/70">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                      <span className="text-charcoal/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="block w-full text-center py-3 px-6 bg-accent-aqua text-white rounded-lg font-semibold hover:bg-accent-aqua/90 transition-colors duration-200"
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">What Affects Pricing?</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Our pricing is transparent and based on several factors to ensure 
              you get the best value for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Home Size</h3>
              <p className="text-charcoal/70 text-sm">
                Square footage and number of rooms
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-accent-aqua/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Frequency</h3>
              <p className="text-charcoal/70 text-sm">
                One-time vs. recurring service
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Service Level</h3>
              <p className="text-charcoal/70 text-sm">
                Standard, deep, or eco-friendly
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-accent-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent-coral" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Additional Services</h3>
              <p className="text-charcoal/70 text-sm">
                Carpet, window, or appliance cleaning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <section className="py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            100% Satisfaction Guarantee
          </h2>
          <p className="text-xl text-white/90 mb-8">
            If you&apos;re not completely satisfied with our service, we'll come back 
            and make it right at no additional cost.
          </p>
          <div className="bg-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quality Assured</h3>
                <p className="text-white/80 text-sm">
                  Every job is inspected before completion
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Satisfaction Guaranteed</h3>
                <p className="text-white/80 text-sm">
                  Not happy? We&apos;ll fix it for free
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Trusted Service</h3>
                <p className="text-white/80 text-sm">
                  Join 500+ satisfied customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-charcoal mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-charcoal/70 mb-8">
            Contact us today for a free, no-obligation quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-accent-coral text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-coral/90 transition-colors duration-200"
            >
              Get Your Free Quote
            </a>
            <a
              href="/services"
              className="border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-blue hover:text-white transition-colors duration-200"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

