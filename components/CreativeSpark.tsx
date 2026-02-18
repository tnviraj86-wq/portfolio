
import React, { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { getCreativeInspiration } from '../services/geminiService.ts';
import { motion, AnimatePresence } from 'motion/react';

const CreativeSpark: React.FC = () => {
  const [inspiration, setInspiration] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await getCreativeInspiration();
    setInspiration(result);
    setLoading(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-pastel-pink via-pastel-purple to-pastel-blue text-slate-900 shadow-2xl overflow-hidden relative border border-white/50"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-rose-400 animate-pulse" />
          <h3 className="text-xl font-bold">The Creative Spark</h3>
        </div>
        <p className="text-slate-600 mb-6 max-w-md">
          Need a project idea or a fresh perspective? Ask my AI muse for a design prompt.
        </p>
        
        <AnimatePresence mode="wait">
          {inspiration && (
            <motion.div 
              key={inspiration}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="mb-6 p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-inner"
            >
              <p className="italic font-serif text-lg text-slate-800 leading-relaxed">"{inspiration}"</p>
            </motion.div>
          )}
        </AnimatePresence>
        
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-rose-500 hover:scale-105 transition-all disabled:opacity-70 shadow-lg"
        >
          {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
          {loading ? 'Consulting Muse...' : (inspiration ? 'New Spark' : 'Ignite Inspiration')}
        </button>
      </div>
      
      {/* Background shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-rose-200/30 rounded-full blur-2xl" />
    </motion.div>
  );
};

export default CreativeSpark;
