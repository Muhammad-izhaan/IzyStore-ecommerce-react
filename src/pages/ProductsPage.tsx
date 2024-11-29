import React, { useState } from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { products, categories } from '../data/products';

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products
    .filter(product => 
      selectedCategory === 'all' || product.category === selectedCategory
    )
    .filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-primary-200">Discover our collection of premium electronics</p>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md mx-auto block px-4 py-2 rounded-lg bg-primary-900/50 border border-primary-700 text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all mb-8"
          />

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25 scale-105'
                      : 'bg-white/10 text-primary-100 hover:bg-primary-800/50'
                  }`}
                >
                  <Icon size={20} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-primary-200 text-lg">No products found.</p>
          </div>
        ) : (
          <ProductGrid products={filteredProducts} />
        )}
      </div>
    </div>
  );
};