
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { HOBBIES } from '../constants.tsx';
import { motion } from 'motion/react';
import { ArrowLeft, Camera, PenTool } from 'lucide-react';

const HobbyDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const hobby = HOBBIES.find(h => h.name.toLowerCase() === name?.toLowerCase());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!hobby) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pastel-blue">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Hobby not found</h1>
          <Link to="/" className="text-pastel-pink font-bold hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pastel-blue dark:bg-slate-950 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-pastel-pink transition-colors font-medium"
          >
            <ArrowLeft size={20} /> Back
          </button>
          <Link to="/" className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">
            RAJ <span className="text-rose-600 dark:text-pastel-pink">TANVI</span>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm text-pastel-pink">
                {hobby.name === 'Photography' ? <Camera size={24} /> : <PenTool size={24} />}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white">{hobby.name}</h1>
            </div>
            
            <p className="text-2xl text-slate-600 dark:text-slate-400 font-serif italic mb-12 leading-relaxed">
              {hobby.description}
            </p>

            <div className="aspect-video rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
              <img src={hobby.imageUrl} alt={hobby.name} className="w-full h-full object-cover" />
            </div>

            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">The Story</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed whitespace-pre-line">
                {hobby.fullDescription}
              </p>
            </section>

            {hobby.gallery && (
              <section>
                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Visual Journal</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {hobby.gallery.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="rounded-3xl overflow-hidden shadow-xl aspect-square"
                    >
                      <img src={img} alt={`${hobby.name} gallery ${idx}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </motion.div>
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-slate-100 dark:border-slate-900 text-center">
        <Link to="/" className="text-2xl font-black tracking-tighter mb-4 inline-block text-slate-900 dark:text-white">
          RAJ <span className="text-rose-600 dark:text-pastel-pink">TANVI</span>
        </Link>
        <p className="text-slate-500 text-sm">© 2024 RAJ TANVI. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default HobbyDetail;
