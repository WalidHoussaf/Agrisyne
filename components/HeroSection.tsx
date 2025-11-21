'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sprout, Cpu, ArrowRight, Star, Tractor, Mouse, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Agricultural landscape"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-3xl mx-auto w-full text-center">
        <div className="flex flex-col items-center justify-center min-h-screen py-8">
          <div className="max-w-2xl mx-auto">
            
            {/* Title */}
            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[5.5rem] font-advent-pro font-regular text-praxeti-white animate-slide-up animate-delay-100 drop-shadow-2xl leading-none mt-2">
              <span className="text-praxeti-white drop-shadow-2xl block -ml-12">
                <span className="font-corinthia text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[11rem] xl:text-[14rem] font-medium uppercase">S</span><span className="font-advent-pro uppercase font-semibold">marter</span>
                <span className="font-corinthia text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[11rem] xl:text-[14rem] font-medium uppercase ml-3">F</span><span className="font-advent-pro uppercase font-medium">arms.</span>
              </span>
              <span className="text-praxeti-white drop-shadow-2xl block -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 whitespace-nowrap -ml-28">
                <span className="font-corinthia text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[11rem] xl:text-[14rem] text-praxeti-white font-regular uppercase">B</span><span className="text-praxeti-white font-advent-pro uppercase font-medium">righter</span>
                <span className="font-corinthia text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[11rem] xl:text-[14rem] text-praxeti-white font-regular uppercase ml-3">T</span><span className="text-praxeti-white font-advent-pro uppercase font-medium">omorrow.</span>
              </span>
            </h1>

            {/* Description */}
            <div className="max-w-xl mx-auto -mt-6">
              <p className="text-xs md:text-sm lg:text-base font-display font-regular text-white/85 animate-slide-up animate-delay-200 drop-shadow-lg leading-relaxed">
                Transform your agricultural operations with real-time IoT monitoring, predictive analytics, 
                and AI-driven insights for maximum crop yield and efficiency.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-slide-up animate-delay-300 mt-6">
              <Link 
                href="/register" 
                className="group inline-flex items-center justify-center btn-primary text-sm px-5 py-3.5 backdrop-blur-sm shadow-2xl font-display font-semibold hover:scale-105 transition-all duration-300 border-2 border-white/40 rounded-md relative overflow-hidden min-w-[160px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                <Sprout className="mr-2 w-4 h-4 group-hover:scale-125 group-hover:rotate-12 group-hover:text-lime-accent transition-all duration-500" />
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/login"
                className="group inline-flex items-center justify-center bg-white/95 text-midnight-mirage border-2 border-white hover:bg-white px-5 py-3.5 text-sm font-display font-semibold transition-all duration-300 hover:shadow-2xl backdrop-blur-sm hover:scale-105 rounded-md relative overflow-hidden min-w-[160px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                <Star className="mr-2 w-4 h-4 group-hover:rotate-180 group-hover:text-nuit-blanche transition-all duration-500" />
                View Live Demo
              </Link>
            </div>

            {/* Feature Highlights */}
            <div className="flex flex-wrap justify-center items-center gap-3 mt-4 animate-slide-up animate-delay-400">
              <div className="flex items-center gap-1.5 text-white/75 backdrop-blur-sm bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
                <Cpu className="w-3 h-3 text-lime-accent" />
                <span className="text-xs font-medium">Real-time IoT</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/75 backdrop-blur-sm bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
                <Sprout className="w-3 h-3 text-lime-accent" />
                <span className="text-xs font-medium">AI Analytics</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/75 backdrop-blur-sm bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
                <Tractor className="w-3 h-3 text-lime-accent" />
                <span className="text-xs font-medium">Smart Farming</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons - Bottom Left */}
      <div className="absolute bottom-20 left-8">
        <div className="relative">
          {/* Vertical accent line */}
          <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-accent/60 via-lime-accent/20 to-transparent"></div>
          
          {/* Social Icons Container */}
          <div className="flex flex-col items-center space-y-4 -ml-2">
          
          {/* GitHub */}
          <div className="group relative z-10">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center transition-all duration-500 group-hover:pl-2"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center 
                          text-white/70 hover:text-white/70 hover:bg-white/10 hover:border-lime-accent/30 
                          transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-lime-accent/10">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </a>
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gradient-to-r from-midnight-mirage/95 to-midnight-mirage/80 backdrop-blur-sm 
                        text-lime-accent/90 text-sm font-medium rounded-md opacity-0 group-hover:opacity-100 
                        transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-picture-book-green/95 rotate-45 -mr-1"></div>
              GitHub
            </div>
          </div>

          {/* LinkedIn */}
          <div className="group relative">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center transition-all duration-500 group-hover:pl-2"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center 
                          text-white/70 hover:text-white/70 hover:bg-white/10 hover:border-lime-accent/30 
                          transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-lime-accent/10">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </a>
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gradient-to-r from-midnight-mirage/95 to-midnight-mirage/80 backdrop-blur-sm 
                        text-lime-accent/90 text-sm font-medium rounded-md opacity-0 group-hover:opacity-100 
                        transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-picture-book-green/95 rotate-45 -mr-1"></div>
              LinkedIn
            </div>
          </div>

          {/* Email */}
          <div className="group relative">
            <a 
              href="mailto:contact@agrisenseai.com" 
              className="w-12 h-12 flex items-center justify-center transition-all duration-500 group-hover:pl-2"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center 
                          text-white/70 hover:text-white/70 hover:bg-white/10 hover:border-lime-accent/30 
                          transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-lime-accent/10">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </a>
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gradient-to-r from-midnight-mirage/95 to-midnight-mirage/80 backdrop-blur-sm 
                        text-lime-accent/90 text-sm font-medium rounded-md opacity-0 group-hover:opacity-100 
                        transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-picture-book-green/95 rotate-45 -mr-1"></div>
              contact@agrisenseai.com
            </div>
          </div>

          {/* Phone */}
          <div className="group relative z-10">
            <a 
              href="tel:+1234567890" 
              className="w-12 h-12 flex items-center justify-center transition-all duration-500 group-hover:pl-2"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center 
                          text-white/70 hover:text-white/70 hover:bg-white/10 hover:border-lime-accent/30 
                          transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-lime-accent/10">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </a>
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gradient-to-r from-midnight-mirage/95 to-midnight-mirage/80 backdrop-blur-sm 
                        text-lime-accent/90 text-sm font-medium rounded-md opacity-0 group-hover:opacity-100 
                        transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-picture-book-green/95 rotate-45 -mr-1"></div>
              +1 (234) 567-890
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Location */}
      <div className="absolute bottom-10 left-12 flex items-center text-white/70 text-sm font-medium">
        <MapPin className="w-4 h-4 mr-2" />
        Morocco
      </div>

      {/* Explore More Animation */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center animate-bounce">
        <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer group">
          <div className="w-6 h-6 rounded-full flex items-center justify-center group-hover:border-white/60 transition-colors">
            <Mouse className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
          </div>
          <span className="text-sm font-medium tracking-wide">Explore More</span>
        </div>
        <div className="mt-2 w-px h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
      </div>
    </section>
  );
}
