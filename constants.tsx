
import { Project, Skill, Hobby } from './types.ts';

export const PROJECTS: Project[] = [
  {
    id: '3',
    title: 'Adrian Frutiger - Artist Book',
    category: 'Print Design',
    description: 'This artist book serves as a typographic tribute to Adrian Frutiger, exploring the structural elegance and timeless clarity of his most iconic typefaces through a series of tactile, minimalist compositions.',
    fullDescription: '',
    image: 'https://drive.google.com/thumbnail?id=1U_SS2DlmPIQb66tiWzLDkovxb0Z_himc&sz=w1000',
    color: 'bg-violet-50 dark:bg-violet-950/20',
    tags: [],
    gallery: []
  },
  {
    id: '4',
    title: 'Mithai Ka Dabba - Recipe Book',
    category: 'Print Design',
    description: 'Dark-themed branding for a late-night coffee house, featuring custom typography.',
    fullDescription: 'Lunar Cafe is a haven for night owls and creative thinkers. The branding project focused on the concept of "lunar phases," using circular motifs and a high-contrast palette of midnight blue and silver. I designed a custom display typeface that mimics the soft glow of the moon, which was used across signage, menus, and digital platforms to create an immersive, atmospheric brand experience.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
    color: 'bg-amber-50 dark:bg-amber-950/20',
    tags: [],
    gallery: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800',
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800'
    ]
  },
  {
    id: '5',
    title: 'Character Design',
    category: 'Illustration',
    description: 'Typography is a conversation between history and the future. This module explores that dialogue, stretching the rules of classic typesetting to find a modern visual rhythm.',
    fullDescription: 'This project is a deep dive into the anatomy of Devanagari letterforms. By deconstructing modern Sanskrit typefaces into their basic geometric components—circles, lines, and curves—I created a series of posters that highlight the mathematical precision behind traditional calligraphy. The result is a fusion of ancient script and contemporary graphic design principles.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop',
    color: 'bg-mint-50 dark:bg-emerald-950/20',
    tags: [],
    gallery: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800',
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800'
    ]
  },
  {
    id: '6',
    title: 'Explorations',
    category: 'Illustration',
    description: 'Surrealist digital illustrations blending human forms with local flora.',
    fullDescription: 'Botanical Dreams is a series of surreal digital paintings that explore the symbiotic relationship between humans and nature. Each piece blends anatomical details with the intricate patterns of local Gujarati flora, such as the Banyan leaf and the Marigold flower. The project aims to evoke a sense of wonder and remind viewers of our deep-rooted connection to the natural world.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop',
    color: 'bg-indigo-50 dark:bg-indigo-950/20',
    tags: [],
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
    name: 'Analog Studies',
    description: 'A collection of hand-rendered works, from precision fineliner sketches to textured paintings. Bridging the gap between physical craft and digital vision.',
    fullDescription: 'Sketching is my way of decompressing. Whether it\'s a quick gesture drawing in a crowded cafe or a detailed architectural study of Gandhinagar\'s brutalist structures, the act of putting pen to paper helps me process visual information in a way that digital tools can\'t. It\'s about the tactile connection between the eye, the mind, and the hand.',
    imageUrl: 'https://drive.google.com/thumbnail?id=1jRk7qhAfZ_fBZAJG_fUSU0CYastdVT_F&sz=w1000',
    gallery: [
      'https://images.unsplash.com/photo-1544161515-436cefd1f16d?q=80&w=800',
      'https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?q=80&w=800',
      'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=800',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800'
    ]
  },
  {
    name: 'Photography',
    description: 'To me, photography isn’t just about taking pictures, it’s about capturing the quiet stories and fleeting emotions that words often miss.',
    fullDescription: 'Photography is my second language. I am particularly drawn to the harsh shadows and geometric purity of brutalist architecture. Gandhinagar, with its planned layout and iconic government buildings, provides an endless canvas for exploring form and light. I use my camera to document the "silent ambassadors" of our built environment, looking for the beauty in concrete and symmetry.',
    imageUrl: 'https://images.unsplash.com/photo-1452784444945-3f422708fe5e?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800',
      'https://images.unsplash.com/photo-1449156059431-787c5d7139b8?q=80&w=800',
      'https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=800'
    ]
  }
];
