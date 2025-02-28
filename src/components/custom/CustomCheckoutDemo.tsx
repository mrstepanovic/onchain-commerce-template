import React, { useState } from 'react';
import CustomCheckout from './CustomCheckout';

// Sample product data
const sampleProducts = [
  { id: 'product1', name: 'Builder Jacket', price: 0.04, quantity: 0 },
  { id: 'product2', name: 'Developer Headphones', price: 0.01, quantity: 0 },
  { id: 'product3', name: 'Coding Mug', price: 0.02, quantity: 0 },
  { id: 'product4', name: 'Water Bottle', price: 0.01, quantity: 0 },
];

export default function CustomCheckoutDemo() {
  const [products, setProducts] = useState(sampleProducts);
  
  // Handle quantity changes
  const updateQuantity = (id: string, change: number) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === id 
          ? { ...product, quantity: Math.max(0, product.quantity + change) } 
          : product
      )
    );
  };
  
  // Handle checkout
  const handleCheckout = () => {
    alert('Checkout process initiated!');
    // Reset quantities after checkout
    setProducts(prevProducts => 
      prevProducts.map(product => ({ ...product, quantity: 0 }))
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-32">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-purple-800 mb-2">CryptoShop</h1>
          <p className="text-gray-600">Custom Checkout Component Demo</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Product Image</span>
                </div>
                <h2 className="text-lg font-medium text-gray-800 mb-2">{product.name}</h2>
                <p className="text-purple-700 font-bold mb-4">{product.price.toFixed(2)} USDC</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => updateQuantity(product.id, -1)}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-300"
                      disabled={product.quantity <= 0}
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">{product.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(product.id, 1)}
                      className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 hover:bg-purple-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <CustomCheckout 
        products={products} 
        onCheckout={handleCheckout}
        storeName="CryptoShop"
        currency="USDC"
      />
    </div>
  );
} 