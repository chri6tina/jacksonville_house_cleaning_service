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
      title: "General Cleaning Services",
      icon: Sparkles,
      questions: [
        {
          question: "What cleaning services do you offer in Jacksonville?",
          answer: "We offer comprehensive cleaning services including regular house cleaning, deep cleaning, move-in/move-out cleaning, carpet cleaning, window cleaning, kitchen deep cleaning, bathroom sanitization, post-construction cleaning, and commercial cleaning. We serve all of Jacksonville and surrounding areas including the beaches, Mandarin, San Marco, Riverside, and Arlington."
        },
        {
          question: "How much do your cleaning services cost?",
          answer: "Our pricing varies based on home size, service type, and frequency. Regular cleaning starts at $120 for a 2-bedroom home, deep cleaning starts at $200, and move-in/move-out cleaning starts at $250. We provide free, no-obligation quotes after assessing your specific needs. Contact us at (904) 456-3851 for a personalized quote."
        },
        {
          question: "Do you offer same-day or emergency cleaning services?",
          answer: "Yes! We offer same-day cleaning services for urgent situations. While we recommend booking in advance for the best availability, we can often accommodate same-day requests. Emergency cleaning services are available for move-outs, real estate showings, or other urgent needs. Call us at (904) 456-3851 to check availability."
        },
        {
          question: "What areas of Jacksonville do you serve?",
          answer: "We serve all of Jacksonville and surrounding areas including Northside, Southside, Arlington, Mandarin, San Marco, Riverside, Avondale, Murray Hill, Ortega, Atlantic Beach, Neptune Beach, Jacksonville Beach, Ponte Vedra Beach, and surrounding communities. We also serve nearby areas like Yulee, Callahan, and Orange Park."
        }
      ]
    },
    {
      title: "Booking & Scheduling",
      icon: Calendar,
      questions: [
        {
          question: "How do I book a cleaning service?",
          answer: "You can book our services in three ways: 1) Call us directly at (904) 456-3851, 2) Fill out our online contact form at /contact, or 3) Email us at info@jaxcleaning.com. We'll schedule a convenient time for you and provide a detailed quote. We offer flexible scheduling including early morning, evening, and weekend appointments."
        },
        {
          question: "How far in advance should I book?",
          answer: "For regular cleaning services, we recommend booking 1-2 weeks in advance. For deep cleaning or move-in/move-out services, 2-3 weeks notice is ideal. However, we can often accommodate last-minute requests depending on availability. Peak times (spring cleaning, moving season) may require more advance notice."
        },
        {
          question: "Do you offer recurring cleaning services?",
          answer: "Yes! We offer weekly, bi-weekly, and monthly recurring cleaning services. Recurring customers receive priority scheduling, discounted rates, and consistent service quality. We can work around your schedule and adjust frequency as needed. Many of our customers choose bi-weekly cleaning for optimal home maintenance."
        },
        {
          question: "What is your cancellation policy?",
          answer: "We understand that life happens! We request 24 hours notice for cancellations or rescheduling. Cancellations within 24 hours may incur a $50 fee. For recurring customers, we offer one free cancellation per month. We're flexible and will work with you to find alternative times when possible."
        }
      ]
    },
    {
      title: "Service Quality & Guarantees",
      icon: Star,
      questions: [
        {
          question: "What is your satisfaction guarantee?",
          answer: "We offer a 100% satisfaction guarantee on all our services. If you're not completely satisfied with our cleaning, we'll return within 24 hours to fix any issues at no additional cost. If you're still not satisfied, we'll provide a full refund. Your satisfaction is our top priority, and we won't rest until you're happy with our work."
        },
        {
          question: "How do you ensure consistent quality?",
          answer: "We maintain consistent quality through: 1) Trained, experienced cleaning professionals, 2) Detailed cleaning checklists for each service type, 3) Quality control inspections after every cleaning, 4) Regular team training and feedback, 5) Customer satisfaction surveys, and 6) Continuous improvement based on customer feedback. Our team takes pride in delivering excellence every time."
        },
        {
          question: "Do you provide cleaning supplies and equipment?",
          answer: "Yes, we provide all cleaning supplies, equipment, and eco-friendly products. You don't need to purchase or store any cleaning supplies. We use professional-grade equipment and eco-friendly cleaning products that are safe for your family, pets, and the environment. Our team arrives fully equipped and ready to work."
        },
        {
          question: "How long does a typical cleaning take?",
          answer: "Cleaning time varies by service type and home size. A regular cleaning for a 2-bedroom home typically takes 2-3 hours, deep cleaning takes 4-6 hours, and move-in/move-out cleaning takes 6-8 hours. Larger homes or additional services will take longer. We'll provide a time estimate when you book and always work efficiently to minimize disruption."
        }
      ]
    },
    {
      title: "Safety & Insurance",
      icon: Shield,
      questions: [
        {
          question: "Are you licensed and insured?",
          answer: "Yes, we are fully licensed, bonded, and insured. We carry comprehensive liability insurance, worker's compensation insurance, and are bonded for your protection. Our insurance covers any potential damage during cleaning, and we're licensed to operate in Jacksonville and throughout Florida. You can request proof of insurance at any time."
        },
        {
          question: "Do you background check your employees?",
          answer: "Absolutely! All our cleaning professionals undergo thorough background checks, including criminal history and driving record verification. We also verify references and previous employment. Our team members are trustworthy, reliable, and committed to providing excellent service while respecting your home and privacy."
        },
        {
          question: "What if something gets damaged during cleaning?",
          answer: "While damage is extremely rare, we're fully insured to handle any accidental damage. If something does get damaged, immediately contact us at (904) 456-3851. We'll assess the situation, file an insurance claim if necessary, and work to resolve the issue quickly and fairly. Your peace of mind is important to us."
        },
        {
          question: "Are your cleaning products safe for children and pets?",
          answer: "Yes! We use only eco-friendly, non-toxic cleaning products that are safe for children, pets, and people with sensitivities. Our products are free from harsh chemicals, artificial fragrances, and harmful ingredients. We use products that are effective at cleaning while being gentle on your family and the environment."
        }
      ]
    },
    {
      title: "Specialized Services",
      icon: Users,
      questions: [
        {
          question: "What's included in deep cleaning vs. regular cleaning?",
          answer: "Regular cleaning includes: dusting, vacuuming, mopping, bathroom cleaning, kitchen cleaning, and general tidying. Deep cleaning adds: inside appliances, inside cabinets, baseboards, light fixtures, ceiling fans, window tracks, door frames, and detailed attention to hard-to-reach areas. Deep cleaning is recommended every 3-6 months."
        },
        {
          question: "Do you offer move-in/move-out cleaning?",
          answer: "Yes! Our move-in/move-out cleaning is comprehensive and includes: deep cleaning of all rooms, appliance cleaning, cabinet and drawer cleaning, baseboard cleaning, window cleaning, carpet cleaning, and final inspection. This service is perfect for landlords, real estate agents, and anyone moving. We guarantee your space will be spotless."
        },
        {
          question: "Can you clean after construction or renovation?",
          answer: "Absolutely! Post-construction cleaning is one of our specialties. We remove construction dust, debris, and residue from all surfaces. This includes: walls, ceilings, floors, windows, fixtures, cabinets, and appliances. We use specialized equipment and techniques to ensure your newly renovated space is perfectly clean and ready to enjoy."
        },
        {
          question: "Do you offer commercial cleaning services?",
          answer: "Yes! We provide commercial cleaning for offices, retail spaces, medical facilities, and industrial buildings. Our commercial services include: daily/weekly cleaning, floor maintenance, restroom sanitization, kitchen cleaning, and specialized cleaning for different industries. We work around your business hours to minimize disruption."
        }
      ]
    },
    {
      title: "Payment & Pricing",
      icon: Phone,
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, checks, credit cards (Visa, MasterCard, American Express), and digital payments. Payment is due upon completion of service. For recurring customers, we offer monthly billing options. We also accept payment through our secure online portal for added convenience. All payments are processed securely and professionally."
        },
        {
          question: "Do you offer discounts for recurring services?",
          answer: "Yes! We offer competitive pricing for recurring customers. Weekly cleaning receives a 10% discount, bi-weekly cleaning receives a 15% discount, and monthly cleaning receives a 20% discount. We also offer seasonal promotions and referral discounts. Contact us to discuss the best pricing option for your cleaning schedule."
        },
        {
          question: "Is there a minimum service requirement?",
          answer: "We have a minimum service charge of $80 for small jobs. However, we're flexible and can work with you to find the right service level. For very small spaces or quick cleanups, we can often accommodate your needs. Contact us to discuss your specific requirements and we'll find a solution that works for you."
        },
        {
          question: "Do you provide free estimates?",
          answer: "Yes! We provide free, no-obligation estimates for all our services. We can give you an estimate over the phone based on your home size and service needs, or schedule a free in-home consultation for more detailed quotes. There's never any pressure to book, and our estimates are transparent with no hidden fees."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Get answers to the most common questions about our Jacksonville cleaning services. 
            Can't find what you're looking for? Contact us directly at (904) 456-3851.
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
                        <h4 className="text-lg font-semibold text-charcoal group-hover:text-primary-blue transition-colors pr-4">
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
            <h3 className="text-2xl font-bold text-charcoal mb-4">
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
