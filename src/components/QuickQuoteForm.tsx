'use client';

import React, { useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';

const QuickQuoteForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call for now, since we are doing CRO
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  if (status === 'success') {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 text-center text-white h-full flex flex-col justify-center min-h-[350px]">
        <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-accent-green" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Quote Requested!</h3>
        <p className="text-white/90">
          Thank you. One of our local Jacksonville team members will contact you shortly with your estimate.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 underline text-white/70 hover:text-white text-sm transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl relative w-full overflow-hidden">
      {/* Glossy gradient overlay */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-coral/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-blue/20 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="text-center mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-sm">
            Get a Quick Quote
          </h3>
          <p className="text-white/90 text-sm">
            Takes 30 seconds. No obligation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="quick-name" className="sr-only">Your Name</label>
            <input 
              type="text" 
              id="quick-name"
              name="name" 
              required
              placeholder="Your Name" 
              className="w-full px-4 py-3 sm:py-4 rounded-xl bg-white text-gray-900 border-0 focus:ring-2 focus:ring-accent-coral shadow-inner outline-none transition-all placeholder:text-gray-400 font-medium"
            />
          </div>
          
          <div>
            <label htmlFor="quick-contact" className="sr-only">Phone Number or Email</label>
            <input 
              type="text" 
              id="quick-contact"
              name="contact" 
              required
              placeholder="Phone Number or Email" 
              className="w-full px-4 py-3 sm:py-4 rounded-xl bg-white text-gray-900 border-0 focus:ring-2 focus:ring-accent-coral shadow-inner outline-none transition-all placeholder:text-gray-400 font-medium"
            />
          </div>

          <div>
            <label htmlFor="quick-service" className="sr-only">Service Needed</label>
            <select 
              id="quick-service"
              name="service" 
              required
              className="w-full px-4 py-3 sm:py-4 rounded-xl bg-white text-gray-900 border-0 focus:ring-2 focus:ring-accent-coral shadow-inner outline-none transition-all font-medium appearance-none cursor-pointer text-base"
              defaultValue=""
            >
              <option value="" disabled>Select a Service</option>
              <option value="recurring">Recurring Cleaning</option>
              <option value="deep">Deep Cleaning</option>
              <option value="move">Move-In / Move-Out</option>
              <option value="post-construction">Post-Construction</option>
              <option value="other">Other / Not Sure</option>
            </select>
            {/* Custom downward arrow for select */}
            <div className="pointer-events-none absolute right-4 top-[148px] sm:top-[160px] bottom-0 flex items-center px-2 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full bg-accent-coral hover:bg-accent-coral/90 text-white font-bold py-3 sm:py-4 rounded-xl shadow-[0_4px_14px_0_rgba(255,107,107,0.39)] hover:shadow-[0_6px_20px_rgba(255,107,107,0.23)] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed text-base sm:text-lg mt-2"
          >
            {status === 'submitting' ? 'Sending...' : 'Request Quote'}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuickQuoteForm;
