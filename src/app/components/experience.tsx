'use client';

import { useState } from 'react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  companyDescription: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Mobile Developer",
    company: "Concung.com",
    companyDescription: "Leading e-commerce platform for mother and baby products in Vietnam",
    period: "Jul 2024 – Present",
    description: [
      "Developed software projects on Swift, Android/Flutter platforms",
      "Designed, built and modified modules and features as assigned by department head",
      "Collaborated with cross-functional teams (UI/UX, Backend, QA) to analyze requirements",
      "Wrote clean, maintainable code following coding conventions",
      "Tested, debugged and optimized applications for performance and stability",
      "Participated in code reviews and knowledge sharing with team members"
    ],
    technologies: ["Flutter", "Swift", "Android", "Code Review"]
  },
  {
    id: 2,
    title: "Mobile Developer",
    company: "Rian Soft Company",
    companyDescription: "Software development company specializing in mobile and web solutions",
    period: "Jul 2023 – Mar 2024",
    description: [
      "Maintained and enhanced existing mobile applications",
      "Developed modular Flutter code in Dart",
      "Set up CI/CD pipelines using Codemagic"
    ],
    technologies: ["Flutter", "Firebase", "Node.js", "CI/CD"]
  },
  {
    id: 3,
    title: "Software Developer",
    company: "RadX Group",
    companyDescription: "Technology company focused on digital marketing and creative solutions",
    period: "Feb 2022 – Jun 2023",
    description: [
      "Developed new features for image editing and video templates",
      "Managed app releases to Google Play and App Store",
      "Built web applications from scratch"
    ],
    technologies: ["Flutter", "ReactJS", "Web3", "App Store"]
  },
  {
    id: 4,
    title: "Flutter Developer",
    company: "Wowland Group",
    companyDescription: "Real estate technology company providing innovative property solutions",
    period: "Jan 2021 – Nov 2021",
    description: [
      "Built real estate buying & selling mobile app",
      "Collaborated on design, development, and deployment",
      "Contributed to internal training for interns"
    ],
    technologies: ["Flutter", "SQL", "Firebase"]
  }
];

const techColors: { [key: string]: string } = {
  "Flutter": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Swift": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  "Android": "bg-green-500/20 text-green-300 border-green-500/30",
  "Firebase": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "Node.js": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "ReactJS": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "Web3": "bg-red-500/20 text-red-300 border-red-500/30",
  "SQL": "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  "CI/CD": "bg-pink-500/20 text-pink-300 border-pink-500/30",
  "Code Review": "bg-teal-500/20 text-teal-300 border-teal-500/30",
  "App Store": "bg-gray-500/20 text-gray-300 border-gray-500/30"
};

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<number>(1);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-8 p-4 lg:p-8">
      {/* Left Sidebar - Timeline */}
      <div className="lg:w-1/3 space-y-4">
        {/* Timeline */}
        <div className="relative">
          {/* Enhanced Timeline line with glow effect */}
          <div className="absolute left-6 top-0 bottom-0 w-px">
            {/* Main line */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400/60 via-purple-400/60 via-pink-400/60 to-cyan-400/60"></div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400/30 via-purple-400/30 via-pink-400/30 to-cyan-400/30 blur-sm"></div>
            {/* Animated flowing effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
          
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative pl-16 pb-8 cursor-pointer transition-all duration-500 group ${
                selectedExperience === exp.id ? 'opacity-100' : 'opacity-70 hover:opacity-90'
              }`}
              onClick={() => setSelectedExperience(exp.id)}
            >
              {/* Enhanced Timeline dot */}
              <div className="absolute left-3 top-3">
                {/* Outer glow ring */}
                <div className={`absolute inset-0 w-6 h-6 rounded-full transition-all duration-500 ${
                  selectedExperience === exp.id 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 scale-150 animate-pulse' 
                    : 'bg-white/10 scale-100'
                }`}></div>
                
                {/* Main dot */}
                <div className={`relative w-6 h-6 rounded-full border-2 transition-all duration-500 backdrop-blur-sm ${
                  selectedExperience === exp.id 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 border-white shadow-lg shadow-blue-400/50 scale-110' 
                    : 'bg-white/20 border-white/50 group-hover:bg-white/30 group-hover:border-white/70 group-hover:scale-105'
                }`}>
                  {/* Inner dot */}
                  <div className={`absolute inset-2 rounded-full transition-all duration-500 ${
                    selectedExperience === exp.id 
                      ? 'bg-white' 
                      : 'bg-transparent group-hover:bg-white/30'
                  }`}></div>
                </div>
                
                {/* Connection line to card */}
                <div className={`absolute left-6 top-3 w-4 h-px transition-all duration-500 ${
                  selectedExperience === exp.id 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
                    : 'bg-white/30 group-hover:bg-white/50'
                }`}></div>
              </div>

              {/* Enhanced Content Card */}
              <div className={`p-5 rounded-2xl backdrop-blur-md transition-all duration-500 border ${
                selectedExperience === exp.id 
                  ? 'bg-gradient-to-br from-white/15 to-white/5 border-white/30 shadow-xl shadow-blue-500/10 transform scale-105' 
                  : 'bg-white/8 border-white/15 hover:bg-white/12 hover:border-white/25 hover:shadow-lg hover:shadow-white/5'
              }`}>
                <div className="mb-3">
                  <h3 className={`text-lg font-bold transition-all duration-300 ${
                    selectedExperience === exp.id 
                      ? 'text-white' 
                      : 'text-white/90 group-hover:text-blue-300'
                  }`}>
                    {exp.title}
                  </h3>
                  <p className={`font-medium text-sm transition-all duration-300 ${
                    selectedExperience === exp.id 
                      ? 'text-blue-300' 
                      : 'text-blue-300/80 group-hover:text-blue-300'
                  }`}>
                    {exp.company}
                  </p>
                  <p className="text-white/60 text-xs mt-1 leading-relaxed">
                    {exp.companyDescription}
                  </p>
                </div>
                <div className={`text-sm font-medium px-3 py-1 rounded-lg inline-block transition-all duration-300 ${
                  selectedExperience === exp.id 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-white/20' 
                    : 'bg-white/10 text-white/70 group-hover:bg-white/15 group-hover:text-white/90'
                }`}>
                  {exp.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content - Details */}
      <div className="lg:w-2/3 lg:pl-8">
        {experiences
          .filter(exp => exp.id === selectedExperience)
          .map(exp => (
            <div key={exp.id} className="space-y-6 animate-fade-in">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <div>
                      <p className="text-xl text-blue-300 font-medium">{exp.company}</p>
                      <p className="text-white/70 text-sm mt-1 leading-relaxed">{exp.companyDescription}</p>
                    </div>
                  </div>
                  <div className="text-white/70 font-medium bg-white/5 px-4 py-2 rounded-lg border border-white/10 flex-shrink-0">
                    {exp.period}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 ${
                        techColors[tech] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white/90">Key Responsibilities</h4>
                <div className="grid gap-3">
                  {exp.description.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/8 transition-all duration-300 group"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-blue-300 transition-colors"></div>
                      <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Successfully Completed</p>
                    <p className="text-white/60 text-sm">
                      Delivered high-quality software solutions on time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}