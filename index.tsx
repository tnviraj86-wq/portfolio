
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ArrowUpRight, 
  Send, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ExternalLink, 
  Sparkles, 
  Loader2, 
  ArrowDownRight 
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// --- TYPES ---
interface Project {
  id: string;
  title: string;
  category: 'Branding' | 'Print' | 'Illustration';
  description: string;
  image: string;
  color: string;
}

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface Hobby {
  name: string;
  description: string;
  imageUrl: string;
}

// --- CONSTANTS ---
const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ethos Organic Branding',
    category: 'Branding',
    description: 'A complete visual identity for a sustainable skincare brand focused on Himalayan botanicals.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop',
    color: 'bg-emerald-100 dark:bg-emerald-900/20'
  },
  {
    id: '2',
    title: 'The Modern Minimalist',
    category: 'Print',
    description: 'Editorial layout design for a monthly architecture and interior design magazine.',
    image: 'https://images.unsplash.com/photo-1544476073-22e5d5abb167?q=80&w=800&auto=format&fit=crop',
    color: 'bg-indigo-100 dark:bg-indigo-900/20'
  },
  {
    id: '3',
    title: 'City Rhythms Series',
    category: 'Illustration',
    description: 'A series of vector illustrations capturing the vibrant street life of Ahmedabad and Gandhinagar.',
    image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=800&auto=format&fit=crop',
    color: 'bg-orange-100 dark:bg-orange-900/20'
  },
  {
    id: '4',
    title: 'Lunar Cafe Identity',
    category: 'Branding',
    description: 'Dark-themed branding for a late-night coffee house, featuring custom typography.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
    color: 'bg-slate-100 dark:bg-slate-800/20'
  },
  {
    id: '5',
    title: 'Type & Form Specimen',
    category: 'Print',
    description: 'A large-format poster exploring the geometric structures of modern Sanskrit typefaces.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop',
    color: 'bg-rose-100 dark:bg-rose-900/20'
  },
  {
    id: '6',
    title: 'Botanical Dreams',
    category: 'Illustration',
    description: 'Surrealist digital illustrations blending human forms with local flora.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop',
    color: 'bg-teal-100 dark:bg-teal-900/20'
  }
];

const SKILLS: Skill[] = [
  { name: 'Adobe Illustrator', level: 5, icon: '🎨' },
  { name: 'Adobe InDesign', level: 4, icon: '📖' },
  { name: 'Adobe Photoshop', level: 4, icon: '📸' },
  { name: 'Figma', level: 5, icon: '❖' },
  { name: 'Typography', level: 5, icon: 'Aa' },
  { name: 'Color Theory', level: 4, icon: '🌈' },
  { name: 'Editorial Design', level: 5, icon: '📰' },
  { name: 'Branding', level: 5, icon: '🏷️' }
];

const HOBBIES: Hobby[] = [
  {
    name: 'Sketching',
    description: 'I find peace in charcoal and ink. Sketching allows me to observe the world in slow motion.',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Photography',
    description: 'Capturing the interplay of light and shadow in the brutalist architecture of Gandhinagar.',
    imageUrl: 'https://images.unsplash.com/photo-1452784444945-3f422708fe5e?q=80&w=400&auto=format&fit=crop'
  }
];

// --- GEMINI SERVICE ---
const getCreativeInspiration = async (): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) return "Design something that tells a story through color and negative space.";
    
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Generate a unique, one-sentence creative design prompt for a student portfolio. Focus on communication design or branding.",
    });
    return response.text || "Design something that tells a story through color and negative space.";
  } catch (error) {
    return "The best designs are yet to be imagined. Keep creating.";
  }
};

// --- COMPONENTS ---

const ThemeToggle = ({ isDark, toggle }: { isDark: boolean; toggle: () => void }) => (
  <button
    onClick={toggle}
    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-110 transition-transform active:scale-95 focus:outline-none"
    aria-label="Toggle Theme"
  >
    {isDark ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Hobbies', href: '#hobbies' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter">RT<span className="text-emerald-500">.</span></a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-emerald-500 transition-colors uppercase tracking-widest">{link.name}</a>
          ))}
          <ThemeToggle isDark={isDark} toggle={toggleTheme} />
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle isDark={isDark} toggle={toggleTheme} />
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 p-6 flex flex-col space-y-6 shadow-xl animate-fade-in">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold">{link.name}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
    <div className="max-w-7xl mx-auto w-full">
      <div className="space-y-4">
        <p className="text-emerald-500 font-medium tracking-[0.3em] uppercase text-sm animate-fade-in">Communication Designer & Storyteller</p>
        <h1 className="text-5xl md:text-8xl font-bold leading-tight animate-slide-up">
          Raj Tanvi <br />
          <span className="text-slate-400 dark:text-slate-600 font-serif italic font-normal">Based in Gandhinagar</span>
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed animate-fade-in">
          Crafting soulful brand identities, editorial wonders, and illustrations that bridge the gap between tradition and modernism.
        </p>
        <div className="pt-8 flex flex-wrap gap-4 animate-fade-in">
          <a href="#work" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/20">
            Explore My Work <ArrowDownRight size={20} />
          </a>
          <a href="#contact" className="border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-full font-semibold transition-all">Get In Touch</a>
        </div>
      </div>
    </div>
    <div className="absolute top-1/2 -right-20 -z-10 w-96 h-96 bg-emerald-100/30 dark:bg-emerald-900/10 rounded-full blur-3xl" />
  </section>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <div className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl ${project.color} p-4 md:p-6 cursor-pointer`}>
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
         <div className="bg-white text-slate-900 p-4 rounded-full"><ExternalLink size={24} /></div>
      </div>
    </div>
    <div className="space-y-2">
      <span className="inline-block px-3 py-1 bg-white/50 dark:bg-black/20 rounded-full text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400">{project.category}</span>
      <h3 className="text-2xl font-bold group-hover:text-emerald-600 transition-colors">{project.title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">{project.description}</p>
    </div>
  </div>
);

const CreativeSpark = () => {
  const [inspiration, setInspiration] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const handleGenerate = async () => {
    setLoading(true);
    setInspiration(await getCreativeInspiration());
    setLoading(false);
  };
  return (
    <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-emerald-500 to-indigo-600 text-white shadow-2xl relative">
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4"><Sparkles className="animate-pulse" /><h3 className="text-xl font-bold">The Creative Spark</h3></div>
        <p className="text-emerald-50 mb-6 max-w-md">Need a project idea? Ask my AI muse for a design prompt.</p>
        {inspiration && <div className="mb-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"><p className="italic font-medium">"{inspiration}"</p></div>}
        <button onClick={handleGenerate} disabled={loading} className="flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-full font-bold transition-all">
          {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />} {loading ? 'Consulting Muse...' : 'Ignite Inspiration'}
        </button>
      </div>
    </div>
  );
};

const Hobbies = () => (
  <section id="hobbies" className="py-24 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
      <div className="w-full md:w-1/3 space-y-8 sticky top-24">
        <h2 className="text-4xl md:text-5xl font-bold">Beyond the Canvas</h2>
        {HOBBIES.map((hobby, idx) => (
          <div key={idx}>
            <div className="h-48 overflow-hidden rounded-2xl mb-4 grayscale hover:grayscale-0 transition-all"><img src={hobby.imageUrl} alt={hobby.name} className="w-full h-full object-cover" /></div>
            <h4 className="text-xl font-bold mb-2">{hobby.name}</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">{hobby.description}</p>
          </div>
        ))}
      </div>
      <div className="w-full md:w-2/3">
         <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col justify-end p-12 relative">
            <img src="https://images.unsplash.com/photo-1541339905195-03f444a1b657?q=80&w=800&auto=format&fit=crop" alt="Work" className="absolute inset-0 w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="relative z-10 text-white">
              <h3 className="text-3xl font-bold mb-4 font-serif italic">"Design is the silent ambassador of your brand."</h3>
              <p className="text-emerald-400 font-medium tracking-widest uppercase text-sm">— Paul Rand</p>
            </div>
         </div>
         <CreativeSpark />
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 overflow-x-hidden">
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <Hero />
      <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>
      <Hobbies />
      <section id="contact" className="py-24 px-6 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Let's create <span className="text-emerald-400 font-serif italic">together.</span></h2>
            <div className="flex gap-6 mb-16">
              <a href="#" className="p-4 bg-slate-900 rounded-full hover:bg-emerald-400 transition-colors"><Instagram size={24} /></a>
              <a href="#" className="p-4 bg-slate-900 rounded-full hover:bg-emerald-400 transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="p-4 bg-slate-900 rounded-full hover:bg-emerald-400 transition-colors"><Mail size={24} /></a>
            </div>
          </div>
          <div className="bg-slate-900/50 p-12 rounded-[2.5rem] border border-slate-800">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <input type="text" placeholder="Full Name" required value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-colors" />
              <input type="email" placeholder="Email Address" required value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-colors" />
              <textarea placeholder="Your Message" required rows={4} value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-colors resize-none"></textarea>
              <button type="submit" disabled={isSubmitting} className="w-full bg-white text-slate-950 hover:bg-emerald-400 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all">
                {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'} <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer className="py-8 px-6 bg-slate-950 text-slate-500 border-t border-slate-900 text-center uppercase tracking-widest text-xs">
        © 2024 RAJ TANVI. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

// --- MOUNT ---
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
