
import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToId = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-4">
          <p className="text-emerald-500 font-medium tracking-[0.3em] uppercase text-sm animate-in fade-in slide-in-from-bottom-2 duration-700 fill-mode-both">
            Communication Designer & Storyteller
          </p>
          <h1 className="text-5xl md:text-8xl font-bold leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both delay-100">
            Raj Tanvi <br />
            <span className="text-slate-400 dark:text-slate-600 font-serif italic font-normal">Based in Gandhinagar</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both delay-200">
            Crafting soulful brand identities, editorial wonders, and illustrations that bridge the gap between tradition and modernism.
          </p>
          
          <div className="pt-8 flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both delay-300">
            <a 
              href="#work" 
              onClick={(e) => scrollToId(e, 'work')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all hover:gap-4 shadow-lg shadow-emerald-500/20"
            >
              Explore My Work <ArrowDownRight size={20} />
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToId(e, 'contact')}
              className="border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 px-8 py-4 rounded-full font-semibold transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 -right-20 -z-10 w-96 h-96 bg-emerald-100/30 dark:bg-emerald-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 -z-10 w-64 h-64 bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
