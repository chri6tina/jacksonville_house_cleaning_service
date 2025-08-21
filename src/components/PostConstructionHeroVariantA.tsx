'use client';

import { useState } from 'react';
import { Phone, Star, Shield, Clock, CheckCircle, HardHat, Truck, Leaf } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  propertyType: string;
  serviceNeeded: string;
  targetDate: string;
  utmSource?: string;
}

export default function PostConstructionHeroVariantA() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    propertyType: '',
    serviceNeeded: '',
    targetDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhone(value);
    handleInputChange('phone', formatted);
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (formData.phone.replace(/\D/g, '').length !== 10) newErrors.phone = 'Valid phone number required';
    if (!formData.propertyType) newErrors.propertyType = 'Property type is required';
    if (!formData.serviceNeeded) newErrors.serviceNeeded = 'Service is required';
    if (!formData.targetDate) newErrors.targetDate = 'Target date is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Create FormData for Formspree
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('propertyType', formData.propertyType);
      formDataToSend.append('serviceNeeded', formData.serviceNeeded);
      formDataToSend.append('targetDate', formData.targetDate);
      
      // Add Formspree hidden fields
      formDataToSend.append('_subject', 'New Post-Construction Quote Request - Variant A');
      formDataToSend.append('_next', typeof window !== 'undefined' ? window.location.href : '');
      formDataToSend.append('_captcha', 'false');
      
      const response = await fetch('https://formspree.io/f/xrblngeo', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Fire analytics event
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: 'hero_form_submit',
            form_type: 'post_construction_hero_variant_a'
          });
        }
        
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const form = document.getElementById('hero-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'hero_call_click',
        button_location: 'hero_primary_variant_a'
      });
    }
  };

  const handleQuoteClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'hero_quote_click',
        button_location: 'hero_secondary_variant_a'
      });
    }
    scrollToForm();
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Jacksonville House Cleaning Service",
            "description": "Same-day post-construction cleanup in Jacksonville. From rough clean to final detail—insured crews, builder-safe methods, guaranteed.",
            "url": "https://www.jacksonvillehousecleaningservice.com",
            "telephone": "+19044563851",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.3322",
              "longitude": "-81.6557"
            },
            "areaServed": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Jacksonville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Jacksonville Same-Day Post-Construction Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Same-Day Post-Construction Cleanup",
                    "description": "Fast, insured, and guaranteed construction cleanup"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Construction Debris Removal",
                    "description": "Professional construction debris hauling and disposal"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "120"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-100"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              {/* Social Proof Badge */}
              <div className="inline-flex items-center gap-2 bg-cyan-100 border border-cyan-200 px-4 py-2 rounded-full text-sm font-medium text-cyan-800 mb-6">
                <Clock className="w-4 h-4 text-cyan-600" />
                <span>Same-Day Service Available</span>
              </div>

              {/* Main Headline - VARIANT A */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Same-Day Post-Construction{' '}
                <span className="text-cyan-600">Cleanup, Done Right</span>
              </h1>

              {/* Supporting Line - VARIANT A */}
              <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-2xl lg:max-w-none">
                From rough clean to final detail—insured crews, builder-safe methods, guaranteed.
              </p>

              {/* Social Proof Line */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-gray-700 font-medium">4.9/5 avg</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-700">Trusted by 120+ Jacksonville builders & homeowners</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button
                  onClick={handleQuoteClick}
                  className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                  aria-label="Get instant quote for same-day post-construction cleanup"
                >
                  <HardHat className="w-5 h-5" />
                  Get Instant Quote
                </button>
                <a
                  href="tel:9044563851"
                  onClick={handleCallClick}
                  className="inline-flex items-center justify-center gap-2 bg-white text-cyan-600 border-2 border-cyan-600 hover:bg-cyan-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg"
                  aria-label="Call 904-456-3851 for immediate same-day service"
                >
                  <Phone className="w-5 h-5" />
                  Call (904) 456-3851
                </a>
              </div>

              {/* Microcopy */}
              <p className="text-gray-600 text-sm mb-8">As early as today</p>

              {/* Trust Bar */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm">
                  <div className="w-6 h-6 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-cyan-600" />
                  </div>
                  <span className="text-gray-800 font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm">
                  <div className="w-6 h-6 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-cyan-600" />
                  </div>
                  <span className="text-gray-800 font-medium">Same-Day Service</span>
                </div>
                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm">
                  <div className="w-6 h-6 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <HardHat className="w-5 h-5 text-cyan-600" />
                  </div>
                  <span className="text-gray-800 font-medium">Builder-Safe Methods</span>
                </div>
                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm">
                  <div className="w-6 h-6 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                  </div>
                  <span className="text-gray-800 font-medium">100% Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Right Side - Compact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div id="hero-form">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Same-Day Quote</h2>
                      <p className="text-gray-600">5-minute estimate, same-day service</p>
                    </div>

                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                          errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Your full name"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                          errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="(555) 123-4567"
                        maxLength={14}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    {/* Property Type */}
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                        Property Type *
                      </label>
                      <select
                        id="propertyType"
                        value={formData.propertyType}
                        onChange={(e) => handleInputChange('propertyType', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                          errors.propertyType ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        aria-describedby={errors.propertyType ? 'propertyType-error' : undefined}
                      >
                        <option value="">Select property type</option>
                        <option value="residential-new">Residential - New Build</option>
                        <option value="residential-renovation">Residential - Renovation</option>
                        <option value="commercial-new">Commercial - New Build</option>
                        <option value="commercial-renovation">Commercial - Renovation</option>
                        <option value="multi-family">Multi-Family</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.propertyType && (
                        <p id="propertyType-error" className="mt-1 text-sm text-red-600">{errors.propertyType}</p>
                      )}
                    </div>

                    {/* Service Needed */}
                    <div>
                      <label htmlFor="serviceNeeded" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={(e) => handleInputChange('serviceNeeded', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                          errors.serviceNeeded ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        aria-describedby={errors.serviceNeeded ? 'serviceNeeded-error' : undefined}
                      >
                        <option value="">Select service</option>
                        <option value="complete-cleanup">Complete Post-Construction Cleanup</option>
                        <option value="debris-removal">Debris Removal Only</option>
                        <option value="final-cleaning">Final Cleaning Only</option>
                        <option value="hvac-cleaning">HVAC & Duct Cleaning</option>
                        <option value="floor-restoration">Floor Restoration</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.serviceNeeded && (
                        <p id="serviceNeeded-error" className="mt-1 text-sm text-red-600">{errors.serviceNeeded}</p>
                      )}
                    </div>

                    {/* Target Date */}
                    <div>
                      <label htmlFor="targetDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Target Date *
                      </label>
                      <input
                        type="date"
                        id="targetDate"
                        value={formData.targetDate}
                        onChange={(e) => handleInputChange('targetDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                          errors.targetDate ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        aria-describedby={errors.targetDate ? 'targetDate-error' : undefined}
                      />
                      {errors.targetDate && (
                        <p id="targetDate-error" className="mt-1 text-sm text-red-600">{errors.targetDate}</p>
                      )}
                    </div>

                    {/* Hidden UTM Field */}
                    <input type="hidden" name="utm_source" value={typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_source') || '' : ''} />

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                      aria-label="Submit quote request for same-day post-construction cleanup"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Processing...
                        </div>
                      ) : (
                        'Get Same-Day Quote'
                      )}
                    </button>

                    {/* Privacy Note */}
                    <div className="text-center text-xs text-gray-500 space-y-1">
                      <p>No spam. 1-hour response.</p>
                      <p>By submitting, you agree to our privacy policy.</p>
                    </div>
                  </form>
                ) : (
                  /* Success State */
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Thanks!</h3>
                    <p className="text-gray-600">Our dispatcher will text/call within the hour.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-50">
        <div className="flex gap-3 p-4">
          <a
            href="tel:9044563851"
            onClick={handleCallClick}
            className="flex-1 bg-cyan-500 text-white py-3 px-4 rounded-lg font-semibold text-center flex items-center justify-center gap-2"
            aria-label="Call 904-456-3851 for immediate same-day service"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <button
            onClick={handleQuoteClick}
            className="flex-1 bg-slate-800 text-white py-3 px-4 rounded-lg font-semibold text-center flex items-center justify-center gap-2"
            aria-label="Get instant quote for same-day post-construction cleanup"
          >
            <HardHat className="w-5 h-5" />
            Get Quote
          </button>
        </div>
      </div>

      {/* Mobile Form Accordion for very small screens */}
      <div className="lg:hidden">
        <details className="bg-white border-t border-slate-200">
          <summary className="px-4 py-3 font-semibold text-slate-900 cursor-pointer">
            📋 Quick Quote Form
          </summary>
          <div className="px-4 pb-4">
            <div className="bg-slate-50 rounded-lg p-4">
              <div id="mobile-hero-form">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                    />
                    <input
                      type="tel"
                      placeholder="Phone *"
                      value={formData.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                    />
                    <select
                      value={formData.propertyType}
                      onChange={(e) => handleInputChange('propertyType', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                    >
                      <option value="">Property Type *</option>
                      <option value="residential-new">Residential - New Build</option>
                      <option value="residential-renovation">Residential - Renovation</option>
                      <option value="commercial-new">Commercial - New Build</option>
                      <option value="commercial-renovation">Commercial - Renovation</option>
                    </select>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => handleInputChange('serviceNeeded', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                    >
                      <option value="">Service Needed *</option>
                      <option value="complete-cleanup">Complete Cleanup</option>
                      <option value="debris-removal">Debris Removal</option>
                      <option value="final-cleaning">Final Cleaning</option>
                    </select>
                    <input
                      type="date"
                      value={formData.targetDate}
                      onChange={(e) => handleInputChange('targetDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                    />
                    <button
                      type="submit"
                      className="w-full bg-cyan-500 text-white py-3 px-4 rounded-lg font-semibold"
                    >
                      Get Quote
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
                    <p className="text-slate-600 text-sm">Thanks! We'll contact you within the hour.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </details>
      </div>
    </>
  );
}
