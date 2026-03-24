export type ServiceFrontmatter = {
  slug: string;
  title: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  faq: Array<{ question: string; answer: string }>;
  relatedProjects: string[];
  relatedPosts: string[];
};

export type ProjectFrontmatter = {
  slug: string;
  title: string;
  shortDescription: string;
  style: string;
  format: string;
  location: string;
  season: string;
  gallery: string[];
  implementedItems: string[];
  relatedServices: string[];
  relatedPosts: string[];
  optionalReview?: string;
};

export type BlogFrontmatter = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  coverImage: string;
  seoTitle: string;
  seoDescription: string;
  relatedServices: string[];
  relatedProjects: string[];
};

export type ContentEntry<T> = {
  frontmatter: T;
  content: string;
  filePath: string;
};
