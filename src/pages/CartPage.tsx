import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CartPage: React.FC = () => {
  const { state, dispatch } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-primary-600 hover:text-primary-700 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Continue Shopping
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 animate-scaleUp">
          <h1 className="text-3xl font-bold text-primary-900 mb-8">Shopping Cart</h1>

          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-6">Your cart is empty</p>
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-6">
                {state.items.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b border-gray-200 pb-6 animate-fadeIn"
                  >
                    <div className="flex items-center space-x-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-primary-900">{item.name}</h3>
                        <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-2">
                        <button
                          onClick={() => dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) }
                          })}
                          className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: item.id, quantity: item.quantity + 1 }
                          })}
                          className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg text-gray-600">Subtotal</span>
                  <span className="text-2xl font-bold text-primary-900">
                    ${state.total.toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-primary-600 text-white py-4 rounded-lg hover:bg-primary-700 transition-colors transform hover:scale-[1.02] duration-300">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};