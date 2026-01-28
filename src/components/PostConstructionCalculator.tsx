'use client';

import { useState, useEffect } from 'react';
import { Calculator, HardHat, Building2, Home, Truck, Zap, Target, Shield, Leaf, Clock, CheckCircle, Send, Phone, Mail, MapPin } from 'lucide-react';

interface CalculatorForm {
  projectType: string;
  squareFootage: number;
  constructionPhase: string;
  debrisAmount: string;
  basicTasks: string[];
  specialRequirements: string[];
  timeline: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
    company: string;
    address: string;
    city: string;
    zipCode: string;
  };
  projectDetails: {
    description: string;
    startDate: string;
    completionDate: string;
  };
}

interface PricingBreakdown {
  basePrice: number;
  squareFootageMultiplier: number;
  phaseMultiplier: number;
  debrisMultiplier: number;
  specialRequirementsCost: number;
  rushFee: number;
  totalPrice: number;
  estimatedHours: number;
}

export default function PostConstructionCalculator() {
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<CalculatorForm>({
    projectType: 'residential',
    squareFootage: 1000,
    constructionPhase: 'post-construction',
    debrisAmount: 'medium',
    basicTasks: [],
    specialRequirements: [],
    timeline: 'standard',
    contactInfo: {
      name: '',
      email: '',
      phone: '',
      company: '',
      address: '',
      city: '',
      zipCode: ''
    },
    projectDetails: {
      description: '',
      startDate: '',
      completionDate: ''
    }
  });

  const [pricing, setPricing] = useState<PricingBreakdown>({
    basePrice: 0,
    squareFootageMultiplier: 0,
    phaseMultiplier: 0,
    debrisMultiplier: 0,
    specialRequirementsCost: 0,
    rushFee: 0,
    totalPrice: 0,
    estimatedHours: 0
  });

  // Pricing configuration
  const pricingConfig = {
    baseRates: {
      residential: 400,
      commercial: 600,
      industrial: 800
    },
    perSquareFoot: {
      residential: 0.85,
      commercial: 0.95,
      industrial: 1.15
    },
    phaseMultipliers: {
      'post-construction': 1.0,
      'during-construction': 1.2,
      'new-construction': 0.9
    },
    debrisMultipliers: {
      'light': 0.8,
      'medium': 1.0,
      'heavy': 1.4,
      'extreme': 2.0
    },
    specialRequirements: {
      'hazardous-materials': 200,
      'hvac-cleaning': 150,
      'floor-restoration': 100,
      'window-cleaning': 80,
      'carpet-cleaning': 120,
      'pressure-washing': 200,
      'eco-friendly': 50
    },
    timelineMultipliers: {
      'standard': 1.0,
      'rush': 1.3,
      'emergency': 1.5
    }
  };

  const specialRequirementsOptions = [
    { id: 'hazardous-materials', label: 'Hazardous Materials Removal', description: 'Nails, glass, chemicals' },
    { id: 'hvac-cleaning', label: 'HVAC & Duct Cleaning', description: 'Duct system cleaning' },
    { id: 'floor-restoration', label: 'Floor Restoration', description: 'Polishing and sealing' },
    { id: 'window-cleaning', label: 'Window Cleaning', description: 'Interior and exterior' },
    { id: 'carpet-cleaning', label: 'Carpet Cleaning', description: 'Deep cleaning and protection' },
    { id: 'pressure-washing', label: 'Pressure Washing', description: 'Exterior surfaces' },
    { id: 'eco-friendly', label: 'Eco-Friendly Products', description: 'Green cleaning solutions' }
  ];

  const basicTasksOptions = [
    { id: 'dusting', label: 'Dust all surfaces', description: 'Walls, baseboards, vents, fixtures' },
    { id: 'floors', label: 'Floor cleaning', description: 'Vacuuming, mopping, and polish prep' },
    { id: 'windows', label: 'Window cleaning', description: 'Glass, frames, and track detailing' },
    { id: 'bathrooms', label: 'Bathrooms sanitized', description: 'Toilets, sinks, showers, mirrors' },
    { id: 'kitchens', label: 'Kitchen cleanup', description: 'Cabinets, counters, appliances' },
    { id: 'trash', label: 'Debris removal', description: 'Haul away light construction debris' },
  ];

  const calculatePricing = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const basePrice = pricingConfig.baseRates[formData.projectType as keyof typeof pricingConfig.baseRates];
      const squareFootageMultiplier = formData.squareFootage * pricingConfig.perSquareFoot[formData.projectType as keyof typeof pricingConfig.perSquareFoot];
      const phaseMultiplier = pricingConfig.phaseMultipliers[formData.constructionPhase as keyof typeof pricingConfig.phaseMultipliers];
      const debrisMultiplier = pricingConfig.debrisMultipliers[formData.debrisAmount as keyof typeof pricingConfig.debrisMultipliers];
      
      let specialRequirementsCost = 0;
      formData.specialRequirements.forEach(req => {
        specialRequirementsCost += pricingConfig.specialRequirements[req as keyof typeof pricingConfig.specialRequirements] || 0;
      });
      
      const rushFee = (basePrice + squareFootageMultiplier) * (pricingConfig.timelineMultipliers[formData.timeline as keyof typeof pricingConfig.timelineMultipliers] - 1);
      
      const totalPrice = (basePrice + squareFootageMultiplier) * phaseMultiplier * debrisMultiplier + specialRequirementsCost + rushFee;
      
      // Estimate hours based on project size and complexity
      const baseHours = Math.max(4, formData.squareFootage / 500);
      const complexityMultiplier = debrisMultiplier * phaseMultiplier;
      const estimatedHours = Math.round(baseHours * complexityMultiplier * 2);
      
      setPricing({
        basePrice,
        squareFootageMultiplier,
        phaseMultiplier,
        debrisMultiplier,
        specialRequirementsCost,
        rushFee,
        totalPrice: Math.round(totalPrice),
        estimatedHours
      });
      
      setIsCalculating(false);
      setShowResults(true);
    }, 1500);
  };

  const handleSpecialRequirementToggle = (requirementId: string) => {
    setFormData(prev => ({
      ...prev,
      specialRequirements: prev.specialRequirements.includes(requirementId)
        ? prev.specialRequirements.filter(id => id !== requirementId)
        : [...prev.specialRequirements, requirementId]
    }));
  };

  const handleBasicTaskToggle = (taskId: string) => {
    setFormData(prev => ({
      ...prev,
      basicTasks: prev.basicTasks.includes(taskId)
        ? prev.basicTasks.filter(id => id !== taskId)
        : [...prev.basicTasks, taskId]
    }));
  };

  const handleInputChange = (field: string, value: any) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof CalculatorForm] as any),
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('idle');
    
    try {
      const submissionData = {
        ...formData,
        pricing: {
          totalPrice: pricing.totalPrice,
          estimatedHours: pricing.estimatedHours
        }
      };
      
      // Create FormData for Formspree
      const formDataToSend = new FormData();
      formDataToSend.append('projectType', formData.projectType);
      formDataToSend.append('squareFootage', formData.squareFootage.toString());
      formDataToSend.append('constructionPhase', formData.constructionPhase);
      formDataToSend.append('debrisAmount', formData.debrisAmount);
      formDataToSend.append('basicTasks', formData.basicTasks.join(', '));
      formDataToSend.append('specialRequirements', formData.specialRequirements.join(', '));
      formDataToSend.append('timeline', formData.timeline);
      formDataToSend.append('name', formData.contactInfo.name);
      formDataToSend.append('email', formData.contactInfo.email);
      formDataToSend.append('phone', formData.contactInfo.phone);
      formDataToSend.append('company', formData.contactInfo.company);
      formDataToSend.append('address', formData.contactInfo.address);
      formDataToSend.append('city', formData.contactInfo.city);
      formDataToSend.append('zipCode', formData.contactInfo.zipCode);
      formDataToSend.append('description', formData.projectDetails.description);
      formDataToSend.append('startDate', formData.projectDetails.startDate);
      formDataToSend.append('completionDate', formData.projectDetails.completionDate);
      formDataToSend.append('totalPrice', pricing.totalPrice.toString());
      formDataToSend.append('estimatedHours', pricing.estimatedHours.toString());
      
      // Add Formspree hidden fields
      formDataToSend.append('_subject', 'New Post-Construction Calculator Quote Request');
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
        const result = await response.json();
        setSubmissionStatus('success');
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            projectType: 'residential',
            squareFootage: 1000,
            constructionPhase: 'post-construction',
            debrisAmount: 'medium',
            basicTasks: [],
            specialRequirements: [],
            timeline: 'standard',
            contactInfo: {
              name: '',
              email: '',
              phone: '',
              company: '',
              address: '',
              city: '',
              zipCode: ''
            },
            projectDetails: {
              description: '',
              startDate: '',
              completionDate: ''
            }
          });
          setShowResults(false);
          setShowForm(false);
          setSubmissionStatus('idle');
        }, 3000);
        
      } else {
        const error = await response.json();
        console.error('Submission failed:', error);
        setSubmissionStatus('error');
      }
      
    } catch (error) {
      console.error('Error submitting project:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
      {/* Calculator Header */}
      <div className="bg-gradient-to-r from-primary-blue to-accent-aqua p-8 text-white text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calculator className="w-8 h-8" />
          <h2 className="text-3xl font-bold">Post-Construction Cleanup Calculator</h2>
        </div>
        <p className="text-lg opacity-90">
          Get an instant estimate for your project. Our calculator considers all factors for accurate pricing.
        </p>
      </div>

             {!showResults && !showForm && (
         <div className="p-4 sm:p-6 lg:p-8">
           {/* Project Type Selection */}
           <div className="mb-6 sm:mb-8">
             <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Project Type</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                { id: 'residential', label: 'Residential', icon: Home, description: 'Homes, apartments, condos' },
                { id: 'commercial', label: 'Commercial', icon: Building2, description: 'Offices, retail, restaurants' },
                { id: 'industrial', label: 'Industrial', icon: HardHat, description: 'Warehouses, factories, facilities' }
              ].map(type => (
                <div
                  key={type.id}
                  onClick={() => handleInputChange('projectType', type.id)}
                  className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.projectType === type.id
                      ? 'border-primary-blue bg-primary-blue/10'
                      : 'border-gray-200 hover:border-primary-blue/50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <type.icon className="w-6 h-6 text-primary-blue" />
                    <span className="font-semibold text-gray-900">{type.label}</span>
                  </div>
                  <p className="text-sm text-gray-700">{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Square Footage
              </label>
              <input
                type="number"
                value={formData.squareFootage}
                onChange={(e) => handleInputChange('squareFootage', parseInt(e.target.value) || 0)}
                className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                placeholder="1000"
                min="100"
                max="50000"
              />
              <p className="text-xs text-gray-600 mt-2">Estimate total cleaned square footage.</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Construction Phase
              </label>
              <select
                value={formData.constructionPhase}
                onChange={(e) => handleInputChange('constructionPhase', e.target.value)}
                className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              >
                <option value="post-construction">Post-Construction</option>
                <option value="during-construction">During Construction</option>
                <option value="new-construction">New Construction</option>
              </select>
            </div>
          </div>

          {/* Basic Cleanup Tasks */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Basic Cleanup Tasks</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              {basicTasksOptions.map(option => (
                <div
                  key={option.id}
                  onClick={() => handleBasicTaskToggle(option.id)}
                  className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.basicTasks.includes(option.id)
                      ? 'border-primary-blue bg-primary-blue/10'
                      : 'border-gray-200 hover:border-primary-blue/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.basicTasks.includes(option.id)}
                      onChange={() => {}}
                      className="w-4 h-4 text-primary-blue"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-700">{option.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

                     {/* Debris Amount */}
           <div className="mb-6 sm:mb-8">
             <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Debris Amount</h3>
             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                { id: 'light', label: 'Light', description: 'Minimal debris' },
                { id: 'medium', label: 'Medium', description: 'Standard cleanup' },
                { id: 'heavy', label: 'Heavy', description: 'Significant debris' },
                { id: 'extreme', label: 'Extreme', description: 'Major cleanup needed' }
              ].map(level => (
                <div
                  key={level.id}
                  onClick={() => handleInputChange('debrisAmount', level.id)}
                  className={`p-4 border-2 rounded-xl cursor-pointer transition-all text-center ${
                    formData.debrisAmount === level.id
                      ? 'border-primary-blue bg-primary-blue/10'
                      : 'border-gray-200 hover:border-primary-blue/50'
                  }`}
                >
                  <div className="font-semibold text-gray-900 mb-1">{level.label}</div>
                  <div className="text-sm text-gray-700">{level.description}</div>
                </div>
              ))}
            </div>
          </div>

                     {/* Special Requirements */}
           <div className="mb-6 sm:mb-8">
             <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Special Requirements (Optional)</h3>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              {specialRequirementsOptions.map(option => (
                <div
                  key={option.id}
                  onClick={() => handleSpecialRequirementToggle(option.id)}
                  className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.specialRequirements.includes(option.id)
                      ? 'border-accent-green bg-accent-green/10'
                      : 'border-gray-200 hover:border-accent-green/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.specialRequirements.includes(option.id)}
                      onChange={() => {}}
                      className="w-4 h-4 text-accent-green"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-700">{option.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

                     {/* Timeline */}
           <div className="mb-6 sm:mb-8">
             <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Timeline</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                { id: 'standard', label: 'Standard', description: '5-7 business days', multiplier: 1.0 },
                { id: 'rush', label: 'Rush', description: '2-3 business days', multiplier: 1.3 },
                { id: 'emergency', label: 'Emergency', description: 'Same day/24 hours', multiplier: 1.5 }
              ].map(timeline => (
                <div
                  key={timeline.id}
                  onClick={() => handleInputChange('timeline', timeline.id)}
                  className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.timeline === timeline.id
                      ? 'border-primary-blue bg-primary-blue/10'
                      : 'border-gray-200 hover:border-primary-blue/50'
                  }`}
                >
                  <div className="font-semibold text-gray-900 mb-1">{timeline.label}</div>
                  <div className="text-sm text-gray-700 mb-2">{timeline.description}</div>
                  <div className="text-xs text-primary-blue font-medium">
                    {timeline.multiplier > 1 ? `+${Math.round((timeline.multiplier - 1) * 100)}% fee` : 'No additional fee'}
                  </div>
                </div>
              ))}
            </div>
          </div>

                     {/* Calculate Button */}
           <div className="text-center">
             <button
               onClick={calculatePricing}
               disabled={isCalculating}
               className="w-full sm:w-auto bg-primary-blue text-white px-6 sm:px-8 py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
             >
              {isCalculating ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Calculating...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Calculate Estimate
                </div>
              )}
            </button>
          </div>
        </div>
      )}

             {/* Results Display */}
       {showResults && (
         <div className="p-4 sm:p-6 lg:p-8">
           <div className="text-center mb-6 sm:mb-8">
             <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-accent-green mx-auto mb-3 sm:mb-4" />
             <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Your Project Estimate</h3>
             <p className="text-gray-700">Based on your project specifications</p>
           </div>

                     {/* Pricing Breakdown */}
           <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
             <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Pricing Breakdown</h4>
             <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between">
                <span>Base Price ({formData.projectType})</span>
                <span className="font-semibold">{formatCurrency(pricing.basePrice)}</span>
              </div>
              <div className="flex justify-between">
                <span>Square Footage ({formData.squareFootage} sq ft)</span>
                <span className="font-semibold">{formatCurrency(pricing.squareFootageMultiplier)}</span>
              </div>
              <div className="flex justify-between">
                <span>Phase Multiplier ({formData.constructionPhase})</span>
                <span className="font-semibold">×{pricing.phaseMultiplier}</span>
              </div>
              <div className="flex justify-between">
                <span>Debris Level ({formData.debrisAmount})</span>
                <span className="font-semibold">×{pricing.debrisMultiplier}</span>
              </div>
              {pricing.specialRequirementsCost > 0 && (
                <div className="flex justify-between">
                  <span>Special Requirements</span>
                  <span className="font-semibold">{formatCurrency(pricing.specialRequirementsCost)}</span>
                </div>
              )}
              {pricing.rushFee > 0 && (
                <div className="flex justify-between">
                  <span>Rush Fee ({formData.timeline})</span>
                  <span className="font-semibold">{formatCurrency(pricing.rushFee)}</span>
                </div>
              )}
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-bold text-primary-blue">
                  <span>Total Estimate</span>
                  <span>{formatCurrency(pricing.totalPrice)}</span>
                </div>
              </div>
            </div>
          </div>

                     {/* Project Summary */}
           <div className="bg-blue-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
             <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Project Summary</h4>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <span className="text-sm text-gray-700">Project Type:</span>
                <div className="font-medium text-gray-900 capitalize">{formData.projectType}</div>
              </div>
              <div>
                <span className="text-sm text-gray-700">Square Footage:</span>
                <div className="font-medium text-gray-900">{formData.squareFootage.toLocaleString()} sq ft</div>
              </div>
              <div>
                <span className="text-sm text-gray-700">Construction Phase:</span>
                <div className="font-medium text-gray-900 capitalize">{formData.constructionPhase.replace('-', ' ')}</div>
              </div>
              <div>
                <span className="text-sm text-gray-700">Debris Level:</span>
                <div className="font-medium text-gray-900 capitalize">{formData.debrisAmount}</div>
              </div>
              <div>
                <span className="text-sm text-gray-700">Timeline:</span>
                <div className="font-medium text-gray-900 capitalize">{formData.timeline}</div>
              </div>
              <div>
                <span className="text-sm text-gray-700">Estimated Hours:</span>
                <div className="font-medium text-gray-900">{pricing.estimatedHours} hours</div>
              </div>
            </div>
            {formData.basicTasks.length > 0 && (
              <div className="mt-4">
                <span className="text-sm text-gray-700">Basic Tasks Selected:</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {formData.basicTasks.map((task) => (
                    <span key={task} className="bg-white border border-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {basicTasksOptions.find((option) => option.id === task)?.label || task}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

                     {/* Action Buttons */}
           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
             <button
               onClick={() => setShowForm(true)}
               className="w-full sm:w-auto bg-primary-blue text-white px-6 sm:px-8 py-4 rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors"
             >
               <div className="flex items-center gap-2">
                 <Send className="w-5 h-5" />
                 Submit Project Details
               </div>
             </button>
             <button
               onClick={() => setShowResults(false)}
               className="w-full sm:w-auto bg-gray-200 text-gray-900 px-6 sm:px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
             >
               Recalculate
             </button>
           </div>
        </div>
      )}

             {/* Project Submission Form */}
       {showForm && (
         <div className="p-4 sm:p-6 lg:p-8">
           <div className="text-center mb-6 sm:mb-8">
             <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Submit Your Project</h3>
             <p className="text-gray-700">Provide additional details to receive a comprehensive proposal</p>
           </div>

                     <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
             {/* Contact Information */}
             <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
               <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Contact Information</h4>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Full Name *</label>
                                   <input
                   type="text"
                   required
                   value={formData.contactInfo.name}
                   onChange={(e) => handleInputChange('contactInfo.name', e.target.value)}
                   className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                   placeholder="John Smith"
                 />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Email *</label>
                                   <input
                   type="email"
                   required
                   value={formData.contactInfo.email}
                   onChange={(e) => handleInputChange('contactInfo.email', e.target.value)}
                   className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                   placeholder="john@example.com"
                 />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Phone *</label>
                                   <input
                   type="tel"
                   required
                   value={formData.contactInfo.phone}
                   onChange={(e) => handleInputChange('contactInfo.phone', e.target.value)}
                   className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                   placeholder="(904) 456-3851"
                 />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Company</label>
                                   <input
                   type="text"
                   value={formData.contactInfo.company}
                   onChange={(e) => handleInputChange('contactInfo.company', e.target.value)}
                   className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                   placeholder="Company Name (optional)"
                 />
                </div>
              </div>
            </div>

                         {/* Project Address */}
             <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
               <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Project Address</h4>
               <div className="space-y-3 sm:space-y-4">
                 <div>
                   <label className="block text-sm font-medium text-gray-900 mb-2">Street Address *</label>
                   <input
                     type="text"
                     required
                     value={formData.contactInfo.address}
                     onChange={(e) => handleInputChange('contactInfo.address', e.target.value)}
                     className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                     placeholder="123 Main Street"
                   />
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                     <div>
                     <label className="block text-sm font-medium text-gray-900 mb-2">City *</label>
                     <input
                       type="text"
                       required
                       value={formData.contactInfo.city}
                       onChange={(e) => handleInputChange('contactInfo.city', e.target.value)}
                       className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                       placeholder="Jacksonville"
                     />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-900 mb-2">ZIP Code *</label>
                     <input
                       type="text"
                       required
                       value={formData.contactInfo.zipCode}
                       onChange={(e) => handleInputChange('contactInfo.zipCode', e.target.value)}
                       className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                       placeholder="32202"
                     />
                   </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Project Details</h4>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Project Description</label>
                  <textarea
                    value={formData.projectDetails.description}
                    onChange={(e) => handleInputChange('projectDetails.description', e.target.value)}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    placeholder="Describe your project, any specific requirements, or special considerations..."
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Preferred Start Date</label>
                    <input
                      type="date"
                      value={formData.projectDetails.startDate}
                      onChange={(e) => handleInputChange('projectDetails.startDate', e.target.value)}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Target Completion Date</label>
                    <input
                      type="date"
                      value={formData.projectDetails.completionDate}
                      onChange={(e) => handleInputChange('projectDetails.completionDate', e.target.value)}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Estimate Summary */}
            <div className="bg-primary-blue/10 rounded-xl p-4 sm:p-6 border border-primary-blue/20">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Your Estimate Summary</h4>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                <div>
                  <div className="text-sm text-gray-700">Total Estimate</div>
                  <div className="text-xl sm:text-2xl font-bold text-primary-blue">{formatCurrency(pricing.totalPrice)}</div>
                  <div className="text-sm text-gray-700">{formData.squareFootage.toLocaleString()} sq ft • {pricing.estimatedHours} hours</div>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-sm text-gray-700">Timeline</div>
                  <div className="font-medium text-gray-900 capitalize">{formData.timeline}</div>
                </div>
              </div>
            </div>

                         {/* Status Messages */}
             {submissionStatus === 'success' && (
               <div className="bg-accent-green/10 border border-accent-green/20 rounded-xl p-4 sm:p-6 text-center">
                 <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-accent-green mx-auto mb-3 sm:mb-4" />
                 <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Project Submitted Successfully!</h4>
                 <p className="text-gray-700">
                   Thank you for your submission. We'll contact you within 24 hours with a detailed proposal 
                   and answer any questions you may have.
                 </p>
               </div>
             )}
             
             {submissionStatus === 'error' && (
               <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-6 text-center">
                 <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                   <span className="text-red-600 text-xl sm:text-2xl">!</span>
                 </div>
                 <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Submission Failed</h4>
                 <p className="text-gray-700 mb-3 sm:mb-4">
                   There was an error submitting your project. Please try again or contact us directly.
                 </p>
                 <button
                   onClick={() => setSubmissionStatus('idle')}
                   className="bg-red-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                 >
                   Try Again
                 </button>
               </div>
             )}

             {/* Submit Button */}
             {submissionStatus === 'idle' && (
               <div className="text-center">
                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className="bg-primary-blue text-white w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   {isSubmitting ? (
                     <div className="flex items-center gap-2">
                       <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                       Submitting...
                     </div>
                   ) : (
                     <div className="flex items-center gap-2">
                       <Send className="w-5 h-5" />
                       Submit Project & Get Proposal
                     </div>
                   )}
                 </button>
                 <p className="text-sm text-gray-700 mt-3">
                   We'll contact you within 24 hours with a detailed proposal and answer any questions.
                 </p>
               </div>
             )}
          </form>

          {/* Back Button */}
          <div className="text-center mt-6">
            <button
              onClick={() => setShowForm(false)}
              className="text-primary-blue hover:text-primary-blue/80 transition-colors"
            >
              ← Back to Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
