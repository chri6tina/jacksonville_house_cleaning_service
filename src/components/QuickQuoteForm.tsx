'use client';

import React, { useState } from 'react';
import { Send, ArrowRight, ShieldCheck } from 'lucide-react';

interface QuickQuoteFormProps {
  initialService?: string;
}

const QuickQuoteForm: React.FC<QuickQuoteFormProps> = ({ initialService = '' }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const payload = {
      source: 'Quick Quote Form',
      name: formData.get('name') as string,
      phone: formData.get('contact') as string,
      squareFootage: formData.get('sqft') as string,
      serviceNeeded: formData.get('service') as string,
    };

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('API Reject');
      setStatus('success');
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 text-center flex flex-col justify-center min-h-[440px] shadow-xl animate-fade-in">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-green-600 translate-x-1 -translate-y-1" />
        </div>
        <h3 className="text-3xl font-bold mb-3 text-gray-900 tracking-tight">Quote Requested!</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Thank you! One of our local Jacksonville team members will reach out shortly to finalize your estimate.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-primary-blue font-semibold hover:text-blue-800 transition-colors hover:underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 text-center flex flex-col justify-center min-h-[440px] shadow-xl animate-fade-in">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-8 h-8 text-red-600" />
        </div>
        <h3 className="text-3xl font-bold mb-3 text-gray-900 tracking-tight">Oops! Connection Error</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          We're unable to process the form automatically right now. Please call us directly so we can get your quote started!
        </p>
        <a 
          href="tel:9044563851"
          className="bg-primary-blue text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors shadow-sm mb-4 inline-block"
        >
          Call (904) 456-3851
        </a>
        <button 
          onClick={() => setStatus('idle')}
          className="text-gray-500 font-medium hover:text-gray-800 transition-colors text-sm hover:underline"
        >
          Try form again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl border border-gray-100 flex flex-col justify-center min-h-[440px]">
      
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 mb-3">
          <ShieldCheck className="w-5 h-5 text-primary-blue" />
          <span className="text-sm font-bold text-primary-blue uppercase tracking-wider">Trusted Local Service</span>
        </div>
        <h3 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
          Get a Free Quote
        </h3>
        <p className="text-gray-600">
          Fast, easy, and no obligation.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="quick-name" className="text-sm font-semibold text-gray-700 mb-1 block">Full Name</label>
          <input 
            type="text" 
            id="quick-name"
            name="name" 
            required
            placeholder="Full Name" 
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all placeholder:text-gray-400 font-medium text-gray-900"
          />
        </div>
        
        <div>
          <label htmlFor="quick-contact" className="text-sm font-semibold text-gray-700 mb-1 block">Phone or Email</label>
          <input 
            type="text" 
            id="quick-contact"
            name="contact" 
            required
            placeholder="(904) 555-0123" 
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all placeholder:text-gray-400 font-medium text-gray-900"
          />
        </div>

        {/* New Square Footage Dropdown */}
        <div>
          <label htmlFor="quick-sqft" className="text-sm font-semibold text-gray-700 mb-1 block">Estimated Square Footage</label>
          <div className="relative">
            <select 
              id="quick-sqft"
              name="sqft" 
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all font-medium appearance-none cursor-pointer text-gray-900"
              defaultValue=""
            >
              <option value="" disabled className="text-gray-500">Select Approximate Size</option>
              <option value="under-1000">Under 1,000 sq ft</option>
              <option value="1000-2000">1,000 - 2,000 sq ft</option>
              <option value="2000-3000">2,000 - 3,000 sq ft</option>
              <option value="3000-4000">3,000 - 4,000 sq ft</option>
              <option value="over-4000">Over 4,000 sq ft</option>
            </select>
            <div className="pointer-events-none absolute right-4 top-0 bottom-0 flex items-center text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="quick-service" className="text-sm font-semibold text-gray-700 mb-1 block">Service Needed</label>
          <div className="relative">
            <select 
              id="quick-service"
              name="service" 
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all font-medium appearance-none cursor-pointer text-gray-900"
              defaultValue={initialService}
            >
              <option value="" disabled className="text-gray-500">Select a Service Type</option>
              <option value="recurring">Regular Recurring Cleaning</option>
              <option value="deep">One-Time Deep Clean</option>
              <option value="move">Move-In / Move-Out</option>
              <option value="post-construction">Post-Construction</option>
              {/* If a custom service is passed from a unique service page, render it dynamically */}
              {initialService && initialService !== 'recurring' && initialService !== 'deep' && initialService !== 'move' && initialService !== 'post-construction' && (
                <option value={initialService}>{initialService.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>
              )}
              <option value="other">Other / Not Sure</option>
            </select>
            <div className="pointer-events-none absolute right-4 top-0 bottom-0 flex items-center text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full flex items-center justify-center gap-2 bg-primary-blue hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-sm"
        >
          <span className="text-lg">
            {status === 'submitting' ? 'Sending...' : 'Request My Estimate'}
          </span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default QuickQuoteForm;
