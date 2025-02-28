import { CoinbasePaySvg } from 'src/svg/CoinbasePaySvg';
import type { MockCheckoutButtonReact } from 'src/types';

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

export function MockCheckoutButton({ onClick }: MockCheckoutButtonReact) {
  return (
    <div className="w-64">
      <div className="default-dark flex w-full flex-col gap-2">
        <button
          type="button"
          onClick={onClick}
          className="ock-border-radius ock-font-family flex w-full cursor-pointer items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-700 px-4 py-3 font-semibold leading-normal hover:from-purple-700 hover:to-indigo-800 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
        >
          <div className="flex items-center justify-center whitespace-nowrap">
            <div className="mr-2 flex h-5 w-5 shrink-0 items-center justify-center">
              <CustomLogo />
            </div>
          </div>
          <span className="ock-font-family font-semibold text-gray-50 leading-normal">
            Checkout Now
          </span>
        </button>
      </div>
    </div>
  );
}
