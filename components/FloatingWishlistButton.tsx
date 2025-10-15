import React from 'react';

interface FloatingWishlistButtonProps {
  wishlistCount: number;
  onClick: () => void;
}

const FloatingWishlistButton: React.FC<FloatingWishlistButtonProps> = ({ wishlistCount, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-30 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform transform"
      aria-label="Open wishlist"
    >
      <i className="fas fa-heart text-2xl"></i>
      {wishlistCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-slate-900 animate-pulse">
          {wishlistCount}
        </span>
      )}
    </button>
  );
};

export default FloatingWishlistButton;
