import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <header className="bg-primary-950/95 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 text-white hover:text-primary-200 transition-colors">
              <Package size={28} className="text-primary-400" />
              <span className="text-xl font-bold">IzyStore</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 rounded-lg bg-primary-900/50 border border-primary-800 text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
              />
              <Search className="absolute right-3 top-2.5 text-primary-400" size={20} />
            </form>

            <nav className="flex space-x-8">
              {['Home', 'Products', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="relative text-primary-100 hover:text-white transition-colors group"
                >
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </a>
              ))}
            </nav>

            <a
              href="/cart"
              className="relative text-primary-100 hover:text-white transition-colors"
            >
              <ShoppingCart size={24} />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-scaleUp">
                  {state.items.length}
                </span>
              )}
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-900/95 backdrop-blur-sm animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'Products', 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="block px-3 py-2 text-primary-100 hover:text-white hover:bg-primary-800/50 rounded-lg transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};