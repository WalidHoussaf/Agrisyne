'use client';

import { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';
import { LogoLoop } from './animations/LogoLoop';

const partnerLogos = [
  {
    src: '/python.png',
    alt: 'Python',
    title: 'Python Software Foundation',
    width: 240,
    height: 120,
    href: 'https://www.python.org/',
  },
  {
    src: '/aws.png',
    alt: 'Amazon Web Services',
    title: 'Amazon Web Services',
    width: 240,
    height: 120,
    href: 'https://aws.amazon.com/',
  },
  {
    src: '/nodejs.png',
    alt: 'Node.js',
    title: 'Node.js Foundation',
    width: 240,
    height: 120,
    href: 'https://nodejs.org/',
  },
  {
    src: '/tensorflow.png',
    alt: 'TensorFlow',
    title: 'TensorFlow',
    width: 240,
    height: 120,
    href: 'https://www.tensorflow.org/',
  },
  {
    src: '/ibm.png',
    alt: 'IBM Research',
    title: 'IBM Research',
    width: 240,
    height: 120,
    href: 'https://research.ibm.com/',
  },
  {
    src: '/google_cloud.png',
    alt: 'Google Cloud',
    title: 'Google Cloud Platform',
    width: 240,
    height: 120,
    href: 'https://cloud.google.com/',
  },
  {
    src: '/intel.png',
    alt: 'Intel',
    title: 'Intel',
    width: 240,
    height: 120,
    href: 'https://www.intel.com/',
  },
  {
    src: '/mqtt.png',
    alt: 'MQTT',
    title: 'MQTT Protocol',
    width: 240,
    height: 120,
    href: 'https://mqtt.org/',
  },
  {
    src: '/arduino.svg',
    alt: 'Arduino',
    title: 'Arduino',
    width: 240,
    height: 120,
    href: 'https://www.arduino.cc/',
  },
  {
    src: '/mongodb.png',
    alt: 'MongoDB',
    title: 'MongoDB',
    width: 240,
    height: 120,
    href: 'https://www.mongodb.com/',
  },
  {
    src: '/nextjs.png',
    alt: 'Next.js',
    title: 'Vercel - Next.js',
    width: 240,
    height: 120,
    href: 'https://nextjs.org/',
  },
  {
    src: '/pytorch.png',
    alt: 'PyTorch',
    title: 'PyTorch',
    width: 240,
    height: 120,
    href: 'https://pytorch.org/',
  },
  {
    src: '/fao.png',
    alt: 'FAO',
    title: 'Food and Agriculture Organization',
    width: 240,
    height: 120,
    href: 'https://www.fao.org/',
  },
];

export default function AcademicCredibilitySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-12 pb-20 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-neutral-50 to-white"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[600px] bg-gradient-to-b from-blue-50/30 to-transparent blur-3xl opacity-40 pointer-events-none"></div>
      {/* Badge */}
      <div
        className={`max-w-5xl mx-auto text-center transform-gpu transition-all duration-700 ease-out delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-100 shadow-[0_2px_10px_rgba(59,130,246,0.1)] mb-6 sm:mb-8">
          <Award className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500">
            ACADEMIC CREDIBILITY
          </span>
        </div>
      </div>

      {/* Title */}
      <div
        className={`max-w-5xl mx-auto text-center transform-gpu transition-all duration-700 ease-out delay-150 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-7xl font-heading font-bold text-midnight-mirage leading-tight mb-4 sm:mb-5 text-center ">
          <span className="gradient-text-blue">Backed by Research</span> & <span className="gradient-text-blue">Modern Technology</span>
        </h2>
      </div>

      {/* Subtitle */}
      <div
        className={`max-w-5xl mx-auto text-center transform-gpu transition-all duration-700 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="text-sm sm:text-base font-medium text-midnight-mirage/70 mb-2">
          An Academic Research Project by Walid Houssaf
        </p>
      </div>

      {/* Paragraph */}
      <div
        className={`max-w-5xl mx-auto text-center transform-gpu transition-all duration-700 ease-out delay-250 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="mt-4 text-xs sm:text-sm text-midnight-mirage/70 max-w-3xl mx-auto leading-relaxed">
          AgriSenseAI is developed as part of a PhD research initiative in predictive analytics, IoT-driven
          monitoring, Big Data processing, and AI-powered recommendations for sustainable agriculture. This platform reflects rigorous
          scientific methodology, modern data pipelines, and real-world field applicability.
        </p>
      </div>

      {/* Tags */}
      <div
        className={`max-w-5xl mx-auto text-center transform-gpu transition-all duration-700 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-50/80 to-teal-50/80 border border-emerald-100/50 shadow-xs hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default">
            <span className="text-[0.6rem] sm:text-[0.65rem] font-medium text-picture-book-green/90 tracking-wide">
              PhD Research Project (2025–2027)
            </span>
          </div>
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100/50 shadow-xs hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default">
            <span className="text-[0.6rem] sm:text-[0.65rem] font-medium text-nuit-blanche/90 tracking-wide">
              Real Field Testing Included
            </span>
          </div>
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-50/80 to-violet-50/80 border border-purple-100/50 shadow-xs hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default">
            <span className="text-[0.6rem] sm:text-[0.65rem] font-medium text-purple-700/80 tracking-wide">
              IoT + AI | Big Data
            </span>
          </div>
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-50/80 to-orange-50/80 border border-amber-100/50 shadow-xs hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default">
            <span className="text-[0.6rem] sm:text-[0.65rem] font-medium text-amber-700/80 tracking-wide">
              Open-Source Modules
            </span>
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <div
        className={`max-w-5xl mx-auto text-center transform-gpu transition-all duration-700 ease-out delay-350 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="mt-12 pt-8 border-t border-gray-200/70">
          <p className="text-[0.65rem] sm:text-[0.7rem] font-semibold tracking-[0.3em] text-midnight-mirage/50 uppercase mb-10">
            Powered by
          </p>
          <div className="max-w-5xl mx-auto">
            <LogoLoop
              logos={partnerLogos}
              speed={90}
              gap={48}
              pauseOnHover
              fadeOut
              className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 ease-out delay-400`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
