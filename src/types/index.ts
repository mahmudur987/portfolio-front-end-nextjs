export interface RunningProject {
  index: number;
  projectName: string;
  about: string;
  picture: string;
  features: string[];
  technologies: string[];
  liveSite: string;
  specialty?: string;
  description?: string;
  registered?: string;
}
export interface project {
  _id: string;
  picture: string;
  features: string[];
  projectName: string;
  about: string;
  description: string;
  registered: Date;
  liveSite: string;
  clientSite: string;
  serverSite: string;
  technologies: string[];
}
// src/types/blog.ts
export type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  content: string; // stored as HTML string
};
