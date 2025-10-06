'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Mobile Developer';
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const run = () => {
      const currentLen = typedText.length;

      if (!isDeleting) {
        // Đang gõ
        if (currentLen < fullText.length) {
          setTypedText(fullText.slice(0, currentLen + 1));
          timeout = setTimeout(run, 70);
        } else {
          // Dừng 1.2s rồi chuyển sang xóa
          timeout = setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        // Đang xóa
        if (currentLen > 0) {
          setTypedText(fullText.slice(0, currentLen - 1));
          timeout = setTimeout(run, 40);
        } else {
          // Dừng 0.4s rồi gõ lại
          setIsDeleting(false);
          timeout = setTimeout(run, 400);
        }
      }
    };

    timeout = setTimeout(run, 100);
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, fullText]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/NguyenThanhThoai_CV.pdf';
    link.download = 'NguyenThanhThoai_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full h-full flex items-center justify-center px-8 py-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left side - Text content with animations */}
        <div className="space-y-6 animate-slide-in-left">
          <div className="space-y-4">
         <p className="text-xl text-white/70 animate-fade-in-up">Hello, I&apos;m</p>
            <h1 className="text-7xl font-bold text-white animate-bounce-gentle hover:animate-glow-text transition-all duration-300">
              2T Nguyen
            </h1>

            {/* Typing text with enhanced cursor */}
            <p className="text-2xl text-blue-400 font-medium animate-fade-in-up-delayed">
                {typedText}
                <span className="inline-block w-[3px] h-8 align-middle ml-1 bg-blue-400 animate-pulse-fast"></span>
            </p>
          </div>
          
          <div className="space-y-4 text-white/80 animate-fade-in-up-delayed-2">
            <p className="text-lg leading-relaxed hover:text-white transition-colors duration-300">
              Mobile Developer with <span className="text-blue-400 font-semibold animate-color-shift-blue">many years of experience</span> building 
              mobile applications using <span className="text-purple-400 font-semibold animate-color-shift-purple">Flutter</span>, 
              <span className="text-pink-400 font-semibold animate-color-shift-pink">Android</span> and <span className="text-blue-400 font-semibold animate-color-shift-blue">iOS</span>.
            </p>
            <p className="text-white/70 text-base hover:text-white/90 transition-colors duration-300">
              Collaborative, adaptable, and detail-oriented with strong skills in UI/UX and API integration.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-3 animate-fade-in-up-delayed-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/its-2t-here/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:bg-white/20"
            >
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  fill="#0077B5"
                />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/tthoaiwork"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:bg-white/20"
            >
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  fill="#181717"
                />
              </svg>
            </a>
          </div>

          {/* Download CV Button - Smaller and positioned below social media */}
          <div className="animate-fade-in-up-delayed-4">
            <button
              onClick={handleDownloadCV}
              className="group relative inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-blue-500/20 hover:shadow-lg hover:shadow-blue-500/25"
            >
              {/* Download Icon - smaller */}
              <svg 
                className="w-4 h-4 text-blue-400 transition-all duration-300 group-hover:text-white group-hover:animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              <span className="text-sm group-hover:text-white transition-colors duration-300">Download CV</span>
              
              {/* Subtle glow effect - smaller */}
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Floating icons for tech stack */}
          <div className="flex space-x-4 mt-6">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-float-1"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-float-2"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-float-3"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-float-4"></div>
          </div>
        </div>

        {/* Right side - Avatar with clean border only */}
        <div className="flex justify-center animate-fade-in-up-delayed">
          <div className="relative animate-float-gentle">
            {/* Simple animated gradient border */}
            <div
                className="p-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-border-morph hover:animate-border-pulse transition-all duration-500"
                style={{
                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                }}
            >
                {/* Clean avatar container - no overlay, no blur, no background */}
                <div
                    className="relative w-80 h-80 overflow-hidden transition-all duration-500 hover:scale-105"
                    style={{
                        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                    }}
                >
                    <Image
                        src="/images/avatar_2.jpg"
                        alt="Nguyen Thanh Thoai"
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                        priority
                    />
                    
                    {/* Sparkle effects only */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-sparkle-1"></div>
                    <div className="absolute bottom-8 left-6 w-1 h-1 bg-blue-400 rounded-full animate-sparkle-2"></div>
                    <div className="absolute top-1/3 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-sparkle-3"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}