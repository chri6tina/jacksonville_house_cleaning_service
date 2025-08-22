'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Shield, Users, CheckCircle } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    propertyType: 'house',
    bedrooms: '2',
    services: [] as string[],
    preferredDate: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-accent-aqua text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get Your Free Quote Today
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to experience the difference professional cleaning makes? 
            Contact us for a free, no-obligation quote and consultation.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Multiple Ways to Reach Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <a 
                href="tel:9044563851" 
                className="text-2xl font-bold text-primary-blue hover:text-primary-blue/80 transition-colors"
              >
                (904) 456-3851
              </a>
              <p className="text-gray-700 mt-1">Speak with our friendly team</p>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-accent-aqua/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-accent-aqua" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <a 
                href="mailto:info@jaxcleaning.com" 
                className="text-lg text-accent-aqua hover:text-accent-aqua/80 transition-colors"
              >
                info@jaxcleaning.com
              </a>
              <p className="text-gray-700 mt-1">We'll respond within 24 hours</p>
            </div>

            {/* Service Area */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-accent-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent-coral" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service Area</h3>
              <div className="text-lg text-gray-900">Jacksonville, FL & Surrounding Areas</div>
              <p className="text-gray-700 mt-1">Serving 50+ neighborhoods throughout Northeast Florida</p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-accent-green" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Hours</h3>
            <div className="text-lg text-gray-900">
              Monday - Friday: 8:00 AM - 6:00 PM<br />
              Saturday: 9:00 AM - 4:00 PM<br />
              Sunday: Closed
            </div>
            <p className="text-gray-700 mt-1">Emergency cleaning available</p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Request a Quote</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-900 mb-2">
                Property Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Street address, city, ZIP code"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-900 mb-2">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="office">Office</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-900 mb-2">
                  Bedrooms
                </label>
                <select
                  id="bedrooms"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4 Bedrooms</option>
                  <option value="5+">5+ Bedrooms</option>
                </select>
              </div>
            </div>

            {/* Services */}
            <div>
              <label htmlFor="services" className="block text-sm font-medium text-gray-900 mb-2">
                Services Needed
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { id: 'regular', name: 'Regular Cleaning' },
                  { id: 'deep', name: 'Deep Cleaning' },
                  { id: 'move-in-out', name: 'Move In/Out' },
                  { id: 'carpet', name: 'Carpet Cleaning' },
                  { id: 'window', name: 'Window Cleaning' },
                  { id: 'post-construction', name: 'Post Construction' }
                ].map(service => (
                  <label key={service.id} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service.id)}
                      onChange={() => handleServiceChange(service.id)}
                      className="rounded border-gray-300 text-primary-blue focus:ring-primary-blue"
                    />
                    <span className="text-gray-900">{service.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-900 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your specific cleaning needs, special requirements, or any questions you have..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-primary-blue hover:bg-primary-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get My Free Quote
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            We Serve All of Jacksonville
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-12">
            From the beaches to the suburbs, we provide professional cleaning services 
            throughout Northeast Florida. No area is too far for our experienced team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Beaches */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Beaches</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Atlantic Beach</li>
                <li>Neptune Beach</li>
                <li>Jacksonville Beach</li>
                <li>Ponte Vedra Beach</li>
                <li>Mayport</li>
              </ul>
            </div>

            {/* Southside */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Southside</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Mandarin</li>
                <li>San Marco</li>
                <li>Baymeadows</li>
                <li>Deerwood</li>
                <li>Southside</li>
              </ul>
            </div>

            {/* Northside */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Northside</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Arlington</li>
                <li>Northside</li>
                <li>Oceanway</li>
                <li>Dinsmore</li>
                <li>Springfield</li>
              </ul>
            </div>

            {/* Westside */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Westside</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Orange Park</li>
                <li>Fleming Island</li>
                <li>Green Cove Springs</li>
                <li>Middleburg</li>
                <li>Westside</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Get quick answers to common questions about our cleaning services.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">How quickly can you schedule a cleaning?</h3>
              <p className="text-gray-700">
                We typically schedule cleanings within 1-3 days. For urgent situations, 
                we offer same-day service when available. Call us at (904) 456-3851 to check availability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide cleaning supplies?</h3>
              <p className="text-gray-700">
                Yes! We bring all our own professional-grade cleaning supplies and equipment. 
                You don't need to purchase or store any cleaning products.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Are your cleaners background-checked?</h3>
              <p className="text-gray-700">
                Absolutely! All our team members undergo thorough background checks, 
                reference verification, and are fully insured for your protection.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What if I'm not satisfied with the cleaning?</h3>
              <p className="text-gray-700">
                We offer a 100% satisfaction guarantee. If you're not completely happy, 
                we'll return within 24 hours to fix any issues at no additional cost.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you offer recurring cleaning services?</h3>
              <p className="text-gray-700">
                Yes! We offer weekly, bi-weekly, and monthly cleaning services with 
                discounted rates for recurring customers. We can work around your schedule.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do you handle pets?</h3>
              <p className="text-gray-700">
                We're pet-friendly! We'll work around your pets and use pet-safe cleaning products. 
                Just let us know if you have any specific concerns or instructions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied Jacksonville families who trust us with their cleaning needs. 
            Get your free quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9044563851"
              className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Call (904) 456-3851
            </a>
            <a
              href="mailto:info@jaxcleaning.com"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}





