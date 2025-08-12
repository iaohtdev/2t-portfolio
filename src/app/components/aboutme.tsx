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

  return (
    <div className="w-full h-full flex items-center justify-center px-8 py-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left side - Text content with animations */}
        <div className="space-y-6 animate-slide-in-left">
          <div className="space-y-4">
            <p className="text-xl text-white/70 animate-fade-in-up">Hello, I'm</p>
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