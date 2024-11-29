export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface SearchResult {
  products: Product[];
  query: string;
}