'use client';

import { useState, useEffect, Suspense } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    propertyType: '',
    services: [] as string[],
    date: '',
    time: '',
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle URL query parameters to pre-fill form
  useEffect(() => {
    const service = searchParams.get('service');
    const location = searchParams.get('location');
    const type = searchParams.get('type');
    
    if (service) {
      setFormData(prev => ({
        ...prev,
        services: [service]
      }));
    }
    
    if (location) {
      setFormData(prev => ({
        ...prev,
        address: location
      }));
    }
    
    if (type) {
      setFormData(prev => ({
        ...prev,
        propertyType: type
      }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
    
    try {
      // Create FormData for Formspree
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('propertyType', formData.propertyType);
      formDataToSend.append('services', formData.services.join(', '));
      formDataToSend.append('date', formData.date);
      formDataToSend.append('time', formData.time);
      formDataToSend.append('specialRequests', formData.specialRequests);
      
      // Add Formspree hidden fields
      formDataToSend.append('_subject', 'New Contact Form Submission - Jacksonville Cleaning Service');
      formDataToSend.append('_next', typeof window !== 'undefined' ? window.location.href : '');
      formDataToSend.append('_captcha', 'false');
      
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/myzpryey', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          propertyType: '',
          services: [],
          date: '',
          time: '',
          specialRequests: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 text-center">
            <CheckCircle className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-green-500 mb-4 sm:mb-6" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Thank You!
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-base sm:text-lg touch-manipulation"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Contact', href: '/contact' }
          ]} 
        />

        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Contact Jacksonville House Cleaning Service
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Get your free cleaning quote today. We serve all of Jacksonville and surrounding areas with professional, reliable house cleaning services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Get Your Free Quote</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base text-gray-900 bg-white"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base text-gray-900 bg-white"
                    placeholder="(904) 456-3851"
                  />
                </div>
              </div>

              {/* Email and Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base text-gray-900 bg-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base text-gray-900 bg-white"
                    placeholder="123 Main St, Jacksonville, FL"
                  />
                </div>
              </div>

              {/* Property Type and Services */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type *
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base text-gray-900 bg-white"
                  >
                    <option value="">Select property type</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Condo">Condo</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Office">Office</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Services Needed *
                  </label>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {['Standard Cleaning', 'Deep Cleaning', 'Move-in/Move-out', 'Post-Construction', 'Carpet Cleaning', 'Window Cleaning', 'Pressure Washing'].map((service) => (
                      <label key={service} className="flex items-center py-1">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base text-gray-900 bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base text-gray-900 bg-white"
                  >
                    <option value="">Select time</option>
                    <option value="Morning (8AM-12PM)">Morning (8AM-12PM)</option>
                    <option value="Afternoon (12PM-4PM)">Afternoon (12PM-4PM)</option>
                    <option value="Evening (4PM-8PM)">Evening (4PM-8PM)</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests or Additional Information
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={4}
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base text-gray-900 bg-white resize-none"
                  placeholder="Any specific requirements, allergies, or additional details..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-colors duration-200 text-base sm:text-lg touch-manipulation"
              >
                Get Free Quote
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Phone Call CTA */}
            <div className="bg-blue-600 text-white rounded-lg p-6 sm:p-8 text-center">
              <Phone className="mx-auto h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Call Now for Immediate Service</h3>
              <p className="text-lg sm:text-xl mb-3 sm:mb-4">(904) 456-3851</p>
              <p className="text-blue-100 text-sm sm:text-base">Available 7 days a week</p>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Phone</p>
                    <p className="text-gray-600 text-sm sm:text-base">(904) 456-3851</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Email</p>
                    <p className="text-gray-600 text-xs sm:text-sm break-all">info@jacksonvillehousecleaningservice.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Service Area</p>
                    <p className="text-gray-600 text-sm sm:text-base">Jacksonville and surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Hours</p>
                    <p className="text-gray-600 text-sm sm:text-base">Monday - Sunday: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose Us?</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 text-sm sm:text-base">Licensed and insured cleaning professionals</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 text-sm sm:text-base">Eco-friendly cleaning products available</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 text-sm sm:text-base">Satisfaction guaranteed</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 text-sm sm:text-base">Flexible scheduling options</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 text-sm sm:text-base">Competitive pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactFormClient() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}
