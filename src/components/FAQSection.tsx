'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Shield, Clock, MapPin, Phone, Mail, Calendar, Users, Leaf, Sparkles } from 'lucide-react';
import Link from 'next/link';

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Services & Scheduling",
      icon: Sparkles,
      questions: [
        {
          question: "What types of cleaning services do you offer?",
          answer: "We provide standard house cleaning, deep cleaning, move-in/move-out cleaning, office cleaning, and customized recurring services (weekly, bi-weekly, or monthly)."
        },
        {
          question: "How often should I have my home professionally cleaned?",
          answer: "Most families choose bi-weekly service to maintain a clean home, but we offer flexible scheduling based on your lifestyle and budget."
        },
        {
          question: "Do I need to be home during the cleaning?",
          answer: "Not at all. Many clients provide us with a key or door code, and we'll clean while you're away. It's your choice."
        }
      ]
    },
    {
      title: "Pricing & Payment",
      icon: Phone,
      questions: [
        {
          question: "How much does house cleaning cost?",
          answer: "Pricing depends on the size of your home, the type of cleaning, and frequency. Standard cleanings start at a flat rate or hourly rate, while deep cleanings are usually higher. We provide free quotes so you know exactly what to expect."
        },
        {
          question: "Do you offer discounts for recurring services?",
          answer: "Yes. Weekly or bi-weekly clients receive discounted rates compared to one-time cleanings."
        },
        {
          question: "What forms of payment do you accept?",
          answer: "We accept credit/debit cards, checks, and online payments."
        }
      ]
    },
    {
      title: "Products & Equipment",
      icon: Leaf,
      questions: [
        {
          question: "Do I need to provide cleaning supplies?",
          answer: "No. We bring all professional-grade supplies and equipment. If you prefer we use your products, just let us know."
        },
        {
          question: "Do you use eco-friendly cleaning products?",
          answer: "Yes, we can use green/eco-friendly products upon request, safe for children and pets."
        }
      ]
    },
    {
      title: "Trust & Safety",
      icon: Shield,
      questions: [
        {
          question: "Are your cleaners insured and background-checked?",
          answer: "Absolutely. Our team is fully insured, bonded, and background-checked for your peace of mind."
        },
        {
          question: "What if I'm not satisfied with the cleaning?",
          answer: "Customer satisfaction is guaranteed. If something isn't right, we'll come back and make it right."
        },
        {
          question: "How do you handle pets during cleaning?",
          answer: "We're pet-friendly and used to working in homes with dogs and cats. Let us know if you'd like pets crated or left in certain areas during service."
        }
      ]
    },
    {
      title: "Special Situations",
      icon: Users,
      questions: [
        {
          question: "Do you offer move-in/move-out cleaning?",
          answer: "Yes. These cleanings include extra attention to kitchens, bathrooms, appliances, and baseboards—perfect for new homeowners or rental turnovers."
        },
        {
          question: "Can you handle special requests?",
          answer: "Definitely. We can customize your cleaning to focus on specific areas (like inside the fridge, oven, or windows)."
        },
        {
          question: "Do you clean offices or commercial spaces too?",
          answer: "Yes. In addition to residential cleaning, we offer flexible janitorial and office cleaning services for businesses."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get answers to the most common questions about our Jacksonville cleaning services. 
            Can&apos;t find what you're looking for? Contact us directly at (904) 456-3851.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Category Header */}
              <div className="bg-primary-blue text-white p-6">
                <div className="flex items-center gap-4">
                  <category.icon className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
              </div>
              
              {/* Questions */}
              <div className="divide-y divide-gray-200">
                {category.questions.map((item, questionIndex) => {
                  const itemIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openItems.includes(itemIndex);
                  
                  return (
                    <div key={questionIndex} className="p-6">
                      <button
                        onClick={() => toggleItem(itemIndex)}
                        className="flex items-center justify-between w-full text-left focus:outline-none group"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-blue transition-colors pr-4">
                          {item.question}
                        </h4>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-primary-blue flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-primary-blue transition-colors flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="mt-4 text-gray-600 leading-relaxed">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our friendly team is here to help! Contact us for personalized answers 
              and to schedule your free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-accent-coral hover:bg-accent-coral/90 text-white px-8 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </Link>
              <a 
                href="tel:9044563851"
                className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (904) 456-3851
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
