'use client';

import React from 'react';
import { Star, Quote, MapPin, User } from 'lucide-react';
import Link from 'next/link';

const TestimonialsPreview: React.FC = () => {
  const featuredTestimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Mandarin, Jacksonville',
      rating: 5,
      service: 'Deep Cleaning',
      review: 'Absolutely amazing service! The team was professional, thorough, and left our home spotless. They even cleaned areas I didn\'t think to ask about. Highly recommend!',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Michael Chen',
      location: 'San Marco, Jacksonville',
      rating: 5,
      service: 'Recurring Cleaning',
      rating: 5,
      service: 'Recurring Cleaning',
      review: 'We\'ve been using their weekly cleaning service for 6 months now. Consistent quality every time, and they always work around our schedule. Great value for the money.',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Lisa Rodriguez',
      location: 'Atlantic Beach, FL',
      rating: 5,
      service: 'Move-Out Cleaning',
      review: 'Perfect for our move-out cleaning! They made our rental look brand new. The landlord was impressed and we got our full deposit back. Thank you!',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'David Thompson',
      location: 'Riverside, Jacksonville',
      rating: 5,
      service: 'Office Cleaning',
      review: 'Professional office cleaning service that keeps our workspace immaculate. The team is reliable and always does an excellent job. Perfect for businesses!',
      image: '/api/placeholder/60/60'
    }
  ];

  const stats = [
    { number: '4.9', label: 'Average Rating', sublabel: 'Out of 5 Stars' },
    { number: '200+', label: '5-Star Reviews', sublabel: 'On Google & Yelp' },
    { number: '98%', label: 'Customer Satisfaction', sublabel: 'Guaranteed' },
    { number: '500+', label: 'Happy Customers', sublabel: 'In Jacksonville' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Jacksonville families and businesses 
            are saying about our cleaning services.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">
                {stat.number}
              </div>
              <div className="text-charcoal font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-charcoal/60 text-sm">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-primary-blue/20" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-charcoal/80 mb-6 leading-relaxed italic">
                "{testimonial.review}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">{testimonial.name}</div>
                    <div className="flex items-center text-sm text-charcoal/60">
                      <MapPin className="w-4 h-4 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-primary-blue font-medium">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Join Our Growing Family of Satisfied Customers
            </h3>
            <p className="text-charcoal/70 mb-6 max-w-2xl mx-auto">
              Experience the same level of excellence that has earned us hundreds of 5-star reviews. 
              Your satisfaction is our top priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-primary-blue hover:bg-primary-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Your Free Quote
              </Link>
              <Link 
                href="/testimonials"
                className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Read All Reviews
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;





