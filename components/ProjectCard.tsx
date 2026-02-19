
import React from 'react';
import { Project } from '../types.ts';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onClick={() => navigate(`/project/${project.id}`)}
      className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl ${project.color} p-4 md:p-6 cursor-pointer`}
    >
      <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl mb-6">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
           <div className="bg-white text-slate-900 p-4 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
              <ExternalLink size={24} />
           </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <span className="inline-block px-3 py-1 bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-full text-xs font-bold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
