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