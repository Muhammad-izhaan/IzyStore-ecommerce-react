import React from 'react';
import { Package, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950/50 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <Package size={24} className="text-primary-400" />
              <span className="text-xl font-bold text-white">IzyStore</span>
            </div>
            <p className="mt-4 text-primary-200">
              Your one-stop shop for premium electronics and accessories.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Muhammad-izhaan" className="text-primary-200 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-izhan-a404752a6/" className="text-primary-200 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-800">
          <p className="text-center text-primary-200">
            {new Date().getFullYear()} IzyStore. Designed & Developed by Izhan
          </p>
        </div>
      </div>
    </footer>
  );
};