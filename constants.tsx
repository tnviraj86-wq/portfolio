
import { Project, Skill, Hobby } from './types.ts';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ethos Organic Branding',
    category: 'Branding',
    description: 'A complete visual identity for a sustainable skincare brand focused on Himalayan botanicals.',
    fullDescription: 'Ethos Organic is a premium skincare brand that bridges the gap between ancient Himalayan wisdom and modern dermatological science. The branding project involved creating a visual language that feels both grounded and ethereal. We used a palette of deep forest greens and soft stone grays, paired with custom botanical illustrations and a sophisticated serif typeface that speaks to the brand\'s heritage and purity.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143af7be?q=80&w=800&auto=format&fit=crop',
    color: 'bg-rose-50 dark:bg-rose-950/20',
    tags: ['Identity', 'Packaging', 'Eco-friendly'],
    gallery: [
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800',
      'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=800'
    ]
  },
  {
    id: '2',
    title: 'The Modern Minimalist',
    category: 'Print',
    description: 'Editorial layout design for a monthly architecture and interior design magazine.',
    fullDescription: 'The Modern Minimalist is a high-end architecture magazine that celebrates clean lines and functional spaces. The challenge was to create a layout that allows the photography to breathe while maintaining a strong typographic hierarchy. We developed a custom grid system that adapts to various content types, ensuring a consistent yet dynamic reading experience across every issue.',
    image: 'https://images.unsplash.com/photo-1586075010623-265839b4e1f1?q=80&w=800&auto=format&fit=crop',
    color: 'bg-sky-50 dark:bg-sky-950/20',
    tags: ['Editorial', 'Layout', 'Architecture'],
    gallery: [
      'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=800',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800'
    ]
  },
  {
    id: '3',
    title: 'City Rhythms Series',
    category: 'Illustration',
    description: 'A series of vector illustrations capturing the vibrant street life of Ahmedabad and Gandhinagar.',
    fullDescription: 'City Rhythms is a personal project exploring the chaotic beauty of urban life in Gujarat. Through a series of vibrant vector illustrations, I captured the small moments that define the city: a tea stall at dawn, the geometric patterns of a textile market, and the brutalist silhouettes of Gandhinagar\'s government buildings. The series uses a limited but bold color palette to create a cohesive visual narrative.',
    image: 'https://images.unsplash.com/photo-1518131359073-ad293c3f9023?q=80&w=800&auto=format&fit=crop',
    color: 'bg-violet-50 dark:bg-violet-950/20',
    tags: ['Vector', 'Urban', 'Storytelling'],
    gallery: [
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800'
    ]
  },
  {
    id: '4',
    title: 'Lunar Cafe Identity',
    category: 'Branding',
    description: 'Dark-themed branding for a late-night coffee house, featuring custom typography.',
    fullDescription: 'Lunar Cafe is a haven for night owls and creative thinkers. The branding project focused on the concept of "lunar phases," using circular motifs and a high-contrast palette of midnight blue and silver. I designed a custom display typeface that mimics the soft glow of the moon, which was used across signage, menus, and digital platforms to create an immersive, atmospheric brand experience.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
    color: 'bg-amber-50 dark:bg-amber-950/20',
    tags: ['Typography', 'Nightlife', 'Concept'],
    gallery: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800',
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800'
    ]
  },
  {
    id: '5',
    title: 'Type & Form Specimen',
    category: 'Print',
    description: 'A large-format poster exploring the geometric structures of modern Sanskrit typefaces.',
    fullDescription: 'This project is a deep dive into the anatomy of Devanagari letterforms. By deconstructing modern Sanskrit typefaces into their basic geometric components—circles, lines, and curves—I created a series of posters that highlight the mathematical precision behind traditional calligraphy. The result is a fusion of ancient script and contemporary graphic design principles.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop',
    color: 'bg-mint-50 dark:bg-emerald-950/20',
    tags: ['Typography', 'Poster', 'Sanskrit'],
    gallery: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800',
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800'
    ]
  },
  {
    id: '6',
    title: 'Botanical Dreams',
    category: 'Illustration',
    description: 'Surrealist digital illustrations blending human forms with local flora.',
    fullDescription: 'Botanical Dreams is a series of surreal digital paintings that explore the symbiotic relationship between humans and nature. Each piece blends anatomical details with the intricate patterns of local Gujarati flora, such as the Banyan leaf and the Marigold flower. The project aims to evoke a sense of wonder and remind viewers of our deep-rooted connection to the natural world.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop',
    color: 'bg-indigo-50 dark:bg-indigo-950/20',
    tags: ['Surrealism', 'Digital Art', 'Nature'],
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800'
    ]
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
