'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Home, BookOpen, Layers, Info, Mail, LogIn, UserPlus, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Fade in animation on page load
    setIsVisible(true);

    // Scroll event listener for background transition
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isVisible ? 'animate-fade-in' : 'opacity-0'
    } ${
      isScrolled 
        ? 'bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-16">
          {/* Logo - Left */}
          <Link href="/" className="absolute -left-24 flex items-center group">
            <Image 
              src="/logo1.png" 
              alt="AgriSenseAI Logo" 
              width={160} 
              height={64}
              className="object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-lg"
            />
          </Link>
          
          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 mt-1">
            {/* Glassmorphism Container */}
            <div className="flex items-center gap-1.5 px-1 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg">
              {/* Home */}
              <Link 
                href="/" 
                className={`group inline-flex items-center gap-2 px-4 py-1.5 font-display font-medium rounded-lg transition-all duration-300 transform ${
                  pathname === '/' 
                    ? 'bg-white text-gray-900 shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 hover:bg-white/95' 
                    : 'text-white hover:text-white/90 hover:bg-white/10 hover:shadow-lg hover:-translate-y-0.5 hover:scale-105'
                }`}
              >
                <span>HOME</span>
                {pathname === '/' && <Home className="w-4 h-4" />}
              </Link>
              
              {/* Services */}
              <Link 
                href="/features" 
                className={`group inline-flex items-center gap-2 px-4 py-1.5 font-display font-medium rounded-lg transition-all duration-300 transform ${
                  pathname === '/features' 
                    ? 'bg-white text-gray-900 shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 hover:bg-white/95' 
                    : 'text-white hover:text-white/90 hover:bg-white/10 hover:shadow-lg hover:-translate-y-0.5 hover:scale-105'
                }`}
              >
                <span>FEATURES</span>
                {pathname === '/features' && <Layers className="w-4 h-4" />}
              </Link>
              
              {/* Product */}
              <Link 
                href="/learn" 
                className={`group inline-flex items-center gap-2 px-4 py-1.5 font-display font-medium rounded-lg transition-all duration-300 transform ${
                  pathname === '/learn' 
                    ? 'bg-white text-gray-900 shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 hover:bg-white/95' 
                    : 'text-white hover:text-white/90 hover:bg-white/10 hover:shadow-lg hover:-translate-y-0.5 hover:scale-105'
                }`}
              >
                <span>LEARN</span>
                {pathname === '/learn' && <BookOpen className="w-4 h-4" />}
              </Link>
              
              {/* About Us */}
              <Link 
                href="/about" 
                className={`group inline-flex items-center gap-2 px-4 py-1.5 font-display font-medium rounded-lg transition-all duration-300 transform ${
                  pathname === '/about' 
                    ? 'bg-white text-gray-900 shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 hover:bg-white/95' 
                    : 'text-white hover:text-white/90 hover:bg-white/10 hover:shadow-lg hover:-translate-y-0.5 hover:scale-105'
                }`}
              >
                <span>ABOUT</span>
                {pathname === '/about' && <Info className="w-4 h-4" />}
              </Link>
              
              {/* Contact */}
              <Link 
                href="/contact" 
                className={`group inline-flex items-center gap-2 px-4 py-1.5 font-display font-medium rounded-lg transition-all duration-300 transform ${
                  pathname === '/contact' 
                    ? 'bg-white text-gray-900 shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 hover:bg-white/95' 
                    : 'text-white hover:text-white/90 hover:bg-white/10 hover:shadow-lg hover:-translate-y-0.5 hover:scale-105'
                }`}
              >
                <span>CONTACT</span>
                {pathname === '/contact' && <Mail className="w-4 h-4" />}
              </Link>
            </div>
          </div>

          {/* Action Buttons - Right */}
          <div className="hidden md:flex items-center space-x-4 absolute -right-24 mt-1">
            <Link
              href="/login"
              className="group inline-flex items-center justify-center bg-transparent text-white border border-white/20 hover:bg-white/10 px-3 py-2.5 text-base font-display font-semibold transition-all duration-300 hover:shadow-xl backdrop-blur-sm hover:scale-[1.02] relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              LOG IN
              <LogIn className="ml-2 w-4 h-4 group-hover:scale-125 group-hover:-translate-y-1 group-hover:text-white transition-all duration-500" />
            </Link>
            <Link 
              href="/register" 
              className="group inline-flex items-center justify-center btn-primary text-base px-3 py-2.5 backdrop-blur-sm shadow-xl font-display font-semibold hover:scale-[1.02] transition-all duration-300 border border-white/20 relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              GET STARTED
              <UserPlus className="ml-2 w-4 h-4 group-hover:scale-110 group-hover:rotate-12 group-hover:text-praxeti-white transition-all duration-500" />
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
