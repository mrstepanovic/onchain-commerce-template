import React, { useState } from 'react';

// Custom logo component
function CustomLogo() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Custom Shop Logo</title>
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        fill="white"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Close icon component
function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Types
interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CustomCheckoutProps {
  products?: Product[];
  onCheckout?: () => void;
  storeName?: string;
  currency?: string;
}

export default function CustomCheckout({
  products = [],
  onCheckout = () => {},
  storeName = "CryptoShop",
  currency = "USDC"
}: CustomCheckoutProps) {
  const [showModal, setShowModal] = useState(false);
  
  // Calculate total
  const totalSum = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  
  // Open and close modal handlers
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  
  return (
    <div className="font-sans">
      {/* Checkout Button and Cart Summary */}
      <div className="fixed bottom-0 left-0 right-0 w-full border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white shadow-md">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-start justify-between py-4 md:flex-row md:items-center">
            <div className="mb-2 hidden flex-col px-4 text-xs sm:flex md:mb-0 md:w-1/3 lg:px-6">
              <span className="font-bold text-purple-700">{storeName}</span>
              <a
                href="#"
                className="pt-1 text-[8px] text-gray-600 hover:text-purple-700"
              >
                Privacy Policy
              </a>
            </div>
            <div className="flex w-full grow flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:gap-0 md:w-auto lg:px-6">
              <h2 className="font-bold text-lg md:w-11/12 text-purple-800">
                TOTAL {totalSum.toFixed(2)} {currency}
              </h2>
              <div className="w-64">
                <div className="w-full">
                  <div className="flex w-full flex-col gap-2">
                    <button
                      type="button"
                      onClick={openModal}
                      className="flex w-full cursor-pointer items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-700 px-4 py-3 font-semibold leading-normal hover:from-purple-700 hover:to-indigo-800 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
                      disabled={totalSum <= 0}
                    >
                      <div className="flex items-center justify-center whitespace-nowrap">
                        <div className="mr-2 flex h-5 w-5 shrink-0 items-center justify-center">
                          <CustomLogo />
                        </div>
                      </div>
                      <span className="font-semibold text-gray-50 leading-normal">
                        Checkout Now
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative z-10 flex max-w-lg flex-col gap-2 rounded-lg bg-gradient-to-br from-white to-gray-50 p-6 px-10 shadow-xl">
            <button
              type="button"
              className="absolute top-2 right-4 text-purple-700 hover:text-purple-900 transition-colors"
              onClick={closeModal}
            >
              <CloseIcon />
            </button>
            <div className="flex flex-col items-start gap-2 pt-4 pb-4">
              <div className="font-bold text-xl text-purple-800">{storeName} Checkout</div>
              <span className="text-sm text-gray-700">
                <span className="text-purple-600">
                  Experience our seamless crypto payment process.{' '}
                </span>
                Complete your purchase with cryptocurrency.
              </span>
              
              {/* Product Summary */}
              <div className="w-full mt-4">
                <h3 className="font-medium text-gray-700 mb-2">Order Summary</h3>
                <div className="border border-gray-200 rounded-md p-4 bg-white">
                  {products.map(product => (
                    product.quantity > 0 && (
                      <div key={product.id} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                        <span>{product.name} × {product.quantity}</span>
                        <span>{(product.price * product.quantity).toFixed(2)} {currency}</span>
                      </div>
                    )
                  ))}
                  <div className="flex justify-between pt-4 font-bold">
                    <span>Total</span>
                    <span>{totalSum.toFixed(2)} {currency}</span>
                  </div>
                </div>
              </div>
              
              {/* Checkout Button */}
              <button
                onClick={() => {
                  onCheckout();
                  closeModal();
                }}
                className="w-full mt-6 bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Complete Payment
              </button>
              
              <div className="text-xs text-gray-500 italic mt-4 text-center w-full">
                This is a secure checkout process. Your transaction details are encrypted.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 