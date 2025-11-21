import { useState } from 'react';
import Link from 'next/link';

// Icon Components
const MapPin = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path d="M12 22s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const Activity = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path d="M3 17l6-6 4 4 8-8"/>
  </svg>
);

const BarChart = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path d="M4 20v-8M10 20v-4M16 20v-12"/>
    <path d="M3 20h18"/>
  </svg>
);

const Bell = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path d="M12 3a6 6 0 016 6v3.5l1.2 2.3H4.8L6 12.5V9a6 6 0 016-6z"/>
    <path d="M10 20a2 2 0 004 0"/>
  </svg>
);

const Cloud = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path d="M6 18a4 4 0 010-8 6 6 0 1111.5 2H18a4 4 0 010 8H6z"/>
  </svg>
);

const Shield = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z"/>
    <path d="M9.5 12.5l2 2 3.5-4"/>
  </svg>
);

const Star = () => (
  <svg className="w-4 h-4 text-lime-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.2 6.5 7.1 1-5.1 5 1.2 7-6.4-3.5L5.6 21l1.2-7-5.1-5 7.1-1L12 2z"/>
  </svg>
);

export default function FeaturesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const features = [
    {
      icon: <MapPin />,
      title: 'Interactive Farm Mapping',
      description:
        'Transform your agricultural operations with our advanced GPS-powered mapping system. Create detailed field maps, define management zones, and track crop rotation schedules. Our intuitive interface allows you to visualize your entire operation at a glance, making it easier to make data-driven decisions and optimize your land use.',
      color: 'from-blue-500 to-blue-600',
      image: '/feature1.jpg',
    },
    {
      icon: <Activity />,
      title: 'Real-time IoT Monitoring',
      description:
        'Stay connected to your fields 24/7 with our comprehensive IoT sensor network. Monitor soil moisture, temperature, humidity, pH levels, and nutrient content in real-time. Receive instant alerts for critical conditions and access historical data to identify trends and patterns for better crop management.',
      color: 'from-green-500 to-green-600',
      image: '/feature2.jpg',
    },
    {
      icon: <BarChart />,
      title: 'Predictive Analytics',
      description:
        'Leverage the power of artificial intelligence to predict crop yields, detect early signs of disease, and determine optimal harvest windows. Our advanced algorithms analyze multiple data points including weather patterns, soil conditions, and historical performance to provide actionable insights that maximize your farm\'s productivity.',
      color: 'from-purple-500 to-purple-600',
      image: '/feature3.jpg',
    },
    {
      icon: <Bell />,
      title: 'Smart Alerts',
      description:
        'Never miss a critical event with our intelligent notification system. Get instant alerts for weather warnings, equipment malfunctions, pest infestations, and other important events. Customize notification preferences to receive updates via email, SMS, or in-app notifications based on your specific needs and priorities.',
      color: 'from-orange-500 to-orange-600',
      image: '/feature4.jpg',
    },
    {
      icon: <Cloud />,
      title: 'Weather Integration',
      description:
        'Make informed decisions with hyper-local weather forecasts and historical climate data. Our system integrates with multiple weather services to provide accurate, field-specific forecasts. Plan irrigation, planting, and harvesting activities with confidence using real-time weather insights tailored to your exact location.',
      color: 'from-cyan-500 to-cyan-600',
      image: '/feature5.jpg',
    },
    {
      icon: <Shield />,
      title: 'Secure & Reliable',
      description:
        'Rest easy knowing your farm data is protected by enterprise-grade security measures. Our platform offers 99.9% uptime, automatic daily backups, and end-to-end encryption. Your data remains private and secure, accessible only to authorized users with appropriate permissions, ensuring complete peace of mind.',
      color: 'from-red-500 to-red-600',
      image: '/feature6.jpg',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Title and Description */}
          <div className="lg:w-4/12">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-lime-600 bg-lime-100 rounded-full mb-4">
                <Star />
                <span>PLATFORM FEATURES</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.3] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-midnight-mirage to-nuit-blanche pb-1">
                Designed for Precision Agriculture
              </h2>
              <p className="text-gray-600 text-lg md:text-base leading-relaxed">
                A comprehensive suite of intelligent tools that transforms raw sensor data into actionable insights. Monitor, analyze, and optimize every aspect of your farming operations with real-time decision support that drives productivity and sustainability.
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center gap-2 mt-8">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-8 bg-lime-500' : 'w-4 bg-gray-200'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Carousel */}
          <div className="lg:w-8/12 relative overflow-visible -right-24 -bottom-16">
            <div className="relative w-full">
              <div className="relative h-[420px] w-full">
                {features.map((feature, index) => {
                  const isActive = index === currentSlide;
                  const isNext = index === currentSlide + 1;
                  
                  return (
                    <div
                      key={feature.title}
                      className={`absolute top-0 w-[95%] h-full transition-all duration-500 ease-in-out bg-white rounded-2xl shadow-lg ${
                        isActive 
                          ? 'left-0 z-20 scale-100 opacity-100' 
                          : isNext
                            ? 'left-[75%] z-10 scale-95 opacity-50 cursor-pointer hover:opacity-70'
                            : 'left-[-100%] z-0 scale-90 opacity-0 pointer-events-none'
                      }`}
                      onClick={() => isNext && setCurrentSlide(index)}
                    >
                      <div className="h-full flex flex-row">
                        {/* Image Section - Left Side */}
                        <div className="w-1/2 bg-gray-100 rounded-l-2xl overflow-hidden">
                          <div 
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${feature.image})` }}
                          ></div>
                        </div>
                        
                        {/* Content Section - Right Side */}
                        <div className="w-1/2 p-6 flex flex-col overflow-hidden">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${feature.color} text-white shadow-md`}>
                              {feature.icon}
                            </div>
                            <span className="text-xs font-medium text-gray-400">
                              {index + 1} / {features.length}
                            </span>
                          </div>

                          <h3 className="text-3xl font-bold text-gray-900 mb-2">
                            {feature.title}
                          </h3>
                          
                          <p className="text-gray-600 text-xs text-justify leading-relaxed mb-4 overflow-y-auto max-h-[160px] pr-2">
                            {feature.description}
                          </p>
                          
                          <div className="mt-auto pt-3 border-t border-gray-100">
                            <Link href="/features" className="inline-flex items-center text-lime-600 text-sm font-medium hover:text-lime-700 transition-colors w-fit">
                              Learn more
                              <svg 
                                className="w-3.5 h-3.5 ml-1.5" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-end gap-4 mt-8">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white hover:bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label="Previous feature"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-lime-500 hover:bg-lime-600 text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
                  aria-label="Next feature"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}