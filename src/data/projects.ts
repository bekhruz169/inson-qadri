import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Oila Qadri',
    category: 'oilaviy',
    year: '2024',
    slug: 'oila-qadri',
    coverImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHNlYXJjaHwyfHxmYW1pbHklMjBsb3ZlfGVufDB8fHx8MTcxMDAwMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Ota-ona va farzand munosabatlari haqida ta\'sirli hikoyalar seriyasi. Oila qadri va mehr-muhabbat mavzusida.',
    client: 'Ijtimoiy loyiha',
    views: '2.5M+',
    location: 'Toshkent',
    images: [
      {
        id: '1-1',
        src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHNlYXJjaHwyfHxmYW1pbHklMjBsb3ZlfGVufDB8fHx8MTcxMDAwMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Oila sahna',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '2',
    title: 'Vijdon Ovozi',
    category: 'ijtimoiy',
    year: '2024',
    slug: 'vijdon-ovozi',
    coverImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHNlYXJjaHwzfHxjb21tdW5pdHklMjBwZW9wbGV8ZW58MHx8fHwxNzEwMDAwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Jamiyatdagi ijtimoiy muammolarni ko\'taradigan, odamlarni o\'ylantiradigan dramatik kontent.',
    client: 'Ijtimoiy loyiha',
    views: '4.1M+',
    location: 'O\'zbekiston',
    images: [
      {
        id: '2-1',
        src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHNlYXJjaHwzfHxjb21tdW5pdHklMjBwZW9wbGV8ZW58MHx8fHwxNzEwMDAwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Ijtimoiy sahna',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '3',
    title: 'Hayot Saboqlari',
    category: 'hayotiy',
    year: '2024',
    slug: 'hayot-saboqlari',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHNlYXJjaHw0fHxsaWZlJTIwc3Rvcnl8ZW58MHx8fHwxNzEwMDAwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Real voqealarga asoslangan videolar. Tomoshabin o\'zini ko\'radigan sahnalar va kuchli dramatik yechimlar.',
    client: 'Ijtimoiy loyiha',
    views: '3.2M+',
    location: 'O\'zbekiston',
    images: [
      {
        id: '3-1',
        src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHNlYXJjaHw0fHxsaWZlJTIwc3Rvcnl8ZW58MHx8fHwxNzEwMDAwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Hayotiy sahna',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '4',
    title: 'Brend Hikoyasi',
    category: 'brend',
    year: '2023',
    slug: 'brend-hikoyasi',
    coverImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMHN0b3J5fGVufDB8fHx8MTcxMDAwMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Brendlar bilan syujetli hamkorlik. Reklama emas — hikoya. Majburiy sotuv emas — ishonch.',
    client: 'Premium brend',
    views: '1.8M+',
    location: 'Toshkent',
    images: [
      {
        id: '4-1',
        src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMHN0b3J5fGVufDB8fHx8MTcxMDAwMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Brend sahna',
        aspectRatio: 'landscape'
      }
    ]
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};