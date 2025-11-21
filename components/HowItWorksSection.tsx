'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import Image from 'next/image';

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const steps = useMemo(() => [
    {
      number: '01',
      title: 'Connect Your Sensors',
      description: 'Install IoT sensors across your fields and connect them to the AgriSenseAI platform.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
          <rect width="256" height="256" fill="none"/>
          <path d="M56,136a64,64,0,0,1,64,64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <path d="M56,88A112,112,0,0,1,168,200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <path d="M56,40A160,160,0,0,1,216,200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <circle cx="60" cy="196" r="12" fill="currentColor"/>
        </svg>
      ),
      image: '/sensor.jpg'
    },
    {
      number: '02',
      title: 'Monitor in Real-time',
      description: 'View live data from all your sensors through an intuitive dashboard.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
          <rect width="256" height="256" fill="none"/>
          <rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <line x1="160" y1="224" x2="96" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        </svg>
      ),
      image: '/monitor.jpg'
    },
    {
      number: '03',
      title: 'Get AI Insights',
      description: 'Receive predictive analytics and recommendations powered by machine learning.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
          <rect width="256" height="256" fill="none"/>
          <path d="M104,141.86V77.19L148.5,51.5a48,48,0,0,1,66.4,64.08" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <path d="M128,155.71,72,123.38V72a48,48,0,0,1,88.69-25.47" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <path d="M152,141.86,96,174.19,51.5,148.5A48,48,0,0,1,73.79,59" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <path d="M152,114.14v64.67L107.5,204.5a48,48,0,0,1-66.4-64.08" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <path d="M128,100.29l56,32.33V184a48,48,0,0,1-88.69,25.47" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <path d="M104,114.14l56-32.33,44.5,25.69a48,48,0,0,1-22.29,89.55" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        </svg>
      ),
      image: '/insight.jpg'
    },
    {
      number: '04',
      title: 'Optimize & Grow',
      description: 'Make data-driven decisions to increase yield and reduce costs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
          <rect width="256" height="256" fill="none"/>
          <path d="M138.54,149.46C106.62,96.25,149.18,43.05,239.63,48.37,245,138.82,191.75,181.38,138.54,149.46Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <path d="M88.47,160.47c22.8-38-7.6-76-72.21-72.21C12.46,152.87,50.47,183.27,88.47,160.47Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <line x1="56" y1="128" x2="120" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <path d="M200,88l-61.25,61.25A64,64,0,0,0,120,194.51V224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        </svg>
      ),
      image: '/plant.jpg'
    },
  ], []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' 
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative pt-12 pb-20 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-midnight-mirage overflow-hidden"
    >
      {/* Leaf Illustration - Top Right */}
      <div className="absolute -top-10 -right-10 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 opacity-20 pointer-events-none" aria-hidden="true">
        <Image
          src="/leaf-illustration.png"
          alt="Leaf illustration decoration"
          fill
          className="object-contain"
        />
      </div>

      {/* Leaves Decoration - Top Left */}
      <div className="absolute -top-0 -left-10 w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 opacity-25 pointer-events-none" aria-hidden="true">
        <Image
          src="/leaves.png"
          alt="Leaves decoration"
          fill
          className="object-contain"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Badge */}
        <div className={`max-w-5xl mx-auto text-center transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: '100ms' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-white/10 to-white/20 border border-white/30 shadow-[0_2px_10px_rgba(255,255,255,0.1)] mb-6 sm:mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-4 h-4 text-white" aria-hidden="true">
              <rect width="256" height="256" fill="none"/>
              <path d="M88,136a40,40,0,1,1-40,40v-6.73" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
              <path d="M168,136a40,40,0,1,0,40,40v-6.73" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
              <path d="M72,172H64A48,48,0,0,1,48,78.73V72a40,40,0,0,1,80,0V176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
              <path d="M184,172h8a48,48,0,0,0,16-93.27V72a40,40,0,0,0-80,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
              <path d="M200,112h-4a28,28,0,0,1-28-28V80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
              <path d="M56,112h4A28,28,0,0,0,88,84V80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
            </svg>
            <span className="text-sm font-medium tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              HOW IT WORKS
            </span>
          </div>
        </div>

        {/* Title */}
        <div className={`max-w-5xl mx-auto text-center transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: '150ms' }}>
          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-heading font-medium bg-clip-text text-transparent bg-gradient-to-r from-praxeti-white to-lime-accent leading-tight mb-4 sm:mb-5">
            Start in Just Four Steps
          </h2>
        </div>

        {/* Subtitle */}
        <div className={`max-w-5xl mx-auto text-center transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: '200ms' }}>
          <p className="text-sm sm:text-xl font-medium text-white/80 mb-2">
            Transform your farming operations
          </p>
        </div>

        {/* Description */}
        <div className={`max-w-5xl mx-auto text-center transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: '250ms' }}>
          <p className="mt-4 text-xs sm:text-sm text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our simple four-step process makes it easy to implement AI-powered agriculture on your farm. 
            From sensor installation to data-driven decisions, we guide you through every stage of your digital transformation.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mt-12 sm:mt-16 relative">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="group relative rounded-2xl overflow-hidden border border-nuit-blanche hover:border-lime-accent/50 hover:shadow-lg hover:shadow-lime-accent/5 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer h-full flex flex-col min-h-[280px] sm:min-h-[300px] hover:z-50">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image 
                    src={step.image} 
                    alt={`${step.title} - Step ${step.number}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Overlay for content readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" aria-hidden="true"></div>
                
                {/* Content Container */}
                <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                  {/* Step Number with Icon */}
                  <div className="relative inline-block mb-3 flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    <div className="absolute -top-1 -right-2 bg-midnight-mirage backdrop-blur-md border border-white/30 rounded-full p-1.5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="text-lime-400 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Simple Line Connector (hidden on mobile, shown on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 w-16 h-0.5 bg-gradient-to-r from-lime-accent/80 to-lime-accent/20 -z-10" aria-hidden="true"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}