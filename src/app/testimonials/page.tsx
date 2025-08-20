'use client';

import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Home, Building2, Users, Check } from 'lucide-react';

export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Riverside, Jacksonville',
      propertyType: 'Home',
      rating: 5,
      service: 'Recurring House Cleaning',
      review: 'Jacksonville House Cleaning Service has been cleaning our home weekly for over a year now, and I couldn\'t be happier. The team is always punctual, professional, and thorough. Our home has never looked better, and it\'s such a relief to come home to a clean space every week.',
      date: 'December 2024',
      verified: true
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      location: 'San Marco, Jacksonville',
      propertyType: 'Home',
      rating: 5,
      service: 'Deep Cleaning',
      review: 'I hired them for a deep cleaning before hosting a family gathering, and they exceeded my expectations. The attention to detail was incredible - they even cleaned the inside of my oven and refrigerator. The house smelled amazing and looked spotless.',
      date: 'November 2024',
      verified: true
    },
    {
      id: 3,
      name: 'Lisa Chen',
      location: 'Mandarin, Jacksonville',
      propertyType: 'Home',
      rating: 5,
      service: 'Move-Out Cleaning',
      review: 'When selling our house, we needed it to look perfect for potential buyers. The move-out cleaning service was exceptional. The real estate agent was impressed, and we received multiple offers above asking price. Highly recommend!',
      date: 'October 2024',
      verified: true
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Southside, Jacksonville',
      propertyType: 'Office',
      rating: 5,
      service: 'Office Cleaning',
      review: 'As a small business owner, I needed reliable office cleaning services. They\'ve been cleaning our office twice a week for 6 months, and the difference is remarkable. Our employees love coming to work in a clean, professional environment.',
      date: 'September 2024',
      verified: true
    },
    {
      id: 5,
      name: 'Jennifer Williams',
      location: 'Arlington, Jacksonville',
      propertyType: 'Home',
      rating: 5,
      service: 'Post-Construction Cleaning',
      review: 'After our kitchen renovation, the construction dust was everywhere. Their post-construction cleaning service was thorough and efficient. They made our new kitchen shine and removed all traces of the renovation mess.',
      date: 'August 2024',
      verified: true
    },
    {
      id: 6,
      name: 'Robert Davis',
      location: 'Orange Park, FL',
      propertyType: 'Home',
      rating: 5,
      service: 'Carpet & Upholstery Cleaning',
      review: 'I was skeptical about getting our old carpets cleaned, but the results were amazing. They removed years of stains and the carpets look almost new. The upholstery cleaning was equally impressive. Great service and fair pricing.',
      date: 'July 2024',
      verified: true
    },
    {
      id: 7,
      name: 'Amanda Foster',
      location: 'Fleming Island, FL',
      propertyType: 'Home',
      rating: 5,
      service: 'Window Cleaning',
      review: 'Our windows were filthy after a storm, and the regular window cleaning service was perfect. They cleaned both interior and exterior, including the screens. The difference in natural light is incredible. Very professional team.',
      date: 'June 2024',
      verified: true
    },
    {
      id: 8,
      name: 'James Wilson',
      location: 'Downtown Jacksonville',
      propertyType: 'Apartment',
      rating: 5,
      service: 'Recurring House Cleaning',
      review: 'Living in a downtown apartment, I needed a cleaning service that could work around my schedule. They\'ve been flexible and reliable, always doing an excellent job. My apartment has never been cleaner or more organized.',
      date: 'May 2024',
      verified: true
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
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
              <Star className="w-4 h-4 text-primary-blue" />
              What Jacksonville Families Say
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              <span className="block">Real Reviews from</span>
              <span className="block text-cyan-400">Jacksonville Neighbors</span>
              <span className="block text-lg sm:text-xl lg:text-2xl font-medium text-white/90 mt-3">
                See Why 500+ Local Families Trust Us
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from the Jacksonville families and businesses 
              who've experienced our cleaning services firsthand. These are real reviews from real 
              people in your community.
            </p>

            {/* Local Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Star className="w-6 h-6 text-accent-green" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">4.9/5 Stars</h3>
                <p className="text-white/80 text-xs leading-relaxed">Average rating</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-primary-blue/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Users className="w-6 h-6 text-primary-blue" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">500+ Reviews</h3>
                <p className="text-white/80 text-xs leading-relaxed">Jacksonville customers</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-accent-coral/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Check className="w-6 h-6 text-accent-coral" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">100% Satisfaction</h3>
                <p className="text-white/80 text-xs leading-relaxed">Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Overall Customer Rating</h2>
            <div className="flex justify-center items-center space-x-2 mb-6">
              {renderStars(5)}
              <span className="text-2xl font-bold text-charcoal ml-3">5.0</span>
            </div>
            <p className="text-lg text-charcoal/70 mb-4">
              Based on {testimonials.length} verified customer reviews
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue mb-2">100%</div>
                <div className="text-charcoal/70">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-aqua mb-2">500+</div>
                <div className="text-charcoal/70">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-green mb-2">5.0</div>
                <div className="text-charcoal/70">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">What Our Customers Say</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Real reviews from real customers across Jacksonville and surrounding areas.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Quote className="w-16 h-16 text-primary-blue/20 mx-auto mb-4" />
              <div className="flex justify-center items-center space-x-1 mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              <p className="text-lg text-charcoal/80 italic mb-6">
                "{testimonials[currentTestimonial].review}"
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                {testimonials[currentTestimonial].propertyType === 'Office' ? (
                  <Building2 className="w-5 h-5 text-primary-blue" />
                ) : (
                  <Home className="w-5 h-5 text-accent-aqua" />
                )}
                <span className="text-sm text-charcoal/60 uppercase tracking-wide">
                  {testimonials[currentTestimonial].service}
                </span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-1">
                {testimonials[currentTestimonial].name}
              </h3>
              <div className="flex items-center justify-center space-x-2 text-charcoal/70 mb-4">
                <MapPin className="w-4 h-4" />
                <span>{testimonials[currentTestimonial].location}</span>
                {testimonials[currentTestimonial].verified && (
                  <span className="bg-accent-green text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Verified
                  </span>
                )}
              </div>
              <p className="text-sm text-charcoal/60">
                {testimonials[currentTestimonial].date}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-charcoal" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial ? 'bg-primary-blue' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-charcoal" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">All Customer Reviews</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Browse through all our customer testimonials to see the full range of services and experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  {testimonial.propertyType === 'Office' ? (
                    <Building2 className="w-4 h-4 text-primary-blue" />
                  ) : (
                    <Home className="w-4 h-4 text-accent-aqua" />
                  )}
                  <span className="text-sm text-charcoal/60 uppercase tracking-wide">
                    {testimonial.service}
                  </span>
                </div>

                <p className="text-charcoal/80 mb-4 line-clamp-4">
                  "{testimonial.review}"
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-charcoal mb-1">{testimonial.name}</h4>
                  <div className="flex items-center space-x-2 text-sm text-charcoal/60">
                    <MapPin className="w-3 h-3" />
                    <span>{testimonial.location}</span>
                  </div>
                  <p className="text-xs text-charcoal/50 mt-1">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Happy Customers
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the same exceptional service that our customers rave about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-accent-coral text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-coral/90 transition-colors duration-200"
            >
              Book Your Cleaning Today
            </a>
            <a
              href="/gallery"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-blue transition-colors duration-200"
            >
              View Our Gallery
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}





