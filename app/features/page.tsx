'use client';

import LandingNavigation from '@/components/Navigation';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <LandingNavigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Features</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Explore the core capabilities of AgriSenseAI, from real-time monitoring to predictive analytics
          and prescriptive recommendations for smarter farm management.
        </p>
      </main>
    </div>
  );
}
