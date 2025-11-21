'use client';

import Link from 'next/link';
import { Sprout } from 'lucide-react';
import LandingNavigation from '@/components/Navigation';
import LandingHeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import FeaturesSection from '@/components/FeaturesSection';
import AgriTechDemo from '@/components/AgriTechDemo';
import { FAQSection, CTASection } from '@/components/LandingSections';
import { BenefitsSection } from '@/components/BenefitsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import AcademicCredibilitySection from '@/components/AcademicCredibilitySection';
import SectionDivider from '@/components/SectionDivider';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <LandingNavigation />

      <LandingHeroSection />

      <SectionDivider variant="blue-gradient" />

      <AcademicCredibilitySection />

      <SectionDivider variant="green-gradient" />

      <ProblemSection />

      <SectionDivider variant="blue-gradient" />

      <HowItWorksSection />
    
      <SectionDivider variant="green-gradient" />

      <FeaturesSection />

      <SectionDivider variant="blue-gradient" />

      <AgriTechDemo />

      <SectionDivider variant="blue-gradient" />

      <BenefitsSection />

      <SectionDivider variant="green-gradient" />

      <FAQSection />

      <SectionDivider variant="blue-gradient" />

      <CTASection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Sprout className="h-8 w-8 text-accent-400" />
                <span className="text-2xl font-bold">AgriSenseAI</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Transform your agricultural operations with AI-powered insights, real-time monitoring, and predictive analytics.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-accent-400 transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-accent-400 transition-colors">How It Works</a></li>
                <li><a href="#benefits" className="hover:text-accent-400 transition-colors">Benefits</a></li>
                <li><a href="#faq" className="hover:text-accent-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/register" className="hover:text-accent-400 transition-colors">Get Started</Link></li>
                <li><Link href="/login" className="hover:text-accent-400 transition-colors">Login</Link></li>
                <li><a href="#" className="hover:text-accent-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2025 AgriSenseAI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent-400 transition-colors">Twitter</a>
              <a href="#" className="hover:text-accent-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-accent-400 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

