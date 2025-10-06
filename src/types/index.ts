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
export interface IErrorResponse {
  status: number;
  data: ErrorData;
}

export interface ErrorData {
  success: boolean;
  message: string;
  error?: Error;
  stack: string;
}

export interface Error {
  issues: Issue[];
  name: string;
}

export interface Issue {
  validation: string;
  code: string;
  message: string;
  path: string[];
}

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
  meta: { page?: number; limit?: number; total: number; totalPage: number };
}

export interface project {
  id: string;
  projectName: string;
  title: string;
  description: string;
  picture: string;
  projectType: string;
  features: string[];
  technologies: string[];
  startDate: string;
  endDate: string;
  liveSite: string;
  git_frontend: string;
  git_server: string;
  createdAt: string;
  updatedAt: string;
}
export interface IProject {
  id: string;
  projectName: string;
  title: string;
  description: string;
  picture: string;
  projectType: string;
  features: string[];
  technologies: string[];
  startDate: string;
  endDate: string;
  liveSite: string;
  git_frontend: string;
  git_server: string;
  createdAt: string;
  updatedAt: string;
}
export interface IBlog {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  tags: string[];
  author: {
    name: string;
    picture: string;
  };
  createdAt: string;
  updatedAt: string;
}
