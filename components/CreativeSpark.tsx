
import React, { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { getCreativeInspiration } from '../services/geminiService';

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
    <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-emerald-500 to-indigo-600 text-white shadow-2xl overflow-hidden relative">
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="animate-pulse" />
          <h3 className="text-xl font-bold">The Creative Spark</h3>
        </div>
        <p className="text-emerald-50 mb-6 max-w-md">
          Need a project idea or a fresh perspective? Ask my AI muse for a design prompt.
        </p>
        
        {inspiration && (
          <div className="mb-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 animate-in zoom-in-95 duration-300">
            <p className="italic font-medium leading-relaxed">"{inspiration}"</p>
          </div>
        )}
        
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors disabled:opacity-70"
        >
          {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
          {loading ? 'Consulting Muse...' : (inspiration ? 'New Spark' : 'Ignite Inspiration')}
        </button>
      </div>
      
      {/* Background shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-emerald-400/20 rounded-full blur-2xl" />
    </div>
  );
};

export default CreativeSpark;
