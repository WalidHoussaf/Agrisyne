'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Eye, EyeOff, ArrowRight, Sparkles, User, Mail, Lock, AlertCircle, X, Check, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  // Password validation requirements
  const passwordRequirements = {
    minLength: formData.password.length >= 8,
    hasUppercase: /[A-Z]/.test(formData.password),
    hasLowercase: /[a-z]/.test(formData.password),
    hasNumber: /[0-9]/.test(formData.password),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
  };

  const passwordStrength = Object.values(passwordRequirements).filter(Boolean).length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all required fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Password validation
    if (!passwordRequirements.minLength) {
      setError('Password must be at least 8 characters');
      return;
    }

    if (!passwordRequirements.hasUppercase) {
      setError('Password must contain at least one uppercase letter');
      return;
    }

    if (!passwordRequirements.hasLowercase) {
      setError('Password must contain at least one lowercase letter');
      return;
    }

    if (!passwordRequirements.hasNumber) {
      setError('Password must contain at least one number');
      return;
    }

    if (!passwordRequirements.hasSpecial) {
      setError('Password must contain at least one special character');
      return;
    }

    if (!agreeToTerms) {
      setError('Please agree to the Terms and Conditions');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Registration failed');
      } else {
        router.push('/login?registered=true');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
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
            <Image src="/logo1.png" alt="AgriSenseAI Logo" width={200} height={80} className="object-contain" />
          </div>

          {/* Hero Text */}
          <div className="space-y-6 max-w-xl">
            <div className="group relative inline-flex items-center space-x-2 px-4 py-2 bg-midnight-mirage/50 backdrop-blur-md rounded-full border border-mantis shadow-lg hover:shadow-mantis hover:shadow-2xl hover:bg-midnight-mirage hover:border-mantis transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-midnight-mirage/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700" />
              <Sparkles className="w-4 h-4 text-praxeti-white group-hover:text-praxeti-white transition-all duration-300 relative z-10" />
              <span className="text-sm font-semibold text-praxeti-white tracking-wide group-hover:text-praxeti-white transition-colors duration-300 relative z-10">Join the Revolution</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-praxeti-white drop-shadow-2xl">Start Your</span>
              <br />
              <span className="bg-gradient-to-r from-lime-accent to-mantis bg-clip-text text-transparent drop-shadow-xl">Smart Farming Journey</span>
            </h1>

            <p className="text-xl text-praxeti-white/95 leading-relaxed font-medium max-w-md drop-shadow-md">
              Join thousands of farmers who are already using AI-powered insights to maximize yields and optimize their farming operations.
            </p>

            <div className="flex items-center space-x-8 pt-4">
              <div className="group cursor-default">
                <div className="text-5xl font-bold text-praxeti-white drop-shadow-lg group-hover:scale-105 transition-transform">Free</div>
                <div className="text-mantis text-xl font-bold mt-1">30-Day Trial</div>
              </div>
              <div className="w-px h-14 bg-white/30" />
              <div className="group cursor-default">
                <div className="text-5xl font-bold text-praxeti-white drop-shadow-lg group-hover:scale-105 transition-transform">24/7</div>
                <div className="text-mantis text-xl font-bold mt-1">Support</div>
              </div>
              <div className="w-px h-14 bg-white/30" />
              <div className="group cursor-default">
                <div className="text-5xl font-bold text-praxeti-white drop-shadow-lg group-hover:scale-105 transition-transform">Easy</div>
                <div className="text-mantis text-xl font-bold mt-1">Setup</div>
              </div>
            </div>
          </div>

          {/* Footer Quote */}
          <div className="border-l-4 border-white/30 pl-4">
            <p className="text-praxeti-white/90 text-sm italic">
              &quot;Get started in minutes and see immediate improvements in your farm management with our intuitive AI platform.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 bg-praxeti-white">
        <div className="w-full max-w-lg">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-nuit-blanche relative overflow-hidden hover:shadow-mantis/20 transition-all duration-300">
            <div>
              <div className="mb-4 text-center">
                <Link href="/" className="inline-flex items-center justify-center mb-3 cursor-pointer hover:opacity-80 transition-opacity">
                  <Image src="/logo.png" alt="AgriSenseAI Logo" width={140} height={60} className="object-contain" />
                </Link>

                <h2 className="text-3xl font-bold text-midnight-mirage mb-2">Create Account</h2>
                <p className="text-sm text-gray-600">Join thousands of farmers using AI-powered insights</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Full Name & Phone */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Full Name Input */}
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-picture-book-green mb-1 group-hover:text-mantis transition-colors duration-200">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border-2 border-midnight-mirage rounded-xl text-midnight-mirage placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nuit-blanche/20 focus:border-nuit-blanche hover:border-nuit-blanche transition-all duration-200"
                        placeholder="Your name"
                        required
                        autoFocus
                        minLength={2}
                        maxLength={50}
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-semibold text-picture-book-green mb-1 group-hover:text-mantis transition-colors duration-200">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border-2 border-midnight-mirage rounded-xl text-midnight-mirage placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nuit-blanche/20 focus:border-nuit-blanche hover:border-nuit-blanche transition-all duration-200"
                        placeholder="Phone number"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Email Input - Full Width */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-picture-book-green mb-1 group-hover:text-mantis transition-colors duration-200">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border-2 border-midnight-mirage rounded-xl text-midnight-mirage placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nuit-blanche/20 focus:border-nuit-blanche hover:border-nuit-blanche transition-all duration-200"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Password & Confirm Password */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Password Input */}
                  <div className="group">
                    <label htmlFor="password" className="block text-sm font-semibold text-picture-book-green mb-1 group-hover:text-mantis transition-colors duration-200">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(false)}
                        className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border-2 border-midnight-mirage rounded-xl text-midnight-mirage placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nuit-blanche/20 focus:border-nuit-blanche hover:border-nuit-blanche transition-all duration-200"
                        placeholder="Strong password"
                        required
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

                  {/* Confirm Password Input */}
                  <div className="group">
                    <label htmlFor="confirmPassword" className="block text-sm font-semibold text-picture-book-green mb-1 group-hover:text-mantis transition-colors duration-200">
                      Confirm
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border-2 border-midnight-mirage rounded-xl text-midnight-mirage placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nuit-blanche/20 focus:border-nuit-blanche hover:border-nuit-blanche transition-all duration-200"
                        placeholder="Confirm password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-mantis transition-colors p-1 rounded-lg hover:bg-gray-100"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Password Strength Indicator & Requirements */}
                {(passwordFocused || formData.password.length > 0) && (
                  <div className="space-y-3 animate-slide-up">
                    {/* Strength Bar */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-gray-600">Password Strength</span>
                        <span
                          className="text-xs font-semibold"
                          style={{
                            color: passwordStrength === 5 ? '#00693C' : passwordStrength >= 3 ? '#ca8a04' : '#dc2626',
                          }}
                        >
                          {passwordStrength === 5 ? 'Strong' : passwordStrength >= 3 ? 'Medium' : 'Weak'}
                        </span>
                      </div>
                      <div className="flex gap-1.5">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className="h-1.5 flex-1 rounded-full transition-all duration-300"
                            style={{
                              backgroundColor:
                                level <= passwordStrength
                                  ? passwordStrength === 5
                                    ? '#00693C'
                                    : passwordStrength >= 3
                                    ? '#ca8a04'
                                    : '#dc2626'
                                  : '#e5e7eb',
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Requirements Checklist */}
                    <div className="bg-gray-50 border border-midnight-mirage rounded-xl p-3 space-y-1.5">
                      <p className="text-xs font-semibold text-picture-book-green mb-2">Password must contain:</p>

                      <div className="flex items-center space-x-2">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-200"
                          style={{
                            backgroundColor: passwordRequirements.minLength ? '#00693C' : '#d1d5db',
                          }}
                        >
                          {passwordRequirements.minLength && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span
                          className="text-xs"
                          style={{
                            color: passwordRequirements.minLength ? '#005430' : '#1a1a1a',
                            fontWeight: passwordRequirements.minLength ? '500' : '400',
                          }}
                        >
                          At least 8 characters
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-200"
                          style={{
                            backgroundColor: passwordRequirements.hasUppercase ? '#00693C' : '#d1d5db',
                          }}
                        >
                          {passwordRequirements.hasUppercase && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span
                          className="text-xs"
                          style={{
                            color: passwordRequirements.hasUppercase ? '#005430' : '#1a1a1a',
                            fontWeight: passwordRequirements.hasUppercase ? '500' : '400',
                          }}
                        >
                          One uppercase letter (A-Z)
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-200"
                          style={{
                            backgroundColor: passwordRequirements.hasLowercase ? '#00693C' : '#d1d5db',
                          }}
                        >
                          {passwordRequirements.hasLowercase && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span
                          className="text-xs"
                          style={{
                            color: passwordRequirements.hasLowercase ? '#005430' : '#1a1a1a',
                            fontWeight: passwordRequirements.hasLowercase ? '500' : '400',
                          }}
                        >
                          One lowercase letter (a-z)
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-200"
                          style={{
                            backgroundColor: passwordRequirements.hasNumber ? '#00693C' : '#d1d5db',
                          }}
                        >
                          {passwordRequirements.hasNumber && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span
                          className="text-xs"
                          style={{
                            color: passwordRequirements.hasNumber ? '#005430' : '#1a1a1a',
                            fontWeight: passwordRequirements.hasNumber ? '500' : '400',
                          }}
                        >
                          One number (0-9)
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-200"
                          style={{
                            backgroundColor: passwordRequirements.hasSpecial ? '#00693C' : '#d1d5db',
                          }}
                        >
                          {passwordRequirements.hasSpecial && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span
                          className="text-xs"
                          style={{
                            color: passwordRequirements.hasSpecial ? '#005430' : '#1a1a1a',
                            fontWeight: passwordRequirements.hasSpecial ? '500' : '400',
                          }}
                        >
                          One special character (!@#$%^&*...)
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="w-4 h-4 mt-0.5 text-primary-600 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 transition-all cursor-pointer"
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-gray-600 cursor-pointer leading-relaxed">
                    I agree to the{' '}
                    <Link href="/" className="font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                      Terms
                    </Link>
                    {' '}and{' '}
                    <Link href="/" className="font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

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
                  <span className="relative z-10">{loading ? 'Creating Account...' : 'Create Account'}</span>
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

              {/* Google Sign Up Button */}
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
                <span>Sign up with Google</span>
              </button>

              {/* Sign In Link */}
              <div className="mt-5 text-center">
                <p className="text-sm text-midnight-mirage">
                  Already have an account?{' '}
                  <Link href="/login" className="font-semibold text-picture-book-green hover:text-mantis transition-colors">
                    Sign In
                  </Link>
                  {' '}or{' '}
                  <Link href="/" className="font-semibold text-picture-book-green hover:text-mantis transition-colors">
                    Back to home
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
