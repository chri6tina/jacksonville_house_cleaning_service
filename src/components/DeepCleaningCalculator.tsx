'use client';

import { useState } from 'react';
import { Calculator, Home, Building2, Car, Droplets, Gauge, Calendar, GraduationCap, Users, Leaf, Zap, Target, Award, Crown, Gem, Trophy, Diamond, Trees, Camera, BookOpen, Coffee, Mountain, Waves, School, Church, Store, Utensils, Building, Briefcase, Globe, Train, Bus, ShoppingBag, Heart, PawPrint, Umbrella, Sun, Anchor, Fish, Sailboat, HardHat, Wrench, Hammer, Truck, Trash2, Recycle, Wind, Phone, Mail, MapPin, Shield, CheckCircle, Sparkles, Clock, Star } from 'lucide-react';

interface DeepCleaningCalculatorProps {
  className?: string;
}

export default function DeepCleaningCalculator({ className = '' }: DeepCleaningCalculatorProps) {
  const [formData, setFormData] = useState({
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    cleaningFrequency: '',
    specialRequests: '',
    additionalServices: [] as string[],
    timeline: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    address: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const propertyTypes = [
    { value: 'house', label: 'Single Family Home', icon: Home },
    { value: 'apartment', label: 'Apartment/Condo', icon: Building2 },
    { value: 'townhouse', label: 'Townhouse', icon: Building },
    { value: 'office', label: 'Office/Commercial', icon: Briefcase },
    { value: 'other', label: 'Other', icon: Building }
  ];

  const additionalServicesOptions = [
    { value: 'appliance-cleaning', label: 'Appliance Deep Cleaning', icon: Droplets },
    { value: 'carpet-cleaning', label: 'Carpet & Upholstery', icon: Car },
    { value: 'window-cleaning', label: 'Window Cleaning', icon: Sun },
    { value: 'gutter-cleaning', label: 'Gutter Cleaning', icon: Umbrella },
    { value: 'pressure-washing', label: 'Pressure Washing', icon: Zap },
    { value: 'air-duct-cleaning', label: 'Air Duct Cleaning', icon: Wind },
    { value: 'move-in-out', label: 'Move-in/Move-out', icon: Truck },
    { value: 'post-construction', label: 'Post-Construction', icon: HardHat },
    { value: 'holiday-cleaning', label: 'Holiday Deep Clean', icon: Heart },
    { value: 'garage-cleaning', label: 'Garage Cleaning', icon: Car }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  const calculateEstimateForSubmission = () => {
    let basePrice = 0;
    
    // Base price by property type
    switch (formData.propertyType) {
      case 'house':
        basePrice = 200;
        break;
      case 'apartment':
        basePrice = 150;
        break;
      case 'townhouse':
        basePrice = 175;
        break;
      case 'office':
        basePrice = 300;
        break;
      default:
        basePrice = 200;
    }

    // Add price per bedroom
    const bedrooms = parseInt(formData.bedrooms) || 0;
    basePrice += bedrooms * 25;

    // Add price per bathroom
    const bathrooms = parseInt(formData.bathrooms) || 0;
    basePrice += bathrooms * 35;

    // Square footage adjustment
    const sqft = parseInt(formData.squareFootage) || 0;
    if (sqft > 2000) basePrice += (sqft - 2000) * 0.10;

    // Additional services
    formData.additionalServices.forEach(service => {
      switch (service) {
        case 'appliance-cleaning':
          basePrice += 75;
          break;
        case 'carpet-cleaning':
          basePrice += 100;
          break;
        case 'window-cleaning':
          basePrice += 50;
          break;
        case 'gutter-cleaning':
          basePrice += 80;
          break;
        case 'pressure-washing':
          basePrice += 120;
          break;
        case 'air-duct-cleaning':
          basePrice += 150;
          break;
        case 'move-in-out':
          basePrice += 50;
          break;
        case 'post-construction':
          basePrice += 100;
          break;
        case 'holiday-cleaning':
          basePrice += 30;
          break;
        case 'garage-cleaning':
          basePrice += 60;
          break;
      }
    });

    // Timeline urgency
    if (formData.timeline === 'asap') basePrice += 50;
    if (formData.timeline === 'this-week') basePrice += 25;

    return Math.round(basePrice);
  };

  const calculateEstimate = () => {
    const estimate = calculateEstimateForSubmission();
    setEstimatedPrice(estimate);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    
    // Add all form data
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'additionalServices') {
        formDataToSend.append(key, JSON.stringify(value));
      } else {
        formDataToSend.append(key, String(value));
      }
    });

    // Calculate estimate for inclusion in form data
    const calculatedEstimate = calculateEstimateForSubmission();
    console.log('Calculated estimate:', calculatedEstimate); // Debug log
    
    // Add Formspree hidden fields
    formDataToSend.append('_subject', 'New Deep Cleaning Calculator Quote Request');
    formDataToSend.append('_next', typeof window !== 'undefined' ? window.location.href : '');
    formDataToSend.append('_captcha', 'false');
    
    // Add calculated estimate to form data
    if (calculatedEstimate && calculatedEstimate > 0) {
      const priceRange = `$${calculatedEstimate - 50} - $${calculatedEstimate + 50}`;
      console.log('Adding price to form:', priceRange); // Debug log
      formDataToSend.append('estimated_price', priceRange);
      formDataToSend.append('base_estimate', calculatedEstimate.toString());
      formDataToSend.append('quote_amount', `$${calculatedEstimate}`);
      formDataToSend.append('price_quote', `Estimated Price: ${priceRange}`);
    } else {
      console.log('No valid estimate calculated'); // Debug log
      formDataToSend.append('quote_amount', 'Unable to calculate');
      formDataToSend.append('price_quote', 'Price calculation failed');
    }
    
    try {
      const response = await fetch('https://formspree.io/f/mdklpjrq', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        calculateEstimate();
        // Scroll to top of calculator to show the quote
        setTimeout(() => {
          const calculatorElement = document.getElementById('deep-cleaning-calculator');
          if (calculatorElement) {
            calculatorElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 100);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={`bg-white rounded-2xl shadow-xl p-8 ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Submitted!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in our deep cleaning services. We'll contact you within 24 hours with a detailed quote.
          </p>
          
          {estimatedPrice && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Estimated Price Range</h4>
              <div className="text-3xl font-bold text-blue-600">
                ${estimatedPrice - 50} - ${estimatedPrice + 50}
              </div>
              <p className="text-sm text-blue-700 mt-2">
                *Final price may vary based on specific requirements and property condition
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19044563851"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (904) 456-3851
            </a>
            <a
              href="mailto:info@jacksonvillehousecleaningservice.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="deep-cleaning-calculator" className={`bg-white rounded-2xl shadow-xl p-8 ${className}`}>
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calculator className="w-8 h-8 text-primary-blue" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Deep Cleaning Quote</h3>
        <p className="text-gray-600">
          Fill out the form below and we'll provide you with a detailed estimate for your deep cleaning needs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Property Type *</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {propertyTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <label
                  key={type.value}
                  className={`relative flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                    formData.propertyType === type.value
                      ? 'border-primary-blue bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="propertyType"
                    value={type.value}
                    checked={formData.propertyType === type.value}
                    onChange={handleInputChange}
                    className="sr-only"
                    required
                  />
                  <IconComponent className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-sm font-medium text-gray-900">{type.label}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Bedrooms *</label>
            <select
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              required
            >
              <option value="">Select bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4 Bedrooms</option>
              <option value="5">5+ Bedrooms</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Bathrooms *</label>
            <select
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              required
            >
              <option value="">Select bathrooms</option>
              <option value="1">1 Bathroom</option>
              <option value="1.5">1.5 Bathrooms</option>
              <option value="2">2 Bathrooms</option>
              <option value="2.5">2.5 Bathrooms</option>
              <option value="3">3 Bathrooms</option>
              <option value="4">4+ Bathrooms</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Square Footage *</label>
            <input
              type="number"
              name="squareFootage"
              value={formData.squareFootage}
              onChange={handleInputChange}
              placeholder="e.g., 1500"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Additional Services (Select all that apply)</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {additionalServicesOptions.map((service) => {
              const IconComponent = service.icon;
              return (
                <label
                  key={service.value}
                  className={`relative flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                    formData.additionalServices.includes(service.value)
                      ? 'border-primary-blue bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.additionalServices.includes(service.value)}
                    onChange={() => handleCheckboxChange(service.value)}
                    className="sr-only"
                  />
                  <IconComponent className="w-4 h-4 text-gray-600 mr-2" />
                  <span className="text-sm text-gray-900">{service.label}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Timeline and Frequency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">When do you need this service? *</label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              required
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP (Emergency)</option>
              <option value="this-week">This Week</option>
              <option value="next-week">Next Week</option>
              <option value="this-month">This Month</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cleaning Frequency</label>
            <select
              name="cleaningFrequency"
              value={formData.cleaningFrequency}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            >
              <option value="">Select frequency</option>
              <option value="one-time">One-time Deep Clean</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="annually">Annually</option>
            </select>
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests or Notes</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleInputChange}
            rows={3}
            placeholder="Any specific areas of focus, special requirements, or additional details..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
          />
        </div>

        {/* Contact Information */}
        <div className="border-t pt-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Street address, city, state, zip"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              placeholder="Any additional information you'd like us to know..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-primary-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                <Calculator className="w-5 h-5 mr-2" />
                Get My Deep Cleaning Quote
              </>
            )}
          </button>
          
          <a
            href="tel:+19044563851"
            className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call (904) 456-3851
          </a>
        </div>
      </form>
    </div>
  );
}
