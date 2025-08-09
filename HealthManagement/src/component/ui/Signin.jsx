import React, { useState, useEffect } from 'react';

// Custom SVG Icons to replace lucide-react
const Eye = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const EyeOff = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

const ChevronRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9,18 15,12 9,6"/>
  </svg>
);

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    firstName: 'Fletcher',
    lastName: '',
    email: '',
    password: ''
  });
  const [termsAccepted, setTermsAccepted] = useState(true);

  const carouselItems = [
    {
      title: "Capturing Moments,",
      subtitle: "Creating Memories",
      image: "https://i.pinimg.com/736x/cc/4c/ce/cc4cceb7df8ea4eecb55d3c6d1e4c5c2.jpg"
    },
    {
      title: "Your Mental Health,",
      subtitle: "Our Priority",
      image: "https://i.pinimg.com/1200x/ef/70/3f/ef703f529d1aa8d71f80cb266c5fc259.jpg"
    },
    {
      title: "Healing Journey,",
      subtitle: "Together We Grow",
      image: "https://i.pinimg.com/736x/e3/c3/57/e3c357bfcc040a3654f122ce8d83825b.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen flex bg-gray-900">
      {/* Left Side - Carousel */}
      <div className="flex-1 relative overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.image})`
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            
            {/* Samhit Logo - Top Left */}
            <div className="absolute top-6 left-6 z-10">
              <div className="text-white text-2xl font-bold">Samhit</div>
            </div>

            {/* Back to website button - Top Right */}
            <div className="absolute top-6 right-6 z-10">
              <button className="text-white text-sm flex items-center gap-1 hover:opacity-80 transition-opacity">
                Back to website
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Content - Bottom Left */}
            <div className="absolute bottom-20 left-8 z-10 text-white">
              <h2 className="text-4xl font-bold mb-2 leading-tight">
                {item.title}
              </h2>
              <h3 className="text-4xl font-bold mb-8">
                {item.subtitle}
              </h3>
              
              {/* Carousel indicators */}
              <div className="flex space-x-2">
                {carouselItems.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => goToSlide(dotIndex)}
                    className={`h-1 transition-all duration-300 ${
                      dotIndex === currentSlide ? 'w-8 bg-white' : 'w-4 bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="flex-1 flex items-center justify-center bg-gray-900 px-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Create an account</h1>
            <p className="text-gray-400">
              Already have an account?{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300">Log in</a>
            </p>
          </div>

          <div className="space-y-6">
            {/* Name Fields */}
            <div className="flex space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name"
                  className="w-full px-4 py-3 bg-gray-800 text-gray-400 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-800 text-gray-400 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-gray-800 text-gray-400 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none transition-colors pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
              />
              <label htmlFor="terms" className="ml-3 text-sm text-gray-300">
                I agree to the{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
            >
              Create account
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Or register with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={() => console.log('Google login')}
                className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button
                onClick={() => console.log('Apple login')}
                className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;