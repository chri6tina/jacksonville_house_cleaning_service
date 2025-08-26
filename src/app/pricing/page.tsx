import { Check, Star, Clock, Users, Home, Building2, Calculator, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
      color: 'primary-blue',
      href: '/standard-cleaning'
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
      color: 'accent-coral',
      href: '/extreme-deep-cleaning'
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
      color: 'accent-green',
      href: '/extreme-deep-cleaning'
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
      ],
      href: '/commercial-office-cleaning'
    },
    {
      name: 'Post-Construction',
      price: 'From $600',
      description: 'Comprehensive cleaning after construction or renovation projects.',
      icon: Clock,
      features: [
        'Construction debris removal',
        'Fine dust elimination',
        'Detailed surface cleaning',
        'Final touch-up cleaning',
        'Move-in ready results'
      ],
      href: '/post-construction-cleaning'
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
    <>
      {/* Structured Data for Pricing Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Jacksonville House Cleaning Service Pricing",
            "description": "Transparent pricing for professional house cleaning services in Jacksonville, FL. Get detailed quotes for standard, deep, and eco-friendly cleaning packages.",
            "url": "https://www.jacksonvillehousecleaningservice.com/pricing",
            "mainEntity": {
              "@type": "Organization",
              "name": "Jacksonville House Cleaning Service",
              "telephone": "+19044563851",
              "email": "info@jaxcleaning.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jacksonville",
                "addressRegion": "FL",
                "addressCountry": "US"
              },
              "areaServed": {
                "@type": "City",
                "name": "Jacksonville"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Jacksonville House Cleaning Pricing",
                "itemListElement": [
                  ...pricingPackages.map(pkg => ({
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": pkg.name,
                      "description": pkg.description
                    },
                    "price": pkg.price,
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  })),
                  ...commercialServices.map(service => ({
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": service.name,
                      "description": service.description
                    },
                    "price": service.price,
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  }))
                ]
              }
            }
          })
        }}
      />

      {/* Offer Schema for Each Pricing Package */}
      {pricingPackages.map((pkg, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `${pkg.name} - Jacksonville`,
                "description": pkg.description,
                "provider": {
                  "@type": "Organization",
                  "name": "Jacksonville House Cleaning Service"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Jacksonville"
                },
                "serviceType": "House Cleaning",
                "category": "Cleaning Service"
              },
              "price": pkg.price,
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01",
              "url": `https://www.jacksonvillehousecleaningservice.com${pkg.href}`
            })
          }}
        />
      ))}

      {/* Offer Schema for Commercial Services */}
      {commercialServices.map((service, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `${service.name} - Jacksonville`,
                "description": service.description,
                "provider": {
                  "@type": "Organization",
                  "name": "Jacksonville House Cleaning Service"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Jacksonville"
                },
                "serviceType": "Commercial Cleaning",
                "category": "Cleaning Service"
              },
              "price": service.price,
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01",
              "url": `https://www.jacksonvillehousecleaningservice.com${service.href}`
            })
          }}
        />
      ))}

      <div className="min-h-screen bg-gradient-to-br from-primary-blue/5 to-accent-aqua/5">
        {/* Hero Section */}
        <section className="py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Transparent Jacksonville Cleaning Pricing
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Get clear, upfront pricing for all our professional cleaning services. 
              No hidden fees, no surprises - just honest, transparent pricing for quality service.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary-blue/10 text-primary-blue px-6 py-3 rounded-full text-sm font-semibold border border-primary-blue/20">
              <Calculator className="w-4 h-4" />
              <span>Free Quotes Available</span>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Residential Cleaning Packages
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Choose the cleaning package that best fits your needs and budget. 
                All packages include our satisfaction guarantee and eco-friendly products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {pricingPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${getColorClasses(pkg.color)} ${
                    pkg.popular ? 'ring-2 ring-accent-coral ring-offset-4' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-accent-coral text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${pkg.color === 'primary-blue' ? 'bg-primary-blue/20' : pkg.color === 'accent-coral' ? 'bg-accent-coral/20' : 'bg-accent-green/20'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <pkg.icon className={`w-8 h-8 ${pkg.color === 'primary-blue' ? 'text-primary-blue' : pkg.color === 'accent-coral' ? 'text-accent-coral' : 'text-accent-green'}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className={`text-3xl font-bold ${pkg.color === 'primary-blue' ? 'text-primary-blue' : pkg.color === 'accent-coral' ? 'text-accent-coral' : 'text-accent-green'} mb-2`}>
                      {pkg.price}
                    </div>
                    <p className="text-gray-600 text-sm">{pkg.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className={`w-5 h-5 ${pkg.color === 'primary-blue' ? 'text-primary-blue' : pkg.color === 'accent-coral' ? 'text-accent-coral' : 'text-accent-green'} mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={pkg.href}
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                      pkg.color === 'primary-blue'
                        ? 'bg-primary-blue text-white hover:bg-primary-blue/90'
                        : pkg.color === 'accent-coral'
                        ? 'bg-accent-coral text-white hover:bg-accent-coral/90'
                        : 'bg-accent-green text-white hover:bg-accent-green/90'
                    }`}
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>

            {/* Commercial Services */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Commercial & Specialized Services
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Professional cleaning solutions for businesses and specialized cleaning needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {commercialServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-primary-blue" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <div className="text-3xl font-bold text-primary-blue mb-2">{service.price}</div>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="block w-full text-center py-3 px-6 bg-primary-blue text-white rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Factors */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What Affects Your Jacksonville Cleaning Price?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our pricing is transparent and based on several factors to ensure you get 
                the best value for your specific cleaning needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Home Size</h3>
                <p className="text-gray-700 text-sm">
                  Square footage and number of rooms
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-accent-aqua/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-accent-aqua" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Service Type</h3>
                <p className="text-gray-700 text-sm">
                  Standard, deep, or specialized cleaning
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-accent-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Service Level</h3>
                <p className="text-gray-700 text-sm">
                  Standard, deep, or eco-friendly
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-accent-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-coral" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Additional Services</h3>
                <p className="text-gray-700 text-sm">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
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
    </>
  );
}

