'use client';

import Image from "next/image";
import { useState } from "react";
import AboutMe from "./components/aboutme";
import Skills from "./components/skills";
import Projects from "./components/projects";

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'about':
        return <AboutMe />;
        
      case 'experience':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-black text-white/30 mb-4">02</div>
              <h2 className="text-3xl font-black text-white mb-6">EXPERIENCE</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-2 border-white/20 pl-6 pb-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">Mobile Developer</h3>
                    <p className="text-blue-300 font-medium">Rian Soft Company</p>
                  </div>
                  <span className="text-white/60 text-sm">Jul 2023 – Mar 2024</span>
                </div>
                <ul className="space-y-1 text-white/80 text-sm">
                  <li>• Maintained and enhanced existing mobile applications</li>
                  <li>• Developed modular Flutter code in Dart</li>
                  <li>• Set up CI/CD pipelines using Codemagic</li>
                </ul>
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Flutter</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Firebase</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Node.js</span>
                </div>
              </div>
              
              <div className="border-l-2 border-white/20 pl-6 pb-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">Software Developer</h3>
                    <p className="text-blue-300 font-medium">RadX Group</p>
                  </div>
                  <span className="text-white/60 text-sm">Feb 2022 – Jun 2023</span>
                </div>
                <ul className="space-y-1 text-white/80 text-sm">
                  <li>• Developed new features for image editing and video templates</li>
                  <li>• Managed app releases to Google Play and App Store</li>
                  <li>• Built web applications from scratch</li>
                </ul>
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Flutter</span>
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">ReactJS</span>
                  <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs">Web3</span>
                </div>
              </div>
              
              <div className="border-l-2 border-white/20 pl-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">Flutter Developer</h3>
                    <p className="text-blue-300 font-medium">Wowland Group</p>
                  </div>
                  <span className="text-white/60 text-sm">Jan 2021 – Nov 2021</span>
                </div>
                <ul className="space-y-1 text-white/80 text-sm">
                  <li>• Built real estate buying & selling mobile app</li>
                  <li>• Collaborated on design, development, and deployment</li>
                  <li>• Contributed to internal training for interns</li>
                </ul>
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Flutter</span>
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">SQL</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Firebase</span>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'skills':
        return <Skills />;
        
      case 'projects':
        return <Projects />;
        
      case 'contact':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-black text-white/30 mb-4">05</div>
              <h2 className="text-3xl font-black text-white mb-6">CONTACT</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Get In Touch</h3>
                  <p className="text-white/80 text-sm mb-6">
                    I&apos;m always interested in new opportunities and exciting projects. 
                    Let&apos;s discuss how we can work together!
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-300">📧</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-white/60 text-sm">tthoai.work@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-green-300">📱</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-white/60 text-sm">+84 335 564 523</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-purple-300">📍</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-white/60 text-sm">Ho Chi Minh City, Vietnam</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
        
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full backdrop-blur-sm animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-red-500/10 rounded-full backdrop-blur-sm animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-green-400/10 to-teal-500/10 rounded-full backdrop-blur-sm animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full backdrop-blur-sm animate-float"></div>
      </div>

      {/* Main Content Container với kích thước cố định */}
      <div className="relative z-10 h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-6xl h-[80vh]">
          {/* Fixed Size Container với Tab Bar và Content */}
          <div className="backdrop-blur-md bg-white/5 rounded-3xl border border-white/10 shadow-2xl h-full flex flex-col overflow-hidden">
            
            {/* Simple Tab Navigation - Căn trái và bỏ border-bottom */}
            <div className="p-4 flex-shrink-0">
              <div className="flex justify-start gap-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-sm font-medium transition-all duration-300 pb-2 border-b-2 ${
                      activeTab === tab.id 
                        ? 'text-white border-white' 
                        : 'text-white/60 border-transparent hover:text-white/80'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 lg:p-8">
              {renderTabContent()}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
