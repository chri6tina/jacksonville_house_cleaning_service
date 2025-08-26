import Link from 'next/link';
import { 
  Phone, 
  MapPin, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Calculator,
  Users,
  Shield,
  Home,
  Waves,
  Umbrella,
  Car,
  Clock,
  Award,
  Heart,
  Sparkles
} from 'lucide-react';

export default function JacksonvilleBeachPage() {
  const popularServices = [
    {
      title: "Vacation Rental Turnover",
      description: "Professional cleaning for beach rentals",
      href: "/vacation-rental-cleaning",
      icon: Home,
      features: [
        "Deep cleaning between guests",
        "Beach sand and salt removal",
        "Quick turnaround service",
        "Inspection-ready results"
      ]
    },
    {
      title: "Pressure Washing",
      description: "Exterior cleaning for coastal homes",
      href: "/pressure-washing",
      icon: Waves,
      features: [
        "Salt and sand removal",
        "Deck and patio cleaning",
        "Driveway and walkway cleaning",
        "Exterior wall cleaning"
      ]
    },
    {
      title: "Recurring Cleaning",
      description: "Regular maintenance for beach homes",
      href: "/recurring-cleaning",
      icon: Clock,
      features: [
        "Weekly or bi-weekly service",
        "Sand and salt management",
        "Pet-friendly cleaning",
        "Flexible scheduling"
      ]
    },
    {
      title: "Deep Cleaning",
      description: "Comprehensive coastal home cleaning",
      href: "/extreme-deep-cleaning",
      icon: Sparkles,
      features: [
        "Salt damage prevention",
        "Mold and mildew treatment",
        "Air quality improvement",
        "Coastal environment protection"
      ]
    }
  ];

  const localFeatures = [
    {
      title: "Coastal Expertise",
      description: "We understand the unique challenges of beach homes - salt, sand, and humidity require special care.",
      icon: Waves
    },
    {
      title: "Vacation Rental Ready",
      description: "Fast, reliable turnover cleaning that keeps your rental income flowing and guests happy.",
      icon: Umbrella
    },
    {
      title: "Local Beach Community",
      description: "We're your Jacksonville Beach neighbors, serving the community since 2015.",
      icon: Users
    },
    {
      title: "Salt-Resistant Cleaning",
      description: "Specialized products and techniques to protect your coastal investment from salt damage.",
      icon: Shield
    }
  ];

  const testimonials = [
    {
      name: "Sarah & Mike Johnson",
      service: "Vacation Rental Turnover",
      rating: 5,
      review: "Our beach rental guests always comment on how clean the property is. The team handles everything perfectly, even the sand that gets everywhere!",
      date: "December 2024"
    },
    {
      name: "David Martinez",
      service: "Recurring Cleaning",
      rating: 5,
      review: "Living by the beach means constant battle with salt and sand. These guys keep our home spotless and handle all the coastal challenges perfectly.",
      date: "November 2024"
    },
    {
      name: "Lisa Thompson",
      service: "Deep Cleaning",
      rating: 5,
      review: "After a year of beach living, our home needed serious deep cleaning. The team was amazing - they even got rid of the salt buildup we didn't know we had!",
      date: "October 2024"
    }
  ];

  return (
    <>
      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Jacksonville House Cleaning Service - Jacksonville Beach",
            "description": "Professional house cleaning services in Jacksonville Beach, FL. Coastal community cleaning solutions for beach homes and vacation rentals with 22K+ residents served.",
            "url": "https://www.jacksonvillehousecleaningservice.com/locations/jacksonville-beach",
            "telephone": "+19044563851",
            "email": "info@jacksonvillehousecleaningservice.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jacksonville Beach",
              "addressLocality": "Jacksonville Beach",
              "addressRegion": "FL",
              "postalCode": "32250",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.2949",
              "longitude": "-81.3931"
            },
            "areaServed": {
              "@type": "City",
              "name": "Jacksonville Beach"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Jacksonville Beach Cleaning Services",
              "itemListElement": popularServices.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description
                }
              }))
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "45"
            },
            "priceRange": "$$",
            "paymentAccepted": ["Cash", "Credit Card", "Check"],
            "currenciesAccepted": "USD",
            "openingHours": [
              "Mo-Fr 08:00-18:00",
              "Sa 08:00-16:00"
            ],
            "sameAs": [
              "https://www.facebook.com/jacksonvillehousecleaningservice",
              "https://www.google.com/maps?cid=123456789"
            ],
            "image": [
              "https://www.jacksonvillehousecleaningservice.com/jhcs_hero2.png"
            ],
            "logo": "https://www.jacksonvillehousecleaningservice.com/logo.png"
          })
        }}
      />
      <div className="min-h-screen">
        {/* Hero Section - Local Business Style */}
        <section
          className="relative py-20 lg:py-24 overflow-hidden"
          style={{
            backgroundImage: 'url(/jhcs_hero2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Local Business Badge */}
              <div className="inline-flex items-center gap-2 bg-white/95 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/50 shadow-lg">
                <MapPin className="w-4 h-4 text-primary-blue" />
                Serving Jacksonville Beach Since 2015
              </div>
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                <span className="block">Professional Cleaning</span>
                <span className="block text-cyan-400">in Jacksonville Beach</span>
                <span className="block text-lg sm:text-xl lg:text-2xl font-medium text-white/90 mt-3">
                  Jacksonville&apos;s Coastal Community Cleaning Service
                </span>
              </h1>
              {/* Subtitle */}
              <p className="text-xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed">
                We&apos;re your Jacksonville Beach neighbors, providing reliable, eco-friendly cleaning services
                that understand coastal living and vacation rentals. No corporate chains, just local professionals who care about your
                beach home like it&apos;s our own.
              </p>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+19044563851"
                  className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Call (904) 456-3851
                </a>
                <Link
                  href="/contact"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              {/* Local Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                    <Users className="w-6 h-6 text-accent-green" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">300+ Beach Homes</h3>
                  <p className="text-white/80 text-xs leading-relaxed">Trust us with their cleaning</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-primary-blue/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                    <Shield className="w-6 h-6 text-primary-blue" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">Licensed & Insured</h3>
                  <p className="text-white/80 text-xs leading-relaxed">Florida business license</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-accent-coral/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                    <Star className="w-6 h-6 text-accent-coral" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">5-Star Local Reviews</h3>
                  <p className="text-white/80 text-xs leading-relaxed">Beach community neighbors</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jacksonville Beach Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Welcome to Jacksonville Beach
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Jacksonville Beach is a vibrant coastal community known for its beautiful beaches,
                  laid-back atmosphere, and thriving vacation rental market. With a population of over 22,000 residents,
                  this beach town offers the perfect blend of coastal charm and modern convenience.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our Jacksonville Beach cleaning team understands the unique challenges of coastal living - from
                  salt and sand management to vacation rental turnover cleaning. We&apos;re proud to serve our beach
                  community with specialized cleaning solutions that protect your coastal investment.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you own a beach home, manage vacation rentals, or just love coastal living,
                  we bring our Jacksonville cleaning expertise right to your doorstep.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-blue/20 to-accent-aqua/20 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-3xl font-bold">22K+</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Beach Residents</h3>
                    <p className="text-gray-700">Proud to serve our coastal community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why Jacksonville Beach Loves Jacksonville House Cleaning Service</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We understand Jacksonville Beach&apos;s unique coastal characteristics and tailor our services to meet the specific needs of this beach community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {localFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                  <div className="w-16 h-16 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Popular Cleaning Services in Jacksonville Beach</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                From vacation rental turnover to coastal home maintenance, we offer comprehensive solutions
                tailored to Jacksonville Beach&apos;s unique needs and your specific requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {popularServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-primary-blue/20 rounded-full flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-primary-blue" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <Link
                        href={service.href}
                        className="w-full bg-primary-blue text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/contact?service=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full border border-primary-blue text-primary-blue py-2 px-4 rounded-lg font-medium hover:bg-primary-blue hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <span>Get Quote</span>
                        <Calculator className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas & ZIP Codes */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Jacksonville Beach Service Areas</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We serve all of Jacksonville Beach and surrounding coastal areas. Check if your address is in our service zone.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Primary Service Areas</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Jacksonville Beach Core</span>
                    <span className="font-semibold text-gray-900">32250</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Beach Boulevard</span>
                    <span className="font-semibold text-gray-900">32250</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Oceanfront Properties</span>
                    <span className="font-semibold text-gray-900">32250</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Beachside Communities</span>
                    <span className="font-semibold text-gray-900">32250</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Nearby Areas We Serve</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Atlantic Beach</span>
                    <span className="font-semibold text-gray-900">32233</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Neptune Beach</span>
                    <span className="font-semibold text-gray-900">32266</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Ponte Vedra Beach</span>
                    <span className="font-semibold text-gray-900">32082</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Mayport</span>
                    <span className="font-semibold text-gray-900">32233</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                <strong>Not sure if we serve your area?</strong> Call us at (904) 456-3851 or use our contact form.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors duration-200"
              >
                <MapPin className="w-4 h-4" />
                Check Service Availability
              </Link>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">What Jacksonville Beach Residents Say</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Don&apos;t just take our word for it. Here&apos;s what your Jacksonville Beach neighbors are saying about our cleaning services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Home className="w-4 h-4 text-primary-blue" />
                    <span className="text-sm text-gray-600 uppercase tracking-wide">
                      {testimonial.service}
                    </span>
                  </div>
                  <p className="text-gray-800 mb-4 line-clamp-4">
                    "{testimonial.review}"
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{testimonial.name}</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-3 h-3" />
                      <span>Jacksonville Beach, FL</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-blue to-accent-aqua">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Professional Cleaning in Jacksonville Beach?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of satisfied Jacksonville Beach residents who trust us with their cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-accent-coral text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-coral/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:+19044563851"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-blue transition-colors duration-200"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Call (904) 456-3851
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}



