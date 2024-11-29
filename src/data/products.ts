import { Package2, Laptop, Watch, Camera, Headphones, Smartphone, Speaker, Tv } from 'lucide-react';

export const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    description: "Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for extended listening sessions.",
    shortDescription: "Premium wireless headphones with noise cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    category: "audio",
    rating: 4.8,
    reviews: 128
  },
  {
    id: 2,
    name: "Minimalist Smart Watch",
    price: 199.99,
    description: "A sleek, minimalist watch that combines style with functionality. Features a genuine leather strap, water resistance, and advanced health tracking.",
    shortDescription: "Elegant smart timepiece",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    category: "wearables",
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    name: "4K Ultra HD Smart TV",
    price: 899.99,
    description: "Immerse yourself in stunning 4K resolution with HDR support. Features smart capabilities and a sleek, modern design.",
    shortDescription: "Premium 4K Smart TV",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800",
    category: "tv",
    rating: 4.9,
    reviews: 234
  },
  {
    id: 4,
    name: "Professional DSLR Camera",
    price: 1299.99,
    description: "Capture life's moments in stunning detail with this professional-grade DSLR camera. Includes advanced features for both photography and videography.",
    shortDescription: "Professional photography gear",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    category: "cameras",
    rating: 4.7,
    reviews: 156
  },
  {
    id: 5,
    name: "Wireless Gaming Mouse",
    price: 79.99,
    description: "Ultra-responsive wireless gaming mouse with customizable RGB lighting and programmable buttons.",
    shortDescription: "Premium gaming peripheral",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800",
    category: "accessories",
    rating: 4.5,
    reviews: 312
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    price: 149.99,
    description: "Waterproof portable speaker with 360° sound and 20-hour battery life.",
    shortDescription: "Premium portable audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800",
    category: "audio",
    rating: 4.6,
    reviews: 178
  }
];

export const categories = [
  { id: "all", name: "All Products", icon: Package2 },
  { id: "audio", name: "Audio", icon: Headphones },
  { id: "wearables", name: "Wearables", icon: Watch },
  { id: "cameras", name: "Cameras", icon: Camera },
  { id: "tv", name: "TV & Video", icon: Tv },
  { id: "accessories", name: "Accessories", icon: Smartphone }
];