import React, { useState } from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { products, categories } from '../data/products';

export const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Discover Amazing Products</h1>
        <p className="text-white">Browse our collection of premium electronics and accessories.</p>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          {categories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25 scale-105'
                    : 'bg-white text-primary-900 hover:bg-primary-50'
                }`}
              >
                <Icon size={20} />
                {category.name}
              </button>
            );
          })}
        </div>
      </div>

      <ProductGrid products={filteredProducts} />
    </main>
  );
};