/**
 * Core TypeScript interfaces for INSON QADRI MEDIA PRODUCTION
 */

export type ProjectCategory = 'ijtimoiy' | 'oilaviy' | 'hayotiy' | 'brend';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  client?: string;
  views?: string;
  location?: string;
  slug: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  about: string;
  mission: string;
  principle: string;
  location: string;
  email: string;
  phone: string;
  telegram?: string;
  socialLinks: {
    instagram?: string;
    youtube?: string;
    telegram?: string;
  };
  logoImage?: string;
}

// Legacy alias for compatibility
export type PhotographerInfo = CompanyInfo;

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'brend' | 'davlat' | 'ijtimoiy';
  message: string;
  timestamp: Date;
}

export interface ServiceDirection {
  id: string;
  icon: string;
  title: string;
  items: string[];
}

export interface Capability {
  id: string;
  title: string;
  description: string;
}

export interface WorkStep {
  number: number;
  title: string;
}