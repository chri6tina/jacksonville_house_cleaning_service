'use client';

import React from 'react';
import { Shield, Leaf, Users, Star, Clock, Award, Heart, Zap } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Licensed & Fully Insured',
      description: 'Complete peace of mind with full licensing, bonding, and comprehensive insurance coverage for your property.',
      color: 'primary-blue'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Products',
      description: 'Safe, non-toxic cleaning solutions that protect your family, pets, and the environment while delivering superior results.',
      color: 'accent-green'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Professional cleaners with years of experience, background-checked, and trained in the latest cleaning techniques.',
      color: 'accent-aqua'
    },
    {
      icon: Star,
      title: '100% Satisfaction Guarantee',
      description: 'We\'re not satisfied until you are. If you\'re not happy, we\'ll make it right or your money back.',
      color: 'accent-coral'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Early morning, evening, weekend appointments available. We work around your schedule, not ours.',
      color: 'primary-blue'
    },
    {
      icon: Award,
      title: 'Award-Winning Service',
      description: 'Recognized for excellence in customer service and cleaning quality by local business organizations.',
      color: 'accent-green'
    },
    {
      icon: Heart,
      title: 'Local Family Business',
      description: 'Proudly serving Jacksonville since 2010. We\'re your neighbors, committed to our community.',
      color: 'accent-aqua'
    },
    {
      icon: Zap,
      title: 'Same-Day Service Available',
      description: 'Emergency cleaning? We can often accommodate same-day service for urgent cleaning needs.',
      color: 'accent-coral'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Families Served' },
    { number: '13+', label: 'Years of Experience' },
    { number: '50+', label: 'Jacksonville Areas Covered' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Why Choose Jacksonville House Cleaning Service?
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            We don't just clean homes – we create healthier, more comfortable living spaces. 
            Our commitment to excellence sets us apart from the competition.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-blue mb-2">
                {stat.number}
              </div>
              <div className="text-charcoal/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 bg-${reason.color}/10 rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                <reason.icon className={`w-8 h-8 text-${reason.color}`} />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3 text-center">
                {reason.title}
              </h3>
              <p className="text-charcoal/70 text-center leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 bg-blue-100 rounded-2xl p-8 text-charcoal">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-charcoal">
              Trusted by Jacksonville Families Since 2010
            </h3>
            <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have made us their trusted cleaning partner. 
              Experience the difference that professional, reliable service makes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-primary-blue">5.0</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-charcoal/70">Google Reviews</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-primary-blue">98%</div>
              <div className="text-charcoal/70 mb-2">Customer Retention</div>
              <div className="text-charcoal/60 text-sm">Year after year</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-primary-blue">24hr</div>
              <div className="text-charcoal/70 mb-2">Response Time</div>
              <div className="text-charcoal/60 text-sm">Always available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
