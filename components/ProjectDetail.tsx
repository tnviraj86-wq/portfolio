
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PROJECTS } from '../constants.tsx';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Tag } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-emerald-500 hover:underline">Return Home</Link>
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
            <ArrowLeft size={20} /> Back to Gallery
          </button>
          <Link to="/" className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">
            RAJ <span className="text-rose-600 dark:text-pastel-pink">TANVI</span>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-pastel-pink dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-slate-900 dark:text-white">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                {project.tags?.map(tag => (
                  <span key={tag} className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm font-medium px-3 py-1 bg-white dark:bg-slate-900 rounded-lg shadow-sm">
                    <Tag size={14} /> {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed"
            >
              {project.description}
            </motion.div>
          </div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className={`rounded-[3rem] overflow-hidden mb-24 shadow-2xl ${project.color} p-4 md:p-8`}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto rounded-[2rem] shadow-lg"
            />
          </motion.div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">The Challenge</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  {project.fullDescription}
                </p>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.gallery?.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="rounded-3xl overflow-hidden shadow-xl"
                  >
                    <img src={img} alt={`${project.title} gallery ${idx}`} className="w-full h-full object-cover aspect-[4/3]" />
                  </motion.div>
                ))}
              </section>
            </div>

            <aside className="space-y-12">
              <div className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Project Details</h3>
                <dl className="space-y-6">
                  <div>
                    <dt className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Client</dt>
                    <dd className="text-slate-900 dark:text-white font-medium">Confidential / Concept</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Role</dt>
                    <dd className="text-slate-900 dark:text-white font-medium">Lead Communication Designer</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Year</dt>
                    <dd className="text-slate-900 dark:text-white font-medium">2023 - 2024</dd>
                  </div>
                </dl>
                <button className="w-full mt-8 bg-slate-900 dark:bg-white text-white dark:text-slate-950 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-pastel-pink dark:hover:bg-rose-400 transition-colors">
                  View Live Project <ExternalLink size={18} />
                </button>
              </div>

              <div className="p-8 rounded-3xl border border-pastel-pink/50 bg-white shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Like this work?</h3>
                <p className="text-slate-600 mb-6">
                  I'm currently open for new projects and collaborations.
                </p>
                <Link to="/#contact" className="text-pastel-pink font-bold hover:underline">
                  Let's talk about yours →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-slate-100 dark:border-slate-900 text-center">
        <Link to="/" className="text-2xl font-black tracking-tighter mb-4 inline-block">
          RAJ <span className="text-pastel-pink">TANVI</span>
        </Link>
        <p className="text-slate-500 text-sm">© 2024 RAJ TANVI. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default ProjectDetail;
