
import React from 'react';
import { HOBBIES } from '../constants.tsx';
import CreativeSpark from './CreativeSpark.tsx';

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/3 space-y-8 sticky top-24">
            <h2 className="text-4xl md:text-5xl font-bold">Beyond the Canvas</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              When I'm not designing, you'll find me exploring the analog world. These passions fuel my digital creativity and keep my eyes sharp.
            </p>
            
            <div className="space-y-12">
              {HOBBIES.map((hobby, idx) => (
                <div key={idx} className="group">
                  <div className="h-48 overflow-hidden rounded-2xl mb-4 grayscale hover:grayscale-0 transition-all duration-500">
                    <img src={hobby.imageUrl} alt={hobby.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">{hobby.name}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
             <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col justify-end p-12 relative group">
                <img 
                  src="https://picsum.photos/seed/artist/800/1000" 
                  alt="Raj at work" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="relative z-10 text-white">
                  <h3 className="text-3xl font-bold mb-4 font-serif italic">"Design is the silent ambassador of your brand."</h3>
                  <p className="text-emerald-400 font-medium tracking-widest uppercase text-sm">— Paul Rand (My Inspiration)</p>
                </div>
             </div>
             
             {/* Integrated Gemini Feature */}
             <CreativeSpark />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
