export interface BlogPostCreate {
  title: string;
  description: string;
  article: string;
  category: string;
  image_url: string;
  tags: string[];
}

export interface BlogPost extends BlogPostCreate {
  id: number;
  created_at: string;
  updated_at: string;
}
