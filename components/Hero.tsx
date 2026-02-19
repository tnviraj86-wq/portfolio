
import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { motion } from 'motion/react';

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
    <section className="relative min-h-[80vh] flex flex-col justify-center px-6 pt-32 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
          {/* Medium-sized, clean portrait profile photo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative shrink-0 group"
          >
            <div className="w-56 h-72 md:w-80 md:h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-slate-100 dark:border-slate-800 transition-all duration-500 group-hover:border-pastel-pink group-hover:shadow-rose-500/20">
              <img 
                src="https://drive.google.com/thumbnail?id=1nqFxMn4APOuzs1M0Fa5yXp2K-QlQeS0G&sz=w1000" 
                alt="Raj Tanvi" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-pastel-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-pastel-pink font-medium tracking-[0.3em] uppercase text-sm"
            >
              Communication Designer & Storyteller
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
            >
              Raj Tanvi <br />
              <span className="text-slate-400 dark:text-slate-600 font-serif italic font-normal">Based in Gandhinagar</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-xl text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed"
            >
              Crafting soulful brand identities, editorial wonders, and illustrations that bridge the gap between tradition and modernism.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-4 flex flex-wrap gap-4"
            >
              <a 
                href="#work" 
                onClick={(e) => scrollToId(e, 'work')}
                className="bg-pastel-pink hover:bg-rose-100 text-slate-900 px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all hover:gap-4 shadow-lg shadow-rose-500/10"
              >
                Explore My Work <ArrowDownRight size={20} />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToId(e, 'contact')}
                className="border border-slate-200 dark:border-slate-800 hover:border-pastel-pink dark:hover:border-pastel-pink px-8 py-4 rounded-full font-semibold transition-all"
              >
                Get In Touch
              </a>
            </motion.div>
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
