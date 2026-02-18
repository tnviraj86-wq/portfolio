
import React, { useState } from 'react';
import Navbar from './Navbar.tsx';
import Hero from './Hero.tsx';
import ProjectCard from './ProjectCard.tsx';
import Hobbies from './Hobbies.tsx';
import { PROJECTS } from '../constants.tsx';
import { Github, Linkedin, Instagram, Mail, ArrowUpRight, Send } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Home: React.FC<HomeProps> = ({ isDark, toggleTheme }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const socialLinks = {
    instagram: "https://www.instagram.com/rajtanvii/",
    linkedin: "https://www.linkedin.com/in/rajtanvi/",
    github: "https://github.com/tnviraj86-wq",
    email: "mailto:hello@rajtanvi.com"
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        
        <section id="work" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Works</h2>
              <div className="h-1.5 w-24 bg-emerald-500 rounded-full" />
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <Hobbies />
        
        <section id="contact" className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-7xl font-bold mb-8">
                  Let's create <br />
                  <span className="text-emerald-400 font-serif italic font-normal">together.</span>
                </h2>
                <p className="text-slate-400 text-xl mb-12 leading-relaxed max-w-lg">
                  Currently available for freelance opportunities and creative collaborations in branding and communication design.
                </p>
                
                <div className="flex items-center gap-6 mb-16">
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-full hover:bg-emerald-400 hover:text-slate-950 transition-all shadow-lg" aria-label="Instagram"><Instagram size={24} /></a>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-full hover:bg-emerald-400 hover:text-slate-950 transition-all shadow-lg" aria-label="LinkedIn"><Linkedin size={24} /></a>
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-full hover:bg-emerald-400 hover:text-slate-950 transition-all shadow-lg" aria-label="GitHub"><Github size={24} /></a>
                  <a href={socialLinks.email} className="p-4 bg-slate-900 rounded-full hover:bg-emerald-400 hover:text-slate-950 transition-all shadow-lg" aria-label="Email"><Mail size={24} /></a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-slate-800 pt-16 text-slate-400">
                  <div>
                    <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Location</h4>
                    <p>Gandhinagar, Gujarat<br />India</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Collaboration</h4>
                    <p>Open to: Branding, Editorial,<br />Typeface Design, Web</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-slate-900/50 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-slate-800 shadow-2xl"
              >
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="Raj Tanvi"
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-colors text-white placeholder:text-slate-700"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="hello@example.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-colors text-white placeholder:text-slate-700"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-colors text-white placeholder:text-slate-700 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-slate-950 hover:bg-emerald-400 px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none group"
                  >
                    {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
                    {!isSubmitting && !submitted && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-[80px]" />
        </section>
      </main>

      <footer className="py-8 px-6 bg-slate-950 text-slate-500 border-t border-slate-900 text-sm font-medium tracking-wider text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 RAJ TANVI. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">INSTAGRAM</a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">RESUME <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
