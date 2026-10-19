export interface Product {
  id: number;
  name: string;
  origin: string;
  category: string;
  roast: 'Light' | 'Medium' | 'Dark';
  price: number;
  weight: string;
  description: string;
  notes: string[];
  image: string;
  emoji: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
