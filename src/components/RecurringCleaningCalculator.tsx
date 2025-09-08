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
    
    // Base price by square footage and layout (increased by ~5%)
    const sizePrices: { [key: string]: number } = {
      'under-1000': 125,    // Studio/1 bed, 1 bath (≤800 sq ft) - 2 hours
      '1000-1500': 160,     // 2 bed/1 bath (~1,000 sq ft) - 2.5-3 hours
      '1500-2000': 190,     // 2 bed/2 bath (~1,200 sq ft) - 3-3.5 hours
      '2000-2500': 250,     // 3 bed/2 bath (~1,500-1,800 sq ft) - 4-5 hours
      '2500-3000': 315,     // 3 bed/3 bath (~2,000 sq ft) - 5-5.5 hours
      '3000-3500': 380,     // 4 bed/2 bath (~2,200 sq ft) - 5.5-6 hours
      '3500-4000': 440,     // 4 bed/3 bath (~2,500-3,000 sq ft) - 6-7 hours
      'over-4000': 505      // 5+ bed/4+ bath (3,500+ sq ft) - 8-10 hours
    };
    
    basePrice = sizePrices[data.homeSize] || 0;
    
    // Add for additional bathrooms (increased by ~5%)
    if (data.bathrooms > 2) {
      basePrice += (data.bathrooms - 2) * 32;
    }
    
    // Add for additional bedrooms (increased by ~5%)
    if (data.bedrooms > 4) {
      basePrice += (data.bedrooms - 4) * 21;
    }
    
    // Home condition multiplier
    const conditionMultipliers: { [key: string]: number } = {
      'excellent': 0.9,
      'good': 1.0,
      'fair': 1.2,
      'poor': 1.5
    };
    basePrice *= conditionMultipliers[data.homeCondition] || 1.0;
    
    // Additional charges (increased by ~5%)
    if (data.petHair) basePrice += 26;      // 20-30 minutes extra
    if (data.highTraffic) basePrice += 21;  // 15-20 minutes extra
    
    // Additional services (increased by ~5%)
    const servicePrices: { [key: string]: number } = {
      'deep-clean': 63,        // 1 hour of deep cleaning
      'inside-appliances': 37, // 30-45 minutes
      'inside-cabinets': 26,   // 20-30 minutes
      'baseboards': 21,        // 15-20 minutes
      'light-fixtures': 16,    // 10-15 minutes
      'window-cleaning': 53,   // 45-60 minutes
      'garage': 32,            // 30-40 minutes
      'laundry': 32            // 25-30 minutes
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
      const response = await fetch('https://formspree.io/f/mblaqejr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
          homeSize: data.homeSize,
          bedrooms: data.bedrooms,
          bathrooms: data.bathrooms,
          homeCondition: data.homeCondition,
          petHair: data.petHair,
          highTraffic: data.highTraffic,
          frequency: data.frequency,
          additionalServices: data.additionalServices.join(', ') || 'None',
          estimatedPrice: `$${estimatedPrice}`,
          message: data.message || 'None',
          serviceType: 'Recurring Cleaning Quote',
          detailedMessage: `RECURRING CLEANING QUOTE REQUEST
          
CUSTOMER INFORMATION:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- Address: ${data.address}

HOME DETAILS:
- Square Footage: ${data.homeSize}
- Bedrooms: ${data.bedrooms}
- Bathrooms: ${data.bathrooms}
- Home Condition: ${data.homeCondition}
- Pet Hair Present: ${data.petHair ? 'Yes' : 'No'}
- High Traffic Area: ${data.highTraffic ? 'Yes' : 'No'}

SERVICE PREFERENCES:
- Cleaning Frequency: ${data.frequency}
- Additional Services: ${data.additionalServices.join(', ') || 'None'}

QUOTE DETAILS:
- Estimated Price: $${estimatedPrice} per visit
- Frequency Discount Applied: ${data.frequency === 'weekly' ? '15%' : data.frequency === 'bi-weekly' ? '10%' : '5%'}

CUSTOMER NOTES:
${data.message || 'No additional notes provided'}

This quote was generated automatically by the website calculator.`
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
    { id: 'deep-clean', label: 'Deep Clean (First Visit)', price: 63 },
    { id: 'inside-appliances', label: 'Inside Appliances', price: 37 },
    { id: 'inside-cabinets', label: 'Inside Cabinets', price: 26 },
    { id: 'baseboards', label: 'Baseboards & Trim', price: 21 },
    { id: 'light-fixtures', label: 'Light Fixtures', price: 16 },
    { id: 'window-cleaning', label: 'Window Cleaning', price: 53 },
    { id: 'garage', label: 'Garage Cleaning', price: 32 },
    { id: 'laundry', label: 'Laundry Service', price: 32 }
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
                Home Square Footage
              </label>
              <select
                value={data.homeSize}
                onChange={(e) => handleInputChange('homeSize', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                required
              >
                <option value="">Select square footage</option>
                <option value="under-1000">Under 1,000 sq ft</option>
                <option value="1000-1500">1,000 - 1,500 sq ft</option>
                <option value="1500-2000">1,500 - 2,000 sq ft</option>
                <option value="2000-2500">2,000 - 2,500 sq ft</option>
                <option value="2500-3000">2,500 - 3,000 sq ft</option>
                <option value="3000-3500">3,000 - 3,500 sq ft</option>
                <option value="3500-4000">3,500 - 4,000 sq ft</option>
                <option value="over-4000">Over 4,000 sq ft</option>
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
                  <span className="text-sm text-gray-700">Pet hair present (+$26)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={data.highTraffic}
                    onChange={(e) => handleInputChange('highTraffic', e.target.checked)}
                    className="mr-3 h-4 w-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">High traffic area (+$21)</span>
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
          <div className="bg-gray-900 rounded-2xl p-8 text-white shadow-2xl border-2 border-primary-blue">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-primary-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
                <DollarSign className="w-4 h-4" />
                <span>Estimated Price</span>
              </div>
              <div className="text-5xl font-bold mb-2 text-white">${estimatedPrice}</div>
              <p className="text-gray-200 font-medium">per cleaning visit</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-3 border border-gray-700">
                <CheckCircle className="w-5 h-5 text-primary-blue" />
                <span className="text-white font-medium">Frequency: {data.frequency}</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-3 border border-gray-700">
                <Home className="w-5 h-5 text-primary-blue" />
                <span className="text-white font-medium">Size: {data.homeSize ? data.homeSize.replace('-', ' - ').replace('under', 'Under').replace('over', 'Over') + ' sq ft' : 'Not selected'}</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-3 border border-gray-700">
                <Users className="w-5 h-5 text-primary-blue" />
                <span className="text-white font-medium">{data.bedrooms} bed, {data.bathrooms} bath</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <h4 className="font-semibold mb-2 text-white">What's Included:</h4>
              <ul className="text-sm space-y-1 text-gray-200">
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
