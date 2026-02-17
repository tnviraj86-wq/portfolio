
export interface Project {
  id: string;
  title: string;
  category: 'Branding' | 'Print' | 'Illustration';
  description: string;
  image: string;
  color: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  icon: string;
}

export interface Hobby {
  name: string;
  description: string;
  imageUrl: string;
}
