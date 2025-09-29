'use client';

import Image from "next/image";
import { useState } from "react";
import AboutMe from "./components/aboutme";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from './components/contact';

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
        return <Experience />;
        
      case 'skills':
        return <Skills />;
        
      case 'projects':
        return <Projects />;
        
      case 'contact':
        return <Contact />;
        
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

            {/* Content Area với scroll */}
            <div className="flex-1 overflow-y-auto p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
