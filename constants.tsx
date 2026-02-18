
import { Project, Skill, Hobby } from './types.ts';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ethos Organic Branding',
    category: 'Branding',
    description: 'A complete visual identity for a sustainable skincare brand focused on Himalayan botanicals.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143af7be?q=80&w=800&auto=format&fit=crop',
    color: 'bg-emerald-100 dark:bg-emerald-900/20'
  },
  {
    id: '2',
    title: 'The Modern Minimalist',
    category: 'Print',
    description: 'Editorial layout design for a monthly architecture and interior design magazine.',
    image: 'https://images.unsplash.com/photo-1586075010623-265839b4e1f1?q=80&w=800&auto=format&fit=crop',
    color: 'bg-indigo-100 dark:bg-indigo-900/20'
  },
  {
    id: '3',
    title: 'City Rhythms Series',
    category: 'Illustration',
    description: 'A series of vector illustrations capturing the vibrant street life of Ahmedabad and Gandhinagar.',
    image: 'https://images.unsplash.com/photo-1518131359073-ad293c3f9023?q=80&w=800&auto=format&fit=crop',
    color: 'bg-orange-100 dark:bg-orange-900/20'
  },
  {
    id: '4',
    title: 'Lunar Cafe Identity',
    category: 'Branding',
    description: 'Dark-themed branding for a late-night coffee house, featuring custom typography.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
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

export const SKILLS: Skill[] = [
  { name: 'Adobe Illustrator', level: 5, icon: '🎨' },
  { name: 'Adobe InDesign', level: 4, icon: '📖' },
  { name: 'Adobe Photoshop', level: 4, icon: '📸' },
  { name: 'Figma', level: 5, icon: '❖' },
  { name: 'Typography', level: 5, icon: 'Aa' },
  { name: 'Color Theory', level: 4, icon: '🌈' },
  { name: 'Editorial Design', level: 5, icon: '📰' },
  { name: 'Branding', level: 5, icon: '🏷️' }
];

export const HOBBIES: Hobby[] = [
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
