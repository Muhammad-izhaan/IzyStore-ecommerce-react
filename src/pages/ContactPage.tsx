import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-primary-200">Get in touch with our team</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-primary-900/50 border border-primary-700 text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-primary-900/50 border border-primary-700 text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-primary-900/50 border border-primary-700 text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-500 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-400 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
              <Mail className="text-primary-400 mb-4" size={24} />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-primary-200">support@izystore.com</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
              <Phone className="text-primary-400 mb-4" size={24} />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-primary-200">+1 (555) 123-4567</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
              <MapPin className="text-primary-400 mb-4" size={24} />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-primary-200">123 Tech Street, Digital City, 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};