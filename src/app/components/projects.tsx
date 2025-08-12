'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: 'EV&U',
      subtitle: 'EV Charging App',
      category: 'Mobile App',
      image: '/images/project_1.png',
      description: 'Ứng dụng sạc xe điện tại Hàn Quốc, cho phép người dùng chọn trạm sạc, kiểm soát thời gian sạc và xem trạm trên bản đồ.',
      technologies: ['Flutter/Dart', 'Provider', 'Node.js', 'TypeScript'],
      link: '#',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 2,
      title: 'MARO APP',
      subtitle: 'Real-time Promotions',
      category: 'Mobile App',
      image: '/images/project_1.png',
      description: 'Ứng dụng khuyến mãi thời gian thực, giúp người dùng tìm khuyến mãi địa phương và hỗ trợ nhà bán lẻ thu hút khách hàng.',
      technologies: ['Flutter', 'GetX', 'Firebase', 'Agora', 'Spring Boot'],
      link: '#',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 3,
      title: '8XLAND',
      subtitle: 'Real Estate Platform',
      category: 'Mobile App',
      image: '/images/project_1.png',
      description: 'Ứng dụng bất động sản, cho phép đăng tin và giao dịch bất động sản (Đã xuất bản trên Google Play & App Store).',
      technologies: ['Flutter', 'GetX', 'Firebase', 'MySQL'],
      link: 'https://play.google.com/store/apps/details?id=com.wowlandGroup',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 4,
      title: 'CineX',
      subtitle: 'Movie Explorer',
      category: 'Mobile App',
      image: '/images/project_1.png',
      description: 'Ứng dụng khám phá phim, cho phép tìm kiếm, đánh giá và đánh dấu phim yêu thích.',
      technologies: ['Flutter', 'Bloc', 'Hive', 'TMDB'],
      link: 'https://github.com/iaohtdev/cinex',
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, projects.length - itemsPerView);

  const scrollToProject = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const newIndex = direction === 'left' 
      ? Math.max(0, currentIndex - 1)
      : Math.min(maxIndex, currentIndex + 1);
    
    setCurrentIndex(newIndex);
    
    const container = scrollContainerRef.current;
    const cardWidth = 288; // w-72 = 288px
    const gap = 24; // gap-6 = 24px
    const scrollPosition = newIndex * (cardWidth + gap);
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < maxIndex;

  return (
    <div className="w-full h-full relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float-simple"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-xl" />
      </div>

      {/* Projects Container */}
      <div className="relative h-full p-6">
        {/* Navigation Buttons */}
        {canScrollLeft && (
          <button
            onClick={() => scrollToProject('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        
        {canScrollRight && (
          <button
            onClick={() => scrollToProject('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Projects Container with Fixed Width */}
        <div className="flex justify-center">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth h-full"
            style={{ 
              width: `${3 * 288 + 2 * 24}px`, // 3 cards * 288px + 2 gaps * 24px = 912px
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-72 h-96 group cursor-pointer perspective-1000"
              >
                {/* Flip Card Container */}
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="relative h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col justify-between p-6">
                        {/* Mobile App Tag - Moved to top */}
                        <div className="flex justify-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.gradient} shadow-lg`}>
                            {project.category}
                          </span>
                        </div>
                        
                        {/* Empty space for image visibility */}
                        <div></div>
                        
                        {/* Project Info - Moved to bottom */}
                        <div className="text-left">
                          <div className="flex items-end justify-between">
                            <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                              <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
                                {project.title}
                              </h3>
                              <p className="text-white/90 text-sm drop-shadow">
                                {project.subtitle}
                              </p>
                            </div>
                            <span className="text-4xl font-bold text-white/30 leading-none ml-4 bg-black/40 backdrop-blur-sm rounded-lg px-2 py-1">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Glow Effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 transition-all duration-700 rounded-2xl blur-sm -z-10`} />
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="relative h-full bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col p-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.gradient} shadow-lg`}>
                            {project.category}
                          </span>
                          <span className="text-lg font-bold text-white/30">#{index + 1}</span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-blue-300 text-sm mb-4 font-medium">
                          {project.subtitle}
                        </p>
                        
                        {/* Description */}
                        <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow">
                          {project.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-white/60 text-xs font-semibold mb-3 uppercase tracking-wider">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/90 backdrop-blur-sm border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Action Button */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r ${project.gradient} text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm`}
                        >
                          <span>Xem Project</span>
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const cardWidth = 288;
                const gap = 24;
                const scrollPosition = index * (cardWidth + gap);
                container.scrollTo({
                  left: scrollPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-blue-400 w-6' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}