export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  slug: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}
