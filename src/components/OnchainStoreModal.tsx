import Image from 'next/image';
import CommerceScreenImage from '../images/commerceScreen.png';
import type { OnchainStoreModalReact } from 'src/types';
import { GITHUB_LINK } from 'src/links';
import { CloseSvg } from 'src/svg/CloseSvg';

export default function OnchainStoreModal({
  closeModal,
}: OnchainStoreModalReact) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative z-10 flex h-full xs:h-auto max-w-lg flex-col gap-2 xs:rounded-[10px] bg-gradient-to-br from-white to-gray-50 p-6 px-10 shadow-xl">
        <button
          type="button"
          className="absolute top-2 right-4 text-purple-700 hover:text-purple-900 transition-colors"
          onClick={closeModal}
        >
          <CloseSvg />
        </button>
        <div className="flex flex-col items-start gap-2 pt-4 pb-4">
          <div className="font-bold text-xl text-purple-800">CryptoShop Checkout</div>
          <span className="text-sm text-gray-700">
            <a href={GITHUB_LINK} className="text-purple-600 hover:text-purple-800 transition-colors">
              Experience our seamless crypto payment process.{' '}
            </a>
            This is a preview of what your customers will see during checkout.
          </span>
          <div className="mx-auto flex grow justify-center py-4">
            <Image
              src={CommerceScreenImage}
              alt="Checkout Preview"
              className="mx-auto h-[400px] w-auto rounded-[10px] shadow-lg"
            />
          </div>
          <div className="text-xs text-gray-500 italic">
            This is a demo checkout flow. No actual transactions will be processed.
          </div>
        </div>
      </div>
    </div>
  );
}
