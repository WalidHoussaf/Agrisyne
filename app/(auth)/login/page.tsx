'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Eye, EyeOff, ArrowRight, Sparkles, User, Lock, AlertCircle, CheckCircle, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Set success message if redirected from signup
  useEffect(() => {
    if (searchParams.get('registered') === 'true') {
      setSuccessMessage('Account created successfully! Please log in with your credentials.');
    }
  }, [searchParams]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setError('');
    setSuccessMessage('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        router.push('/dashboard');
        router.refresh();
      }
    } catch (err: any) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error) setError('');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden p-8">
        {/* Background Image */}
        <Image
          src="/login-bg.jpg"
          alt="Agricultural landscape"
          fill
          sizes="(max-width: 1024px) 0vw, 50vw"
          className="object-cover"
          priority
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between w-full text-white">
          {/* Logo */}
          <div className="group cursor-pointer">
            <Image 
              src="/logo1.png" 
              alt="AgriSenseAI Logo" 
              width={200} 
              height={80} 
              className="object-contain" 
            />
          </div>

          {/* Hero Text */}
          <div className="space-y-6 max-w-xl">
            <div className="group relative inline-flex items-center space-x-2 px-4 py-2 bg-midnight-mirage/50 backdrop-blur-md rounded-full border border-mantis shadow-lg hover:shadow-mantis hover:shadow-2xl hover:bg-midnight-mirage hover:border-mantis transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-midnight-mirage/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700" />
              <Sparkles className="w-4 h-4 text-praxeti-white group-hover:text-praxeti-white transition-all duration-300 relative z-10" />
              <span className="text-sm font-semibold text-praxeti-white tracking-wide group-hover:text-praxeti-white transition-colors duration-300 relative z-10">AI-Powered Agriculture</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-praxeti-white drop-shadow-2xl">Grow Smarter,</span>
              <br />
              <span className="bg-gradient-to-r from-lime-accent via-picture-book-green to-mantis bg-clip-text text-transparent drop-shadow-xl">Harvest Better</span>
            </h1>
            
            <p className="text-xl text-praxeti-white/95 leading-relaxed font-medium max-w-md drop-shadow-md">
              Transform your farm with predictive analytics, real-time monitoring, 
              and AI-driven recommendations for optimal crop yield.
            </p>

            <div className="flex items-center space-x-8 pt-4">
              <div className="group cursor-default">
                <div className="text-5xl font-bold text-praxeti-white drop-shadow-lg group-hover:scale-105 transition-transform">10K+</div>
                <div className="text-mantis text-xl font-bold mt-1">Active Farms</div>
              </div>
              <div className="w-px h-14 bg-white/30" />
              <div className="group cursor-default">
                <div className="text-5xl font-bold text-praxeti-white drop-shadow-lg group-hover:scale-105 transition-transform">98%</div>
                <div className="text-mantis text-xl font-bold mt-1">Satisfaction</div>
              </div>
              <div className="w-px h-14 bg-white/30" />
              <div className="group cursor-default">
                <div className="text-5xl font-bold text-praxeti-white drop-shadow-lg group-hover:scale-105 transition-transform">24/7</div>
                <div className="text-mantis text-xl font-bold mt-1">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Footer Quote */}
          <div className="border-l-4 border-white/30 pl-4">
            <p className="text-praxeti-white/90 text-sm italic">
              &quot;The future of farming is here. Join thousands of farmers optimizing 
              their harvests with data-driven insights.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 bg-praxeti-white">
        <div className="w-full max-w-md">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-nuit-blanche relative overflow-hidden hover:shadow-mantis/20 transition-all duration-300">
            <div>
              <div className="mb-4 text-center">
                <Link href="/" className="inline-flex items-center justify-center mb-3 cursor-pointer hover:opacity-80 transition-opacity">
                  <Image 
                    src="/logo.png" 
                    alt="AgriSenseAI Logo" 
                    width={140} 
                    height={60} 
                    className="object-contain" 
                  />
                </Link>
                
                <h2 className="text-3xl font-bold text-midnight-mirage mb-2">
                  Welcome Back
                </h2>
                <p className="text-sm text-gray-600">
                  Enter your credentials to access your account
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-picture-book-green mb-1 group-hover:text-mantis transition-colors duration-200">
                    Email
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      className="w-full pl-10 pr-4 py-2 bg-gray-50 border-2 border-midnight-mirage rounded-xl text-midnight-mirage placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nuit-blanche/20 focus:border-nuit-blanche hover:border-nuit-blanche transition-all duration-200"
                      placeholder="Enter your email"
                      required
                      autoFocus
                      autoComplete="email"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="group">
                  <label htmlFor="password" className="block text-sm font-semibold text-picture-book-green mb-1 group-hover:text-mantis transition-colors duration-200">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={handlePasswordChange}
                      className="w-full pl-10 pr-4 py-2 bg-gray-50 border-2 border-midnight-mirage rounded-xl text-midnight-mirage placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nuit-blanche/20 focus:border-nuit-blanche hover:border-nuit-blanche transition-all duration-200"
                      placeholder="Enter your password"
                      required
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-mantis transition-colors p-1 rounded-lg hover:bg-gray-100"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-picture-book-green border-midnight-mirage rounded focus:ring-2 focus:ring-mantis transition-all cursor-pointer"
                    />
                    <span className="text-sm text-gray-600 group-hover:text-midnight-mirage transition-colors">
                      Remember me
                    </span>
                  </label>
                  
                  <Link 
                    href="/"
                    className="text-sm font-semibold text-midnight-mirage hover:text-picture-book-green transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Success Message */}
                {successMessage && (
                  <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 text-green-800 px-4 py-3.5 rounded-xl shadow-sm">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <p className="text-sm font-medium flex-1">{successMessage}</p>
                      <button
                        type="button"
                        onClick={() => setSuccessMessage('')}
                        className="flex-shrink-0 text-green-600 hover:text-green-800 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 text-red-800 px-4 py-3.5 rounded-xl shadow-sm">
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-sm font-medium flex-1">{error}</p>
                      <button
                        type="button"
                        onClick={() => setError('')}
                        className="flex-shrink-0 text-red-600 hover:text-red-800 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full bg-midnight-mirage hover:bg-nuit-blanche text-white font-semibold py-3 px-6 rounded-xl border-2 border-mantis hover:border-mantis shadow-lg hover:shadow-2xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 flex items-center justify-center space-x-2 overflow-hidden"
                >
                  <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700" />
                  <span className="relative z-10">{loading ? 'Signing in...' : 'Sign In'}</span>
                  {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />}
                  {loading && (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin relative z-10" />
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-nuit-blanche to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-6 py-1 bg-white text-xs font-bold tracking-widest rounded-full text-midnight-mirage uppercase">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Google Sign In Button */}
              <button
                type="button"
                onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                className="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-white border-2 border-midnight-mirage rounded-xl text-midnight-mirage font-semibold hover:bg-gray-200 hover:border-nuit-blanche hover:shadow-md transition-all duration-200 group"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>Sign in with Google</span>
              </button>

              {/* Sign Up Link */}
              <div className="mt-5 text-center">
                <p className="text-sm text-midnight-mirage">
                  Don&apos;t have an account?{' '}
                  <Link 
                    href="/register"
                    className="font-semibold text-picture-book-green hover:text-mantis transition-colors"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 text-center">
            <p className="text-xs text-picture-book-green">
              © 2025 AgriSenseAI. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-4 mt-2">
              <Link href="/" className="text-xs text-midnight-mirage hover:text-picture-book-green transition-colors">
                Back to Home
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/" className="text-xs text-midnight-mirage hover:text-picture-book-green transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
