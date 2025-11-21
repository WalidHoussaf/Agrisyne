'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { LayoutDashboard, MapPin, Activity, Bell, LogOut, User } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/farms', label: 'Farms', icon: MapPin },
    { href: '/dashboard/sensors', label: 'Sensors', icon: Activity },
    { href: '/dashboard/alerts', label: 'Alerts', icon: Bell },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isVisible ? 'animate-fade-in' : 'opacity-0'
    } ${
      isScrolled 
        ? 'bg-praxeti-white/95 backdrop-blur-md shadow-lg border-b border-mantis/20' 
        : 'bg-praxeti-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/dashboard" className="flex items-center -ml-2">
              <Image 
                src="/logo.png" 
                alt="AgriSenseAI Logo" 
                width={120} 
                height={48}
                className="object-contain"
              />
            </Link>

            <div className="hidden md:ml-8 md:flex md:space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group inline-flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 transform ${
                      isActive
                        ? 'text-picture-book-green bg-mantis/10 border border-mantis/20 shadow-sm'
                        : 'text-midnight-mirage hover:text-picture-book-green hover:bg-mantis/10 hover:shadow-md hover:-translate-y-0.5 hover:scale-105'
                    }`}
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-midnight-mirage">
              <User className="h-5 w-5 text-mantis" />
              <span className="font-medium">{session?.user?.name}</span>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="group inline-flex items-center space-x-2 text-midnight-mirage hover:text-red-500 text-sm font-medium transition-all duration-300 px-3 py-2 rounded-md hover:bg-red-50 hover:shadow-md hover:-translate-y-0.5 transform"
            >
              <LogOut className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
