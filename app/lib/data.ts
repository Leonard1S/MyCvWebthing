import db from './db';

export interface PersonalData {
  id: number;
  name: string;
  role: string;
  description: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  hero_image: string;
  quote?: string;
  mission?: string;
  vision?: string;
  goals?: string;
  school?: string;
  grade?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  image_url?: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  percentage: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  github_link: string;
  live_link: string;
  image_url: string;
}

export function getPersonalData(): PersonalData {
  return db.prepare('SELECT * FROM personal_data LIMIT 1').get() as PersonalData;
}

export function getExperiences(): Experience[] {
  return db.prepare('SELECT * FROM experiences ORDER BY id DESC').all() as Experience[];
}

export function getSkills(): Skill[] {
  return db.prepare('SELECT * FROM skills ORDER BY category, name').all() as Skill[];
}

export function getProjects(): Project[] {
  return db.prepare('SELECT * FROM projects ORDER BY id DESC').all() as Project[];
}
