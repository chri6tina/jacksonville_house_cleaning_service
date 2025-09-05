'use client';

import { useState } from 'react';

export default function DeepCleaningHero() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xrblngeo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.currentTarget.reset();
        
        // Track form submission for analytics
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: 'form_submit',
            form_type: 'deep_cleaning_hero',
            service: formData.get('service')
          });
        }
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      alert('There was an error submitting your form. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-blue-600 text-white min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/jhcs_hero2.png"
          alt="Professional deep cleaning services in Jacksonville, FL"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-blue-900/80"></div>
      
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Jacksonville's #1 Deep Cleaning Service
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 md:mb-8 text-blue-100 leading-relaxed">
              Transform your space with our comprehensive deep cleaning services. We go beyond regular cleaning to provide thorough sanitization and restoration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-6 md:mb-8">
              <button 
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-blue-50 transition-colors"
              >
                Get Free Quote
              </button>
              <a 
                href="tel:9044563851" 
                className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Call (904) 456-3851
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-sm">
              <div className="bg-white/20 p-3 md:p-4 rounded-lg">
                <div className="font-bold mb-1">✓ Professional Team</div>
                <div className="text-blue-100 text-xs md:text-sm">Trained & experienced</div>
              </div>
              <div className="bg-white/20 p-3 md:p-4 rounded-lg">
                <div className="font-bold mb-1">✓ Eco-Friendly Products</div>
                <div className="text-blue-100 text-xs md:text-sm">Safe for your family</div>
              </div>
              <div className="bg-white/20 p-3 md:p-4 rounded-lg">
                <div className="font-bold mb-1">✓ 100% Guaranteed</div>
                <div className="text-blue-100 text-xs md:text-sm">Satisfaction assured</div>
              </div>
              <div className="bg-white/20 p-3 md:p-4 rounded-lg">
                <div className="font-bold mb-1">✓ Free Estimates</div>
                <div className="text-blue-100 text-xs md:text-sm">No hidden costs</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Simple Form */}
          <div className="bg-white text-gray-800 p-6 md:p-8 rounded-lg shadow-xl order-1 lg:order-2" id="quote-form">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Get Your Free Quote</h3>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm md:text-base"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm md:text-base"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-2">Service Needed</label>
                  <select
                    name="service"
                    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm md:text-base"
                  >
                    <option value="">Select a service</option>
                    <option value="Complete Deep Cleaning">Complete Deep Cleaning</option>
                    <option value="Kitchen Deep Cleaning">Kitchen Deep Cleaning</option>
                    <option value="Bathroom Deep Cleaning">Bathroom Deep Cleaning</option>
                    <option value="Living Areas Deep Cleaning">Living Areas Deep Cleaning</option>
                    <option value="Office Deep Cleaning">Office Deep Cleaning</option>
                  </select>
                </div>

                {/* Hidden fields for Formspree */}
                <input type="hidden" name="_subject" value="New Deep Cleaning Quote Request" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                <input type="hidden" name="_captcha" value="false" />
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 md:py-4 px-6 rounded-lg font-bold text-base md:text-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our privacy policy
                </p>
              </form>
            ) : (
              <div className="text-center py-6 md:py-8">
                <div className="text-4xl md:text-6xl mb-4">✅</div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-600 text-sm md:text-base mb-4">We'll contact you within 1 hour</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 hover:text-blue-700 text-sm underline"
                >
                  Submit another quote request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
