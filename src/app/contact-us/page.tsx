import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar, Home, Building2 } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Ready to experience the difference? Get in touch with us today for a free quote 
              or to schedule your cleaning service. We&apos;re here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent-coral rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Call Us</h3>
                    <a 
                      href="tel:9044563851"
                      className="text-2xl font-bold text-primary-blue hover:text-accent-coral transition-colors duration-300"
                    >
                      (904) 456-3851
                    </a>
                    <p className="text-charcoal/70 mt-1">Speak with our friendly team</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent-aqua rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Email Us</h3>
                    <a 
                      href="mailto:jaxhousecleaningservice@gmail.com"
                      className="text-lg text-primary-blue hover:text-accent-aqua transition-colors duration-300"
                    >
                      jaxhousecleaningservice@gmail.com
                    </a>
                    <p className="text-charcoal/70 mt-1">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent-green rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Service Area</h3>
                    <p className="text-lg text-charcoal">Jacksonville, FL & Surrounding Areas</p>
                    <p className="text-charcoal/70 mt-1">Serving 50+ neighborhoods throughout Northeast Florida</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-blue rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Business Hours</h3>
                    <div className="text-lg text-charcoal">
                      <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                      <div>Saturday: 9:00 AM - 4:00 PM</div>
                      <div>Sunday: By Appointment</div>
                    </div>
                    <p className="text-charcoal/70 mt-1">Emergency cleaning available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Request a Quote</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-charcoal mb-2">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    placeholder="Street address, city, zip code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-charcoal mb-2">
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    >
                      <option value="">Select property type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="condo">Condo</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="office">Office</option>
                      <option value="commercial">Commercial Space</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="bedrooms" className="block text-sm font-medium text-charcoal mb-2">
                      Bedrooms
                    </label>
                    <select
                      id="bedrooms"
                      name="bedrooms"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    >
                      <option value="">Select bedrooms</option>
                      <option value="studio">Studio</option>
                      <option value="1">1 Bedroom</option>
                      <option value="2">2 Bedrooms</option>
                      <option value="3">3 Bedrooms</option>
                      <option value="4">4 Bedrooms</option>
                      <option value="5+">5+ Bedrooms</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="services" className="block text-sm font-medium text-charcoal mb-2">
                    Services Needed *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="flex items-center">
                      <input type="checkbox" name="services" value="regular" className="mr-2" />
                      <span className="text-charcoal">Regular Cleaning</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="services" value="deep" className="mr-2" />
                      <span className="text-charcoal">Deep Cleaning</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="services" value="move" className="mr-2" />
                      <span className="text-charcoal">Move In/Out</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="services" value="carpet" className="mr-2" />
                      <span className="text-charcoal">Carpet Cleaning</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="services" value="windows" className="mr-2" />
                      <span className="text-charcoal">Window Cleaning</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="services" value="post-construction" className="mr-2" />
                      <span className="text-charcoal">Post Construction</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-charcoal mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your specific cleaning needs, special requests, or any questions you have..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-coral hover:bg-accent-coral/90 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Service Areas
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We proudly serve Jacksonville and surrounding areas. Don&apos;t see your neighborhood? 
              Give us a call - we may still be able to help!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-charcoal mb-4">Beaches</h3>
              <ul className="space-y-2 text-charcoal/70">
                <li>Jacksonville Beach</li>
                <li>Neptune Beach</li>
                <li>Atlantic Beach</li>
                <li>Ponte Vedra Beach</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-charcoal mb-4">Southside</h3>
              <ul className="space-y-2 text-charcoal/70">
                <li>Mandarin</li>
                <li>Baymeadows</li>
                <li>Deerwood</li>
                <li>San Marco</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-charcoal mb-4">Northside</h3>
              <ul className="space-y-2 text-charcoal/70">
                <li>Arlington</li>
                <li>Northside</li>
                <li>Oceanway</li>
                <li>Dinsmore</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-charcoal mb-4">Westside</h3>
              <ul className="space-y-2 text-charcoal/70">
                <li>Westside</li>
                <li>Avondale</li>
                <li>Riverside</li>
                <li>Murray Hill</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Have questions? We&apos;re here to help! Here are answers to some common questions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-3">How quickly can you schedule a cleaning?</h3>
                <p className="text-charcoal/70">
                  We typically can schedule regular cleanings within 1-2 weeks. For urgent needs, 
                  we offer same-day service when available.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Do you provide cleaning supplies?</h3>
                <p className="text-charcoal/70">
                  Yes! We bring all our own professional-grade, eco-friendly cleaning supplies and equipment.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Are your cleaners background-checked?</h3>
                <p className="text-charcoal/70">
                  Absolutely. All our team members undergo thorough background checks and are fully insured.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-3">What if I&apos;m not satisfied with the cleaning?</h3>
                <p className="text-charcoal/70">
                  We offer a 100% satisfaction guarantee. If you&apos;re not happy, we'll come back and make it right.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Do you offer recurring cleaning services?</h3>
                <p className="text-charcoal/70">
                  Yes! We offer weekly, bi-weekly, and monthly cleaning schedules with discounted rates.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-3">How do you handle pets?</h3>
                <p className="text-charcoal/70">
                  We love pets! Our team is trained to work around pets safely. We use pet-friendly cleaning products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





