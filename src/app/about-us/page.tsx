import React from 'react';
import { Shield, Leaf, Users, Award, Heart, MapPin, Clock, Phone } from 'lucide-react';

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      experience: '15+ years in residential cleaning',
      bio: 'Sarah founded Jacksonville House Cleaning Service in 2010 with a vision to provide exceptional cleaning services that families can trust.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Operations Manager',
      experience: '12+ years in service management',
      bio: 'Michael ensures every cleaning job meets our high standards and coordinates our team of professional cleaners.'
    },
    {
      name: 'Jennifer Williams',
      role: 'Quality Control Specialist',
      experience: '10+ years in quality assurance',
      bio: 'Jennifer conducts thorough inspections to guarantee every home receives the attention to detail our customers expect.'
    }
  ];

  const certifications = [
    'Licensed & Bonded',
    'Fully Insured',
    'EPA Certified',
    'Green Cleaning Certified',
    'COVID-19 Safety Certified'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              About Jacksonville House Cleaning Service
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Serving Jacksonville families since 2010 with professional, reliable, and eco-friendly cleaning services. 
              We&apos;re your trusted neighbors, committed to making your home a healthier, more comfortable place to live.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  Jacksonville House Cleaning Service was founded in 2010 by Sarah Johnson, a local resident who 
                  recognized the need for reliable, professional cleaning services in our community. What started 
                  as a small family business has grown into one of Jacksonville&apos;s most trusted cleaning companies.
                </p>
                <p>
                  Over the past 13+ years, we&apos;ve served over 500 families throughout Northeast Florida, building 
                  lasting relationships based on trust, quality, and exceptional customer service. Our commitment 
                  to using eco-friendly products and providing thorough, consistent cleaning has earned us a 
                  reputation for excellence.
                </p>
                <p>
                  Today, we&apos;re proud to be a local family business that continues to serve our neighbors with 
                  the same dedication and care that we would want for our own homes.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-blue mb-2">13+</div>
                  <div className="text-charcoal/70">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-blue mb-2">500+</div>
                  <div className="text-charcoal/70">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-blue mb-2">50+</div>
                  <div className="text-charcoal/70">Areas Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-blue mb-2">100%</div>
                  <div className="text-charcoal/70">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Our Values
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              These core values guide everything we do and ensure we deliver the exceptional service our customers deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Trust & Reliability</h3>
              <p className="text-charcoal/70">
                We build lasting relationships through consistent, dependable service you can count on.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Environmental Care</h3>
              <p className="text-charcoal/70">
                We protect your family and the environment with safe, eco-friendly cleaning products.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-aqua/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Community Focus</h3>
              <p className="text-charcoal/70">
                As your neighbors, we&apos;re committed to serving and supporting our Jacksonville community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent-coral" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Excellence</h3>
              <p className="text-charcoal/70">
                We strive for perfection in every detail, ensuring your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Our experienced team of professionals is dedicated to providing you with the highest quality cleaning service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">{member.name}</h3>
                <div className="text-primary-blue font-semibold mb-2">{member.role}</div>
                <div className="text-accent-coral text-sm mb-4">{member.experience}</div>
                <p className="text-charcoal/70 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Insurance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Licensed, Bonded & Insured
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Your peace of mind is our priority. We maintain all necessary licenses, bonds, and insurance coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-accent-green" />
                </div>
                <div className="font-semibold text-charcoal">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                Serving All of Jacksonville
              </h2>
              <p className="text-xl text-charcoal/70 mb-8 leading-relaxed">
                From the beaches to the suburbs, we provide professional cleaning services throughout 
                Northeast Florida. Our team covers 50+ neighborhoods across Jacksonville and surrounding areas.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-blue mr-3" />
                  <span className="text-charcoal">Jacksonville Beach, Neptune Beach, Atlantic Beach</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-blue mr-3" />
                  <span className="text-charcoal">San Marco, Riverside, Avondale</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-blue mr-3" />
                  <span className="text-charcoal">Mandarin, Southside, Baymeadows</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-blue mr-3" />
                  <span className="text-charcoal">Arlington, Northside, Westside</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary-blue mr-3" />
                  <span className="text-charcoal">(904) 456-3851</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary-blue mr-3" />
                  <span className="text-charcoal">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





