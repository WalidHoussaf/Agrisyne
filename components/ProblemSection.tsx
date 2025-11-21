'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

const problems = [
  {
    id: 'stress',
    label: 'Unpredictable Crop Stress',
    title: 'Unpredictable crop stress hurts yields',
    description:
      'Farmers react too late to heat waves, pests, and nutrient deficiencies because early warning signals are buried in scattered notes, spreadsheets, or not measured at all.',
    image: '/crop.jpg',
    icon: 'thermometer',
    stat: '2-3 weeks',
    statLabel: 'delayed detection',
  },
  {
    id: 'water',
    label: 'Water Waste & Irrigation',
    title: 'Water is applied blindly, not precisely',
    description:
      'Without continuous soil moisture and micro-climate data, irrigation decisions are based on habit or guesswork — wasting water, energy, and sometimes stressing the crop even more.',
    image: '/water-waste.jpg',
    icon: 'droplet',
    stat: 'Up to 40%',
    statLabel: 'water waste',
  },
  {
    id: 'sensors',
    label: 'Fragmented, Expensive Sensors',
    title: 'Hardware is expensive and fragmented',
    description:
      'High-end sensors and closed platforms are costly, hard to integrate, and rarely designed for small and medium farms that need scalable, affordable deployments.',
    image: '/sensor-field.jpg',
    icon: 'broadcast',
    stat: '3-5x',
    statLabel: 'higher costs',
  },
  {
    id: 'insights',
    label: 'No Real-Time Insights',
    title: 'Data rarely turns into real-time insight',
    description:
      'Even when data is collected, it often lives in separate apps and PDFs, making it difficult to get an actionable, real-time view of field health and risk.',
    image: '/puzzle.jpg',
    icon: 'chart',
    stat: '5+ sources',
    statLabel: 'fragmented data',
  },
];

const IconComponents = {
  thermometer: () => (
    <svg viewBox="0 0 256 256" className="w-4 h-4">
      <circle cx="212" cy="84" r="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <line x1="120" y1="160" x2="120" y2="88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <circle cx="120" cy="184" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <path d="M88,48a32,32,0,0,1,64,0v90a56,56,0,1,1-64,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    </svg>
  ),
  droplet: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-4 h-4">
      <rect width="256" height="256" fill="none"/>
      <path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <path d="M136,192c20-3.37,36.61-20,40-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    </svg>
  ),
  broadcast: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-4 h-4">
      <circle cx="128" cy="128" r="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <path d="M181.67,80a71.94,71.94,0,0,1,0,96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <path d="M74.33,176a71.94,71.94,0,0,1,0-96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <path d="M208,49.62a111.88,111.88,0,0,1,0,156.76" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <path d="M48,206.38A111.88,111.88,0,0,1,48,49.62" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    </svg>
  ),
  chart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-4 h-4">
      <polyline points="48 208 48 136 96 136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <line x1="224" y1="208" x2="32" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <polyline points="96 208 96 88 152 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <polyline points="152 208 152 40 208 40 208 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    </svg>
  ),
};

export default function ProblemSection() {
  const [activeId, setActiveId] = useState('stress');
  const [fadeKey, setFadeKey] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const activeProblem = problems.find((p) => p.id === activeId) || problems[0];

  const handleTabChange = (id: string) => {
    setActiveId(id);
    setFadeKey(prev => prev + 1);
    setImageLoading(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % problems.length;
      handleTabChange(problems[nextIndex].id);
      tabsRef.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + problems.length) % problems.length;
      handleTabChange(problems[prevIndex].id);
      tabsRef.current[prevIndex]?.focus();
    }
  };

  return (
    <section 
      className="relative pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 overflow-hidden"
      aria-labelledby="problem-section-title"
    >
      {/* Background Decorative Image */}
      <div className="absolute -bottom-44 -left-20 w-[600px] h-[600px] opacity-[0.2] pointer-events-none">
        <Image
          src="/farm-illustration.png"
          alt=""
          fill
          className="object-contain object-bottom-left"
          priority={false}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-50 to-rose-100 border border-rose-100 shadow-[0_2px_10px_rgba(251,113,133,0.1)] mb-4 sm:mb-5">
            <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="text-sm font-medium tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-500">
              PROBLEMATIC AREAS
            </span>
          </div>
          <h2 
            id="problem-section-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-medium text-midnight-mirage leading-tight"
          >
            <span className="gradient-text-blue">Real-World</span> <span className="gradient-text-blue">Farm Challenges</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-midnight-mirage/70 max-w-2xl mx-auto leading-relaxed">
            Day-to-day operations are still driven by gut feeling instead of live field data — making crop stress, water
            waste, and expensive hardware the default, not the exception.
          </p>
          <div className="mt-6 sm:mt-8">
            <a 
              href="/learn"
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-midnight-mirage bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-picture-book-green/40"
            >
              <span>Learn how we solve these challenges</span>
              <svg 
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Tabs + Card */}
        <div className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,3fr)] gap-6 items-stretch">
          {/* Tabs */}
          <div 
            role="tablist" 
            aria-label="Farm problems"
            className="w-full grid grid-cols-2 lg:grid-cols-1 gap-3"
          >
            {problems.map((problem, index) => {
              const isActive = problem.id === activeId;
              const IconComponent = IconComponents[problem.icon as keyof typeof IconComponents];
              
              return (
                <button
                  key={problem.id}
                  ref={el => { if (el) tabsRef.current[index] = el; }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${problem.id}`}
                  id={`tab-${problem.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleTabChange(problem.id)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`group relative w-full text-left rounded-md border pl-6 pr-4 py-3 sm:pl-7 sm:pr-5 sm:py-4 transition-all duration-300 ease-out cursor-pointer backdrop-blur-sm transform-gpu
                    ${
                      isActive
                        ? 'border-picture-book-green/80 bg-white shadow-md shadow-picture-book-green/10 scale-[1.02]'
                        : 'border-gray-200/70 bg-white/60 hover:bg-white hover:border-picture-book-green/50 hover:shadow-lg hover:shadow-picture-book-green/5 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-100'
                    }
                  `}
                >
                  <div 
                    className={`absolute inset-y-0 left-[-1px] w-1.5 rounded-l-md bg-gradient-to-b from-picture-book-green to-picture-book-green/80 
                    transition-all duration-300 ease-out 
                    group-hover:from-picture-book-green/90 group-hover:to-picture-book-green/70 
                    ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'}`}
                    style={isActive ? { 
                      boxShadow: '0 0 6px rgba(74, 222, 128, 0.5)'
                    } : {}}
                    aria-hidden="true"
                  />
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center -mt-0.5 rounded-lg transition-all duration-200"
                      style={isActive ? {
                        background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(74, 222, 128, 0.05) 100%)',
                        border: '1px solid rgba(74, 222, 128, 0.2)'
                      } : {
                        background: 'rgba(243, 244, 246, 0.5)',
                        border: '1px solid rgba(229, 231, 235, 0.8)'
                      }}
                    >
                      <div
                        className={`transition-all duration-200 ${
                          isActive
                            ? 'text-picture-book-green scale-110'
                            : 'text-gray-400 group-hover:text-picture-book-green/80 group-hover:scale-105'
                        }`}
                      >
                        <IconComponent />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-midnight-mirage/60 mb-1.5">
                        Problem #{index + 1}
                      </p>
                      <p
                        className={`text-sm sm:text-base font-semibold mb-1.5 ${
                          isActive ? 'text-midnight-mirage' : 'text-midnight-mirage/75'
                        }`}
                      >
                        {problem.label}
                      </p>
                      <p className={`text-xs leading-relaxed transition-all duration-200 ${
                        isActive ? 'text-midnight-mirage/70' : 'text-midnight-mirage/50 group-hover:text-midnight-mirage/65'
                      }`}>
                        {problem.id === 'stress' && 'React faster to heat waves, pests & deficiencies'}
                        {problem.id === 'water' && 'Stop guessing and irrigate with precision'}
                        {problem.id === 'sensors' && 'Affordable, integrated hardware for all farms'}
                        {problem.id === 'insights' && 'Turn scattered data into clear action'}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Card */}
          <div className="relative flex justify-end w-full lg:-right-16">
            <div
              key={fadeKey}
              role="tabpanel"
              id={`panel-${activeProblem.id}`}
              aria-labelledby={`tab-${activeProblem.id}`}
              className="group relative h-full min-h-[320px] sm:min-h-[360px] lg:min-h-[420px] w-full rounded-xl border border-gray-200/90 bg-white/90
              shadow-[0_18px_45px_rgba(15,23,42,0.12)] overflow-hidden flex flex-col sm:flex-row
              transition-all ease-out hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.18)] hover:border-picture-book-green/60
              animate-in fade-in duration-500"
            >
              <div className="relative sm:w-7/12 lg:w-3/5 h-56 sm:h-auto bg-neutral-900/5">
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
                    <div className="w-8 h-8 border-3 border-picture-book-green/30 border-t-picture-book-green rounded-full animate-spin"></div>
                  </div>
                )}
                <Image
                  src={activeProblem.image}
                  alt={activeProblem.label}
                  fill
                  className={`object-cover transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={activeProblem.id === 'stress'}
                  onLoadingComplete={() => setImageLoading(false)}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-midnight-mirage/10 via-transparent to-picture-book-green/20 group-hover:from-midnight-mirage/5 transition-all duration-300" />
                
                {/* Stat Badge */}
                <div className="absolute bottom-4 left-4 px-4 py-1 rounded-lg bg-white shadow-lg border border-gray-200">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-red-500">{activeProblem.stat}</span>
                    <span className="text-xs text-midnight-mirage/70 uppercase">{activeProblem.statLabel}</span>
                  </div>
                </div>
              </div>

              <div className="sm:w-5/12 lg:w-2/5 p-7 sm:p-8 lg:p-10 flex flex-col justify-between gap-3 sm:gap-4 bg-white/95">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-picture-book-green uppercase mb-1">
                    The Challenge
                  </p>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-midnight-mirage leading-tight">
                    {activeProblem.title}
                  </h3>
                  <div className="h-px w-12 bg-picture-book-green/30 my-2"></div>
                  <p className="text-xs sm:text-sm text-midnight-mirage/80 leading-relaxed sm:leading-relaxed">
                    {activeProblem.description}
                  </p>
                </div>

                {/* Call to Action */}
                <a 
                  href="/learn"
                  className="group/btn inline-flex items-center gap-2 text-sm font-medium text-picture-book-green hover:text-picture-book-green/80 transition-colors duration-200 mt-2"
                >
                  <span>See how we solve this</span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Progress Indicator */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <span className="text-xs text-midnight-mirage/50">Problem</span>
                  <div className="flex gap-1.5">
                    {problems.map((p, idx) => (
                      <div 
                        key={p.id}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          p.id === activeProblem.id 
                            ? 'w-6 bg-picture-book-green' 
                            : 'w-1.5 bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-midnight-mirage/70">
                    {problems.findIndex(p => p.id === activeProblem.id) + 1}/{problems.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}