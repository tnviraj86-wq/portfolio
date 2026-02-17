
import React from 'react';
import { SKILLS } from '../constants.tsx';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Creative Toolkit</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-lg">
              A blend of technical precision and artistic intuition. These are the tools and disciplines that define my practice.
            </p>
          </div>
          <div className="hidden md:block text-8xl font-black text-slate-100 dark:text-slate-800/50 -mb-4 pointer-events-none">
            SKILLS
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-950 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-emerald-500/50 transition-colors shadow-sm">
              <div className="text-3xl mb-4">{skill.icon}</div>
              <h4 className="font-bold text-lg mb-4">{skill.name}</h4>
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 flex-1 rounded-full ${
                      i < skill.level ? 'bg-emerald-500' : 'bg-slate-100 dark:bg-slate-800'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
