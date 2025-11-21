'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does the IoT sensor integration work?',
      answer: 'Our platform supports a wide range of IoT sensors. Simply connect your sensors via our API or use our recommended hardware partners. The sensors automatically sync data to your dashboard in real-time.'
    },
    {
      question: 'What kind of analytics do you provide?',
      answer: 'We provide predictive analytics for crop yield, disease detection, optimal harvest timing, weather impact analysis, and resource optimization. Our AI models are trained on millions of agricultural data points.'
    },
    {
      question: 'Is my farm data secure?',
      answer: 'Absolutely. We use enterprise-grade encryption, regular security audits, and comply with international data protection standards. Your data is stored in secure, redundant servers with automatic backups.'
    },
    {
      question: 'Can I manage multiple farms?',
      answer: 'Yes! Our platform supports unlimited farms and fields. You can easily switch between different locations, compare performance, and manage all your operations from a single dashboard.'
    },
    {
      question: 'What support options are available?',
      answer: 'We offer 24/7 email support, live chat during business hours, comprehensive documentation, video tutorials, and dedicated account managers for enterprise customers.'
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked
            <span className="gradient-text"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about AgriSenseAI
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              delay={`${index * 0.1}s`}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link href="/register" className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center">
            Contact our team
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, isOpen, onClick, delay }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
  delay: string;
}) {
  return (
    <div 
      className="bg-white rounded-2xl shadow-md overflow-hidden animate-slide-up hover:shadow-lg transition-shadow"
      style={{ animationDelay: delay }}
    >
      <button
        onClick={onClick}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-primary-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-8 pb-6 animate-slide-up">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of farmers who are already using AI-powered insights to maximize their yields.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/register" 
              className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-xl hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm animate-fade-in">
          <div className="flex items-center">
            <CheckCircle2 className="w-5 h-5 mr-2" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center">
            <CheckCircle2 className="w-5 h-5 mr-2" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center">
            <CheckCircle2 className="w-5 h-5 mr-2" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
