'use client';

import { useState, useEffect } from 'react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      title: 'Cross-Platform Mobile Development',
      skills: ['Flutter', 'React Native'],
      gradient: 'from-blue-500 to-cyan-600',
      icon: '📱',
      description: '4+ years experience'
    },
    {
      title: 'Native Environment',
      skills: ['Android Kotlin', 'Swift'],
      gradient: 'from-green-500 to-emerald-600',
      icon: '📲',
      description: 'Native mobile development'
    },
    {
      title: 'Third-Party Libraries',
      skills: ['Google Service', 'Agora', 'Payment SDKs', 'Maps & Location'],
      gradient: 'from-purple-500 to-violet-600',
      icon: '🔌',
      description: 'External integrations'
    },
    {
      title: 'Database',
      skills: ['Hive', 'SQL, SQLite', 'MongoDB', 'Firebase (Firestore, Authentication, Push Notifications, Cloud Functions, Realtime Message)'],
      gradient: 'from-orange-500 to-red-600',
      icon: '🗄️',
      description: 'Data management'
    },
    {
      title: 'State Management',
      skills: ['Bloc', 'Cubit', 'Provider', 'GetX'],
      gradient: 'from-indigo-500 to-blue-600',
      icon: '🧩',
      description: 'Flutter patterns'
    },
    {
      title: 'App Deployment',
      skills: ['CH Play', 'App Store', 'CI/CD Setup', 'Release Management'],
      gradient: 'from-pink-500 to-rose-600',
      icon: '🚀',
      description: 'Publishing & distribution'
    },
    {
      title: 'Software Architecture',
      skills: ['Clean Architecture', 'OOP', 'MVC', 'MVVM'],
      gradient: 'from-teal-500 to-cyan-600',
      icon: '🏗️',
      description: 'Design patterns'
    },
    {
      title: 'API Integration',
      skills: ['HTTP', 'RESTful API', 'Dio', 'Sockets', 'Pusher'],
      gradient: 'from-amber-500 to-orange-600',
      icon: '🌐',
      description: 'Backend communication'
    },
    {
      title: 'Version Control & Agile',
      skills: ['Git', 'Scrum', 'SVN', 'Jira', 'Trello'],
      gradient: 'from-red-500 to-pink-600',
      icon: '🔄',
      description: 'Development workflow'
    },
    {
      title: 'UI/UX Design',
      skills: ['Figma', 'Material Design', 'Cupertino Design', 'Responsive UI'],
      gradient: 'from-violet-500 to-purple-600',
      icon: '🎨',
      description: 'Design & prototyping'
    },
    {
      title: 'Project Management',
      skills: ['Task Division', 'Team Coordination', 'CI/CD Setup', 'Quality Assurance'],
      gradient: 'from-emerald-500 to-teal-600',
      icon: '📋',
      description: 'Leadership & coordination'
    }
  ];

  return (
    <div className="w-full h-full relative">
      {/* Simplified Background Elements - Reduced quantity for better performance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Reduced Background Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float-simple"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        
        {/* Simplified Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-xl" />
      </div>

      {/* Scrollable Content */}
      <div className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/30 transition-colors p-4">
        <div className={`max-w-7xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Skills Grid - Optimized Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 pb-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/10 
                  hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1
                  hover:shadow-lg hover:shadow-white/10 min-h-[200px] lg:min-h-[240px]
                  ${hoveredSkill === category.title ? 'ring-1 ring-white/20' : ''}`}
                onMouseEnter={() => setHoveredSkill(category.title)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Simplified Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
                
                {/* Header */}
                <div className="relative z-10 flex items-start gap-3 mb-3 lg:mb-4">
                  <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center text-lg lg:text-xl 
                    transform transition-transform duration-300 group-hover:scale-110 flex-shrink-0`}>
                    {category.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-sm lg:text-base leading-tight">{category.title}</h3>
                    <p className="text-white/50 text-xs lg:text-sm mt-1">{category.description}</p>
                  </div>
                </div>
                
                {/* Skills List */}
                <div className="relative z-10 space-y-2 lg:space-y-2.5">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="flex items-start gap-2 lg:gap-3 text-xs lg:text-sm">
                      <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gradient-to-r ${category.gradient} rounded-full mt-1.5 flex-shrink-0`}></div>
                      <span className="text-white/80 group-hover:text-white transition-colors duration-300 leading-relaxed">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}