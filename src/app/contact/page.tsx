'use client';

import { useState, useEffect, Suspense } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

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
        
        // Reset form after submission
        setTimeout(() => {
          setIsSubmitted(false);
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
        }, 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again or call us directly.');
    }
  };

  const availableServices = [
    'Recurring House Cleaning',
    'Deep Cleaning',
    'Move-In/Move-Out Cleaning',
    'Office Cleaning',
    'Carpet & Upholstery Cleaning',
    'Window Cleaning',
    'Post-Construction Cleaning',
    'Gutter Cleaning',
    'Pressure Washing',
    'Air Duct Cleaning',
    'Pet-Friendly Cleaning',
    'Senior Citizen Cleaning',
    'Medical Facility Cleaning',
    'Event Venue Cleaning',
    'Vacation Rental Cleaning',
    'Apartment Cleaning'
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-blue/10 to-accent-aqua/10">
        <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-md mx-4">
          <CheckCircle className="w-20 h-20 text-accent-green mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-700 mb-6">
            Your cleaning request has been submitted successfully. We&apos;ll contact you within 24 hours 
            to confirm your appointment and provide a quote.
          </p>
          <div className="text-sm text-gray-600">
            <p>Reference #: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>
        </div>
      </div>
    );
  }

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
        <div className="absolute inset-0 bg-black/60 sm:bg-black/75"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Local Business Badge */}
            <div className="inline-flex items-center gap-2 bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-white shadow-lg">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary-blue" />
              Call Your Jacksonville Neighbors
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight text-white drop-shadow-lg">
              <span className="block">Contact & Booking</span>
              <span className="block text-cyan-300 sm:text-cyan-400">Ready to Experience the Difference?</span>
              <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mt-2 sm:mt-3 drop-shadow-md">
                Get Your Free Jacksonville Cleaning Quote Today
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 drop-shadow-md">
              Ready to experience the difference that professional cleaning makes? Contact us today 
              for a free quote and let our Jacksonville team transform your space.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mt-8 sm:mt-10 px-4">
              <div className="bg-white/20 sm:bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-green/30 sm:bg-accent-green/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2 drop-shadow-sm">24-Hour Response</h3>
                <p className="text-white text-xs leading-relaxed drop-shadow-sm">Quick turnaround</p>
              </div>

              <div className="bg-white/20 sm:bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-blue/30 sm:bg-primary-blue/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2 drop-shadow-sm">Local Service</h3>
                <p className="text-white text-xs leading-relaxed drop-shadow-sm">Jacksonville team</p>
              </div>

              <div className="bg-white/20 sm:bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 sm:border-white/20 hover:bg-white/25 sm:hover:bg-white/15 transition-all duration-300 text-center sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-coral/30 sm:bg-accent-coral/20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent-coral" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2 drop-shadow-sm">Free Estimates</h3>
                <p className="text-white text-xs leading-relaxed drop-shadow-sm">No obligation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Book Your Cleaning Service</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
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
                    placeholder="(904) 555-0123"
                  />
                </div>
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
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-900 mb-2">
                  Service Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="Full address including city and zip code"
                />
              </div>

              <div>
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-900 mb-2">
                  Property Type *
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  required
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
                  <option value="">Select property type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment/Condo</option>
                  <option value="office">Office/Commercial</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Services Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Services Needed *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {availableServices.map((service) => (
                    <label key={service} className="flex items-center space-x-3">
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

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-900 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-900 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-900 mb-2">
                  Special Requests or Notes
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="Any specific requirements, allergies, or special instructions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent-coral text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-accent-coral/90 transition-colors duration-200"
              >
                Submit Booking Request
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Have questions or need immediate assistance? We&apos;re here to help!
              </p>
            </div>

            {/* Contact Details */}
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
  );
}

