'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:tthoai.work@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Mở ứng dụng email
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full h-full relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-10 left-10 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl animate-float-gentle" />
        <div className="absolute bottom-10 right-10 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-xl animate-float-gentle" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-cyan-500/3 to-blue-500/3 rounded-full blur-2xl" />
      </div>

      {/* Main Content */}
      <div className="relative h-full overflow-y-auto">
        {/* Mobile: Stack layout with scroll */}
        <div className="lg:hidden">
          <div className="p-4 space-y-6 min-h-full">
            {/* Mobile Header */}
            <div className="text-center pt-4">
              <h2 className="text-2xl font-bold text-white mb-3">
                Let's Work
                <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  Together
                </span>
              </h2>
              <p className="text-white/70 text-sm leading-relaxed max-w-sm mx-auto">
                I'm always open to new opportunities and exciting projects. 
                Let's discuss how we can collaborate!
              </p>
            </div>

            {/* Contact Form - Mobile First */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4 shadow-2xl">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white mb-2">Send Message</h3>
                <p className="text-white/60 text-xs">
                  Fill out the form and click send to open your email app!
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/80 text-xs font-medium mb-1">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name" 
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all text-sm backdrop-blur-sm"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 text-xs font-medium mb-1">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com" 
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all text-sm backdrop-blur-sm"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 text-xs font-medium mb-1">
                    Project Details *
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and requirements..." 
                    rows={4}
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none text-sm backdrop-blur-sm"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-sm"
                >
                  <span className="flex items-center justify-center gap-2">
                    Open Email App
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>

            {/* Contact Info - Mobile */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm mb-3">Contact Information</h4>
              
              {/* Email Card */}
              <div className="group">
                <a 
                  href="mailto:tthoai.work@gmail.com"
                  className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-semibold text-sm">Email</p>
                    <p className="text-blue-300 text-xs break-all">tthoai.work@gmail.com</p>
                  </div>
                </a>
              </div>
              
              {/* Phone Card */}
              <div className="group">
                <a 
                  href="tel:+84335564523"
                  className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/10 cursor-pointer"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-semibold text-sm">Phone</p>
                    <p className="text-green-300 text-xs">+84 335 564 523</p>
                  </div>
                </a>
              </div>
              
              {/* Location Card */}
              <div className="group">
                <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-semibold text-sm">Location</p>
                    <p className="text-purple-300 text-xs">Ho Chi Minh City, Vietnam</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom spacing for mobile */}
            <div className="pb-4"></div>
          </div>
        </div>

        {/* Desktop: Side by side layout */}
        <div className="hidden lg:block p-6 lg:p-8 h-full flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-2 gap-8 items-center">
              
              {/* Left Side - Contact Info */}
              <div className="space-y-6">
                {/* Desktop Header */}
                <div className="space-y-3">
                  <h2 className="text-3xl xl:text-4xl font-bold text-white mb-3">
                    Let's Work
                    <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                      Together
                    </span>
                  </h2>
                  <p className="text-white/70 text-base leading-relaxed">
                    I'm always open to new opportunities and exciting projects. 
                    Let's discuss how we can collaborate!
                  </p>
                </div>
                
                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Email Card */}
                  <div className="group">
                    <a 
                      href="mailto:tthoai.work@gmail.com"
                      className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-white font-semibold text-base">Email</p>
                        <p className="text-blue-300 text-sm break-all">tthoai.work@gmail.com</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  
                  {/* Phone Card */}
                  <div className="group">
                    <a 
                      href="tel:+84335564523"
                      className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/10 cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-white font-semibold text-base">Phone</p>
                        <p className="text-green-300 text-sm">+84 335 564 523</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  
                  {/* Location Card */}
                  <div className="group">
                    <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-white font-semibold text-base">Location</p>
                        <p className="text-purple-300 text-sm">Ho Chi Minh City, Vietnam</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Contact Form */}
              <div>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-2xl">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Send Message</h3>
                    <p className="text-white/60 text-sm">
                      Fill out the form and click send to open your email app!
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/80 text-xs font-medium mb-1">
                          Your Name *
                        </label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name" 
                          className="w-full px-3 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all text-xs lg:text-sm backdrop-blur-sm"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white/80 text-xs font-medium mb-1">
                          Email Address *
                        </label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com" 
                          className="w-full px-3 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all text-xs lg:text-sm backdrop-blur-sm"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white/80 text-xs font-medium mb-1">
                        Project Details *
                      </label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, timeline, and requirements..." 
                        rows={4}
                        className="w-full px-3 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none text-xs lg:text-sm backdrop-blur-sm"
                        required
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full px-4 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-base"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Open Email App
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}