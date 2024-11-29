import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Star } from 'lucide-react';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success(`${product.name} added to cart!`, {
      style: {
        background: '#1a365d',
        color: '#fff',
      },
      iconTheme: {
        primary: '#38bdf8',
        secondary: '#fff',
      },
    });
  };

  return (
    <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-500/20">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center text-yellow-400">
            <Star size={16} fill="currentColor" />
            <span className="ml-1 text-sm font-medium text-primary-100">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-white">{product.name}</h3>
        <p className="text-primary-200 text-sm mb-4">{product.shortDescription}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary-100">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-primary-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};