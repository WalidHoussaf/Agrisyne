'use client';

import LandingNavigation from '@/components/Navigation';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <LandingNavigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact</h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Have questions or want to see AgriSenseAI in action? Reach out and our team will get back
          to you as soon as possible.
        </p>
        {/* You can replace this with a real contact form later */}
        <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm p-6 shadow-sm">
          <p className="text-gray-500">
            Add your preferred contact details or a contact form here (email, phone, or a support portal).
          </p>
        </div>
      </main>
    </div>
  );
}
