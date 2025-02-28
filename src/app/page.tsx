'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-purple-800 mb-6">Onchain Commerce Template</h1>
        <p className="text-gray-600 mb-8">
          This template demonstrates how to create custom checkout experiences for crypto payments.
        </p>
        
        <Link 
          href="/custom-checkout" 
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-800 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          View Custom Checkout Demo
        </Link>
      </div>
    </div>
  );
}
