'use client';

import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Users, 
  Calendar, 
  Calculator, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Star,
  Clock,
  DollarSign,
  Sparkles,
  Shield,
  Award
} from 'lucide-react';

interface CalculatorData {
  homeSize: string;
  bedrooms: number;
  bathrooms: number;
  frequency: string;
  additionalServices: string[];
  homeCondition: string;
  petHair: boolean;
  highTraffic: boolean;
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

const RecurringCleaningCalculator: React.FC = () => {
  const [data, setData] = useState<CalculatorData>({
    homeSize: '',
    bedrooms: 1,
    bathrooms: 1,
    frequency: 'weekly',
    additionalServices: [],
    homeCondition: 'good',
    petHair: false,
    highTraffic: false,
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Pricing logic
  const calculatePrice = () => {
    let basePrice = 0;
    
    // Base price by home size
    const sizePrices: { [key: string]: number } = {
      'studio': 80,
      '1-bedroom': 100,
      '2-bedroom': 140,
      '3-bedroom': 180,
      '4-bedroom': 220,
      '5-bedroom': 260,
      '6-bedroom': 300
    };
    
    basePrice = sizePrices[data.homeSize] || 0;
    
    // Add for additional bedrooms/bathrooms
    if (data.bedrooms > 2) {
      basePrice += (data.bedrooms - 2) * 20;
    }
    if (data.bathrooms > 2) {
      basePrice += (data.bathrooms - 2) * 15;
    }
    
    // Home condition multiplier
    const conditionMultipliers: { [key: string]: number } = {
      'excellent': 0.9,
      'good': 1.0,
      'fair': 1.2,
      'poor': 1.5
    };
    basePrice *= conditionMultipliers[data.homeCondition] || 1.0;
    
    // Additional charges
    if (data.petHair) basePrice += 20;
    if (data.highTraffic) basePrice += 15;
    
    // Additional services
    const servicePrices: { [key: string]: number } = {
      'deep-clean': 50,
      'inside-appliances': 30,
      'inside-cabinets': 25,
      'baseboards': 20,
      'light-fixtures': 15,
      'window-cleaning': 40,
      'garage': 30,
      'laundry': 25
    };
    
    data.additionalServices.forEach(service => {
      basePrice += servicePrices[service] || 0;
    });
    
    // Frequency discount
    const frequencyDiscounts: { [key: string]: number } = {
      'weekly': 0.15,    // 15% discount
      'bi-weekly': 0.10, // 10% discount
      'monthly': 0.05    // 5% discount
    };
    
    const discount = frequencyDiscounts[data.frequency] || 0;
    basePrice *= (1 - discount);
    
    return Math.round(basePrice);
  };

  useEffect(() => {
    setEstimatedPrice(calculatePrice());
  }, [data]);

  const handleInputChange = (field: keyof CalculatorData, value: any) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: `Recurring Cleaning Quote Request:
          
Home Details:
- Size: ${data.homeSize}
- Bedrooms: ${data.bedrooms}
- Bathrooms: ${data.bathrooms}
- Condition: ${data.homeCondition}
- Pet Hair: ${data.petHair ? 'Yes' : 'No'}
- High Traffic: ${data.highTraffic ? 'Yes' : 'No'}

Service Details:
- Frequency: ${data.frequency}
- Additional Services: ${data.additionalServices.join(', ') || 'None'}

Estimated Price: $${estimatedPrice} per visit

Address: ${data.address}

Additional Message: ${data.message || 'None'}`,
          serviceType: 'Recurring Cleaning Quote'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setData({
          homeSize: '',
          bedrooms: 1,
          bathrooms: 1,
          frequency: 'weekly',
          additionalServices: [],
          homeCondition: 'good',
          petHair: false,
          highTraffic: false,
          name: '',
          email: '',
          phone: '',
          address: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const additionalServices = [
    { id: 'deep-clean', label: 'Deep Clean (First Visit)', price: 50 },
    { id: 'inside-appliances', label: 'Inside Appliances', price: 30 },
    { id: 'inside-cabinets', label: 'Inside Cabinets', price: 25 },
    { id: 'baseboards', label: 'Baseboards & Trim', price: 20 },
    { id: 'light-fixtures', label: 'Light Fixtures', price: 15 },
    { id: 'window-cleaning', label: 'Window Cleaning', price: 40 },
    { id: 'garage', label: 'Garage Cleaning', price: 30 },
    { id: 'laundry', label: 'Laundry Service', price: 25 }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-primary-blue/10 text-primary-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Calculator className="w-4 h-4" />
          <span>Instant Quote Calculator</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Get Your Recurring Cleaning Quote
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Answer a few questions about your home and cleaning needs to get an instant, personalized quote for our recurring cleaning services.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Home Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Home className="w-4 h-4 inline mr-2" />
                Home Size
              </label>
              <select
                value={data.homeSize}
                onChange={(e) => handleInputChange('homeSize', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                required
              >
                <option value="">Select home size</option>
                <option value="studio">Studio (0-1 bedroom)</option>
                <option value="1-bedroom">1 Bedroom</option>
                <option value="2-bedroom">2 Bedrooms</option>
                <option value="3-bedroom">3 Bedrooms</option>
                <option value="4-bedroom">4 Bedrooms</option>
                <option value="5-bedroom">5 Bedrooms</option>
                <option value="6-bedroom">6+ Bedrooms</option>
              </select>
            </div>

            {/* Bedrooms & Bathrooms */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bedrooms
                </label>
                <select
                  value={data.bedrooms}
                  onChange={(e) => handleInputChange('bedrooms', parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bathrooms
                </label>
                <select
                  value={data.bathrooms}
                  onChange={(e) => handleInputChange('bathrooms', parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Frequency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Cleaning Frequency
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'weekly', label: 'Weekly', discount: '15% off' },
                  { value: 'bi-weekly', label: 'Bi-weekly', discount: '10% off' },
                  { value: 'monthly', label: 'Monthly', discount: '5% off' }
                ].map(option => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleInputChange('frequency', option.value)}
                    className={`p-3 rounded-lg border-2 text-center transition-all ${
                      data.frequency === option.value
                        ? 'border-primary-blue bg-primary-blue/10 text-primary-blue'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-medium">{option.label}</div>
                    <div className="text-xs text-gray-500">{option.discount}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Home Condition */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Home Condition
              </label>
              <select
                value={data.homeCondition}
                onChange={(e) => handleInputChange('homeCondition', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              >
                <option value="excellent">Excellent (10% discount)</option>
                <option value="good">Good (standard rate)</option>
                <option value="fair">Fair (20% additional)</option>
                <option value="poor">Poor (50% additional)</option>
              </select>
            </div>

            {/* Special Conditions */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Special Conditions
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={data.petHair}
                    onChange={(e) => handleInputChange('petHair', e.target.checked)}
                    className="mr-3 h-4 w-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">Pet hair present (+$20)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={data.highTraffic}
                    onChange={(e) => handleInputChange('highTraffic', e.target.checked)}
                    className="mr-3 h-4 w-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">High traffic area (+$15)</span>
                </label>
              </div>
            </div>

            {/* Additional Services */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Additional Services (Optional)
              </label>
              <div className="grid grid-cols-1 gap-2">
                {additionalServices.map(service => (
                  <label key={service.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={data.additionalServices.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className="mr-3 h-4 w-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">{service.label}</span>
                    </div>
                    <span className="text-sm font-medium text-primary-blue">+${service.price}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={data.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Address *
                </label>
                <input
                  type="text"
                  value={data.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="Street address, Jacksonville, FL"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  value={data.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="Any specific requirements or questions..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !data.homeSize}
              className="w-full bg-primary-blue hover:bg-primary-blue/90 disabled:bg-gray-400 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  Request Quote
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-green-800 font-medium">Quote request submitted successfully!</p>
                <p className="text-green-600 text-sm">We'll contact you within 24 hours.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <p className="text-red-800 font-medium">Error submitting request. Please try again.</p>
              </div>
            )}
          </form>
        </div>

        {/* Price Display & Benefits */}
        <div className="space-y-6">
          {/* Price Card */}
          <div className="bg-gradient-to-br from-primary-blue to-accent-aqua rounded-2xl p-8 text-white">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <DollarSign className="w-4 h-4" />
                <span>Estimated Price</span>
              </div>
              <div className="text-5xl font-bold mb-2">${estimatedPrice}</div>
              <p className="text-white/90">per cleaning visit</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="text-white/90">Frequency: {data.frequency}</span>
              </div>
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-white" />
                <span className="text-white/90">Size: {data.homeSize || 'Not selected'}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-white" />
                <span className="text-white/90">{data.bedrooms} bed, {data.bathrooms} bath</span>
              </div>
            </div>

            <div className="bg-white/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">What's Included:</h4>
              <ul className="text-sm space-y-1 text-white/90">
                <li>• Complete dusting & vacuuming</li>
                <li>• Kitchen & bathroom cleaning</li>
                <li>• Floor mopping & sanitizing</li>
                <li>• Trash removal</li>
                <li>• Quality assurance check</li>
              </ul>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Our Recurring Service?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-primary-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Same Trusted Team</h4>
                  <p className="text-sm text-gray-600">Consistent quality with familiar cleaning professionals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-primary-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Satisfaction Guaranteed</h4>
                  <p className="text-sm text-gray-600">100% satisfaction or we'll make it right</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-primary-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Flexible Scheduling</h4>
                  <p className="text-sm text-gray-600">Easy rescheduling and cancellation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-4 h-4 text-primary-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Eco-Friendly Products</h4>
                  <p className="text-sm text-gray-600">Safe for your family and pets</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-primary-blue/5 rounded-2xl p-6 border border-primary-blue/20">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
            <div className="space-y-3">
              <a 
                href="tel:9044563851" 
                className="flex items-center gap-3 text-primary-blue hover:text-primary-blue/80 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">(904) 456-3851</span>
              </a>
              <a 
                href="mailto:info@jacksonvillehousecleaningservice.com" 
                className="flex items-center gap-3 text-primary-blue hover:text-primary-blue/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">info@jacksonvillehousecleaningservice.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecurringCleaningCalculator;
