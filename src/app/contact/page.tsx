import { Metadata } from 'next';
import { useState, useEffect, Suspense } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Jacksonville House Cleaning Service',
  description: 'Get your free cleaning quote today. We serve all of Jacksonville and surrounding areas with professional, reliable house cleaning services. Call (904) 456-3851.',
  keywords: ['Jacksonville cleaning contact', 'cleaning quote', 'cleaning service contact', 'Jacksonville cleaning phone'],
  canonical: 'https://jacksonvillehousecleaningservice.com/contact'
});

'use client';

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
        
        // Reset form
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
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again or call us directly.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-blue/10 to-accent-aqua/10">
        <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-md mx-4">
          <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-accent-green" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-700 mb-6">
            Your message has been sent successfully. We'll get back to you within 2 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-blue/10 to-accent-aqua/10">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Contact Jacksonville House Cleaning Service
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get your free cleaning quote today. We serve all of Jacksonville and surrounding areas 
              with professional, reliable house cleaning services.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb 
            items={[
              { label: 'Contact', href: '/contact', current: true }
            ]}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    placeholder="(904) 123-4567"
                  />
                </div>
              </div>

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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="your.email@example.com"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="123 Main St, Jacksonville, FL"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  >
                    <option value="">Select property type</option>
                    <option value="single-family">Single Family Home</option>
                    <option value="apartment">Apartment/Condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="commercial">Commercial Property</option>
                    <option value="vacation-rental">Vacation Rental</option>
                  </select>
                </div>
                
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Services Needed *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Recurring Cleaning',
                    'Deep Cleaning',
                    'Move-In/Out',
                    'Post-Construction',
                    'Vacation Rental',
                    'Commercial Cleaning'
                  ].map((service) => (
                    <label key={service} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="w-4 h-4 text-primary-blue border-gray-300 rounded focus:ring-primary-blue"
                      />
                      <span className="text-sm text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="Tell us about your specific cleaning needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-blue text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-blue/90 transition-colors duration-200"
              >
                Get Free Quote
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-blue/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-700">(904) 456-3851</p>
                    <p className="text-sm text-gray-600">Available Mon-Fri, 8AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-aqua/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-aqua" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-700">info@jaxcleaning.com</p>
                    <p className="text-sm text-gray-600">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-700">Jacksonville, FL & Surrounding Areas</p>
                    <p className="text-sm text-gray-600">Within 25 miles of downtown</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-coral/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent-coral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area Map */}
            <div className="bg-gray-100 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Service Areas</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Downtown Jacksonville</p>
                <p>• Riverside & Avondale</p>
                <p>• San Marco</p>
                <p>• Mandarin</p>
                <p>• Southside</p>
                <p>• Arlington</p>
                <p>• Orange Park</p>
                <p>• Fleming Island</p>
              </div>
              <p className="text-xs text-gray-600 mt-4">
                * Additional travel fees may apply for areas outside our standard service zone
              </p>
            </div>

            {/* Emergency Contact */}
            <div className="bg-accent-coral/10 border border-accent-coral/20 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Emergency Cleaning?</h3>
              <p className="text-sm text-gray-700 mb-3">
                Need immediate cleaning service? Call us for same-day availability.
              </p>
              <a
                href="tel:9044563851"
                className="inline-flex items-center text-accent-coral font-semibold hover:text-accent-coral/80"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now: (904) 456-3851
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Structured Data for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Jacksonville House Cleaning Service",
            "description": "Contact Jacksonville House Cleaning Service for free quotes on professional house cleaning services. Serving all of Jacksonville and surrounding areas.",
            "url": "https://www.jacksonvillehousecleaningservice.com/contact",
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
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+19044563851",
                "contactType": "customer service",
                "availableLanguage": "English",
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday", 
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              },
              "areaServed": {
                "@type": "City",
                "name": "Jacksonville"
              },
              "serviceArea": {
                "@type": "City",
                "name": "Jacksonville"
              }
            }
          })
        }}
      />

      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-blue/10 to-accent-aqua/10">
          <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-md mx-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Loading...</h2>
            <p className="text-gray-700">Preparing your contact form</p>
          </div>
        </div>
      }>
        <ContactForm />
      </Suspense>
    </>
  );
}

