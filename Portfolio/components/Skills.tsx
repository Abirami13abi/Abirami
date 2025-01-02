import React from 'react';
import { Code2, Cpu, CircuitBoardIcon as Circuit, Wrench, PenTool, Users, Brain, Zap, MessageCircle } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft';
  icon: React.ReactNode;
  color: string;
}

export function Skills() {
  const technicalSkills: Skill[] = [
    { 
      name: 'Verilog HDL', 
      level: 85, 
      category: 'technical',
      icon: <Code2 className="w-6 h-6" />,
      color: '#00ff00'
    },
    { 
      name: 'Digital Electronics', 
      level: 90, 
      category: 'technical',
      icon: <Circuit className="w-6 h-6" />,
      color: '#00ffaa'
    },
    { 
      name: 'C Programming', 
      level: 88, 
      category: 'technical',
      icon: <Cpu className="w-6 h-6" />,
      color: '#00ffff'
    },
    { 
      name: 'Embedded Systems', 
      level: 82, 
      category: 'technical',
      icon: <Wrench className="w-6 h-6" />,
      color: '#00aaff'
    },
    { 
      name: 'PCB Design', 
      level: 75, 
      category: 'technical',
      icon: <PenTool className="w-6 h-6" />,
      color: '#0055ff'
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[url('/grid.svg')] bg-fixed">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/95 to-black"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent"
          data-aos="fade-down"
        >
          Skills & Experience
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {technicalSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="relative group bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/50 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-700/50 rounded-lg text-teal-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-500 to-purple-500 transition-all duration-1000 ease-out rounded-full"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-shimmer"></div>
                  </div>
                </div>
                <span className="absolute right-6 top-6 text-2xl font-bold text-teal-400">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

