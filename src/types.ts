export interface Book {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  price: number;
  rating: number;
  reviews: number;
  pages: number;
  tags: string[];
  category: 'frontend' | 'backend' | 'systems' | 'ai' | 'architecture';
  publishYear: number;
  coverGradient: string; // Tailwind gradient classes
  iconName: string; // Identifier for lucide icons
  isBestSeller?: boolean;
  synopsis: string;
  features: string[];
}

export interface CartItem {
  book: Book;
  quantity: number;
}

export type Tab = 'home' | 'products' | 'services' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  metrics: string;
}
