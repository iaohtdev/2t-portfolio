'use client';

import Image from "next/image";
import { useState } from "react";
import AboutMe from "./components/aboutme";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Contact from './components/contact';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const currentTab = tabs.find(t => t.id === activeTab);

  const handleTabSelect = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'about':
        return <AboutMe />;
        
      case 'experience':
        return <Experience />;
        
      case 'skills':
        return <Skills />;
        
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


      {/* Main Content Container với kích thước responsive */}
      <div className="relative z-10 h-screen flex items-center justify-center p-3 sm:p-6">
        <div className="w-full max-w-6xl h-[92vh] sm:h-[82vh]">
          {/* Fixed Size Container với Tab Bar và Content */}
          <div className="backdrop-blur-md bg-white/5 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl h-full flex flex-col overflow-hidden">
            
            {/* Header Navigation Area */}
            <div className="p-3.5 sm:p-4 flex-shrink-0 border-b border-white/5 relative z-30">
              {/* Desktop Tab Navigation (hidden on mobile) */}
              <div className="hidden md:flex justify-start gap-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-sm font-medium transition-all duration-300 pb-2 border-b-2 cursor-pointer ${
                      activeTab === tab.id 
                        ? 'text-white border-white font-semibold' 
                        : 'text-white/60 border-transparent hover:text-white/80'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Mobile Header Bar with Hamburger Button */}
              <div className="flex md:hidden items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-white/50 font-medium">Tab:</span>
                  <span className="text-sm font-semibold text-white bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    {currentTab?.label || 'Menu'}
                  </span>
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/20 active:scale-95 transition-all duration-200 focus:outline-none"
                  aria-label="Toggle navigation menu"
                >
                  {isMobileMenuOpen ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Mobile Dropdown Menu (Collapsible) */}
              {isMobileMenuOpen && (
                <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-1.5 animate-fade-in bg-black/60 backdrop-blur-2xl p-2.5 rounded-2xl border border-white/15 shadow-2xl">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabSelect(tab.id)}
                      className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                        activeTab === tab.id
                          ? 'bg-white/20 text-white font-semibold border border-white/20 shadow-sm'
                          : 'text-white/70 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{tab.label}</span>
                      {activeTab === tab.id && (
                        <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]"></span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Content Area với scroll */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
